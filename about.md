---
layout: home
title: About | UpSet
weight: 2
tag: about
permalink: /about/
---

# About

{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}

UpSet was originally developed at Harvard in 2014 by [Alexander Lex](http://alexander-lex.net), [Nils Gehlenborg](http://gehlenborglab.org/), [Hendrik Strobelt](http://hendrik.strobelt.com/), [Romain Vuillemot](https://romain.vuillemot.net/), and [Hanspeter Pfister](https://vcg.seas.harvard.edu/people/hanspeter-pfister) and [published at IEEE VIS](https://vdl.sci.utah.edu/publications/2014_infovis_upset/). 

UpSet won the **IEEE InfoVis 10-year Test of Time Award in 2024**. Check out the [blog-post reflecting on the reasons behind UpSet's success](https://vdl.sci.utah.edu/blog/2024/10/16/upset_reflections/). 

This website is maintained by [Alexander Lex](http://alexander-lex.net). 

## History

The intention of UpSet plots was to solve the problem of set visualizations for more than three sets. Very specifically, it was inspired by the infamous six-set [banana venn diagram](https://www.nature.com/nature/journal/v488/n7410/full/nature11241.html).

![UpSet Screenshot]({{path}}/banana.png)

The idea behind UpSet is to make the intersection sizes easy to compare. 

The figure below shows the first ever sketch of UpSet on a whiteboard, drawn in December 2013: 

![Original UpSet Whiteboard Sketch]({{path}}/upset_whiteboard.jpg)

As you can see, the final design is fairly close to the very first sketch.

UpSet was also inspired by [Andrew Gelman's redesign challenge](https://statmodeling.stat.columbia.edu/2007/09/25/redoing_venn_di/), and particularly [Robert Kosara's contribution](https://eagereyes.org/criticism/autism-diagnosis-accuracy):

![Venn diagrams and redesign using a tree and bars by Robert Kosara]({{path}}/autism-redesign.png)

UpSets are also related to [Mosaic Plots](https://en.wikipedia.org/wiki/Mosaic_plot), and in particular to the [MANET implementation](http://www.rosuda.org/MANET/):

![]({{path}}/manet_mosaic.png)


## Contact

If you have any questions, please [e-mail us](mailto:alex@sci.utah.edu). 

## Acknowledgements

We want to thank all developers that have created versions of UpSet, and all the users of the various versions!

We also wish to thank our collaborators on the original UpSet paper: Anne Mai Wassermann, Soohyun Lee, Michele Coscia and Frank Neffke for their time and expertise. We also thank Bilal Alsallakh, Silvia Miksch and the whole Radial Sets team for providing feedback and datasets.





