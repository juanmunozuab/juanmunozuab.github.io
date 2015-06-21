---
layout: post
title: Objetos kitsch
description: "Galería de imágenes de objetos"
tags: [galeíra, kitsch]
date:   2015-06-26 11:15:02
---
Objetos Kitsch que hemos ido recopilando a lo largo de los años gracias a las aportaciones de "amigos/as". Puedes verlos en directo si pasas por el despacho b5-034.

<!--mas-->

{% assign imgNameStart = page.id | remove: page.dir | remove: "/" %}
{% assign imgBasePath = imgNameStart | prepend: "/images/kitsch/" %}

{% capture images %}
{% for img in site.static_files %}
{% if img.path contains imgBasePath %}
{{ img.path }}
{% endif %}
{% endfor %}
{% endcapture %}
{% include gallery images=images caption="Test images" cols=3 %}
