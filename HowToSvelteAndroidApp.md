# X-strings guitar-tool
Made with Svelte / Framework7 (Capacitor / Cordova)

![X-Strings Guitar-Tool](public/icons/128x128.png)

## Install X-Strings
```
npm install
```

* 🔧 `npm run dev` - run development server
* 🔧 `npm run build` - build web app for production


## HowTo: Create a Svelte-Android-App
### Install framework7 cli
```
npm install -g framework7-cli
```

### Create Framework7-Svelte App:
Assets can easily be added to your app later.
```
mkdir my-app
cd my-app
framework7 create --ui
```

This starts an app-create-wizzard on `http://localhost/3001`. Select the options:
- capacitor
- framework 7 with svelte


and press the `create` button.

### Capacitor
Stay inside your app-folder and install Capacitor:
```
npm install @capacitor/core
npm install @capacitor/cli --save-dev
```
Initialize Capazitor and add android environment.
```
npx cap init
npx cap add android
```
A Folder `android` was created.

The Cordova-Browser needs plugins to act like a "normal" UI-Browser. We need phonegab to adapt `navigator.mediaDevices.getUserMedia` features.
```
npm install es6-promise-plugin
npm install phonegap-plugin-media-stream
npx cap update
```

### Svelte-Components
Now we can implement Svelte-Things inide the `src` folder :) 

Assets are located in `assets-src` folder. To generate your own assets, you will need to replace all assets in this directory with your own images, and run the following command in the project directory:

```
framework7 assets
```
or use the ui again.
```
framework7 assets --ui
```


When done, build the app and synchronize the build to the `android` folder.
```
npm run build
npx cap sync
```
This was the `nodejs`-Part.

The `my-app.apk` file has to be created with e.g. Android Studio.

### Android Studio
Install android studio https://developer.android.com/studio/install


Open the `android` folder as `new Project`.
Click in the menu bar:
```
"Build" -> "Make Project"
"Build" -> "Build Bundles(s) / APK(s)" -> "Build APK(s)"
```

After these steps, the apk will be created in the folder:
- `android/app/build/outputs/apk/debug/app-debug.apk` or
- `android/app/build/intermediates/apk/debug/app-debug.apk`

Have fun.
