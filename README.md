# Ranalog

> Tiny JS app for viewing images from `r/analog`

## Why?

Reddit's web and mobile apps are not optimized for viewing a photo stream. When on my phone, I'd like to see all of the posts in a scrollable list, already expanded.

This app uses `srcset` and the `<picture>` element to optimize the sizes of images that are delivered based on your device size and resolution.

The goal is to make a mobile-friendly browse experience with the _least code possible_.

## Install

```
npm install
```

## Develop

```
npm start
```

## Deploy

```
npm run deploy
```

## Technology & Tooling

This project is also an excuse to play with some new tooling I haven't used yet. I'm using [parcel](https://parceljs.org/) to build and optimize JavaScript.

I'd like to figure out other things like:

- web workers
- continuous deployment (wedeploy)
- PWA
- lazy-loading

## License

Private.