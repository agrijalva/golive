/*
 * Administrador de Contenidos
 * Diciembre 2014
 * Alejandro Grijalva Antonio @HiProgrammer
 * Derechos Reservados
 */

var collection = []; // Activity's Collection
$(document).ready(function(){	
	loadData();
});

function loadData(){
	var url = '../control/data.json.php';

	$.ajax({
		url: url,
		type: "POST",
		data: p({
			table: 'tbl_historial'
		}),
		success: function(data){
			var array = eval("(" + data + ")");
			var array = eval("(" + array + ")");
			collection = [];
			$.each(array, function(key, val){
				collection.push(array[key]);
			});

			var jash = location.hash;
			var anio = 0;
			if(jash.length != 0){
				jash = jash.replace('#', '');
				jash = jash.split('/');
				anio = parseInt(jash[0]);

				if(jash.length != 1){
					setHijos(jash[1]);
				}
				else{
					insertHTML(filter({
							filtro: 'anio', 
							valor: anio}
							),1);
				}
			}else{
				anio = (new Date).getFullYear();
				insertHTML(filter({
							filtro: 'anio', 
							valor: anio}
							),1);
			}
				
			$(".mod-txt-anio").text(anio);
    		$("#gal_anio").val(anio);
			// console.log(collection);
				
		}
	}); // Termina ajax	
}

function setAnio(anio){
	insertHTML(
		filter({
				filtro: 'anio', 
				valor:anio
			   }),1);
	$("#his_padre").remove();
	$(".mod-txt-anio").text(anio);
    $("#gal_anio").val(anio);
}

function setHijos(padre){
	insertHTML(
		filter({
				filtro: 'hijos', 
				valor: padre
			   }),2);

	$("#frmGaleria").append('<input type="hidden" id="his_padre" name="campo[his_padre]" value="' + padre + '">');
}

function filter(options){
	// console.log(options.valor);
	var model = [];
	switch(options.filtro){
		case 'anio':
			$.each(collection, function(key, val){
				if(collection[key].his_anio == options.valor)
					if(collection[key].his_padre == 0)
						model.push(collection[key]);
			});			
			break;
		case 'hijos':
			$.each(collection, function(key, val){
				if(collection[key].his_padre == options.valor)
					model.push(collection[key]);
			});	
			break;
	}

	return model;
}

function eliminar(id){
	if(confirm('Estas a punto de Eliminar este registro ¿Estas de acuerdo?')){
		$.ajax({
			url: '../control/delete.php',
			type: "POST",
			data:p({
				table: 'tbl_historial',
				campo: 'his_id',
				valor: id
			}),
			success: function(data){				
				var array = eval("(" + data + ")");
				if(array.success == true){
					$("#div_gal_" + id).remove();
					alert('Se elimino correctamente!');
					location.reload();
				}
				else{
					alert('Ocurrio un error inesperado!');
				}
			},
			error: function(){
				alert('Ups!, ha Ocurrio un Error');
			}
		}); // Termina ajax
	}
}

function insertHTML(json, cat){
	$("#content").html('');
	var aux = 1;
	if(json.length != 0)
	{
		$.each(json, function(key, val){
			if(json[key].his_imagen == ''){
				var foto = '';
			}else{
				var foto = '<img src="../files/img/'+json[key].his_imagen+'" width="100%">';
			}

			// Buscamos fotos hijos
			var contador = 0;
			$.each(collection, function(llave, valor){
				if(json[key].his_id == collection[llave].his_padre){
					contador++;
				}
			});

			
			action = 'setHijos(' + json[key].his_id + ');';
			if(cat == 1){
				sub =   '<li>'
                        	+'<a href="#">'
                                + json[key].his_anio
                            +'</a>'
                        +'</li>'
                        +'<li><a href="#'+ json[key].his_anio +'/'+json[key].his_id+'" onclick="' + action + '">' + contador + ' Fotos</a></li>'
			}
			else{
				sub = '';
			}

			var template = '<div class="col-sm-4" id="div_gal_' + json[key].his_id + '">'
                            +'<div class="box box-warning">'
                                +'<div class="box-header">'
                                    +'<h3 class="box-title">' + json[key].his_nombre + '</h3>'
                                    +'<div class="box-tools pull-right">'
                                        +'<ul class="pagination pagination-sm inline">'
                                            +'<li>'
                                                +'<a href="javascript:eliminar(' + json[key].his_id + ');">'
                                                    +'<i class="fa fa-times"></i>'
                                                +'</a>'
                                            +'</li>'
                                            + sub
                                        +'</ul>'
                                    +'</div>'
                                +'</div>'
                                +'<div class="box-body">'
                                    + foto
                                +'</div>'
                            +'</div>'
                        +'</div>';

			$("#content").append(template);
			aux++;
		});
	}
	else{
		$("#content").append('<h1 class="text-muted">&nbsp;&nbsp;&nbsp;Vacio!</h1>');
	}
}

function setFrm(){
	var formData = new FormData($("#frmGaleria")[0]);
	$.ajax({
		url: '../control/save.form.php',  
		type: 'POST',
		data: formData,
		cache: false,
		contentType: false,
		processData: false,
		beforeSend: function(){			
			$(".box-form").append(loading());
		},
		success: function(arreglo){
			$(".loading-div").remove();
			var array = eval("(" + arreglo + ")");
			if(array.success == true){
				cancel_galeria_id(3);				
				alert(array.msg);	
				location.reload();			
			}
			else{
				alert(array.msg);
			}
		},
		error: function(){
			alert('Error desconocido!');
		}
	});
}

function loading(){
	return '<div class="overlay loading-div"></div><div class="loading-img loading-div"></div>';
}