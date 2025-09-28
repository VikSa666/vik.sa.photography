# @vik.sa.photography portfolio

This is the repository for the simple and stupid portfolio of my photography.

The project is built in Vue + Typescript and the photos are stored in Cloudinary (as it offers a good 25GB of free storage). The web is deployed as GitHub Pages and you can visit it at [https://viksa666.github.io/vik.sa.photography/](https://viksa666.github.io/vik.sa.photography/).

## How to add more series or photos

Photos are organized in series. To define a series, you need to go to `src/assets/data/series` and there define a directory with two main things:

- A `.json` with all the data with the public urls and metadata for each photo.
- An `index.js` where you define the series as a constant of type `ImageSeries`. Check the already existing ones to see how.

Then, at `src/assets/data/index.js` you need to add the new series constant you defined to the `SERIES_DATA` array and everything will work automatically.

## How to deploy the website

Every push to `main` branch will trigger the deployment automatically. You can manually also run `npm run deploy`.
