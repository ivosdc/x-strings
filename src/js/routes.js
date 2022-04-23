
import HomePage from '../pages/home.svelte';
import TunerPage from '../pages/tuner.svelte';
import ChordsPage from '../pages/chords.svelte';
import MetronomPage from '../pages/metronom.svelte';

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
  },
  {
    path: '/metronom/',
    component: MetronomPage,
  }
];

export default routes;
