---
layout: home
title: UpSet Home
weight: 1
tag: home
permalink: /
---
{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}

# UpSet – Visualizing Intersecting Sets

Understanding relationships between sets is an important analysis task. The major challenge in this context is the combinatorial explosion of the number of set intersections if the number of sets exceeds a trivial threshold. To address this, we developed UpSet, a novel visualization technique for the quantitative analysis of sets, their intersections, and aggregates of intersections.


<img style="padding-left: 5px; height: 400px" src="{{path}}/upsetr.png">

UpSet visualizes set intersections in a matrix layout. The matrix layout enables the effective representation of associated data, such as the number of elements in the aggregates and intersections, as well as additional summary statistics.


<!-- <iframe height="500" width="600" data="{&quot;NavBar&quot;:false,&quot;FilterBox&quot;:false,&quot;DataSetInfo&quot;:false,&quot;LeftSideBar&quot;:false,&quot;RightSideBar&quot;:false,&quot;ProvenanceView&quot;:false,&quot;DeviationBars&quot;:false,&quot;CardinalityBars&quot;:false}" class="upset" src="https://vdl.sci.utah.edu/upset2/embed.html#{&quot;NavBar&quot;:false,&quot;FilterBox&quot;:false,&quot;DataSetInfo&quot;:false,&quot;LeftSideBar&quot;:false,&quot;RightSideBar&quot;:false,&quot;ProvenanceView&quot;:false,&quot;DeviationBars&quot;:false,&quot;CardinalityBars&quot;:true}"></iframe> -->

## UpSet Explained

UpSet plots the intersections of a set as a matrix, as shown in the figure on the right. Each column corresponds to a set, and bar charts on top show the size of the set. Each row corresponds to a possible intersection: the filled-in cells show which set is part of an intersection. Also notice the lines connecting the filled-in cells: they show in which direction you should read the plot: 

<img style="padding-left: 5px; height: 400px" src="{{path}}/concept_1_matrix.png">


Here you can see examples of how these intersections correspond to the segments in a Venn diagram. The first row in the figure is completely empty – it corresponds to all the elements that are in none of the sets. The second row corresponds to the elements that are only in the set A, (not in B or C), etc.
<img style="padding-left: 5px; height: 400px" src="{{path}}/concept_2_intersections.png">

This layout is great, because we can plot the size of the intersections (the “cardinality”) as bar charts right next ot the matrix, as you can see in the following example: 

<img style="padding-left: 5px; height: 400px" src="{{path}}/concept_3_cardinality.png">

The matrix is also very useful because it can be sorted in various ways. A common way is to sort by the cardinality (size).

<img style="padding-left: 5px; height: 400px" src="{{path}}/concept_4_sorting.png">

Finally, UpSet works just as well horizontally or vertically. We think that vertical layouts are better for interactive UpSet plots that can be scrolled, while horizontal layouts are best for figures in papers: 

<img style="padding-left: 5px; height: 250px" src="{{path}}/concept_5_horizontal.png">


These are the basiscs of UpSet! There's a lot more than you can do with UpSet plots, such as visualize attributes of the intersections, or group intersections. Look at the various pages for details. 
 


## Why UpSet?


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

**See this related commentary:** [Points of view: Sets and intersections](https://dx.doi.org/10.1038/nmeth.3033). Alexander Lex, Nils Gehlenborg. Nature Methods, vol. 11, no. 8, pp. 779, 2014.


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

