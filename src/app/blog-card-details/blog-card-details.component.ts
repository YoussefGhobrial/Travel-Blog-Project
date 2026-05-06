import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-card-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-card-details.component.html',
  styleUrls: ['./blog-card-details.component.css'],
})
export class BlogCardDetailsComponent implements OnInit {
  cardDetails: any = {};
  comments: any[] = [];
  storageKey: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Getting the details passed from the router
    this.cardDetails = history.state.cardDetails;

    if (!this.cardDetails) {
      console.error('No card details found.');
    }

    // Define a unique storage key for localStorage based on the card title
    this.storageKey = `comments-${this.cardDetails.title}`;

    // Load comments from localStorage
    const savedComments = localStorage.getItem(this.storageKey);
    if (savedComments) {
      this.comments = JSON.parse(savedComments);
    }
  }

  // Method to submit a new comment
  submitComment(author: string, comment: string, event: Event): void {
    event.preventDefault(); // Prevents page reload

    if (author && comment) {
      const newComment = {
        author,
        text: comment,
        date: new Date().toLocaleDateString(),
      };

      this.comments.push(newComment);

      // Save to localStorage
      localStorage.setItem(this.storageKey, JSON.stringify(this.comments));
    }
  }

  // Method to delete a comment
  deleteComment(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete comment
        this.comments.splice(index, 1);
        // Update LocalStorage
        localStorage.setItem(this.storageKey, JSON.stringify(this.comments));
        Swal.fire('Deleted!', 'Your comment has been deleted.', 'success');
      }
    });
  }

  // Method to edit a comment
  editComment(index: number) {
    Swal.fire({
      title: 'Edit your comment',
      input: 'text',
      inputValue: this.comments[index].text,
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!';
        }
        return null; // This means input is valid and there is no error message.
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Update comment
        this.comments[index].text = result.value;
        // Update LocalStorage
        localStorage.setItem(this.storageKey, JSON.stringify(this.comments));
        Swal.fire('Saved!', 'Your comment has been updated.', 'success');
      }
    });
  }
}
