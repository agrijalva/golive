/*
 * Administrador de Contenidos
 * Diciembre 2014
 * Alejandro Grijalva Antonio @HiProgrammer
 * Derechos Reservados
 */

var loader_img_3 = function(file){
	document.getElementById("nombre_img_3").innerHTML = '<img src="img/loaders/17.gif">';
	
	var imagen = file.files[0]; 
	var reader = new FileReader(); 
	
	reader.onload = (function(theFile) {
        return function(e) {
			var kb = escape(theFile.size) / 1024;
			
			if(kb < 1024){
				var tamano = number_format(kb,2,'.',',') + ' Kb';
			}else{
				var mb = (kb / 1024)				
				var tamano = number_format(mb,2,'.',',') + ' Mb';
			}
			
			var nombre = escape(theFile.name).split('.');
			var extencion = (nombre.length) - 1;
			var s = nombre[extencion];
			
			if (s == 'jpg' | s == 'jpeg' | s == 'gif' | s == 'png' | s == 'PNG' | s == 'psd'){
				document.getElementById("imagen_img_3").src = e.target.result;
				document.getElementById("nombre_img_3").innerHTML = escape(theFile.name);
				document.getElementById("peso_img_3").innerHTML = tamano;
				var botonera = '<a onclick="setFrm();" class="btn btn-primary btn-xs">Subir Imagen</a>&nbsp;&nbsp;';
				botonera += '<a onclick="cancel_galeria_id(3);" class="btn btn-danger btn-xs">Cancelar</a>';
                document.getElementById("controles_img_3").innerHTML = botonera;
			}
			else{
				alert("El archivo seleccionado no es una imagen");
				document.getElementById("nombre_img_3").innerHTML = '';
				document.getElementById("peso_img_3").innerHTML = '';
				document.getElementById("controles_img_3").innerHTML = '';
			}
        };
      })(imagen);
	reader.readAsDataURL(imagen);
}

var loader_img = function(file){
	document.getElementById("nombre_img_3").innerHTML = '<img src="img/loaders/17.gif">';
	
	var imagen = file.files[0]; 
	var reader = new FileReader(); 
	
	reader.onload = (function(theFile) {
        return function(e) {
			var kb = escape(theFile.size) / 1024;
			
			if(kb < 1024){
				var tamano = number_format(kb,2,'.',',') + ' Kb';
			}else{
				var mb = (kb / 1024)				
				var tamano = number_format(mb,2,'.',',') + ' Mb';
			}
			
			var nombre = escape(theFile.name).split('.');
			var extencion = (nombre.length) - 1;
			var s = nombre[extencion];
			
			if (s == 'jpg' | s == 'jpeg' | s == 'gif' | s == 'png' | s == 'PNG' | s == 'psd'){
				document.getElementById("imagen_img_3").src = e.target.result;
				document.getElementById("nombre_img_3").innerHTML = escape(theFile.name);
				document.getElementById("peso_img_3").innerHTML = tamano;
				var botonera = '<input type="text" class="form-control" id="nombre" name="campo[gui_nombre]" placeholder="Nombre del Guia" ><br>';
				botonera += '<a onclick="setFrm();" class="btn btn-primary btn-xs">Guardar Guia</a>&nbsp;&nbsp;';
				botonera += '<a onclick="cancel_galeria_id(3);" class="btn btn-danger btn-xs">Cancelar</a>';
                document.getElementById("controles_img_3").innerHTML = botonera;
			}
			else{
				alert("El archivo seleccionado no es una imagen");
				document.getElementById("nombre_img_3").innerHTML = '';
				document.getElementById("peso_img_3").innerHTML = '';
				document.getElementById("controles_img_3").innerHTML = '';
			}
        };
      })(imagen);
	reader.readAsDataURL(imagen);
}

var cancel_galeria_id = function(id){
	document.getElementById("imagen_img_" + id).src = 'img/click.png';
	document.getElementById("nombre_img_" + id).innerHTML = '';
	document.getElementById("peso_img_" + id).innerHTML = '';
	document.getElementById("controles_img_" + id).innerHTML = '';
}

function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}

function p(a){
	var parametros = '';
	$.each(a, function(key, val){
		parametros = parametros + key + '=' + val + '&';
	});
	return parametros;
}