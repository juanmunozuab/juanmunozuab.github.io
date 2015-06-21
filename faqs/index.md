---
layout: article
title: "Frequently Asked Questions"
date: 2014-09-10T14:46:57-04:00
modified: 2014-11-25
excerpt: "Because no one likes to repeat things here's a compilation of answers to questions I'm asked often."
image:
  feature: faq-feature.jpg
---

Because no one likes to repeat things here's a compilation of answers to questions I'm often asked. For the most part they're related to my experience drawing on an iPad with the app [**Paper by FiftyThree**](http://www.fiftythree.com/paper).

{% assign paper_faqs = site.faqs %}
{% assign other_faqs = site.faqs | where: "type", "other" | sort: "order" %}



{% for faq in site.faqs %}
<h2><a href="{{ faq.url }}">{{ faq.title }}</a></h2>
{% endfor %}


{% assign paper_galeria = site.galeria %}



{% for galeria in paper_galeria %}
<h2><a href="{{ galeria.url }}">{{ galeria.title }}</a></h2>
{% endfor %}
