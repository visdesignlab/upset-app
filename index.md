---
layout: home
title: UpSet Home
weight: 1
tag: home
permalink: /
---
{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}

# UpSet – Visualizing Intersecting Sets

Understanding relationships between sets is an important analysis task. The major challenge in this context is the combinatorial explosion of the number of set intersections if the number of sets exceeds a trivial threshold. To address this, we introduce UpSet, a novel visualization technique for the quantitative analysis of sets, their intersections, and aggregates of intersections.

![UpSet Screenshot]({{site.baseurl}}/assets/images/publications/2014_infovis_upset_teaser.png)

UpSet is focused on creating task-driven aggregates, communicating the size and properties of aggregates and intersections, and a duality between the visualization of the elements in a dataset and their set membership. UpSet visualizes set intersections in a matrix layout. The matrix layout enables the effective representation of associated data, such as the number of elements in the aggregates and intersections, as well as additional summary statistics.

Sorting according to various measures enables a task-driven analysis of relevant intersections and aggregates. The elements represented in the sets and their associated attributes are visualized in a separate view. Queries based on containment in specific intersections, aggregates, or driven by attribute filters are propagated between both views. UpSet also introduces several advanced visual encodings and interaction methods to overcome the problems of varying scales and to address scalability.

To get an idea of what UpSet is about, you can watch this 30-second video:

{% include video_entry.html video_key="2014_infovis_upset_video_preview" %}

## Why UpSet?

**See this related commentary:** [Points of view: Sets and intersections](https://dx.doi.org/10.1038/nmeth.3033). Alexander Lex, Nils Gehlenborg. Nature Methods, vol. 11, no. 8, pp. 779, 2014.

Venn diagrams are a horrible way to visualize intersections of more than three or four sets. The figure below shows an example of a six-set venn diagram [published in Nature](https://www.nature.com/nature/journal/v488/n7410/full/nature11241.html) that shows the relationship between the banana's genome and the genome of five other species.

![UpSet Screenshot]({{path}}/banana.png)

While this figure looks fun and [generated quite a bit of hype](http://blog.openhelix.eu/?p=20201) is is also a **terrible visualization**. Try to extract any information from it. It's really hard to trace which intersection involves which sets. It's not obvious which is the biggest intersection from the visualization - you have to read the labels one by one. This is, unfortunately, not an isolated example, but this particular Venn diagram triggered us to develop UpSet.

UpSet has three guiding principles:

- Use **perceptually efficient visual encodings**, i.e., make it easy to read the data accurately.
- Make it possible to not just visualize intersections, but to **visualize combinations of intersections** (e.g., all the intersections involving two particular sets).
- **Visualize attributes about the intersections**. It is not just the magnitude of an intersection that is interesting, but we also want to know whether the data associated with intersection is different or similar.

You might ask, how does the banana venn diagram look in UpSet? Here you go:
![UpSet Screenshot]({{path}}/upsetr-banana.png)

(This figure was created with the UpSet R version.) Granted, that's a little hard to read because the figure is rather small. But we can simply remove the small intersections, and we get a nice plot which shows us the main features of the data:

![UpSet Screenshot]({{path}}upsetr-banana_clipped.png)

Notice how easy it is to see trends: the vast majority of genes is shared between all plants, the first three species (Oryza_sativa, Sorghum_bicolor, and Brachypodium_distachyon) seem to be highly related, while the sixth species (Phoenix dactylifera) is most different from the others.

## UpSet concept

<img style="float: right; padding-left: 5px;" src="{{path}}/matrix.png">

UpSet plots the intersections of a set as a matrix, as shown in the figure on the right. Each column corresponds to a set, and each row corresponds to one segment in a Venn diagram, as indicated in the figure. Cells are either empty (light-gray), indicating that this set is not part of that intersection, or filled, showing that the set is participating in the intersection. The first row in the figure is completely empty - it corresponds to all the elements that are in none of the sets, the second row corresponds to the elements that are only in the set A, (not in B or C), etc.

<img style="float: left; width: 350px; padding-right: 5px;" src="{{path}}/upset_explained.svg">
This layout is great, because we can plot the size of the intersections as bar charts right next ot the matrix, as you can see in the simple example on the left. This figure shows a Simpsons dataset in UpSet and in a corresponding Venn diagram. We can also sort in many different ways. Here we sort by the degree, i.e., by the number of sets that contribute to an intersection, but we can also dynamically sort by intersection size and other attributes.


### More Information

For more details on the concept please refer to the [paper on UpSet]({{site.baseurl}}/publications/2014_infovis_upset/) or watch this video introducing the user interface:

{% include video_entry.html key="2014_infovis_upset_video" %}

In summary, if you want to visualize intersections of two or three sets - use a Venn diagram, everyone knows them.
**For anything above three (and below ~40) sets - use UpSet!**





## Frequently Asked Questions

- _How can I create high-resolution UpSet plots for a paper or other publication?_  
    There are two options:

    - If you prefer to use the interactive web-based version you can print the UpSet plot to a PDF and edit the PDF with a vector editing software such as Adobe Illustrator.
    - You can use [UpSetR](https://github.com/hms-dbmi/UpSetR), the R version of UpSet to create a static, high-res UpSet plot.

- _Can I upload my own dataset to analyze in UpSet?_  
    Yes, you can use upset with data that can be accessed over the Internet. Go [here](https://github.com/VCG/upset/wiki) to learn how to do it.

- _Can I download UpSet and use it locally for my confidential data?_  
    Yes, you can download upset from the [source code repository](https://github.com/VCG/upset), which also provides [some instructions on local deployment](https://github.com/VCG/upset/blob/master/README.md).

- _Do you provide documentation for UpSet?_  
    Yes, through the [GitHub Wiki](https://github.com/VCG/upset/wiki). Right now it only covers data import, but more will follow soon. Don't forget to watch the videos! They give you a good idea on how things are done.

- _Which Browsers are supported?_  
    We currently test only on the latest version of Google Chrome. Other recent browsers might work too.

