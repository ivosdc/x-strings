# X-Strings Guitar Tuner
Made with Svelte / Framework7 (Capacitor / Cordova)

[Click here to download X-Strings Android-App!](https://ivosdc.github.io/x-strings/build/x-strings.apk)

## Capacitor
```
npm install @capacitor/core
npm install @capacitor/cli --save-dev
npx cap init
npx cap add android
npm install es6-promise-plugin
npm install phonegap-plugin-media-stream
npx cap update
```
A Folder `android` was created.

Building the app:
```
npm run build
npx cap sync
```

## Inside Android Studio

After the above steps, open the android folder as `new Project`.
Click in the menu bar:
```
"Build" -> "Make Project"
"Build" -> "Build Bundles(s) / APK(s)" -> "Build APK(s)"
```

After these steps, the apk will be created in the folder:
```
android/app/build/outputs/apk/debug/app-debug.apk
```




## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "/mnt/c/Users/ibozi/repositories/x-strings",
  "type": [
    "pwa"
  ],
  "name": "X-Strings",
  "framework": "svelte",
  "template": "blank",
  "bundler": "vite",
  "cssPreProcessor": "less",
  "theming": {
    "customColor": true,
    "color": "#1a1a1a",
    "darkTheme": true,
    "iconFonts": true,
    "fillBars": true
  },
  "customBuild": true,
  "customBuildConfig": {
    "rtl": false,
    "darkTheme": true,
    "lightTheme": true,
    "themes": [
      "ios",
      "md",
      "aurora"
    ],
    "components": []
  }
}
```

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.
## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```



## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)


* [Framework7 Svelte Documentation](https://framework7.io/svelte/)
* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on:
- Patreon: https://patreon.com/framework7
- OpenCollective: https://opencollective.com/framework7