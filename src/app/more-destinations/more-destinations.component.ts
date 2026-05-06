import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // تأكد من إضافة CommonModule

@Component({
  selector: 'app-more-destinations',
  standalone: true,
  templateUrl: './more-destinations.component.html',
  styleUrls: ['./more-destinations.component.css'],
  imports: [CommonModule],
})
export class MoreDestinationsComponent {
  // مصفوفة الكروت
  allCards = [
    {
      title: 'City, Las Vegas',
      image: 'assets/place-three.jpg',
      description:
        'The Amazon has always been more than just a desired destination on my bucket list; its been a dream that felt like a rite of passage—one of those trips of a lifetime I knew I had to experience. For years, I fantasized about the perfect moment, with the right people by my side, to make it happen. But it wasn t until Moncho, my childhood friend, said “yes,” that the adventure truly began to take shape. And when it did, it surpassed every expectation Id ever had. Beyond catching up on all the stories we hadnt shared in ages, we truly savored every moment together—whether it was swimming in the lake, overpaying for a Corona, listening to local legends, or even getting devoured by mosquitoes. Every bit of it felt special. El Amazonas siempre ha sido más ... read more',
    },
    {
      title: 'Queen Elizabeth Tower, London',
      image: 'assets/jakob-owens-Nrf3yY0kxCM-unsplash.jpg',
      description:
        'Wuhan, the Chinese city few people had heard about in the West until Covid. I have been to Wuhan numerous times to just hang out and been a tourist a couple of times. This trip was to play tourist as there were quite a few places that had caught my eye on social media that I wanted to visit. First off was breakfast. This was included with my hotel room so I headed down. The breakfast room gave me the fear, it was just filled with large banquet tables, nearly all of which had people sitting at them. I guess it makes sense of the hotel caters for large tour groups or for business conferences and workshops, but as a solo traveller for me it is a nightmare. I don t want to sit with randos who ... read more',
    },
    {
      title: 'Mountains, Hawaii',
      image: 'assets/gallery-03.jpg',
      description:
        'The Buddha quoted that we should not dwell on the past  not to dream of the future but to concentrate on the present moment  As I stood in our local church named oddly after an unusual saint  St Dunawd I found myself thinking about this whilst looking at the stained glass windows  I had looked at them before but today seemed to be one of those days where closer inspection was required  I had never looked closely at them . Just loved the way the light gleamed through them and lit up the dark interior of the church with the colours of the rainbow . At night they looked stunning as the lights inside shone through . Today was the day I had nothing to do and was going to stand ... read more',
    },
    {
      title: 'City, New York',
      image: 'assets/gallery-04.jpg',
      description:
        'The Amazon has always been more than just a desired destination on my bucket list; it s been a dream that felt like a rite of passage—one of those trips of a lifetime I knew I had to experience. For years, I fantasized about the perfect moment, with the right people by my side, to make it happen. But it wasn t until Moncho, my childhood friend, said “yes,” that the adventure truly began to take shape. And when it did, it surpassed every expectation I d ever had. Beyond catching up on all the stories we hadn t shared in ages, we truly savored every moment together—whether it was swimming in the lake, overpaying for a Corona, listening to local legends, or even getting devoured by mosquitoes. Every bit of it felt special. El Amazonas siempre ha sido más ... read more',
    },
    {
      title: 'Eiffel Tower, Paris',
      image: 'assets/gallery-05.jpg',
      description:
        'September 20-26 When you re travelling and busy experiencing the country you don t have much time to write the blog…and so it is I ve been back home a week or so and also had time to absorb and reflect back on it all. We had headed back from caves, waterfalls and ostriches to join the Garden Route again at the coast and Mossel Bay was our next stop. It was here that the Portuguese navigator Bartholemeu Dias and his men became the first Europeans to land in 1488 much to the annoyance of the Khoi cattle herders, and so it was the Portugueses then Dutch VOC ( Dutch East India Company) then the British began centuries of settlement and colonial expansion. Mossel Bay historic centre set on a hill overlooks and lovely sandy bay , a small ... read more',
    },
    {
      title: 'Tokyo, Japan',
      image: 'assets/gallery-06.jpg',
      description:
        "Dear All Wahoo! Greetings from Sydney! One of the world's greatest cities, yet pretty much on the other side of the world from anywhere else, and here I am in it! It is a city that exceeded my expectations in grandeur and beauty, as well as friendliness, safety and efficiency, and I might just say it has probably become one of my favourite cities in the world. A fantastic place, which I really would like to spend much more time in and get to the real heart of. Still, three nights there compared with my whistlestop drive through the Outback over the last six days was really quite a long time indeed, and I enjoyed every moment of it! On a Monday morning, I drove out and down from the Blue Mountains, and pretty much noticed ... read more",
    },
    {
      title: 'Sydney Opera House, Australia',
      image: 'assets/place-two.jpg',
      description:
        "Dear All Wahoo! Greetings from Sydney! One of the world's greatest cities, yet pretty much on the other side of the world from anywhere else, and here I am in it! It is a city that exceeded my expectations in grandeur and beauty, as well as friendliness, safety and efficiency, and I might just say it has probably become one of my favourite cities in the world. A fantastic place, which I really would like to spend much more time in and get to the real heart of. Still, three nights there compared with my whistlestop drive through the Outback over the last six days was really quite a long time indeed, and I enjoyed every moment of it! On a Monday morning, I drove out and down from the Blue Mountains, and pretty much noticed ... read more",
    },
    {
      title: 'The Colosseum, Rome',
      image: 'assets/place-four.jpg',
      description:
        "Dear All Wahoo! Greetings from Sydney! One of the world's greatest cities, yet pretty much on the other side of the world from anywhere else, and here I am in it! It is a city that exceeded my expectations in grandeur and beauty, as well as friendliness, safety and efficiency, and I might just say it has probably become one of my favourite cities in the world. A fantastic place, which I really would like to spend much more time in and get to the real heart of. Still, three nights there compared with my whistlestop drive through the Outback over the last six days was really quite a long time indeed, and I enjoyed every moment of it! On a Monday morning, I drove out and down from the Blue Mountains, and pretty much noticed ... read more",
    },
    {
      title: 'Santorini, Greece',
      image: 'assets/gallery-01.jpg',
      description:
        "Friday, we all got ready to head to the house of Cleu's sister, a bit out of town. I had showered early fortunately, but the water was off from mid-morning (similar problems to Roatan, the water is off a lot here), so some people were waiting to shower at her sister's, as she has a well. We had lunch and then split up into a few carloads for the ride. Neidy's home is still under construction, so they don't live there yet, just use it on weekends (it's mainly done, but just cement floor). It's in the country. They've got lots of stuff planted, and have dug out a deep pond and stocked it with tilapia so they can fish whenever they want- my kids would love it! The house has 2 bedrooms and a covered ... read more",
    },
    {
      title: 'Great Wall of China',
      image: 'assets/StockSnap_NKBW9THQYP.jpg',
      description:
        "So this adventure sees us back in South America, a continent that certainly needed more exploring...the original plan was to visit only Chile and do the hot spots of the Atacama Desert, Easter Island and the south, but after doing a bit of research we realized how difficult it was to move between these places without having to overnight in Santiago...losing two or three days in a transit hotel just didn't seem to make sense, so we agreed to split Chile into two separate trips and focus solely on the south this time around (leaving Easter Island and the desert for another time). Trekking in the Torres del Paine area was the main draw, and so with the travel/trekking logistics we decided to do a tour to maximize the time, and found one that also included ... read more0",
    },
    {
      title: 'Machu Picchu, Peru',
      image: 'assets/StockSnap_8COSZARW1F.jpg',
      description: 'Ancient Inca city...',
    },
    {
      title: 'Eiffel Tower, Paris',
      image: 'assets/gallery-05.jpg',
      description: 'Description for new card 1...',
    },
    {
      title: 'New Card 1',
      image: 'assets/kashish-lamba-8vv87tI238s-unsplash.jpg',
      description:
        "Dear All Wahoo! Greetings from Sydney! One of the world's greatest cities, yet pretty much on the other side of the world from anywhere else, and here I am in it! It is a city that exceeded my expectations in grandeur and beauty, as well as friendliness, safety and efficiency, and I might just say it has probably become one of my favourite cities in the world. A fantastic place, which I really would like to spend much more time in and get to the real heart of. Still, three nights there compared with my whistlestop drive through the Outback over the last six days was really quite a long time indeed, and I enjoyed every moment of it! On a Monday morning, I drove out and down from the Blue Mountains, and pretty much noticed ... read more",
    },
    {
      title: 'New Card 2',
      image: 'assets/pexels-artur-stec-26039050-25746313.jpg',
      description: 'Description for new card 3...',
    },
    {
      title: 'New Card 3',
      image: 'assets/pexels-bayfilm9-15377956.jpg',
      description: 'Description for new card 3...',
    },
    // يمكنك إضافة المزيد من الكروت حسب الحاجة
  ];

  // عدد الكروت المرئية مبدئياً
  displayedCards = this.allCards.slice(0, 6);
  showAll = false;

  constructor(private router: Router) {}

  // دالة الانتقال لتفاصيل المدونة
  goToBlogCardDetails(card: any) {
    this.router.navigate(['/blog-card-details', card.title], {
      state: { cardDetails: card },
    });
  }

  // دالة عرض المزيد من الكروت أو عرض أقل
  // دالة عرض المزيد أو عرض أقل
  // عند الضغط على زر عرض المزيد أو عرض أقل
  loadMore() {
    if (!this.showAll) {
      // عند الضغط على عرض المزيد
      const nextIndex = this.displayedCards.length;
      this.displayedCards = this.allCards.slice(0, nextIndex + 3);
      if (this.displayedCards.length === this.allCards.length) {
        this.showAll = true;
      }
    } else {
      // عند الضغط على عرض الأقل
      this.showAll = true; // يتم عرض الحركة أولاً
      setTimeout(() => {
        this.displayedCards = this.allCards.slice(
          0,
          Math.max(3, this.displayedCards.length - 3),
        );
        if (this.displayedCards.length === 3) {
          this.showAll = false;
        }
      }, 500); // توقيت الحركة يتوافق مع CSS
    }
  }
}
