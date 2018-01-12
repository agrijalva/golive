var liArray = [];
var textArray =[];
var initGal = 0;
function galleryAlex(that)
{

	// alert('hola');
	var src = $(that).data("src");
	var txt = $(that).data("title");
	
	var template =  '<div id="fancyAlex">'
						+'<div class="imagenFrame">'
							+'<div class="galClose" onclick="galClose()"></div>'
							+'<div class="gal-controles">'
								+'<div class="gal-next" onclick="galNext()"></div>'
								+'<div class="gal-prev" onclick="galPrev()"></div>'
							+'</div>'
							+'<img src="'+src+'">'
							+'<div class="galTitulo">'+txt+'</div>'
						+'</div>'						
					+'</div>';
					

	$("body").append(template);
	$(".imagenFrame img").fadeIn(1200);
	var elementos = $("#galImage").children('li');
	var aux = 0;
	$.each(elementos,function(key, val){
		liArray.push($(elementos[key]).data("src"));
		textArray.push($(elementos[key]).data("title"));
		if($(elementos[key]).data("src") == src)
		{
			initGal = key;
		}
	});
}

function galleryAlex2(that)
{

	// alert('hola');
	var src = $(that).data("src");
	var txt = $(that).data("title");
	
	var template =  '<div id="fancyAlex">'
						+'<div class="imagenFrame">'
							+'<div class="galClose" onclick="galClose()"></div>'
							+'<div class="tituone">Javier Campero<br>¡Tus lugares están reservados!</div>'
							+'<div class="titutwo">Muy pronto nos pondremos en contacto contigo<br>para darte detalles del viaje y formas de pago</div>'
							+'<div class="titutwo">¿Quieres compartirle a tus amigos que vivirás esta experiecia?</div>'
							+'<div class="tituthre"><img src="img/facefin.png"> <img src="img/twitfin.png"></div>'
						+'</div>'						
					+'</div>';
					

	$("body").append(template);
	$(".imagenFrame img").fadeIn(1200);
	var elementos = $("#galImage").children('li');
	var aux = 0;
	$.each(elementos,function(key, val){
		liArray.push($(elementos[key]).data("src"));
		textArray.push($(elementos[key]).data("title"));
		if($(elementos[key]).data("src") == src)
		{
			initGal = key;
		}
	});
}

function galNext(){
	initGal++;

	if(initGal >= liArray.length)
	{initGal = 0;}
	
	setSrc(liArray[initGal], textArray[initGal]);
}

function galPrev(){
	initGal--;

	if(initGal < 0)
	{initGal = (liArray.length - 1);}

	setSrc(liArray[initGal], textArray[initGal]);
}

function setSrc(src, txt){
	$(".imagenFrame img").hide();	
	$(".imagenFrame img").attr("src",src);
	$(".imagenFrame img").fadeIn("slow");

	$(".galTitulo").html(txt);
}

function galClose(){
	$("#fancyAlex").remove();
	var liArray = [];
	var initGal = 0;
}