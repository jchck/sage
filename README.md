# [Project-X](https://github.com/jchck/project-x)
[![Build Status](https://travis-ci.org/roots/sage.svg)](https://travis-ci.org/roots/sage)
[![devDependency Status](https://david-dm.org/roots/sage/dev-status.svg)](https://david-dm.org/roots/sage#info=devDependencies)

Project-X is a minimal [Sage-based](https://github.com/roots/sage) WordPress starter theme based on HTML5 Boilerplate, gulp, npm, and PostCSS that supports both [Basscss](https://github.com/basscss/basscss) and [Tachyons](https://github.com/tachyons-css/tachyons) for smoking fast, composable themes. The purpose of this project is to bring the principles of Functional CSS to the WordPress &#127758;.


## Requirements

* PHP >= 5.4.x    
* Node.js 0.12.x 
* gulp >= 3.8.10  

For more installation notes, refer to the [Install gulp and Bower](#install-gulp-and-bower) section in this document.

## Features

* [gulp](http://gulpjs.com/) build script that compiles PostCSS, lints JavaScript, optimizes images, removes unused CSS with UnCSS, and concatenates and minifies files
* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing
* [npm](http://npmjs.com/) for package management
* [asset-builder](https://github.com/austinpray/asset-builder) for the JSON file based asset pipeline
* [Theme wrapper](https://roots.io/sage/docs/theme-wrapper/)
* ARIA roles and microformats
* Posts use the [hNews](http://microformats.org/wiki/hnews) microformat
* [Multilingual ready](https://roots.io/wpml/) and over 30 available [community translations](https://github.com/roots/sage-translations)

## Theme installation


### via WordPress Admin Panel

1. [Download the latest release](https://github.com/jchck/project-x) of Project-X.
2. In your WordPress admin panel, navigate to Appearance->Themes
3. Click Add New
4. Click Upload Theme
5. Upload the zip file that you downloaded.

## Theme setup

Edit `lib/setup.php` to enable or disable theme features, setup navigation menus, post thumbnail sizes, post formats, and sidebars.

## Theme development

Project-X uses [gulp](http://gulpjs.com/) as its build system and [npm](http://npmjs.com/) to manage front-end packages.

### Install gulp 

Building the theme requires [node.js](http://nodejs.org/download/). We recommend you update to the latest version of npm: `npm install -g npm@latest`.

From the command line:

1. Install [gulp](http://gulpjs.com) globally with `npm install -g gulp`
2. Navigate to the theme directory, then run `npm install`

You now have all the necessary dependencies to run the build process.

### Available gulp commands

* `gulp` — Compile and optimize the files in your assets directory
* `gulp watch` — Compile assets when file changes are made
* `gulp --production` — Compile assets for production (no source maps).

### Using BrowserSync

To use BrowserSync during `gulp watch` you need to update `devUrl` at the bottom of `assets/manifest.json` to reflect your local development hostname.

For example, if your local development URL is `http://project-name.dev` you would update the file to read:
```json
...
  "config": {
    "devUrl": "http://project-name.dev"
  }
...
```
If your local development URL looks like `http://localhost:8888/project-name/` you would update the file to read:
```json
...
  "config": {
    "devUrl": "http://localhost:8888/project-name/"
  }
...
```

## Documentation

Sage documentation is available at [https://roots.io/sage/docs/](https://roots.io/sage/docs/).

## Contributing

Contributions are welcome from everyone. 

