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
Este apartado recoge la declaración de aquellas variables que se vayan a utilizar a lo largo de todo el código y en los disferentes métodos que lo componen. Figuran, por ejemplo, los contadores para los archivos *.json* y las noticias, así como la variable *boolean* que gestiona el auto-scroll.
### Window Onload
### Funciones Imágenes y lista de Enlaces
### Funciones Scroll
### Funciones Carga
## Diseño
## Historial de Versiones
