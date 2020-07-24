---
layout: page
title: Atlas.ti y GREP (2)
teaser: Mini tutorial sobre la utilización de GREP en Atlas.ti (segunda parte)
tags: [Atlas.ti, Software, Cuali, Tutorial]
categories:
  - Atlas
---
En el último post sobre ATlas.ti y GREP planteaba una pregunta teóricamente sencilla, ¿Qué buscará una expresión como la siguiente?

`\<p\w*a\>`

Si no has conseguido descifrar el código, la respuesta es:

Buscará cualquier palabra que empiece con `"p"` y acabe con `"a"`, puesto que:

`<p` es sinónimo de "palabra que empiece con la letra p"

`\w*` es sinónimo de "cualquier carácter alfanumérico `\w` de cualquier longitud `*`"

`a\>` es sinónimo de "palabra que termine con "a"

Ahora ya sabemos encontrar palabras cuyo inicio o final sea uno o varios caracteres determinadas, pero también podríamos querer buscar palabras que contengan unos determinados caracteres (pero no empiecen o terminen por).

En este caso, el comando GREP que utilizaremos será

`\BTérmino`

De forma que si introducimos la siguiente expresión

`\Bdo`

El resultado será todas las palabras que contengan (pero no comiencen) por "do", por ejemplo, encontrará "adocenar" pero no "doce". De todas formas, también encontraría aquellas cuya finalización sea "do", por ejemplo "cogido". Si queremos evitar esto, es decir, encontrar aquellas en las que la cadena se encuentre únicamente en el "interior" de una palabra, entonces la expresión que deberemos utilizar será

`\Bdo\B`
