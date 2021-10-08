---
layout: home
title: UpSet Home
weight: 1
tag: home
permalink: /
---
{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}

# UpSet – Visualizing Intersecting Sets

Understanding relationships between sets is an important analysis task. The major challenge in this context is the combinatorial explosion of the number of set intersections if the number of sets exceeds a trivial threshold. The most common set visualization approach – Venn Diagrams – don't scale beyond three or four sets. To address this, we developed UpSet, a novel visualization technique for the quantitative analysis of sets, their intersections, and aggregates of intersections.


<img style="padding-left: 5px; height: 400px" src="{{path}}/upsetr.png">

UpSet visualizes set intersections in a matrix layout. The matrix layout enables the effective representation of associated data, such as the number of elements in the intersections.


<!-- <iframe height="500" width="600" data="{&quot;NavBar&quot;:false,&quot;FilterBox&quot;:false,&quot;DataSetInfo&quot;:false,&quot;LeftSideBar&quot;:false,&quot;RightSideBar&quot;:false,&quot;ProvenanceView&quot;:false,&quot;DeviationBars&quot;:false,&quot;CardinalityBars&quot;:false}" class="upset" src="https://vdl.sci.utah.edu/upset2/embed.html#{&quot;NavBar&quot;:false,&quot;FilterBox&quot;:false,&quot;DataSetInfo&quot;:false,&quot;LeftSideBar&quot;:false,&quot;RightSideBar&quot;:false,&quot;ProvenanceView&quot;:false,&quot;DeviationBars&quot;:false,&quot;CardinalityBars&quot;:true}"></iframe> -->


<div class="note">

<b>If you use an UpSet figure in a publication, please cite the <a href="https://vdl.sci.utah.edu/publications/2014_infovis_upset/">original paper</a></b>:

<div class="ref">
Alexander Lex, Nils Gehlenborg, Hendrik Strobelt, Romain Vuillemot, Hanspeter Pfister.
UpSet: Visualization of Intersecting Sets
IEEE Transactions on Visualization and Computer Graphics (InfoVis), 
20(12): 1983--1992, doi:10.1109/TVCG.2014.2346248, 2014.
</div>

<b>
If you created an UpSet figure with UpSetR, please also cite the <a href="https://vdl.sci.utah.edu/publications/2017_bioinformatics_upsetr/">UpSetR paper</a>:</b>
<div class="ref">
Jake R. Conway, Alexander Lex, Nils Gehlenborg.
UpSetR: An R Package For The Visualization Of Intersecting Sets And Their Properties
Bioinformatics, 33(18): 2938-2940, doi:10.1093/bioinformatics/btx364, 2017.
</div>
</div>


## UpSet Explained

UpSet plots the intersections of a set as a matrix, as shown in the following figure. Each column corresponds to a set, and bar charts on top show the size of the set. Each row corresponds to a possible intersection: the filled-in cells show which set is part of an intersection. Also notice the lines connecting the filled-in cells: they show in which direction you should read the plot: 

<img style="height: 400px" class="centered-image" src="{{path}}/concept_1_matrix.png" alt="Explaining the matrix approach in UpSet.">

Here you can see examples of how these intersections correspond to the segments in a Venn diagram. The first row in the figure is completely empty – it corresponds to all the elements that are in none of the sets. The green (third) row corresponds to the elements that are only in set B, (not in A or C). The orange (fifth) row represents elements that are shared by sets A and B, but not with C. Finally, the last (violet) row represents the elements shared between alll sets. 

<img style="height: 400px" class="centered-image" src="{{path}}/concept_2_intersections.png" alt="Explaining the intersections in UpSet">

This layout is great because we can plot the size of the intersections (the “cardinality”) as bar charts right next ot the matrix, as you can see in the following example: 

<img style="height: 400px" class="centered-image" src="{{path}}/concept_3_cardinality.png" alt="Plotting intersection sizes with bars in UpSet.">

This makes the size of intersections easy to compare. 

The matrix is also very useful because it can be sorted in various ways. A common way is to sort by the cardinality (size), as shown in the following figure, but it's also possible to sort by degree, or sets, or any other desired sorting. 

<img style="height: 400px" class="centered-image" src="{{path}}/concept_4_sorting.png" alt="Sorting by cardinality in UpSet">

Finally, UpSet works just as well horizontally or vertically. Vertical layouts are better for interactive UpSet plots that can be scrolled, while horizontal layouts are best for figures in papers. 

<img style="height: 250px" class="centered-image" src="{{path}}/concept_5_horizontal.png" alt="Horizontal layout in UpSet">


These are the basiscs of UpSet! There's a lot more than you can do with UpSet plots, such as visualize attributes of the intersections, or group intersections. Look at the [Interactive UpSet page](/interactive/) for details. 
 


## Comparing UpSet to Venn Diagrams


Venn diagrams are not suitable to visualize intersections of more than three or four sets. The figure below shows an example of a six-set venn diagram [published in Nature](https://www.nature.com/nature/journal/v488/n7410/full/nature11241.html) that shows the relationship between the banana's genome and the genome of five other species by visualizing which genes are shared between the plant species.

![Six set banana venn diagram.]({{path}}/banana.png)

While this figure looks fun, it is not a useful visualization. Try to extract any information from it. It's really hard to trace which intersection involves which sets. It's not obvious which is the biggest intersection from the visualization – you have to read the labels one by one. 

You might ask, how does the banana venn diagram look in UpSet? Here you go:
![UpSet Screenshot]({{path}}/upsetr-banana.png)

It is a little hard to read because the figure is rather small. But we can simply remove the small intersections, and we get a nice plot that shows us the main features of the data:

![UpSet Screenshot]({{path}}upsetr-banana_clipped.png)

Notice how easy it is to see trends: the vast majority of genes is shared between all plants, as highlighted in the next figure:

![UpSet Screenshot]({{path}}upset_genome_top.png)

Similarily, the first three species (Oryza_sativa, Sorghum_bicolor, and Brachypodium_distachyon) seem to be highly related, as all of them are part of the top-three intersections. In contrast, the sixth species (Phoenix dactylifera) seems to be most different from the others, as it only again is part of the sixth-largest intersection.

![UpSet Screenshot]({{path}}upset_genome_top-3.png)

Such an analysis is almost impossible with a Venn diagram! In summary, if you want to visualize intersections of two or three sets, use a Venn diagram, as they are widely known and well understood. **For a set dataset with more than three (and less than ~30) sets use UpSet!**

## More Information

For more **details on the UpSet concept** please refer to the [paper on UpSet]({{site.baseurl}}/publications/2014_infovis_upset/) and to the [Interactive UpSet page](/interactive/).

For a discussion of **when to use which kind of set visualization**, refer to the [Points of View: Sets and Intersections](https://dx.doi.org/10.1038/nmeth.3033). 



## Frequently Asked Questions

- _How can I create high-resolution UpSet plots for a paper or other publication?_  

    There are three options:

    - If you prefer to use the [interactive web-based version](/interactive/) you can print an interactive UpSet plot to a PDF and edit the PDF with a vector editing software such as Adobe Illustrator.
    - You can create an exportable figure to generate a plot using a programming language such as R or Python. 
    - You can create a static figure using, e.g., the R-Shiny versions of Upset. 

    To explore all of these options, please refer to the [versions page](/versions/).

- _Can I show attributes of the intersections?_ 

    Yes, [all versions](/versions/) support visualizing attributes in some way.

- _Can I export the elements in a particular intersection?_

    Yes, but to our knowledge, only the interactive [UpSet 2](/interactive#upset2) version supports this. 



