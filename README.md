Desarrollo de sitio web

# goLive

Para su funcionameinto se debera considerar las siguientes condiciones:

## Configuracion

No plica
   

## Conexión a mySQL

Este API establece una conexión con mySQL como manejador de base de datos y para ello es necesario
realizar la configuracion en la siguiente archivo __gst-admin/model/conexion.class.php__ en el se
debera sustituir los datos por los da cada servidor de las siguientes variables:

    $this->BaseDatos = "db_gst_go";
    $this->Servidor  = "localhost";
    $this->Usuario 	 = "root";
    $this->Clave	 = "";
    
La base de datos se encuentra alojada en la siguiente dirección

    gst-admin\data\db_gst_go.sql
