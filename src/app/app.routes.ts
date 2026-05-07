import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlogDetailsComponent } from './Blog-details/Blog-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { MoreDestinationsComponent } from './more-destinations/more-destinations.component';
import { OneComponent } from './home/tags/one-component/one-component.component';
import { DetailComponent } from './detail/detail.component';
import { BlogCardDetailsComponent } from './blog-card-details/blog-card-details.component';
import { OriginalUserprofileComponent } from './original-userprofile/original-userprofile.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    title: 'Traveler | Youssef Ghobrial',
  },
  {
    path: 'more-destinations',
    component: MoreDestinationsComponent,
    title: 'More Destinations | Youssef Ghobrial',
  },
  {
    path: 'login',
    component: LoginFormComponent,
    title: 'Login | Youssef Ghobrial',
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    title: 'Sign Up | Youssef Ghobrial',
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    title: 'Contact Us | Youssef Ghobrial',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | Youssef Ghobrial',
  },
  { path: 'destination/:id', component: DetailComponent },
  {
    path: 'blog-details/:id',
    component: BlogDetailsComponent,
    title: 'Blog Details | Youssef Ghobrial',
  },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    title: 'User Profile | Youssef Ghobrial',
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    title: 'User Profile | Youssef Ghobrial',
  },
  { path: 'one/:tag', component: OneComponent },
  { path: 'blog-card-details/:id', component: BlogCardDetailsComponent },
  { path: 'original-userprofile', component: OriginalUserprofileComponent },
  { path: '**', component: PageNotFoundComponent },
];
