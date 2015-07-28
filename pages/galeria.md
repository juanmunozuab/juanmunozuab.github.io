---
layout: page
title: "Galerías"
subheadline:
teaser:
permalink: "/galeria/"
header:
  title: "Galería"
  image_fullwidth: "gallery.jpg"
  caption: Maryland Pride
  caption_url: https://commons.wikimedia.org/wiki/User:Maryland_Pride
categories:
  -
---

<ul>
    {% for post in site.categories.kitsch %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
