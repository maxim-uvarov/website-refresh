---
title: "What is Qri?"
metaTitle: "What is Qri?"
metaDescription: "Qri is a distributed dataset version control and sharing system"
weight: 1
---

Qri (pronounced "query") is a distributed dataset version control and sharing system.  Our software helps to alleviate many of the pain points of working with datasets.  

<img src="/img/qri_venn_diagram_white.png" width="60%" style= "margin: 0 auto; display: block;" />

## A new format for datasets

Before learning about Qri's versioning and networking capabilities, you must first understand that Qri's definition of a dataset contains more than the data itself.

A major shortcoming of file-based datasets (think CSVs) is that they lack critical context that users need to understand or use them.  Data files are easily portable, but when CSVs are flying around the internet, they are detached from their metadata.  They can’t tell you who changed them last, when that change occurred, and what was changed.  They can’t describe the background and goals of the person or team that collected and curated the data.

🖼 - (I want to show that downloading a CSV from a data portal basically “orphans” the data from all the valuable information on the portal.  (meta, updated at, column descriptions, etc))

Qri's dataset format combines tabular data with all of the things that are missing from normal CSVs.  These include metadata, user identity, column types, validation rules, update scripts, and more.  You can think of this collection as a hybrid dataset.  All of these components live together under a single structure. More importantly, they are all versioned together.    

🖼 Qri Components image

See [Dataset Components](/docs/dataset-components/overview/) for more info on the building blocks of a Qri dataset.

## Qri Versioning

Qri datasets are version-aware.  When you make a change to a dataset, whether it be reformatting values in a column or adding a description to the metadata, you must *commit* the changes and establish a *new version*.

The version has a timestamp, your identity, and a message for future you (or other users you share the dataset with).

🖼 Qri Versions image

See [Versioning Datasets](/docs/working-with-datasets/versioning/) for more info on versioning in Qri.

## Qri Networking

Qri datasets are easily portable over Qri's peer-to-peer network.  This means that datasets and their version histories can be shared with other Qri users on a local network or published to Qri's cloud platform to share with the world.  

Likewise, once you have Qri running on your computer, you can pull down other Qri users' datasets to view and modify locally.

🖼 Qri Network image

See [Publishing Datasets](/docs/working-with-datasets/publishing/) for more info on publishing your datasets in Qri.


## Get Started with Qri

You can start bringing your datasets into Qri right now!  [Download Qri Desktop](/download/) for free, import a CSV, and make your first dataset version.

🖼 Download Qri Button