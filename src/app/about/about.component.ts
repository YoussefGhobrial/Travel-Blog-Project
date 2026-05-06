import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Eng. Mohamed Sherif Ahmed',
      // title: 'Assistant Project Manager',
      photo: 'assets/409499834_3634960836789999_6109892079065105039_n.jpg',
      bio: 'Software engineer',
    },
    {
      name: 'Eng. Youssef Ghobrial',
      title: 'Team leader',
      photo: 'assets/file.jpg',
      bio: 'Software engineer',
    },
    {
      name: 'Eng. Mohamed Ahmed Shaban Hafez',
      // title: 'Network security manager',
      photo: 'assets/file1.jpg',
      bio: 'Software engineer',
    },
    {
      name: 'Eng. Rania Abd-elazeez',
      // title: 'Project Manager',
      photo: 'assets/file3.jpg',
      bio: 'Software engineer',
    },
    {
      name: 'Eng. Eman Gaber Sayed Marzouk',
      // title: 'General manager',
      photo: 'assets/file2.jpg',
      bio: 'Software engineer',
    },
    {
      name: 'Dr. Eng. Abdulrahman Essam EL-Agry',
      // title: 'Assistant Project Manager',
      photo: 'assets/abdo.png',
      bio: 'Software engineer',
    },
    // Add more team members as needed
  ];

  selectedMember: any = null;

  openBio(member: any) {
    this.selectedMember = member;
    document.body.classList.add('modal-open');
  }

  closeBio() {
    this.selectedMember = null;
    document.body.classList.remove('modal-open');
  }
}
