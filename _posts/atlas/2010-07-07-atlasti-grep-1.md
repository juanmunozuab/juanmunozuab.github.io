---
layout: page
title: Atlas.ti y GREP (1)
modified: 2014-12-24
tags: [Atlas.ti, Software, Cuali, Tutorial]
image:
teaser: Mini tutorial sobre la utilización de GREP en Atlas.ti (primera parte)
categories:
  - Atlas
header: no
---
Cualquier usuario de Atlas.ti sabe (o debería saber) que una de las opciones interesantes del programa es la de realizar búsquedas utilizando expresiones regulares (GREP = Globally look for Regular Expression and Print), lo que añade una tremenda potencia a las posibilidades de búsqueda.

Sin embargo, también es cierto que la documentación que ofrece la ayuda del programa (e incluso mi manual) es escasa. De hecho, investigando un poco he podido encontrar algunos parámetros que funcionan en Atlas.ti pero que no me consta que estén documentados en ningún lugar.

Por lo tanto, mientras actualizo la wiki del manual, y acabamos de redactar el manual adaptado a la versión 6 del programa, iré publicando algunas de estas funciones.

Si has mirado en algún momento las opciones GREP de Atlas.ti, habrás visto que una de las posibilidades es realizar búsquedas que se apliquen únicamente a caracteres que aparezcan a principio o a final de línea.

Por ejemplo, si la búsqueda que hacemos es del tipo

`^ENT01:`

sólo se encontrarían aquellas ocurrencias de `ENT01:` que aparezcan al inicio de una línea (en realidad, en la versión actual del programa, sería más bien al inicio de un párrafo), puesto que el carácter `^` antes de `ENT01:` significa algo así como "busca lo que viene a continuación pero sólo si está al inicio de un párrafo, no si está en cualquier otra posición".

Este tipo de búsqueda es práctica (por lo menos yo la utilizo) si por ejemplo queremos autocodificar todas las intervenciones de un participante.

Pues bien, otra posibilidad que tenemos es hacer búsquedas que funciones únicamente cuando el texto buscado se encuentra al inicio (o al final) de una palabra pero no si se encuentra en cualquier otra posición.

Imaginemos, por ejemplo, que queremos encontrar palabras que empiecen por <kbd>"pre"</kbd>. Si hacemos una búsqueda normal (no GREP), obtendríamos como resultado tanto palabras del tipo <kbd>"precisión"</kbd> y <kbd>"presente"</kbd> como <kbd>"imprecisión"</kbd>, <kbd>"impresionante"</kbd> o <kbd>"comprensión"</kbd>, en las que el término de búsqueda forma parte de la palabra pero no al inicio.

Una forma de hacer esta búsqueda utilizando GREP es mediante el operador `\>`

`\<Término`

de forma que la a búsqueda sólo dará resultados si la ocurrencia es al inicio del término buscado, o si queremos lo contrario podemos utilizar:

`Término\>`

y en este caso la búsqueda sólo dará resultados si la ocurrencia es al final del término buscado

En este caso podemos utilizar también `\b` como expresión GREP

`\bTérmino` o `Término\b`

Así, si queremos encontrar palabras que empiecen con <kbd>"pre"</kbd>, la búsqueda tendría que ser:

`\<pre` o `\bpre`

si queremos que acaben con <kbd>"er"</kbd> podríamos escribir

`er\>` o `er\b`

Evidentemente, esta búsqueda sólo identificará la cadena exacta <kbd>"er"</kbd>, así que si queremos que identifique palabras completas acabadas en <kbd>"er"</kbd> podemos ayudarnos de otros dos operadores GREP

`\w` = Cualquier carácter alfanumérico

`*` = Una o más veces el carácter anterior

Una búsqueda con la combinación de estos dos operadores

`\w*`

encontraría cualquier palabra completa, por lo tanto, podemos utilizar la expresión

`\w*er\>`

como una forma de encontrar cualquier palabra completa que acabada en <kbd>"er"</kbd>

Ya que estamos buscando finales de palabra y he puesto como ejemplo la cadena <kbd>"er"</kbd> podríamos hacer una búsqueda de todas las palabras que terminan en <kbd>"ar"</kbd>, <kbd>"er"</kbd> o <kbd>"ir"</kbd> con la siguiente expresión

`(ar|er|ir)\>`

en la que utilizamos el paréntesis para agrupar el conjunto de caracteres a los que se aplicará la función "final de palabra" y la barra vertical `|` para indicar las diferentes búsquedas a las que debe aplicarse. En este caso, de nuevo, el resultado de la búsqueda será unicamente las cadenas <kbd>"ar"</kbd>, <kbd>"er"</kbd> o <kbd>"ir"</kbd>, por lo que si lo que queremos son palabras completas con esas finalizaciones sólo tenemos que utilizar de forma conjunta las dos expresiones anteriores

`\w*(ar|er|ir)\>`

Para finalizar, podemos unir los operadores "inicio de palabra" y "fin de palabra" para encontrar palabras completas con un determinado inicio y un determinado final. Por ejemplo, la expresión

`\<p\w*a\>`

encontrará... Es fácil ¿no?
