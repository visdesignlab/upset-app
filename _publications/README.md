# Adding a Publication

Please use the template provided below when adding a new publication. Fill in
all the information to the best of your ability. If you have a preprint, be sure
to update it once the publication has been accepted. If your publication has
been accepted into a journal (congrats!), be sure to check back once you have
the publication details, such as the volume, issue, and page numbers.



## Keys and Filenames

Each publication must have a unique key following this pattern:
`YYYY_CONFSHORTNAME_PAPERSHORTNAME`

All files for your publication should use this key consistently, only varying by
the file extension. For example: `2016_eurovis_pathfinder.pdf`

However, if there are multiple files of the same extension type, then the
"secondary" type specified with an underscore, as in
`2016_eurovis_pathfinder_supplement.pdf`.

_NOTE:_ We currently require you to re-type this key when specifying your files
and images. See the template for an example. In the future, we could remove
this if all publications follow the keys exactly. We would need to specify to
Jekyll/Liquid when it should look for such a file/image, though, perhaps using
the file extension or even just a simple period/dot or true/y would work.

## Steps to Adding a Publication

1. Add a `*.md` file in this folder following the template below. Use the unique key for your publication's filenames.
2. Add a thumbnail **_and_** a larger teaser figure to the [assets/images/publications](../assets/images/publications] folder. [Read more about adding images here](../assets/images/README.md).
3. Upload your publication video (if you have one), your preview video, and your conference talk video, to YouTube or Vimeo. You do **not** need to create an entry in the [videos folder](../_videos) folder; the existing files are there for backwards compatability.
4. Upload the following files to `/usr/sci/www/vdl/papers`:
    - publication PDF (`KEY.pdf`) - *mandatory*
    - thumbnail figure (`KEY.png`) - *mandatory*
    - teaser figure (`KEY_teaser.png`) - *strongly recommended*
    - Supplementary Material PDF (`KEY_supplement.pdf`)
    - full video (`KEY.mp4`)
    - preview video (`KEY_preview.mp4`)
    - talk video (`KEY_talk.mp4`)
5. Upload supplemental figures that are *not* in the paper. The figures are placed in a folder in the `assets/images/publications` folder, where the foldername is the KEY. The point of these is that they can be used, e.g., in review articles without having to pay the publisher. [Read more about adding supplemental images here](../assets/images/README.md) - you need to provide high-res figures and thumbnails.     


## Publication Template

Modify the template below for your publication. Feel free to leave entries
blank if they are not needed. You can also remove comments or unused fields.
Each publication _**must**_ specify a `title`, `authors`, `bibentry`, and `year`
in order to render proper BibTeX output.

A current example is the CHI MVNV entry.


``` yaml
---
layout: publication
# Quotes make the : possible, otherwise you can type this without quotes
title: "Pathfinder: Visual Analysis of Paths in Graphs"
# Keys must be unique to each paper, see section below for more details
key: 2016_eurovis_pathfinder
# Select one of the options below
type: paper | preprint | poster | thesis | commentary
# use this if this paper was previously a preprint and you need to preserve the old URL
# redirect_from: /publications/2017_preprint_lineage
# Uncomment the line below for publications which should only appear on a personal webpage
# personal: y

# Papers are ordered by year. However, in years with many papers, we want some ordering at a lower level. You can do 
# that by specifying an order for the papers of that year. For example, 2019-11 will put papers with values lower than 
# 2019-11 belwo that paper. Notice that sorting is lexicographic.  
order: 2019-11

# Auto-generates titles and alt-descriptors
shortname: Pathfinder
# Add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/publications/
image: 2016_eurovis_pathfinder.png
# Add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/publications/
image_large: 2016_eurovis_pathfinder_teaser.png

# Authors in the "database" can be used with just their person "key"
authors:
- partl
- gratzl

# A link to an internal blog post (use only the relative URL)
blog-post: 

# Include a shortened name for the journal or conference/proceedings
journal-short: CGF (EuroVis)
year: 2016

# Create BibTeX info, using one of the entry choices
# Articles have a "journal", and inproceedings have a "booktitle"
# Preprints are articles with the location of preprint mentioned in "journal"
# You can remove fields you don't need, or else leave them blank
# Try to include a DOI, or use the publisher URL below
# Specify new BibTeX fields by adding a new key and value inside "bib:"
bibentry: article | inproceedings | phdthesis | book
bib:
  journal: Computer Graphics Forum (EuroVis)
  booktitle: 
  editor: 
  publisher: 
  address: 
  doi: 10.1111/cgf.12883
  url: 
  volume: 35
  number: 3
  pages: 71--80
  month: jun
  pmcid: PMC5821473

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award: EuroVis 2016 Honorable Mention Award

# Provide a link to the publisher's webpage if no DOI is available
publisherURL: 

# Link to an official preprint server
preprint_server: 

# Links to a project hosted on VDL, or else externally on your own site
project: 
external-project: https://pathfinder.caleydoapp.org/

# Video entries, a preview , talk, and intro video. Vimeo IDs or youtube IDs are supported
# you need to pick either a vimeo or youtube ID. We definitely want a downloadable video too.
videos:  
 - name: "Juniper Introduction" 
   youtube-id: EAjNxFgsJ58
   file: 2018_infovis_juniper.mp4
 - name: "Juniper Preview" 
   youtube-id: y9ZVNtuyUBU
   file: 2018_infovis_juniper_preview.mp4
 - name: "Recorded Talk" 
   vimeo-id: 299855433
   file: 2018_infovis_juniper_talk.mp4

# Provide a preprint and supplement pdf
pdf: 2016_eurovis_pathfinder.pdf
supplement: 2016_eurovis_pathfinder_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
- name: Vials Conference Talk Slides
  # Use link instead of abslink if you want to link to the master directory
  abslink: http://vials.io/talk/
  # Defaults to a download icon, use this if you want a link-out icon
  linksym: true

# Supplemental, cc-by images. Make caption brief (at most 60 chars).
images:
- path: 2020_chi_mvnv_study_am_large_continent_sort.png
  caption: Adjacency matrix, sorted by continent. 
- path: 2020_chi_mvnv_study_am_large_edge_encodings.png
  caption: Adjacency matrix showing two numerical edge attributes.

# Link to the repository where the code is hosted
code: https://github.com/Caleydo/pathfinder/

abstract: "<p>
The analysis of paths in graphs....
</p>"

# After the ---, you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
# The --- is REQUIRED! 
---

# Acknowledgements

This work was co-funded by ....
```






## Syncing with the SCI Server

Upload the teaser and the small figure, as well as the paper PDF, any supplement and video to the shared SCI web space at 

```
shell.sci.utah.edu
```
subdirectory: 
```
usr/sci/www/vdl/papers
```

You will need permissions to read/write to that repository. Ask alex to send an e-mail to support@sci.utah.edu to get you access. 

Here is a sync script that you can run to sync a local folder with the SCI server. Replace alex with your username.

``` bash
rsync * alex@shell.sci.utah.edu:/usr/sci/www/vdl/papers -avzru --delete-excluded
```
