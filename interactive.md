---
layout: home
title: Interactive | UpSet
weight: 2
tag: Interactive
permalink: /interactive/
---

{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}



### Aggregation

<img style="float: right; padding-left: 5px;" src="{{path}}/matrix_aggregation.png">
In many cases, analysts are interested in understanding more complex set relationships than just individual intersections. UpSet addresses this by making use of aggregations. Aggregations summarize multiple intersection according to a specific pattern. The figure on the right shows an aggregation by sets. Note the extra row labeled "A" - it summarizes all of the intersections where A participates, as shown in the corresponding Venn diagram. These aggregations can show data just the same way as individual intersections can, but they can be collapsed to show only the aggregate, as is the case for B and C in the figure.

<img style="float: left; width: 300px; padding-right: 5px;" src="{{path}}/aggregate.png">
UpSet supports various types of aggregation. The figure on the left, for example, aggregates the Simpsons dataset by degree, but aggregation by sets, pairwise aggregation, and nested aggregation is also possible.

### Queries

A concept closely related to aggregation is querying: UpSet allows users to define a group of intersections that **must**, **may**, or **must not** include a specific set. The query in the following picture defines a subset of Simpsons characters that are either exclusively male or that have blue hair and aren't male. The first part of the query (first row) is indicated by two empty circles in the evil and blue hair cells. This part is combined as an "or" with the second part, that is set to "must" for blue hair, "may" for evil and "must not" for male.

![Query Screenshot]({{path}}/query.png)

UpSet can also query based on attributes. For example, you could define a query that only includes all Simpsons characters that are older than 18 years.

### Visualizing Attributes

UpSet visualizes numerical attributes of the intersections and aggregates as boxplots in line with the matrix rows (see image below). Additional attributes can be visualized for selections in the Element View, for example, in scatterplots or histograms. The figure below shows two queries, a violet and a green one. The green query is active (see the green overlays on the bars, the green table header and the green dots in the scatterplot). The violet query is evident in the scatterplot and is indicated with triangles on the bars.

![UpSet Screenshot]({{path}}/upset_overview.png)

The elements of the active selection are shown in a scrollable table.



## UpSet 2.0
<a id="upset2"></a>

<div>
<iframe height="700" width="700" data="{&quot;NavBar&quot;:false,&quot;FilterBox&quot;:true,&quot;DataSetInfo&quot;:true,&quot;LeftSideBar&quot;:true,&quot;RightSideBar&quot;:false,&quot;ProvenanceView&quot;:false,&quot;DeviationBars&quot;:true,&quot;CardinalityBars&quot;:true}" style="overflow:scroll" class="upset" src="https://vdl.sci.utah.edu/upset2/embed.html#{&quot;NavBar&quot;:false,&quot;FilterBox&quot;:false,&quot;DataSetInfo&quot;:false,&quot;LeftSideBar&quot;:true,&quot;RightSideBar&quot;:false,&quot;ProvenanceView&quot;:false,&quot;DeviationBars&quot;:true,&quot;CardinalityBars&quot;:true}"></iframe>
</div>

<center style="text-align: center">
  <em>
    The interactive embedded version of UpSet 2.0
  </em>
</center>


The new version of the tool is live [here](https://vdl.sci.utah.edu/upset2/).

The features in new version are:

- Data Upload
- Provenance Integration
- Embedding as iFrames (see [above](#upset2))
- Downloading of selections
- Use UpSet as library

The embed code for the above widget is:

