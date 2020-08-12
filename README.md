# html-frontend-test
 HTML FrontEnd Test

## Live Preview

Live preview can be reviewed at:
http://accedo-gps.000webhostapp.com/demo/html-frontend-test/
 
## To view the files locally

Download/clone repo, unpack zip file and open index.html

## Notes

To optimize performance and page load, images were compressed using TinyPNG (https://tinypng.com), webp image type use was discarded since it is not supported in Safari 14< (https://caniuse.com/#feat=webp).

Image compression boosted the page load as seen below:

![screenshot](https://github.com/aumartinez/html-frontend-test/blob/master/page-speed-desktop.PNG)
![screenshot](https://github.com/aumartinez/html-frontend-test/blob/master/page-speed-mobile.PNG)

CSS and JS were not minified, since the most demanding service is the image load, no additional improvement will result from minifying these files.
