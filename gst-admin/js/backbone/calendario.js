/*
 * Administrador de Contenidos
 * Diciembre 2014
 * Alejandro Grijalva Antonio @HiProgrammer
 * Derechos Reservados
 */

// (function($, collection) {
	var collection         = []; // Activity's Collection
	var collEvent          = [];  // Event's Collection
    var colReservaciones   = []; // User´s Collection

	// Realizamos la peticion de las actividades
	$(document).ready(function() {
        getActividad();
        loadEvento();
    });

    // Creacion de DataRangePicker
    $('#reservationtime').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        format: 'MM/DD/YYYY h:mm A'
    });

    // Seleccion de Tipo de Actividad
    var currColor = "#f56954"; //Red by default
    //Color chooser button
    var colorChooser = $("#color-chooser-btn");
    $("#color-chooser > li > a").click(function(e) {
        e.preventDefault();
        //Save color
        currColor = $(this).css("color");
        //Add color effect to button
        colorChooser
            .css({
                "background-color": currColor,
                "border-color": currColor
            })
            .html($(this).text() + ' <span class="caret"></span>');
        // alert($(this).data('activ'));

        var act_clave = $(this).data('activ')
        if(act_clave != 0)
        {
        	$("#act_clave").val(act_clave);
        	$("#new-event").prop('disabled', false);
        	$("#new-event").focus();

        	$("#menu-actividades").html('');

        	$.each(collection, function(key, val){
        		// console.log(collection[key]);
        		if(parseInt(collection[key].act_clave) == act_clave)
        		{
        			$("#menu-actividades").append('<li><a href="javascript:textToInput(\'' + collection[key].act_nombre + '\')">' + collection[key].act_nombre + '</a></li>');
        		}
        	});
        }

    });

    $("#submit").click(function(e) {
    	setFrm()
    });

    function viewInfo(id){
        // alert('funciona: ' +  id);
        $("#viewDetail").html('');


        var url = 'includes/info_evento.html';

        $.ajax({
            url: url,
            type: "POST",
            success: function(data) {
                $("#viewDetail").html(data);
                var item = collEvent[id];
                
                // Calculamos autos y resumen
                var icoAutos    = ["asiento_gris","asiento_rojo","asiento_azul"];
                var srtAutos    = item[0].eve_lugares_ocupados;
                var autos       =  JSON.parse( srtAutos );
                var contAutos   = 0;
                var asientos    = 0;
                var ocupados    = 0;                
                var htmlAutos   = '';

                $.each(autos, function(key, val){
                    contAutos++;

                    htmlAutos = htmlAutos + '<tr>';
                    htmlAutos = htmlAutos + '<td>Auto ' + contAutos + '</td>';
                    htmlAutos = htmlAutos + '<td>';

                    $.each(val, function(key2, val2){
                        var tempIco = '';
                        if(parseInt(val2) == 1)
                        {    
                            ocupados++;
                            tempIco = icoAutos[1];
                        }
                        else
                        {
                            tempIco = icoAutos[0];
                        }

                        htmlAutos = htmlAutos + '<img src="img/' + tempIco + '.png"> &nbsp;';    
                    });
                    htmlAutos = htmlAutos + '</td>';
                    htmlAutos = htmlAutos + '</tr>';
                });                
                asientos = 5 * contAutos;

                // Obtenemos los datos de los clientes
                var url = '../control/data.json.php';                
                $.ajax({
                    url: url,
                    type: "POST",
                    data: p({
                        table: 'tbl_reservacion',
                        campo: 'eve_id',
                        valor: item[0].eve_id
                    }),
                    success: function(data) {
                        console.log('Load: tbl_reservacion');
                        var array = eval("(" + data + ")");
                        var array = eval("(" + array + ")");
                        colReservaciones = [];
                        $.each(array, function(key, val) {
                            colReservaciones.push(array[key]);

                            var srtAutos2   = val.res_asientos;
                            var autos2      = JSON.parse( srtAutos2 )
                            var ocupados2   = 0;

                            $.each(autos2, function(key2, val2){
                                $.each(val2, function(key3, val3){
                                    if(parseInt(val3) == 1)
                                        ocupados2++;
                                });
                            }); 



                            var htmlReservacion =   '<tr>'
                                                        +'<th style="width:80%">'
                                                            + val.res_nombre + ':<br>'
                                                            +'<div class="btn-group"><a class="btn btn-default btn-xs">'+ val.res_telefono + ' </a>'
                                                            +'<a class="btn btn-default btn-xs">'+ val.res_mail + ' </a></div>'
                                                        +'</th>'
                                                        +'<td><a href="javascript:reloadLugares(\'' + item[0].eve_lugares_ocupados + '\',\'' + val.res_asientos + '\');">' + ocupados2 + ' lugares</a></td>'
                                                    +'</tr>';

                            $("#info-reservaciones").append(htmlReservacion);
                        });
                    }
                });

                $("#addCarrito").attr( 'onclick', 'addCarrito(' + id + ')' );

                $("#info-evento").text( item[0].eve_nombre );
                $("#info-autos").html(htmlAutos);
                $("#info-auto-disponible").text( contAutos );
                $("#info-lugares-total").text( asientos );
                $("#info-lugares-reservados").text( ocupados );
                $("#info-lugares-disponibles").text( asientos - ocupados );

                

                // console.log(collEvent[id]);
            }
        });
    }

    function reloadLugares(asientos, reservados){
        // Calculamos autos y resumen
        var icoAutos    = ["asiento_gris", "asiento_rojo", "asiento_azul"]
        var srtAutos    = asientos;
        var autos       = JSON.parse(srtAutos)

        var srtReserv   = reservados;
        var reservaciones   = JSON.parse(srtReserv)

        var contAutos   = 0;
        var asientos    = 0;
        var ocupados    = 0;
        var htmlAutos   = '';

        try{
        $.each(autos, function(key, val) {
            contAutos++;

            htmlAutos = htmlAutos + '<tr>';
            htmlAutos = htmlAutos + '<td>Auto ' + contAutos + '</td>';
            htmlAutos = htmlAutos + '<td>';

            $.each(val, function(key2, val2) {
                var tempIco = '';
                if (parseInt(val2) == 1) {
                    ocupados++;
                    if(parseInt(reservaciones[key][key2]) == 1)
                    {
                        tempIco = icoAutos[2];
                    }
                    else
                    {
                        tempIco = icoAutos[1];   
                    }
                } else {
                    tempIco = icoAutos[0];
                }

                htmlAutos = htmlAutos + '<img src="img/' + tempIco + '.png"> &nbsp;';
            });
            htmlAutos = htmlAutos + '</td>';
            htmlAutos = htmlAutos + '</tr>';
        });
        }
        catch(e){
            console.log("Error: Ups! ha resultado un error posiblemente no sea nada solo es que los indices no coinciden entre las reservaciones y el total de los lugares");
        }

        $("#info-autos").html(htmlAutos);
    }

    function addCarrito(id){
        console.log('Test id: ' + id);
        if(confirm('¿En verdad agregaras un carrito mas?')){
            console.log(collEvent[id]);
            var arActual = JSON.parse(collEvent[id][0].eve_lugares_ocupados);
            var anActual = parseInt(collEvent[id][0].eve_autos) + 1;
            arActual.push([0,0,0,0,0]);

            var aux = JSONreverse(arActual);
            console.log(aux);

            var url = '../control/save.form.php';
            $.ajax({
                url: url,
                type: "POST",
                data: p({
                    "~action": "update",
                    "~table" : "tbl_evento",
                    "~where" : "eve_id ",
                    "~id"    : collEvent[id][0].eve_id,
                    "campo[eve_autos]" : anActual,
                    "campo[eve_lugares_ocupados]" : aux
                }),
                success: function(data) {
                    alert('Agregado correctamente');
                    loadEvento();
                    viewInfo(id);
                }
            });

        }
    }

    function JSONreverse(array){
        var str = '[';
        var arr = [];
        $.each(array, function(key, item){
            str = str + '[' + item + '],';
        });
        str = str + '*]';
        str = str.replace(",*",'');

        return str;
    }

    function archivar(id){
        console.log(id);
        console.log(collEvent[id][0].eve_id);
        if(confirm('Al archivar, el registro dejara de visualizarse pero no se borrara de base de datos!')){
            var url = '../control/save.form.php';
            $.ajax({
                url: url,
                type: "POST",
                data: p({
                    "~action": "update",
                    "~table" : "tbl_evento",
                    "~where" : "eve_id ",
                    "~id"    : collEvent[id][0].eve_id,
                    "campo[eve_status]" : 0
                }),
                success: function(data) {
                    alert('Se ha archivado este registro exitosamente.');
                    location.reload();
                }
            });            
        }
    }

    function setFrm(){
        var evento = $("#new-event").val();
        var fechas = $("#reservationtime").val();

        if(evento.length != 0 & fechas.length != 0)
        {
    		var formData = new FormData($("#frmEvento")[0]);
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
    					// cancel_galeria_id(3);				
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
        else
        {
            alert('Asegurate de proporcionar todos los datos!');
        }
	}

    function getActividad() {
        var url = '../control/data.json.php';

        $.ajax({
            url: url,
            type: "POST",
            data: p({
                table: 'tbl_actividad'
            }),
            success: function(data) {
                console.log('Load: tbl_actividad');
                var array = eval("(" + data + ")");
                var array = eval("(" + array + ")");
                collection = [];
                $.each(array, function(key, val) {
                    collection.push(array[key]);
                });
            }
        });
    }

    // Mostramos los eventos programados
    function loadEvento(){
    	var url = '../control/data.json.php';

        $.ajax({
            url: url,
            type: "POST",
            data: p({
                table: 'tbl_evento',
                campo: 'eve_status',
                valor: 1
            }),
            success: function(data) {
                console.log('Load: tbl_evento');
                var array = eval("(" + data + ")");
                var array = eval("(" + array + ")");
                
                collEvent = [];
                $.each(array, function(key, val) {
                	var aux = [array[key]];

                	// Parseamos la fecha
                	try{
	                	var parFecha = array[key].eve_date;
	                	parFecha = parFecha.split(" - ");

	                	var fIni = parFecha[0].split(" ");
	                	var fFin = parFecha[1].split(" ");
                	}
                	catch(e){
                		console.log('Ups! Nos encontramos un problema.');
                	}

                	aux.push({
                				fecha: fIni[0] +  ' a ' + fFin[0],
                			 	hora: fIni[1] + ' ' + fIni[2] + ' a ' + fFin[1] + ' ' + fFin[2]
                			 });

                    collEvent.push(aux);
                });
                insertHTML(collEvent);
            }
        });
    }

    function insertHTML(json){
    	$("#content").html('');
    	$.each(collEvent, function(key, val){
    		var tipo, bgTipo, porcentaje;
    		switch(parseInt(collEvent[key][0].act_clave)){
    			case 1:
    				bgTipo = 'btn-primary';
    				tipo = "Montañismo";
    				break;
    			case 2:
    				bgTipo = 'btn-success';
    				tipo = "Trekking";
    				break;
    			case 3:
    				bgTipo = 'btn-warning';
    				tipo = "Escalada";
    				break;
    			case 4:
    				bgTipo = 'bg-purple';
    				tipo = "Entrenamiento";
    				break;
    		}

    		// Porcentaje de reservaciones
            var srtAutos    = collEvent[key][0].eve_lugares_ocupados;
            var autos       = JSON.parse( srtAutos );
            var contAutos   = 0;
            var asientos    = 0;
            var ocupados    = 0;

            $.each(autos, function(key, val){
                contAutos++;
                $.each(val, function(key2, val2){
                    if(parseInt(val2) == 1)
                        ocupados++;
                });
            });
            
            asientos = 5 * contAutos;
            
            // console.log(contAutos + ' Autos disopnibles');
            // console.log(asientos + ' Total de asientos')
            // console.log((asientos - ocupados) + ' Asientos disponibles')
            // console.log(ocupados + ' Asientos ocupados');

            // console.log('Test : Lugares');
            // console.log(autos);


    		var porcentaje = number_format((ocupados * 100) / asientos, 0);
    		var colorBG, colorBT;

    		if( parseInt(porcentaje) <= 75 )
    		{
    			colorBG = 'info';
    			colorBT = 'btn-vk';
    		}
    		else{ 
    			if( parseInt(porcentaje) > 75  &&  parseInt(porcentaje) < 95 )
    			{
	    			colorBG = 'warning';
	    			colorBT = 'btn-warning';
    			}
    			else
    			{
    				colorBG = 'danger';
	    			colorBT = 'btn-google-plus';
    			}
    		}
    		


    		var template = '<div class="col-sm-6 col-md-4">'
                                +'<div class="callout callout-' + colorBG + '">'
                                    +'<h4>' + collEvent[key][0].eve_nombre + ' </h4>'
                                    +'<a class="btn ' + bgTipo + ' btn-xs">' + tipo + ' </a>'
                                    +'<br><br>'
                                    +'<a class="btn btn-block btn-social btn-default">'
                                        +'<i class="fa fa-fw fa-calendar"></i> ' + collEvent[key][1].fecha
                                    +'</a>'

                                    +'<a class="btn btn-block btn-social btn-default">'
                                        +'<i class="fa fa-clock-o"></i> ' + collEvent[key][1].hora
                                    +'</a>'

                                    +'<a class="btn btn-block btn-social ' + colorBT + '" onclick="viewInfo(' + key + ')">'
                                        +'<i class="fa fa-group"></i> ' + porcentaje + '% Reservado'
                                    +'</a>'
                                            
                                +'</div>'
                            +'</div>';

    		// console.log(tipo);
    		$("#content").append(template);

        });

        if(collEvent.length == 0){
            $("#content").append('<h2 class="text-muted">No hay eventos agregados!</h2>');
        }

    }

    function parseFecha(str){
    	console.log(str);

    	return fecha;
    }

    function loading(){
		return '<div class="overlay loading-div"></div><div class="loading-img loading-div"></div>';
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
// }(jQuery))

