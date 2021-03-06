---
layout: page
title:  "Exportar desde WOS a Mendeley"
tags: [Mendeley, WOS]
teaser: "Mini tutorial para exportar registros bibliográficos desde Web of Science al gestor de referencias bibliográficas Mendeley"
header: no
categories:
  - blog
---

## Acceso a WOS

El acceso a WOS podemos hacerlo desde un ordenador conectado a la red de cualquier universidad (en nuestro caso desde la UAB, o a través de la [Xarxa Privada Virtual](http://xpv.uab.cat)), desde la web de [FECYT](http://recursoscientificos.fecyt.es)

<div class="row">
    <div class="small-9 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MFECYT.png" class="th">
    <figcaption>Acceso a WOS</figcaption>
    </figure>  
    </div>
</div>

Una vez que entramos en WOS es conveniente, si no la tenemos, crear una cuenta de usuario, lo que nos permitirá, entre otras cosas, guardar las búsquedas realizadas para reutilizarlas posteriormente. Lo haremos desde el menú *Iniciar sesión* que aparece en la parte superior derecha de la pantalla.

<div class="row">
    <div class="small-3 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MCrearCuenta.png" class="th">
    <figcaption>Cuenta de usuario</figcaption>
    </figure>  
    </div>
</div>

## Búsqueda

El primer paso antes de realizar la búsqueda, consistirá en seleccionar la base de datos en que se realizará (no es un paso imprescindible, pero es muy conveniente para el tipo de exportación de los resultados que realizaremos). Para ello, clicaremos en *Todas las bases de datos* y seleccionaremos *Colección principal de Web of Science*.

<div class="row">
    <div class="small-9 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MSeleccionarBase.png" class="th">
    <figcaption>Seleccionar base de datos</figcaption>
    </figure>  
    </div>
</div>

Ahora ya podemos iniciar la búsqueda, introduciendo el/los términos de búsqueda (normalmente buscaremos por *Tema*). Opcionalmente podemos limitar el rango de años a los que se aplicará la búsqueda.

<div class="row">
    <div class="small-9 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MBuscar.png" class="th">
    <figcaption>Buscar</figcaption>
    </figure>  
    </div>
</div>

Una vez que se nos muestran los resultados de la búsqueda, podemos especificar algún filtro adicional (*Dominio de investigación*, *Áreas de investigación*...)

<div class="row">
    <div class="small-6 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MFiltrar.png" class="th">
    <figcaption>Filtros adicionales</figcaption>
    </figure>  
    </div>
</div>

## Exportar

Podemos realizar una exportación de la totalidad de los resultados de búsqueda o seleccionar parte de los resultados.

Si lo que queremos es exportar todos los resultados, en primer lugar, en el menú *Guardar en...* seleccionaremos la opción *Guardar en otros formatos de archivo*.

<div class="row">
    <div class="small-9 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MGuardarEn.png" class="th">
    <figcaption>Guardar en...</figcaption>
    </figure>  
    </div>
</div>

Nos aparecerá una ventana en la que, en primer lugar, podemos seleccionar el rango de referencias que queremos exportar (un máximo de 500), para a continuación seleccionar el formato de exportación. En este caso, tenemos que elegir el formato *BibTeX*.

<div class="row">
    <div class="small-9 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MExportar.png" class="th">
    <figcaption>Exportar a BibTeX</figcaption>
    </figure>  
    </div>
</div>

Si lo que queremos es exportar únicamente un un conjunto de referencias, tenemos que marcar los registros que deseemos incluir en la exportación y clicar en el icono *Agregar a la lista de registros marcados*. Una vez que hemos finalizado la selección, podemos acceder a esos registros clicando en el icono *Lista de registros marcados*.

<div class="row">
    <div class="small-9 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MListaRegistros.jpg" class="th">
    <figcaption>Lista de registros</figcaption>
    </figure>  
    </div>
</div>


Desde la *Lista de registros* podemos proceder a la exportación de una forma similar a la anterior (paso 3 en la siguiente imágen). En este caso, tenemos además la posibilidad de un mayor control sobre el tipo de información que se incluirá en la exportación.

<div class="row">
    <div class="small-10 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MExportarLista.jpg" class="th">
    <figcaption>Exportar lista</figcaption>
    </figure>  
    </div>
</div>

## Importar desde Mendeley

Una vez que tenemos el archivo BibTeX (extensión *.bib*), desde la versión de escritorio de Mendeley seleccionaremos la opción `File > Import... > BibTeX` y, evidentemente, el archivo que hemos exportado desde WOS.

<div class="row">
    <div class="small-10 small-centered columns">
    <figure>
    <img src="{{ site.url }}/images/articulos/W2MImportar.png" class="th">
    <figcaption>Importar desde Mendeley</figcaption>
    </figure>  
    </div>
</div>

## Relacionado

{: .t60 }
{% include list-posts.html tag='Mendeley' %}
