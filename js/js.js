/* -------- Variables Globales -------- */
var numNoticia = 5;
var numJson = 1;
var autoScroll = false;
var offset;

/* -------- Window Onload -------- */
$(document).ready(function(){
	
	offset = $("#barraNav").offset();
	
	$("#scrollBot").click(function(){
		if (autoScroll) {
			autoScroll = false;
			$("#scrollBot").text("Activar AutoScroll");
		} else {
			autoScroll = true;
			$("#scrollBot").text("Desactivar AutoScroll");
		}
	});
	
	$("#loadBot").click(function(){
		load();
	});
	
});

/* -------- Funciones Imágenes y lista de Enlaces -------- */
$(document).on("click", "#listaNoticias li", function(evento){
	var divId = '#noti' + ($(evento.target).attr("id"));
	$('html, body').animate({ scrollTop: $(divId).offset().top - 55 }, 'slow');
	$('.navbar-collapse').collapse('hide');
});

$(document).on("click", "img", function(evento){
	if (($(evento.target).attr("id")) != "imgModal" && ($(evento.target).attr("id")) != "logo"){
		var imgSource = 'img/img' + ($(evento.target).attr("id")) +'.jpg';
		$("#modalWindow img").attr("src",imgSource);
		$("#modalWindow").modal("show");
	}
});

/* -------- Funciones Scroll -------- */
$(window).scroll(function(){
	
	if (autoScroll) {
		if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
			load();
		}
	}
	
});

$(window).scroll(function(){
	
	if (window.pageYOffset >= offset.top) {
		$("#barraNav").addClass("sticky");
		$("#principal").css("padding-top","70px");
	} else {
		$("#barraNav").removeClass("sticky");
		$("#principal").css("padding-top","0px");
	}
	
});

/* -------- Funciones Carga -------- */
function load() {
	
	if (numJson < 7) {
		$("#divIconoCarga").show();
		$.getJSON("json/json" + numJson + ".json", function (jsonObject) {
			newRow(jsonObject);
			$("#divIconoCarga").hide();
		});
		numJson++;
	} else {
		$("#loadBot").text("No hay más noticias");
	}
	
};

function newRow(json) {
	
	$("#noticias").append(
		'<div class="row">' + '</div>');
	
	$.each(json, function (i, item) {

		$(".row:last").append(
			'<div id="noticia' + numNoticia + '" class="col-sm-12 col-md-6 noticiaEspaciada">'
				+ '<h2 class="text-justify"><a class="enlaceNoticia" href="#">' + item.title + '</a></h2>'
				+ '<p class="text-right"><em>' + item.date + '</em></p>'
				+ '<img id="Big' + numNoticia + '" class="img-responsive center-block anchoMaximo" src="' + item.imgMid + '" alt="Imagen Noticia' + numNoticia + '">'
				+ '<br>'
				+ '<p class="text-justify">' + item.description + '</p>'
			+ '</div>'
		);
		
		$("#listaNoticias").append(
			'<li id="cia' + numNoticia + '">' + item.date + ' - ' + item.title + '</li>'
		);
		
		numNoticia++;
		
	});
	
};
