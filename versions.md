---
layout: home
title: Versions | UpSet
weight: 2
tag: versions
permalink: /versions/
---

{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}

# Versions of UpSet

The basic idea of UpSet has been implemented many times. Here we list the available implementations and describe their main benefits and drawbacks. 

## Interactive, Web Based Versions

### The Original UpSet

### UpSet 2 – A Rewrite of UpSet


## UpSet for R

### UpSetR

Many scientists use R as part of their analysis workflow. To allow those analysts to easily produce high-resolution figures of set intersections within their workflow that can be used in publications, we have developed an R version of UpSet.

![UpSet Screenshot]({{path}}/upsetr.png)

UpSetR has many of the features of our interactive UpSet plots, specifically it comes with various ways to sort and filter intersections and can plot attributes about the elements in the various sets. The layout is slightly adapted - intersections are plotted horizontally instead of vertically, which is beneficial for the typical aspect ratios found in papers. UpSetR does not include the aggregation features of UpSet, does not provide summary statistics about the intersections in line with the set cardinality, and does not provide access to the individual items.

To learn more about UpSetR visit the [source code repository](https://github.com/hms-dbmi/UpSetR) which includes documentation on usage, or check out the released versions on [CRAN](https://cran.r-project.org/web/packages/UpSetR/), or try the [UpSetR shiny app](https://upsetr.shinyapps.io/UpSetR-shiny/).

### 

## UpSet for Python


### pyUpSet - Creating UpSet plots in Python

pyUpSet has a similar use case to UpSetR but is developed for Python. While UpSetR is directly influenced by Caleydo team members, pyUpSet is developed independently, yet we appreciate the port. pyUpSet is [available on github](https://github.com/ImSoErgodic/py-upset).




