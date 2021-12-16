---
layout: home
title: Advanced | UpSet
weight: 2
tag: advanced
permalink: /advanced/
---

{% capture path %}{{ site.baseurl }}/assets/images/advanced/{% endcapture %}

# Advanced UpSet Features

In addition to the basic UpSet feature of visualizing set intersections, there are more advanced analysis questions that UpSet can help answer. 


## Visualizing Attributes

In addition to set memberships of items, it is frequently useful to also visaulize attributes about the items in intersections. We could use this to, for example, compare properties of two intersections, e.g., to compare ratings of movies in the “Adventure” genre with movies in the ”Documentary” genre. UpSet plots can visualize attributes in two ways: inline, or in separate views. 

### Inline Attribute Visualization

Inline attribute visualization makes it easy to make comparisons across all intersections that are currently shown. The idea is to simply plot an aggregate visualization, such as a box plot, a dot plot (strip plot), or a violin chart next to the bar that shows the size of the intersection. Below you see an example comparing the average ratings of movies that are in various genres.
![UpSet Screenshot]({{path}}/upset_inline_attribute.png)

Here we can see that the average rating for documentaries is higher than for the other genres. Ideally, an upset implenetation can also sort the intersections based on these attributes. 


### Attributes in Separate Views

Additional attributes can be visualized for selections in separate views, for example, in scatterplots or histograms. The figure below shows two selections, a blue one, for “Documentary” moves, and an orange one for “Adventure” moves. A scatterplot shows average ratings versus release date for these two generes. Again, we see that documentearies have higher ratings, but also have only been produced more recently.  The blue selection is active, we see a full table of items of it. 

![UpSet Screenshot]({{path}}/upset_separate_view_attribute.png)

Different UpSet implementations allow different approaches for selecting and exporting these items. 



## Aggregation & Grouping

<img style="float: right; padding-left: 5px;" src="{{path}}/matrix_aggregation.png">
In many cases, analysts are interested in understanding more complex set relationships than just individual intersections. UpSet addresses this by making use of aggregations. Aggregations summarize multiple intersection that share a trait. The figure on the right shows an aggregation by sets: group all intersections that contain a set. Note the extra row labeled "A" - it summarizes all of the intersections where A participates, as shown in the corresponding Venn diagram. These aggregations can show data (size, attributes) just the same way as individual intersections can. Furthermore, aggregates can be collapsed, to hide the intersections that make up the aggregate, as is the case for B and C in the figure. Note that aggregations can result in intersections being contained in multiple aggregates. 

UpSet plots can be aggregated in various ways, we show a few common variations below.

**Aggregate by Sets**

![UpSet Screenshot]({{path}}/aggregate_sets.png)

Aggregation by sets gives a nice overview of the properties of the set, and selectively uncollapsing, as done for the “Action” genre here, enables analysts to inspect the composition of individual sets. 

**Aggregate by Degree**
![UpSet Screenshot]({{path}}/aggregate_degree.png)

Aggregation by degree is an efficient method to inspect whether most items are part of none, one, two or more other sets. 

**Nested Aggregation**
![UpSet Screenshot]({{path}}/aggregate_nested.png)

Nested aggregation is an advanced approach that is most useful to see pairwise overlaps between sets. In the above screenshot, the first level of aggregation is sets, the second is overlaps (all interesections that overlap between two sets). Combined, this results in a view that lets analysts efficiently analyze which sets interact with each other. 

## Queries

A concept closely related to aggregation is querying: UpSet allows users to define a group of intersections that **must**, **may**, or **must not** include a specific set. The query in the following picture defines a subset of Simpsons characters that are either exclusively male or that have blue hair and aren't male. The first part of the query (first row) is indicated by two empty circles in the evil and blue hair cells. This part is combined as an "or" with the second part, that is set to "must" for blue hair, "may" for evil and "must not" for male.

![Query Screenshot]({{path}}/query.png)

UpSet can also query based on attributes. For example, you could define a query that only includes all Simpsons characters that are older than 18 years.


