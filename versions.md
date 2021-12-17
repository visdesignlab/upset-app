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


{% include version_list_entry.html key="upset_original" %}


{% include version_list_entry.html key="upset_2" %}

{% include version_list_entry.html key="upset.js" %}





## UpSet for R

Many scientists use R as part of their analysis workflow. To allow those analysts to easily produce high-resolution figures of set intersections within their workflow that can be used in publications, we have developed an R version of UpSet.

{% include version_list_entry.html key="upsetr" %}


{% include version_list_entry.html key="complex_upset" %}


{% include version_list_entry.html key="upset_complex_heatmap" %}



## UpSet for Python


{% include version_list_entry.html key="py-upset" %}


{% include version_list_entry.html key="upsetplot" %}

{% include version_list_entry.html key="upset-altair" %}



## UpSet for BI Applications

**[UpSet.JS](#UpSet.js), described above, is available as a plug-in for PowerBI and Tableau.**

{% include version_list_entry.html key="upset-tableau" %}














