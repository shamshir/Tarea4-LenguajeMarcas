# Tarea4-LenguajeMarcas

[Visualizar Proyecto en Rawgit](https://rawgit.com/shamshir/Tarea4-LenguajeMarcas/master/news.html)

## Proyecto
El presente proyecto consiste en la creación de una página de noticias que sea capaz de cargar más noticias de las que ya están precargadas en el *HTML*. Esto se debe realizar mediante la lectura de varios archivos *.json* y a través de dos mecanismos distintos: un botón de "Cargar más" y un evento de scroll al llegar al final de la página.
## Funcionalidad
Además de las funciones exigidas por el proyecto, la presente página de noticias cuenta con varios mecanismos que añaden dos funcionalidades extra de navegación.
### Ampliación de Imágenes
En la página principal, el usuario puede hacer click en cualquiera de las imágenes de las noticias para ver la imagen más grande, en el centro de la pantalla.

A nivel de código, la acción de click en cualquiera de las imágenes desencadena la aparición de una ventana modal, previa sustituación de la imagen que en ella se muestra por la *imgBig* de la imagen de la noticia seleccionada. La ventana modal muestra la imagen a una anchura fija (anchura completa en la versión móvil), junto con un botón de cerrado, para hacer desaparecer la ventana modal.

La sustitución de la imagen a mostrar se realiza obteniendo la *id* de la imagen seleccionada y completándola, formando el enlace relativo a la *imgBig*.
### Lista de Noticias
En la barra de navegación de la página principal hay un menú desplegable que cuenta con una lista de las noticias que se encuentran cargadas actualmente en la página. A medida que se van cargando más noticias, la lista va creciendo, como es lógico. La peculiaridad de esta lista es que, si el usuario selecciona una de las noticias, la ventana se situará automáticamente en dicha noticia.

La navegación a noticias que aun no constan en el *HTML* y, por tanto, cuya *id* todavía no existe, se realiza de forma similar a la ampliación de imágenes: mediante el uso de *id's* consecutivas y su uso para construir la ruta a enlazar. Por ejemplo el elemento de la lista de noticias con *id*="cia3" enlazará al *div* de la noticia con *id*="noticia3".
## Código Javascript/JQuery
El código Javascript/JQuery se encuentra organizado en las siguientes secciones:
### Variables Globales
Este apartado recoge la declaración de aquellas variables que se vayan a utilizar a lo largo de todo el código y en los diferentes métodos que lo componen. Figuran, por ejemplo, los contadores para los archivos *.json* y las noticias, así como la variable *boolean* que gestiona el auto-scroll.
### Window Onload
Este apartado contiene los eventos que empezarán a funcionar a partir del momento en el que se haya cargado la página, como son el funcionamiento de los dos botones principales de la misma: el botón de activar/desactivar el auto-scroll y el botón de cargar más noticias.
### Funciones Imágenes y lista de Enlaces
Aquí se recogen las funciones que gestionan las dos funciones extra de este proyecto: la visualización ampliada de imágenes y la lista de noticias. Ambas funciones se aplican a elementos genéricos (de tipo *li* para una función y de tipo *img* para la otra), para garantizar su funcionamiento a pesar de que se trate de elementos que no figuren en la página desde la carga inicial de la misma.
### Funciones Scroll
En este apartado figuran las dos funciones que dependen del scroll de la página. Por una parte tenemos la función que desencadena la carga de más noticias (siempre que el auto-scroll esté activado) y, por otra parte, tenemos la función que gestiona la fijación de la barra de navegación si la situación lo requiere. Esto último se podría haber implementado sin *Javascript*, usando carácterísticas 
### Funciones Carga
Aquí se encuentran las funciones que gestionan la carga de nuevas noticias desde los archivos *.json*. La primera función, *load()* viene desencadenada por el scroll o por el botón de *Cargar más noticias* y carga dos noticias (una nueva row) con la ayuda de la función *newRow()*, que es la que se encarga de añadir los elementos necesarios al *HTML*.
## Publicidad
La publicidad, tanto vertical como horizontal, de la página de noticias se obtiene de una página *HTML* externa y se presenta en un *iFrame* de las medidas exactas (300x600 y 320x100, respectivamente). En cada una de las páginas de publicidad, encontramos un código *Javascript* incrustado en el *head* de la página, desde el que se gestiona el intercambio constante de las imágenes de la publicidad. También podemos encontrar incrustado en el código algún elemento de estilo/*CSS* debido a que las páginas de publicidad simulan un contenido que será externo y, por tanto, no parte directa de nuestra página, donde la presentación (*CSS*) debe ir separada del contenido de la página (*HTML*).
## Adaptabilidad
La presente página de noticias se ha construido teniendo en mente las dos versiones principales: versión de escritorio y versión móvil. No obstante, se han teniendo en cuenta algunos detalles 
### Versión Escritorio
### Versión Móvil
## Diseño
