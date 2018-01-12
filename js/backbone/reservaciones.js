/*
 * Administrador de Contenidos
 * Enero 2015
 * Alejandro Grijalva Antonio @HiProgrammer
 * Derechos Reservados
 */

// Obtenemos dataCollections

var collections = [];
var autos = [];



function loadData(){
	var url = 'gst-admin/control/data.json.php';
	var jash = location.hash;
	var id = 0;

	if(jash.length != 0)
	{
		jash = jash.replace('#', '');
		jash = jash.split('/');
		id = parseInt(jash[0]);
	
        $.ajax({
            url: url,
            type: "POST",
            data: p({
                table: 'tbl_evento',
                campo: 'eve_id',
                valor: id
            }),
            success: function(data) {
                console.log('Load: tbl_evento');
                var array = eval("(" + data + ")");
                var array = eval("(" + array + ")");
                
                collections = [];
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

                    collections.push(aux);

                    console.log(collections);
                    printInfo();
                    insertHTML();
                });
            }
        });
	}
	else
	{
		console.log('Ups! ocurrio un error.')
	}
}

function printInfo(){
    var fecha = collections[0][1].fecha;
    var f = fecha.split(' a ');
    var fStr = f[0].split('/');
    var fEnd = f[1].split('/');

    // console.log(fStr);

    $("#detalle").text(collections[0][0].eve_nombre);
    $("#detalle").append( '<br>' );
    $("#detalle").append( fStr[1] + ' ' + mes(fStr[0]) + ' ' );

    if(parseInt(fEnd[0]) != parseInt(fStr[0]) | parseInt(fEnd[1]) != parseInt(fStr[1])){
        $("#detalle").append( ' - ' + fEnd[1] + ' ' + mes(fEnd[0]) + '  <br>  ' );        
    }
    $("#detalle").append( collections[0][1].hora );
} 

function mes(dia){
    var strDia = '';
    switch(parseInt(dia)){
        case 1:  strDia = 'Enero'; break;
        case 2:  strDia = 'Febrero'; break;
        case 3:  strDia = 'Marzo'; break;
        case 4:  strDia = 'Abril'; break;
        case 5:  strDia = 'Mayo'; break;
        case 6:  strDia = 'Junio'; break;
        case 7:  strDia = 'Julio'; break;
        case 8:  strDia = 'Agosto'; break;
        case 9:  strDia = 'Septiembre'; break;
        case 10: strDia = 'Octubre'; break;
        case 11: strDia = 'Noviembre'; break;
        case 12: strDia = 'Diciembre'; break;
    }
    // console.log(strDia);
    return strDia;
}


function insertHTML(){
	var data = collections[0][1].fecha;
    var icoAutos    = ["asiento_gris","asiento_rojo","asiento_azul"];
    var srtAutos    = collections[0][0].eve_lugares_ocupados;
        autos       = JSON.parse( srtAutos );

    $.each(autos, function (key, item){
        var asi = [];
        if(item[0] == 1)
            asi[0] = '<img src="img/asiento_rojo.png" />';
        else
            asi[0] = '<img src="img/asiento_gris.png" class="pointer" id="asi'+key+'0" onClick="selectAsiento(' + key + ',0);" />';

        if(item[1] == 1)
            asi[1] = '<img src="img/asiento_rojo.png" />';
        else
            asi[1] = '<img src="img/asiento_gris.png" class="pointer" id="asi'+key+'1" onClick="selectAsiento(' + key + ',1);" />';

        if(item[2] == 1)
            asi[2] = '<img src="img/asiento_rojo.png" />';
        else
            asi[2] = '<img src="img/asiento_gris.png" class="pointer" id="asi'+key+'2" onClick="selectAsiento(' + key + ',2);" />';

        if(item[3] == 1)
            asi[3] = '<img src="img/asiento_rojo.png" />';
        else
            asi[3] = '<img src="img/asiento_gris.png" class="pointer" id="asi'+key+'3" onClick="selectAsiento(' + key + ',3);" />';

        if(item[4] == 1)
            asi[4] = '<img src="img/asiento_rojo.png" />';
        else
            asi[4] = '<img src="img/asiento_gris.png" class="pointer" id="asi'+key+'4" onClick="selectAsiento(' + key + ',4);" />';

        var template = '<div class="left large-4 medium-6">'
                            +'<div class="central">'
                                +'<div class="margengeneral carritos">'
                                    +'<div style="height:135px;">&ensp;</div>'
                                    +'<div style="text-align:center; margin-bottom:10px;">'
                                        + asi[0] + '&nbsp;'
                                        + asi[1]
                                    +'</div>'
                                    +'<div style="text-align:center;">'
                                        + asi[2] + '&nbsp;'
                                        + asi[3] + '&nbsp;'
                                        + asi[4]
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>';

        $("#carritos").append(template);
    });
    // console.log(autos);
}

function selectAsiento (auto, asiento){
    if(autos[auto][asiento] == 1){
        autos[auto][asiento] = 0;
        $('#asi' + auto + asiento).attr("src", "img/asiento_gris.png");
    }
    else{
        autos[auto][asiento] = 1;
        $('#asi' + auto + asiento).attr("src", "img/asiento_azul.png");
    }
    console.log(autos);
}

loadData();