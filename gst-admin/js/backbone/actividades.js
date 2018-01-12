/*
 * Administrador de Contenidos
 * Diciembre 2014
 * Alejandro Grijalva Antonio @HiProgrammer
 * Derechos Reservados
 */

// Valiables Globales
var collection = []; // Activity's Collection
$(document).ready(function(){	
	loadData(1);	
});

function edit(id){
	try{
		var act_clave = $("#calve_id").val();
		var url = 'includes/act_form.html';
		if(parseInt(act_clave) == 4){
			url = 'includes/ent_form.html';
		}
		
		$.ajax({
			url: url,
			type: "POST",
			success: function(data){				
				$("#content").html(data);
				$("#actividad").append('<input type="hidden" name="campo[act_clave]" value="'+act_clave+'">');
				var txt = '';
				switch(parseInt(act_clave)){
					case 1: txt = 'Montañismo'; break;
					case 2: txt = 'Trekking'; break;
					case 3: txt = 'Escalada'; break;
					case 4: txt = 'Entrenamiento'; break;
				}

				$("#frm-titulo").text(txt);
				$("#frm-action").val('update');
				$("#frm-id").val(id);

				var modelEdit = [];
				$.each(collection, function(key, val){
					if(collection[key].act_id == id)
						modelEdit.push(collection[key]);
				});

				console.log(modelEdit);

				$("#act_nombre").val(modelEdit[0].act_nombre);		$("#act_descripcion").val(modelEdit[0].act_descripcion);
				$("#act_dias_1").val(modelEdit[0].act_dias_1);		$("#act_costo_1").val(modelEdit[0].act_costo_1);
				$("#act_dias_2").val(modelEdit[0].act_dias_2);		$("#act_costo_2").val(modelEdit[0].act_costo_2);
				$("#incluye").val(modelEdit[0].act_incluye);		$("#itinerario").val(modelEdit[0].act_itinerario);
				$("#act_equipo").val(modelEdit[0].act_equipo);		$("#act_nivel").val(modelEdit[0].act_nivel);
				$("#act_lugares").val(modelEdit[0].act_lugares);	$("#act_requisitos").val(modelEdit[0].act_requisitos);
				$("#act_vestimenta").val(modelEdit[0].act_vestimenta);

				switch(parseInt(modelEdit[0].act_condicion)){
					case 1: 
						$("#rad1").prop("checked", true);
						$("#rad2").prop("checked", false);
						$("#rad3").prop("checked", false);
					break;
					case 2: 
						$("#rad1").prop("checked", false);
						$("#rad2").prop("checked", true);
						$("#rad3").prop("checked", false);
					break;
					case 3:
						$("#rad1").prop("checked", false);
						$("#rad2").prop("checked", false);
						$("#rad3").prop("checked", true);
					break;
				}

			}
		}); // Termina ajax
	}
	catch(e){
		console.log('Ups! Ha ocurrido un error que no esperabamos al editar el registro.');
	}
}

function loadData(load){
	var url = '../control/data.json.php';

	$.ajax({
		url: url,
		type: "POST",
		data: p({
			table: 'tbl_actividad'
		}),
		success: function(data){
			var array = eval("(" + data + ")");
			var array = eval("(" + array + ")");
			collection = [];
			$.each(array, function(key, val){
				collection.push(array[key]);
			});
			insertHTML(filter(load));
			
				
		}
	}); // Termina ajax	
}

function setInfo(id){
	switch(id){
		case 1:
			insertHTML(filter(id));
			$("#act-title").html('Montañismo');
			break;
		
		case 2:
			insertHTML(filter(id));
			$("#act-title").html('Trekking');
			break;

		case 3:
			insertHTML(filter(id));
			$("#act-title").html('Escalada');
			break;

		case 4:
			insertHTML(filter(id));
			$("#act-title").html('Entrenamiento');
			break;

		default:
			insertHTML(filter(1));
			$("#act-title").html('Montañismo');
			break;
	}
	$("#calve_id").val(id);	
}

function filter(id){
	var array = [];
	$.each(collection, function(key, val){
		if(collection[key].act_clave == id)
			array.push(collection[key]);
	});

	return array;
}

function insertHTML(json){
	var aux = 1;
	$(".table tbody").html('');
	if(json.length != 0)
	{
		$.each(json, function(key, val){
			$(".table tbody").append('<tr id="tr_act_' + json[key].act_id + '">'
	                        	+'<td>' + aux + '.</td>'
	                            +'<td>' + json[key].act_nombre + '</td>'
	                            +'<td>'
	                                +'<span class="badge bg-red" onclick="eliminar(' + json[key].act_id + ');">Eliminar</span>'
	                                +'<span class="badge bg-light-blue" onclick="edit(' + json[key].act_id + ');">Editar</span>'
	                            +'</td>'
	                        +'</tr>');
			aux++;
		});
	}
	else
	{
		$(".table tbody").append('<tr>'
	                    	+'<td colspan="4">Vacio</td>'
	                      +'</tr>');
	}
}

function loadForm(){	
	var act_clave = $("#calve_id").val();
	var url = 'includes/act_form.html';
	if(parseInt(act_clave) == 4){
		url = 'includes/ent_form.html';
	}
	
	$.ajax({
		url: url,
		type: "POST",
		success: function(data){				
			$("#content").html(data);
			$("#actividad").append('<input type="hidden" name="campo[act_clave]" value="'+act_clave+'">');
			var txt = '';
			switch(parseInt(act_clave)){
				case 1: txt = 'Montañismo'; break;
				case 2: txt = 'Trekking'; break;
				case 3: txt = 'Escalada'; break;
				case 4: txt = 'Entrenamiento'; break;
			}

			$("#frm-titulo").text(txt);
		}
	}); // Termina ajax
}

function loadList(){
	var url = 'includes/act_list.html';
	var act_clave = $("#calve_id").val(); 

	
	$.ajax({
		url: url,
		type: "POST",
		success: function(data){				
			$("#content").html(data);
			setInfo(parseInt(act_clave));
		}
	}); // Termina ajax
}

function setFrm(regresa){
	var formData = new FormData($("#actividad")[0]);
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
				alert(array.msg);
				if(regresa == 0){

				}
				else{				
					loadData($("#calve_id").val());
					loadList();
				}
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

function eliminar(id){
	if(confirm('Estas a punto de Eliminar este registro ¿Estas de acuerdo?')){
		$.ajax({
			url: '../control/delete.php',
			type: "POST",
			data:p({
				table: 'tbl_actividad'
			}),
			success: function(data){				
				var array = eval("(" + data + ")");
				if(array.success == true){
					$("#tr_act_" + id).remove();
					alert('Se elimino correctamente!');
				}
				else{
					alert('Ocurrio un error inesperado!');
				}
			}
		}); // Termina ajax
	}
}

function loading(){
	return '<div class="overlay loading-div"></div><div class="loading-img loading-div"></div>';
}

