---
layout: page
title: Sincronización texto-audio
tags: [Atlas.ti, Software, Cuali, Tutorial]
image:
teaser: Al realizar un análisis con Atlas.ti, si disponemos de archivos de texto y su equivalente en audio y/o vídeo, tenemos la opción de sincronizar ambos archivos de forma que seleccionando un fragmento de texto podamos automáticamente oír/ver su equivalente multimedia. Esto nos permitirá, entre otras cosas, ahorrarnos la utilización de convenciones de transcripción.
categories: Atlas
---

Para realizar la sincronización utilizando las herramientas de Atlas.ti, en primer lugar tendremos que realizar el proceso de asignación de documentos de la forma habitual, asignando tanto el documento de texto como el documento de audio.

Una vez asignados los documentos seleccionamos uno de ellos, por ejemplo el documento textual y (sólo después de haber realizado la selección de forma que lo veamos en pantalla) en el menú A-Docs seleccionamos la opción `Edit Association` y seleccionamos la opción `Association → Insert Primary Document`, que hará que quede seleccionado el documento activo en ese momento en la ventana principal.

![Editor de asociaciones]({{ site.url }}/images/articulos/Association-Editor-Insert.png "Editor de asociaciones")

Repetiremos el mismo proceso con el documento de audio (activación del documento en la pantalla principal, y `Association → Insert Primary Document`). Si hemos realizado bien los pasos, observaremos que ahora en la ventana del editor de asociaciones tenemos la referencia a los dos archivos que hemos “insertado”.

Ahora ya podemos proceder a realizar la sincronización. Para ello utilizaremos los botones del editor de asociaciones para reproducir el archivo sonoro e insertar las marcas de tiempo en la ubicación adecuada.

La estrategia que sugerimos es visualizar en la pantalla principal el archivo de texto y ubicar el cursor al el inicio del mismo e insertar una primera marca de tiempo. A continuación clicamos sobre el icono de reproducción y escuchamos por ejemplo hasta el final del primer párrafo, momento en el cual volvemos a clicar para pausar la reproducción. En la pantalla de texto ubicamos el cursor al final de ese párrafo y apretamos la tecla <kbd>"F8"</kbd> (o el icono del editor de asociaciones), con lo que aparecerá un punto rojo en esa posición señalando la existencia de una marca de tiempo. Repetiremos el proceso hasta finalizar la sincronización del documento completo.

![Sincronizacion]({{ site.url }}/images/articulos/Sincronizacion.png){:.pull-left}

Ahora ya podemos utilizar las opciones de sincronización de Atlas.ti. Para ello, volveremos al menú `A-Docs` para seleccionar la forma de reproducción del texto. Si lo que queremos es ir escuchando el archivo de audio y al mismo tiempo que queden resaltados los fragmentos de texto correspondientes, tendremos que seleccionar la opción `Karaoke`. Entre las opciones de `Text` de este menú vemos que podemos seleccionar que, al reproducir el audio, quede resaltada la sección, la línea, etc. (Si queremos que quede marcado el texto entre dos marcas temporales seleccionaremos la opción `Highlight Section`).

Ahora ya sólo tenemos que seleccionar la opción `Play-Pause` y... magia.
