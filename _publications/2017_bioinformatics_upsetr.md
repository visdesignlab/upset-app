---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "UpSetR: An R Package For The Visualization Of Intersecting Sets And Their Properties"
key: 2017_bioinformatics_upsetr
# use for old preprint link
redirect_from: /publications/2017_preprint_upsetr/
# paper | poster | preprint
type: paper

# The shortname is used for auto-generated titels
shortname: UpSetR
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2017_bioinformatics_upsetr.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2017_bioinformatics_upsetr_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- Jake R. Conway
- lex
- gehlenborg

# add journal and bibliographic information, e.g., 
journal-short: Bioinformatics
year: 2017

bibentry: article
bib:
  journal: Bioinformatics 
  doi: 10.1093/bioinformatics/btx364
  volume: 33
  number: 18
  pages: 2938-2940

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

# Use if this paper is linked to an internal project. This will link to the project site
# project: upset

# Use this if you have an external project website
external-project: http://caleydo.org/tools/upset/

# The reference to the video entry
# video:
# The reference to the preview viedo entry
#preview-video:

# the prerint
pdf: 2017_bioinformatics_upsetr.pdf
# A supplement PDF
supplement: 2017_bioinformatics_upsetr_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: General UpSet
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/hms-dbmi/UpSetR

abstract: '
<p>Venn and Euler diagrams are a popular yet inadequate solution for quantitative visualization of set intersections. A scalable alternative to Venn and Euler diagrams for visualizing intersecting sets and their properties is needed. We developed UpSetR, an open source R package that employs a scalable matrix-based visualization to show intersections of sets, their size, and other properties. UpSetR is available at <a href="https://cran.r-project.org/package=UpSetR">https://cran.r-project.org/package=UpSetR</a> and released under the MIT License. A Shiny app is available at <a href="https://gehlenborglab.shinyapps.io/upsetr">https://gehlenborglab.shinyapps.io/upsetr</a>.</p>'

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

The authors would like to thank Megan Paul for her contributions to the project. This work was funded through awards by the National Institutes of Health (R00HG007583, U54HG007963, U01CA198935).
