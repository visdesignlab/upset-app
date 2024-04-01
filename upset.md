---
layout: home
title: UpSet | UpSet
tag: info
permalink: /upset/
---


# The Original UpSet

**This page is the “project page” for the original UpSet version and its immediate derivative, UpSet2.**


UpSet is focused on creating task-driven aggregates, communicating the size and properties of aggregates and intersections, and a duality between the visualization of the elements in a dataset and their set membership. 

UpSet has three guiding principles:

- Use **perceptually efficient visual encodings**, i.e., make it easy to read the data accurately.
- Make it possible to not just visualize intersections, but to **visualize combinations of intersections** (e.g., all the intersections involving two particular sets).
- **Visualize attributes about the intersections**. It is not just the magnitude of an intersection that is interesting, but we also want to know whether the data associated with intersection is different or similar.

To get an idea of what the interactive UpSet is about, you can watch this 30-second video:

{% include video.html video_key="2014_infovis_upset_video_preview" %}

For more details, here's a 5 minute video: 

{% include video.html video_key="2014_infovis_upset_video" %}


# UpSet 2.0
<a id="upset2"></a>

<div>
<iframe height="700" width="700" src="https://upset.multinet.app/?workspace=Upset+Examples&table=simpsons&sessionId=193"></iframe>
</div>

<center style="text-align: center">
  <em>
    Embedded version of Upset 2.0 hosted on Multinet.
  </em>
</center>


The new version of the tool is live [here](https://upset.multinet.app)).

The features in new version are:

- Data Upload/Download
- UpSet grammar generation
- Provenance Integration
- Embedding as iFrames (see [above](#upset2))
- Use UpSet as library (work in progress)
- Automatically generated alt-text/captioning (work in progress)



# FAQ

- _Can I download UpSet and use it locally for my confidential data?_  
    Yes, you can download upset from the [source code repository](https://github.com/VCG/upset), which also provides [some instructions on local deployment](https://github.com/VCG/upset/blob/master/README.md).


- _Do you provide documentation for UpSet?_  
    Yes, [here](https://vdl.sci.utah.edu/upset2/). Currently this documentation is meant mostly for developers, but it is being updated as changes are made.

- _Which Browsers are supported?_  
    We currently test only on the latest version of Google Chrome and Firefox. Other recent browsers might work too.

