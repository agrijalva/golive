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
			table: 'tbl_guias'
		}),
		success: function(data){
			var array = eval("(" + data + ")");
			var array = eval("(" + array + ")");
			collection = [];
			$.each(array, function(key, val){
				collection.push(array[key]);
			});
			insertHTML(collection);
			// console.log(collection);
				
		}
	}); // Termina ajax	
}

function insertHTML(json){
	var aux = 1;
	if(json.length != 0)
	{
		$.each(json, function(key, val){
			if(json[key].gui_imagen == ''){
				var foto = '';
			}else{
				var foto = '<img src="../files/img/'+json[key].gui_imagen+'" width="100%">';
			}
			var template = '<div class="col-sm-6" id="div_gal_' + json[key].gui_id + '">'
                                +'<div class="box box-warning">'
                                    +'<div class="">'
                                    	+'&nbsp;&nbsp;&nbsp;<span class="text-light-blue" style="font-size:15px; padding:5px 0 15px 0; text-transform:uppercase;">'
                                    	+ json[key].gui_nombre
                                    	+ '</span>'
                                        +'<div class="pull-right" style="margin:5px 10px 2px 0;">'                                            
                                            +'<button class="btn btn-danger btn-xs" data-widget="remove" onclick="eliminar(' + json[key].gui_id + ');">'
                                                +'<i class="fa fa-times"></i>'
                                            +'</button>'
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
}

function eliminar(id){
	if(confirm('Estas a punto de Eliminar este registro ¿Estas de acuerdo?')){
		$.ajax({
			url: '../control/delete.php',
			type: "POST",
			data:p({
				table: 'tbl_guias',
				campo: 'gui_id',
				valor: id
			}),
			success: function(data){				
				var array = eval("(" + data + ")");
				if(array.success == true){
					$("#div_gal_" + id).remove();
					alert('Se elimino correctamente!');
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

function setFrm(){
	var formData = new FormData($("#guias")[0]);
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
			alert('Presione el Boton de Subir Imagen');
		}
	});
}

function loading(){
	return '<div class="overlay loading-div"></div><div class="loading-img loading-div"></div>';
}