---
layout: default
key: upsetr
name: The UpSet R Version
type: Static plot
source: "https://github.com/hms-dbmi/UpSetR"
web: http://gehlenborglab.org/research/projects/upsetr/
image: upsetr.png
authors: Jake Conway, Alexander Lex, Nils Gehlenborg
publication: https://vdl.sci.utah.edu/publications/2017_bioinformatics_upsetr/
language:
license:
maintained: 
interactive: 
inline-attribute-vis: 
attribute-views: 
aggregation: 
item-queries: 
set-queries: 
shows-deviation: 
export: 
format-table: 
format-list: 
format-set-expression: 
---
The R version developed by members of the original team. UpSetR has many of the features of our interactive UpSet plots, specifically it comes with various ways to sort and filter intersections and can plot attributes about the elements in the various sets. The layout is slightly adapted - intersections are plotted horizontally instead of vertically, which is beneficial for the typical aspect ratios found in papers. UpSetR does not include the aggregation features of UpSet, does not provide summary statistics about the intersections in line with the set cardinality, and does not provide access to the individual items.

To learn more about UpSetR visit the [source code repository](https://github.com/hms-dbmi/UpSetR) which includes documentation on usage, or check out the released versions on [CRAN](https://cran.r-project.org/web/packages/UpSetR/), or try the [UpSetR shiny app](https://gehlenborglab.shinyapps.io/upsetr/).