# Adding Images

When you add images to the site, please be considerate of their file size. See
compression recommendations below. All publication videos and PDF's should go
on the SCI webserver, **NOT** on GitHub.

## Image Compression

We recommend using [TinyPNG](https://tinypng.com/) for your images, since it
produces small, quality images for both JPG and PNG. If you have Adobe
Photoshop, there is a function to
[export to web](http://help.adobe.com/en_US/creativesuite/cs/using/WS6E857477-27FE-4a88-B8A4-074DC3C65F68.html).
Other useful compression sites are [Optimizilla](http://optimizilla.com/) and
[jpeg.io](https://www.jpeg.io/).

A batch alternative is pngquant - https://pngquant.org/ (install via homebrew).

## Publication Images

For every publication, you **MUST** provide a thumbnail and you **SHOULD** provide a teaser.  If you do not provide a teaser image, your publication will not show up on the front page.

The aspect ratio for both has to be 2:1. Images should be stored in the `images/publications/` directory.

The thumbnail image must be named `YYYY_CONFSHORTNAME_PAPERSHORTNAME.png` and should be roughly 400x200 (but must be 2:1) with a file size of less than 40 kb.

The teaser must be named `YYYY_CONFSHORTNAME_PAPERSHORTNAME_teaser.png` for the larger
teaser figure. The teaser should be roughly 1200x600
and be in the neighborhood of 200-300 kb (again, must be 2:1).

### Supplemental Images

Supplemental images have to be original images, i.e., they can't be in the paper or in the supplement and must be free for us to license as we choose (no copyright by a journal).

Both, thumbnails and full images are stored in a subfolder of `assets/images/publications` that is names with the KEY of the paper `YYYY_CONFSHORTNAME_PAPERSHORTNAME`

The thumbnail must be exactly 600x300 and be named `thumb_YYYY__CONFSHORTNAME_PAPERSHORTNAME_FIGUREDESC.png`.  

The full image should be high resolution and has no requirements on aspect ratio. It must have the same name as the thumbnail, except for the `thumb_` prefix.

## People Images

Please upload a grayscale headshot of yourself into the `images/people/`
directory. Your picture should be:

- aspect ratio: square or 1:1
- resolution: up to 400x400 px
- format: JPG
- size: ~20 kb
