<App { ...f7params } themeDark>

  <Panel left reveal themeDark>
    <View>
      <Page>
        <Navbar title="Left Panel"/>
        <Block>Left panel content goes here</Block>
      </Page>
    </View>
  </Panel>

  <Views tabs class="safe-areas">
    <!-- Tabbar for switching views-tabs -->
    <Toolbar tabbar labels bottom>
      <Link tabLink="#view-home" tabLinkActive text="Chords"><i class="f7-icons">guitars</i></Link>
      <Link tabLink="#view-tuner" text="Tuner"><i class="f7-icons">gauge</i></Link>
    </Toolbar>
    <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
    <View id="view-home" main tab tabActive url="/" />
    <View id="view-tuner" name="tuner" tab url="/tuner/" />
  </Views>

</App>
<script>
  import { onMount } from 'svelte';
  import {f7, f7ready, App, View, Views, Toolbar, Link, Block, Navbar, Page, Panel, Button} from 'framework7-svelte';
  import routes from '../js/routes';
  import store from '../js/store';
  import {getDevice} from "framework7/lite";
  import capacitorApp from '../js/capacitor-app';

  const device = getDevice();

  // Framework7 Parameters
  let f7params = {
    name: 'X-Strings', // App name
    theme: 'auto', // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,
    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},
  };

  onMount(() => {
    f7ready(() => {
      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
      // Call F7 APIs here
    });
  })
</script>