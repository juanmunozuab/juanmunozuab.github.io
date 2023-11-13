#!/bin/bash

###################### UNO ################
# Realiza cambios en el archivo nnnn-referencias.html (las referencias copiadas desde nnnn.html)
# y crea un nuevo archivo nnnn-referencias-modificadas.html con el formato
# <div id="ref1"><p class="details">Adler, Freda (1975). <em>Sisters in Crime</em>. McGraw-Hill.</p></div>
###########################################

if [ "$#" -ne 1 ]; then
  echo "Uso: $0 introduce el número del artículo"
  # exit 1
  read -p 'Número artículo: ' nart
else
  nart=$1
fi

# - Insertar 'BEGIN CONTENT' (en nnnn.html) después del título 'Referencias'
awk '/<h1 id="referencias">Referencias <\/h1>/{print; print "<!-- BEGIN GENERATED CONTENT -->"; next} 1' $nart.html > $nart-nuevo.html

mv $nart-nuevo.html $nart.html

# referencias="$nart-referencias.html"
# referencias-modificadas="$nart-referencias-modificadas.html"
referencias="$nart-referencias.html"
referencias_modificadas="$nart-referencias_modificadas.html"

# Crea el archivo nnnn-referencias.html a partir de las referencias en nnnn.html
awk '/<!-- BEGIN GENERATED CONTENT -->/{f=1; print; next} /<!-- END GENERATED CONTENT -->/{f=0} f' $nart.html > $referencias

# Hace los cambios '<div id=\"re...' a partir de nnnn-referencias.html
# y los guarda en nnnn-referencias-modificadas.html

let i=1

if [ ! -f "$referencias" ]; then
  echo "El archivo \"$referencias\" no existe."
  exit 1
fi

while IFS= read -r line; do
    if [[ $line == "<p>"*"</p>" ]]; then
        echo "<div id=\"ref$i\"><p class=\"details\">${line/<p>/}</div>"
        i=$((i+1))
    else
        if [[ "$line" == *"</div>" ]]; then
            echo "$line"
        else
            echo -n "$line"
        fi
    fi
done < "$referencias" > "$referencias_modificadas"



# # - y ahora realiza la búsqueda de las etiquetas y realiza el cambio
lead='^<!-- BEGIN GENERATED CONTENT -->$'
tail='^<!-- END GENERATED CONTENT -->$'
sed -e "/$lead/,/$tail/{ /$lead/{p; r $referencias_modificadas
}; /$tail/p; d }"  $nart.html > $nart-b.html

mv $nart-b.html $nart.html


clear
while true; do
    read -p "¿Tienes la lista de referencias generada desde Zotero? (S/N): " sn
    case $sn in
        [Ss]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Responde Sí(S/s) o No(N/n)";;
    esac
done

###################### DOS ################
## Genera archivo nnnn-lista-citas-modificada.html
## con la lista de citas como deberían aparecer en el texto
## toma como entrada: nnnn-lista-referencias.txt, archivo generado a partir de Zotero
## ejemplo: convierte Adler, 1975 en Adler, 1975 ref1 
#####################################################3

# Archivos de entrada y salida
lista_referencias="$nart-lista-referencias.html"
lista_modificada="$nart-lista-citas-modificada.html"

# # input_file="$1_referencias.html"
# input_file="$nart-lista-referencias.html"
# output_file="$nart-lista-citas-modificadas.html"
let i=1

 if [ ! -f "$lista_referencias" ]; then
   echo "El archivo \"$lista_referencias\" no existe."
   exit 1
 fi

# Inicializar un contador
contador=1
while IFS= read -r line; do
    if [[ $line == "<p>"*"</p>" ]]; then
    line_modificado="${line//<p>/}"
    line_modificado="${line_modificado//<\/p>/}"
        echo "$line_modificado ref$contador"
        # echo "<div id=\"ref$i\"><p class=\"details\">${line/<p>/}</div>"
        contador=$((contador+1))
    else
        if [[ "$line" == *"</div>" ]]; then
            echo "$line"
        else
            echo -n "$line"
        fi
    fi
done < "$lista_referencias" > "$lista_modificada"

###################### DOSb ################
## Genera archivo nnnn-lista-citas-modificada.html
## con la lista de citas como deberían aparecer en el texto
## toma como entrada: nnnn-lista-referencias.txt, archivo generado a partir de Zotero
## ejemplo: convierte Adler, 1975 en Adler, 1975 ref1 
#####################################################3

# Archivos de entrada y salida
lista_referencias="$nart-lista-referencias.html"
lista_modificada2="$nart-lista-citas-modificada2.html"

# # input_file="$1_referencias.html"
# input_file="$nart-lista-referencias.html"
# output_file="$nart-lista-citas-modificadas.html"
let i=1

 if [ ! -f "$lista_referencias" ]; then
   echo "El archivo \"$lista_referencias\" no existe."
   exit 1
 fi

# Inicializar un contador
contador=1
while IFS= read -r line; do
    line_modificado="${line//<p>/}"
    line_modificado="${line_modificado//<\/p>/}"

  authors="$(echo "$line_modificado" | grep -Eo '.*[,]|.* .*,' | sed 's/,//g')"
  year="($(echo "$line_modificado" | grep -oP "(\d{4})"))"
    echo "$authors $year ref$contador"
    contador=$((contador+1))

done < "$lista_referencias" > "$lista_modificada2"



###################### TRES ######################################
## Cambia en nnnn.html las citas "normales" con citas con enlace
## lee desde el archivo nnnn-lista-modificada.html
## ejemplo:
## de: Heim y Piccone, 2019
## a: <span class="reference" data-reference-id="ref47">Heim y Piccone, 2019</span>
#####################################################################

## Crea una copia de seguridad del archivo ####.html
cp $nart.html $nart-copy.html

html_file="$nart.html"
archivo_lista="$nart-lista-citas-modificada.html"

# Iterar sobre cada línea del archivo
while IFS= read -r reference; do
 
    #Formato Autor, año
    citation="$(echo "$reference" | grep -oP '[^"](.*?), \d{4}')"
    reference_id="$(echo "$reference" | grep -oP "(?<=\s)ref\d+")"

    #  # Imprimir los resultados
    #  echo "Referencia: $reference"
    #  echo "Citation: $citation"
    #  echo "Reference ID: $reference_id"

 
 awk -v citation="$citation" -v reference_id="$reference_id" '{gsub(citation, "<span class=\"reference\" data-reference-id=\""reference_id"\">"citation"</span>")}1' "$html_file" > "$html_file.tmp"  && mv "$html_file.tmp" "$html_file"

done < "$archivo_lista"

###################### TRES b ######################################
## Cambia en nnnn.html las citas "normales" con citas con enlace
## lee desde el archivo nnnn-lista-modificada.html
## ejemplo:
## de: Heim y Piccone (2019)
## a: <span class="reference" data-reference-id="ref47">Heim y Piccone (2019)</span>
#####################################################################

## Crea una copia de seguridad del archivo ####.html
cp $nart.html $nart-copy.html

html_file="$nart.html"
archivo_lista="$nart-lista-citas-modificada2.html"

# Iterar sobre cada línea del archivo
while IFS= read -r reference; do
    # Formato Autor, año
    citation="$(echo "$reference" | grep -oP '(.*?)\)')"
    # citation="$(echo "$reference" | grep -oP '(.*?)')"
    reference_id="$(echo "$reference" | grep -oP "(?<=\s)ref\d+")"

    # Sustituir en el archivo HTML
    sed -i "s|$citation|<span class=\"reference\" data-reference-id=\"$reference_id\">$citation</span>|g" "$html_file"

# echo "Cita: $citation"
# echo $reference_id

done < "$archivo_lista"

##### LIMPIEZA #######
rm $referencias
rm $referencias_modificadas
rm $lista_modificada
rm $lista_modificada2
