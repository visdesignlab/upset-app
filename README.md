# UpSet.app Website

This website describes the UpSet set visualization technique and collects references to implementations. It also serves as a project page for the original UpSet implementation and it's immediate derivate, UpSet 2. 

## Contributions

We encourage contributions in the form of edits or fixes, or, in particular, if you've developed or know of another implementation. Check out how to add an implementation in the [UpSet Implementations Readme](_upsetversions/README.md)

Ideally, you could submit a pull request, but e-mailing alex@sci.utah.edu will also do. 


## Modifying the Code

## Build and Technical Info

The website is built with
[Jekyll](http://jekyllrb.com).

Here is a good cheat sheet: 
https://gist.github.com/smutnyleszek/9803727

The Liquid Language Reference: https://shopify.github.io/liquid/basics/types/


## Setup Jekyll

If you have Ruby on your machine, just install Jekyll and a plugin:

``` shell
$ gem install jekyll
$ gem install jekyll-redirect-from
```

Further details on installing Jekyll and its requirements:
https://jekyllrb.com/docs/installation/


### Run Jekyll

``` shell
$ jekyll serve -i
```

Running Jekyll in incremental (`-i`) mode is _significantly_ faster.


### View the Generated Site

``` shell
$ open http://0.0.0.0:4000/
```



### GitHub Pages and Jekyll

Installation instructions above for Jekyll will work for the most part, but you
can also emulate the current GitHub Pages server environment with the following
installation instructions:
https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/


To install the GitHub Pages gem, you may need to install the Ruby DevKit for
your operating system.
