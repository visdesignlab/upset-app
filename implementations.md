---
layout: home
title: Implementations | UpSet
weight: 2
tag: versions
permalink: /implementations/
redirect_from: /versions/
---

{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}



# Implementations of UpSet

The basic idea of UpSet has been implemented many times. Here we list the available implementations and describe their main benefits and drawbacks. 

We distinguish between three-types of implementations: 

* **Interactive Tools** that are meant for uploading data and customizing the plot dynamically, without programming. 

* **Plotting Libraries** that are designed to be customized in a programming language, e.g., in R or Python and can be used as part of a computational notebook, or can be integrated in a larger system. Some of these tools also have interactive wrappers, using e.g., R-Shiny so that they can be used without programming. 

* **Sample Implementations** demonstrate how to implement an UpSet plot in a framework (e.g., Tableau) but are not libraries and hence typically don't have data loading capabilities and are tested only with a single dataset. It's usually possible to copy a template and customize it to work with your own data.

## Interactive Tools
{% include version_list_entry.html key="upset_original" %}

{% include version_list_entry.html key="upset_2" %}

## Plotting Libraries

### Web Libraries
{% include version_list_entry.html key="upset.js" %}

### R Libraries
{% include version_list_entry.html key="upsetr" %}

{% include version_list_entry.html key="complex_upset" %}

{% include version_list_entry.html key="upset_complex_heatmap" %}

### Python Libraries
{% include version_list_entry.html key="py-upset" %}

{% include version_list_entry.html key="upsetplot" %}

## Sample Implementations
{% include version_list_entry.html key="upset-altair" %}

{% include version_list_entry.html key="upset-tableau" %}

{% include version_list_entry.html key="upset_observable" %}














