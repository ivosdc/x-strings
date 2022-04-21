
import HomePage from '../pages/home.svelte';
import TunerPage from '../pages/tuner.svelte';
import ChordsPage from '../pages/chords.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/tuner/',
    component: TunerPage,
  },
  {
    path: '/chords/',
    component: ChordsPage,
  }
];

export default routes;
