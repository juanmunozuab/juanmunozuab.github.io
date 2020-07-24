---
layout: page
title: Sincronización texto-audio con F4
tags: [F4, Software, Cuali, Tutorial]
teaser: Cuando hacemos una investigación con datos basados en entrevistas, habitualmente disponemos de dos formatos de datos. El registro en audio y la transcripción en texto. Dos formatos que, como sabemos, podemos utilizar como fuentes de datos en Atlas.ti.
header:
  image: f4.jpg
  background-color:  "#304558"
---

No hablaré aquí de la posibilidad de realizar el análisis directamente sobre el archivo de audio, algo teóricamente posible utilizando Atlas.ti (pero a lo que yo no me atrevo), sino de la posibilidad de sincronizar audio y texto de forma que podamos "escuchar lo que leemos".

Si alguien se pregunta (espero que no) para qué podemos querer algo así, le podemos contestar con otra pregunta "¿para qué se utilizan las 'convenciones de transcripción'?". Evidentemente la respuesta en ambos casos es que nuestro análisis será mejor cuanto más nos acerquemos a la "realidad" de los datos.

Aunque esta sincronización es algo que ya podíamos hacer con versiones anteriores de Atlas.ti, la versión 6 del programa nos ofrece la posibilidad de hacerlo de una forma mucho más cómoda, sobre todo si nos ayudamos de otro software, del programa de transcripción [F4](https://www.audiotranskription.de/english/)...

Aunque ya había hablado de este programa, explicaré aquí con algo más de detalle los pasos a seguir.

![Pantalla principal de F4]({{ site.url }}/images/articulos/F4-001.png "Pantalla principal de F4")

![Abrir audio]({{ site.url }}/images/articulos/F4-002.png "Abrir audio"){:.pull-left}

![Abrir texto]({{ site.url }}/images/articulos/F4-003.png "Abrir texto"){:.pull-left}


En primer lugar, una vez que hemos abierto el programa, tenemos que añadir el archivo de audio desde el menú "Audio File", y posteriormente seleccionar un archivo de texto con la transcripción correspondiente a ese audio desde el menú `File -> Open Transcript` (aunque evidentemente el progama está pensado para realizar con él la transcripción, en esta expliación partiremos de una transcripción existente)

Una vez que hemos cargado ambos archivos, la apariencia de la ventana del programa será la siguiente

![F4 con archivos abiertos]({{ site.url }}/images/articulos/F4-005.png "F4 con archivos abiertos")


1. Información de los archivos de audio y texto seleccionados
2. Botón de reproducción/pausa del archivo de audio (también con la tecla <kbd>F4</kbd>)
3. Posición en el archivo de audio
4: Botón de inserción de marca de tiempo (también con la tecla <kbd>F8</kbd>)

Ahora ya sólo tenemos que reproducir el archivo de audio (tecla <kbd>F4</kbd>) y situarnos en el texto en las posiciones en las que querramos ubicar una marca de tiempo. Así, si por ejemplo el segundo 11 del audio se corresponde con el final del primer párrafo de la transcripción, nos situaremos en el texto al final del primer párrafo y cuando en la reproducción se alcance el segundo 11 podemos insertar la marca de tiempo con <kbd>F8</kbd>.

Una vez que hemos "marcado" todo nuestro documento, ya podemos guardar la transcripción. Lo conveniente es guardarla con un nombre diferente, de forma que mantengamos la versión original sin marcas de tiempo y la versión con marcas de tiempo.

Si ahora abrimos nuestro nuevo archivo desde un editor de texto, podremos ver cómo se han incorporado las marcas de tiempo.

![Marcas de tiempo en archivo]({{ site.url }}/images/articulos/F4-006.png "Marcas de tiempo en archivo")

El siguiente paso será incorporar el texto y el audio en Atlas.ti.

![Atlas.ti: Importar documento F4]({{ site.url }}/images/articulos/F4-007.png "Atlas.ti: Importar documento F4"){:.pull-left}


Dado que se trata de un archivo especial, la forma de asignar los documentos primarios será diferente a la que utilizamos habitualmente, es decir, en vez de utilizar la opción `Documents -> Assign` tendremos que utilizar una de las nuevas funcionalidades de Atlas.ti, la de importar documentos F4 desde el menú `A-Docs`.

Al realizar la importación seleccionaremos únicamente el archivo de texto con las marcas de tiempo, y Atlas.ti realizará automáticamente la asignación del archivo de audio correspondiente.

De todas formas, aunque en nuestra lista de documentos primarios encontraremos tanto el archivo de texto como el de audio, observaremos que, además, el programa habrá creado una nueva memo con el documento de texto. Es decir, en la práctica, Atlas.ti importa el documento de texto como una nueva memo y posteriormente utiliza esa memo como documento primario.

En la imagen siguiente podemos ver el resultado. Los puntos rojos que vemos en la ventana de documento primario se corresponden con las marcas de tiempo.

![Marcas de tiempo en Atlas.ti]({{ site.url }}/images/articulos/F4-008.png "Marcas de tiempo en Atlas.ti")

![Opciones de sincronización]({{ site.url }}/images/articulos/F4-009.png "Opciones de sincronización"){:.pull-left}

Ahora ya podemos utilizar las opciones de sincronización de Atlas.ti. Para ello, volveremos al menú `A-Docs` para seleccionar la forma de reproducción del texto. Si lo que queremos es ir escuchando el archivo de audio y al mismo tiempo que queden resaltados los fragmentos de texto correspondientes, tendremos que seleccionar la opción `Karaoke`. Entre las opciones de `Text` de este menú vemos que podemos seleccionar que, al reproducir el audio, quede resaltada la sección, la línea, etc. (Si queremos que quede marcado el texto entre dos marcas temporales seleccionaremos la opción `Highlight Section`).

Ahora ya sólo tenemos que seleccionar la opción `Play-Pause` y... magia.
