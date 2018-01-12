/*
 * Administrador de Contenidos
 * Diciembre 2014
 * Alejandro Grijalva Antonio @HiProgrammer
 * Derechos Reservados
 */

;(function($){
    $("#submit").click(function(){
        logIn();
    });

    $("#clave, #userid").keypress(function(key){
        switch(key.which)
        {       
            case 13:  logIn();   break;            
        }
    });

    // Validamos logeo
    var url = 'control/user.php';
    $.getJSON(url, function(data){
        if(data.success){
            location.href = 'app/index.html';
        }
    }); 

    var error = '<div class="alert alert-danger alert-dismissable">'
                    +'<i class="fa fa-times-circle"></i>'
                    +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
                    +'<b>Error !</b> #error#'
                +'</div>';

    function logIn(){
        try{
            var mail = $("#userid").val();
            var pass = $("#clave").val();
            // alert(pass);

            
            if(mail == ''){
                $("#msgBox").html(msgError('Introduce tu e-mail'));
            }
            else{
                var valores = 'mail=' + mail + '&pass=' + pass
                $.ajax({
                    url: 'control/login.ctrl.php',
                    data: valores,
                    type: "POST",
                    success: function(data){
                        try{
                            var array = eval("(" + data + ")");
                            if(array.success == true){  
                                location.href = "app/index.html";
                            }
                            else{
                                $("#msgBox").html(msgError(array.msg));
                                $("#clave").val('');
                            }   
                        }    
                        catch(e){
                            $("#msgBox").html(msgError(e));
                            $("#clave").val('');
                        }                                                      
                    }
                }); // Termina ajax
            }
        }
        catch(e){            
            $("#msgBox").html(msgError(e));
        }
    }

    function msgError(msg){
        return '<div class="alert alert-danger alert-dismissable">'
                    +'<i class="fa fa-times-circle"></i>'
                    +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
                    +'<b>Error !</b> ' + msg
                +'</div>';
    }

}(jQuery));






