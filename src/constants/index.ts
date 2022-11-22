import {
  AboutUs,
  Blog,
  Contacts,
  FAQs,
  Home,
  OurTeam,
  Services,
  SingleBlog,
  SingleOurTeam,
  SingleService,
  SingleSolution,
  Solutions,
} from '@/pages';

export enum Paths {
  Home = '/',
  Services = '/services',
  SingleService = '/services/:id',
  AboutUs = '/about-us',
  Blog = '/blog',
  SingleBlog = '/blog/:id',
  Contacts = '/contacts',
  OurTeam = '/our-team',
  SingleOurTeam = '/our-team/:id',
  FAQs = '/FAQs',
  Solutions = '/solutions',
  SingleSolution = '/solutions/:id',
  NotFound = '/*',
}

export const routes = [
  {
    exact: true,
    path: Paths.Home,
    component: Home,
  },
  {
    exact: true,
    path: Paths.Services,
    component: Services,
  },
  {
    exact: true,
    path: Paths.SingleService,
    component: SingleService,
  },
  {
    exact: true,
    path: Paths.AboutUs,
    component: AboutUs,
  },
  {
    exact: true,
    path: Paths.Blog,
    component: Blog,
  },
  {
    exact: true,
    path: Paths.SingleBlog,
    component: SingleBlog,
  },
  {
    exact: true,
    path: Paths.Contacts,
    component: Contacts,
  },
  {
    exact: true,
    path: Paths.OurTeam,
    component: OurTeam,
  },
  {
    exact: true,
    path: Paths.SingleOurTeam,
    component: SingleOurTeam,
  },
  {
    exact: true,
    path: Paths.FAQs,
    component: FAQs,
  },
  {
    exact: true,
    path: Paths.Solutions,
    component: Solutions,
  },
  {
    exact: true,
    path: Paths.SingleSolution,
    component: SingleSolution,
  },
];

export const headerNavLinks = [
  {
    name: 'Home',
    path: Paths.Home,
  },
  {
    name: 'Solutions',
    path: Paths.Solutions,
  },
  {
    name: 'Elements',
    path: Paths.NotFound,
  },
  {
    name: 'Blog',
    path: Paths.Blog,
  },
  {
    name: 'Contacts',
    path: Paths.Contacts,
  },
];

export const headerDropDownLinks = [
  {
    name: 'Services',
    path: Paths.Services,
  },
  {
    name: 'About us',
    path: Paths.AboutUs,
  },
  {
    name: 'Our team',
    path: Paths.OurTeam,
  },
  {
    name: 'FAQs',
    path: Paths.FAQs,
  },
];

export const coordinates = [
  { lat: 50.07, lng: 14.43 },
  { lat: 48.855, lng: 2.35 },
  { lat: 52.23, lng: 21.01 },
  { lat: 52.37, lng: 4.89 },
  { lat: 47.5, lng: 19.04 },
];

export const faqBlockTittles = [
  'What are data analytics?',
  'What is data mining?',
  'What is business intelligence?',
  'What is exploratory data analysis (EDA)?',
  'What is confirmatory data analysis (CDA)?',
  'What are predictive analytics?',
  'What is data visualisation?',
];

export const faqBlockDescription = `Phasellus tristique eu nisl eu consectetur. 
  Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. 
  Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. 
  Sed quis lobortis eros.`;
