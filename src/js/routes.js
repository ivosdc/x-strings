
import HomePage from '../pages/home.svelte';
import TunerPage from '../pages/tuner.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/tuner/',
    component: TunerPage,
  }
];

export default routes;
