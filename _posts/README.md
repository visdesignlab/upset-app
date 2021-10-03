# Adding a Blog Post

1. Add your idea and an estimated timeline to the [blog schedule](https://docs.google.com/spreadsheets/d/1lkAQQvjoadXCfK5Cbomt9ERu8uIezpYxoBV8pzvMhs0/edit#gid=0). This is so we have a better idea of who is planning on writing an article and by when.
2. Start writing in the Google Drive Folder: [Blog Posts](https://drive.google.com/drive/folders/1AevBwanVNX9sj_-dXt3bSPLhZe3Mm5uD).
3. Ask someone to edit!
4. Style and format in md. Check formatting. Publish.


## Editing the blog

Please add the file to `_drafts` folder instead of `_posts` if you are in process of editing it. Use the template below.


### Run Jekyll with drafts

``` shell
$ jekyll serve --drafts
```

Your draft will show up in list of regular blogs


### View the Generated Site

``` shell
$ open http://0.0.0.0:4000/
```


## Blog Template

Modify the template below for your blog. Feel free to leave entries
blank if they are not needed. You can also remove comments or unused fields.
Each blog must have a unique file name following this pattern:
`YYYY-MM-DD-title.md`

A current example of a blog article.

``` yaml
---
layout: post
title: State COVID-19 Dashboards
date: 2020-07-20 12:00:00
categories: blog
type: blog
# Authors in the "database" can be used with just their person "key"
authors:
  - akbaba
# redirect_from:
  # - "/event/2020/07/20/state-dashboards/"
# Use the abstract to provide a high-level overview of the blog post and main takeaways.
abstract: "tldr: As states are navigating the influx of COVID data, they are using dashboards to communicate with their constituents. Although many states are doing a good job at collecting and sharing data in open data portals, dashboard quality varies a lot across states, and some  have considerable room for improvement."
# Create a lead image that is <500k so that it shows up on twitter link preview
lead-image: /assets/images/posts/2020_state-dashboard-compilation.png
---
![lead image alt text]({{site.base_url}}/assets/images/posts/2020_lead-image.png){: style="border:1px solid black"}

Add intro here.

Add body text.

Add conclusion.
```
