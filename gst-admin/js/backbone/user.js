/*
 * Administrador de Contenidos
 * Diciembre 2014
 * Alejandro Grijalva Antonio @HiProgrammer
 * Derechos Reservados
 */

// Generamos la inclusion del menu
(function($){
	// Obtenemos los datos del usuario
	var url = '../control/user.php';
	$.getJSON(url, function(data){
		if(!data.success){
			location.href = '../index.html';
		}
		else{
			var firstName = data.userName.split(' ');
			$(".dUserName").html(data.userName);
			$(".dEmpresa").html(data.info.empresa);
			$(".dSistema").html(data.info.name);
			$(".dVersion").html('v' + data.info.version);
			$(".dSaludo").html('Hola, ' + firstName[0]);
			if(data.sexo == 'm'){
				$(".img-usr").attr("src","img/avatar04.png");
			}
			else{
				$(".img-usr").attr("src","img/avatar3.png");
			}
			
		}
	});	
}(jQuery));

