# Adding a new Implementation 

To add a new UpSet implementation requires three steps: 

1. Create a new md file in the _upsetversions collection, using the template provided below. You can also look at the [original upset](upset_original.md) file as a reference. 
2. Add a picture of the techinque to [`assets/versions/'](../assets/images/versions).
3. Add the technique at the right place in the [implementations.md](../implementations.md) file by calling this include with your key: 
```
{% include version_list_entry.html key="upset_original" %}
```
Ideally, submit a pull request for these changes. Alternatively, e-mail alex@sci.utah.edu.

## Implementation Template

```
---
layout: default
key: upset_original
# image stored in website repo, assets/version folder
image: upset_original.png
# the name of the tool. Keep it short. 
name: The original UpSet
# one of "tool, library, example", see https://upset.app/implementations/
type: Interactive, Web-Based
# link to a source repo
source: https://github.com/VCG/upset
# link to website
web: http://vcg.github.io/upset/
# linkt to documentation
documentation: https://github.com/VCG/upset/wiki
# list of authors, you may include markdwon-style links
authors:  "[Alexander Lex](http://alexander-lex.net), Nils Gehlenborg, Hendrik Strobelt, Romain Vuillemot, and Hanspeter Pfister"
# link to publication
publication: https://vdl.sci.utah.edu/publications/2014_infovis_upset/ 
# the primary programming language
language: JavaScript
# open source or closed?
license: MIT License
# is it being maintained (yes/no)
maintained: no
# does it have interactive features (yes/no)
interactive: yes
# look at https://upset.app/advanced/ for description of the features
inline-attribute-vis: yes
attribute-views: yes
aggregation: yes
item-queries: no
set-queries: yes
shows-deviation: yes
# does it support data export, e.g., of selected intersections
export: no
# data loading formats, see https://upset.app/advanced/
format-table: yes
format-list: no
format-set-expression: no

# provide a longer description in markdown below the dashes
---
The original UpSet, developed to go with the original paper, as an interactive web application. This version supports most advanced features. It lacks simple data upload functionality, so that it either has to be hosted locally, or pointed to a globally visible data file. Unfortunately, the original UpSet is no longer actively maintained.  
```
