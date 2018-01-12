-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-01-2018 a las 03:55:53
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_gst_go`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_actividad`
--

CREATE TABLE `tbl_actividad` (
  `act_id` int(11) NOT NULL,
  `act_clave` int(11) NOT NULL,
  `act_nombre` varchar(50) NOT NULL,
  `act_descripcion` text NOT NULL,
  `act_dias_1` int(11) NOT NULL,
  `act_costo_1` float NOT NULL,
  `act_dias_2` int(11) NOT NULL,
  `act_costo_2` float NOT NULL,
  `act_incluye` text NOT NULL,
  `act_condicion` int(11) NOT NULL DEFAULT '1',
  `act_itinerario` text NOT NULL,
  `act_vestimenta` text NOT NULL,
  `act_equipo` text NOT NULL,
  `act_nivel` varchar(50) NOT NULL,
  `act_lugares` text NOT NULL,
  `act_requisitos` text NOT NULL,
  `act_status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_actividad`
--

INSERT INTO `tbl_actividad` (`act_id`, `act_clave`, `act_nombre`, `act_descripcion`, `act_dias_1`, `act_costo_1`, `act_dias_2`, `act_costo_2`, `act_incluye`, `act_condicion`, `act_itinerario`, `act_vestimenta`, `act_equipo`, `act_nivel`, `act_lugares`, `act_requisitos`, `act_status`) VALUES
(1, 1, 'IztaccÃ­huatl', 'Ubicado entre Puebla y Estado de MÃ©xico, Amecameca VolcÃ¡n, 3er montaÃ±a mÃ¡s alta de MÃ©xico 5,220 msnm', 2, 2800, 0, 0, 'Transporte redondo CDMX - IztaccÃ­huatl - CDMX;Comida - cena - box lunch - desayuno;GuÃ­as profesionales por cada 3 personas;Entradas al parque;Equipo', 2, '<p>DÃ­a 1:<br>Iniciaremos nuestra salida a las 6:30am desde el Auditorio Nacional, al llegar a la Joya en las faldas del volcÃ¡n, iniciaremos caminando por la ruta normal el primer dia pasando los 4 portillos hasta llegar al refugio de los cien donde acamparemos por una noche.</p><p>DÃ­a 2:<br>A las 12:30am saldremos rumbo a la cumbre, llegando a las rodillas, la panza cruzando por el hermoso glaciar de Ayoloco y subiendo por la arista hasta llegar a la cumbre, luego descenderemos hasta llegar nuevamente a la Joya, y despuÃ©s regresaremos a la ciudad de Mexico llegando a las 8:30pm.</p>', 'Playera dry fit;Polar delgado;Polar grueso;Chamarra rompe vientos o impermeable;Mallas tÃ©rmicas o pants ligero;PantalÃ³n rompe vientos;Guantes;Gorro;2 pares de calcetines;Botas de media o alta montaÃ±a;Gafas 100 uv;LÃ¡mpara frontal', 'Bastones, casco, piolet, crampones', '', '', '', 1),
(12, 4, 'Entrena Go&Run', 'Si quieres romper tus limites fÃ­sicos y mentales, este es el entrenamiento ideal para ti, te preparamos para carreras de 10 kms, medios maratones, y maratones con la mejor metodologÃ­a deportiva y experiencia de 14 aÃ±os, el primer entrenamiento y la prueba serÃ¡ realizado de manera presencial con el entrenador en cualquiera de los siguientes lugares: pista el sope, viveros, bosque de Tlalpan y Ocotal ', 30, 1200, 0, 0, 'Prueba de condiciÃ³n fÃ­sica (Prueba de Cooper);Programa mensual personalizado;AsesorÃ­a en la compra de equipo deportivo para correr;Descuentos en los viajes de GoandLive.', 1, '', '', '', 'Intermedios y Avanzados', 'Pista el sope;Bosque de Tlalpan;Ocotal;Nevado de Toluca;Circuito Gandhi;Cualquier parque con una pista marcada de por lo menos 1 km.', 'Actitud y ganas, no tener padecimientos de enfermedades crÃ³nicas o cardiacas, poder entrenar por los menos cinco veces a la semana, edad a partir de los 18 aÃ±os.', 1),
(2, 1, 'La Malinche', 'Ubicacado en el Parque Nacional Malinche, Tlaxcala-Puebla VolcÃ¡n, 5ta montaÃ±a mÃ¡s alta de MÃ©xico 4,220 msnm', 1, 1500, 0, 0, '', 2, 'Iniciaremos nuestra salida a las 6:30am desde el Auditorio Nacional, la ruta inicia con una caminata por un bosque de pinos que nos lleva a una altura de 4,000 msnm, de aquÃ­ iniciaremos nuestro camino hacia la cumbre a travÃ©s de una pendiente de 40 grados de inclinaciÃ³n, la vista desde la cumbre permite ver el Pico de Orizaba, el PopocatÃ©petl y el IztaccÃ­huatl.<br>', ' Playera dry fit;Polar delgado;Chamarra rompe vientos o impermeable;PantalÃ³n de caminata ligero o pants;Guantes;Gorro;Calcetas calientes;Tenis o Botas de media montaÃ±a;Gafas 100 uv;LÃ¡mpara frontal.', 'Bastones y casco', '', '', '', 1),
(3, 1, 'Nevado de Toluca', 'Ubicado en el estado de MÃ©xico, entre los valles de Toluca y Tenango VolcÃ¡n, 4ta montaÃ±a mÃ¡s alta en MÃ©xico 4,680 msnm', 1, 1300, 0, 0, 'Transporte redondo CDMX - Nevado de Toluca - CDMX;GuÃ­as profesionales;Equipo', 2, '<span>Iniciaremos nuestra salida a las 6:30am desde el Auditorio Nacional, llegando al parque nacional, caminaremos por la ruta que nos lleva a la cumbre y atraviesa la laguna del Sol, la cumbre se encuentra a 4,680 msnm donde se admiran la laguna mayor que es la del Sol, y la menor que es la de la Luna, el paso de nubes por encima de nosotros y las vistas son inigualables, el regreso a la CDMX es a las 5:30pm.</span>', 'Playera dry fit;Polar delgado;Chamarra rompe vientos o impermeable;PantalÃ³n de caminata ligero o pants;Guantes;Gorro;Calcetas calientes;Tenis o Botas de media montaÃ±a;Gafas 100 uv;LÃ¡mpara frontal.', 'Bastones y casco', '', '', '', 1),
(4, 1, 'Pico de Orizaba', 'Ubicado en los lÃ­mites territoriales de Puebla y Veracruz VolcÃ¡n y montaÃ±a mÃ¡s alta de MÃ©xico, con una altitud de 5610 msnm', 2, 6000, 3, 6500, '', 3, '<p><b>DÃ­a 1:</b>Salida de la CDMX a las 6:30am rumbo al pueblo de Tlalchichuca, subiremos en transporte de 4x4 hasta el refugio de Piedra Grande ubicado a 4,220 msnm, ahÃ­ pasaremos una noche iniciando nuestro proceso de hidrataciÃ³n, comida y descanso.</p><p><b>DÃ­a 2</b>:Saldremos del refugio de Piedra Grande a la 1:30am hacia el camino a la cumbre por la cara Norte, llegando al Glaciar de Jamapa a 5,000 msnm, aquÃ­ iniciaremos nuestras cordadas en parejas y aplicaremos tÃ©cnicas de ascenso con crampones y piolet, llegaremos a la cumbre aproximadamente a las 8:00am, despuÃ©s estaremos en la cumbre comiendo, y admirando las hermosas vistas desde el lugar mas alto de Mexico. El descenso es por la misma ruta, llegaremos a las 2:00pm al refugio de Piedra Grande para tomar el transporte 4x4 que nos llevara a Tlalchichuca, el regreso a la CDMX serÃ¡ a las 10:00pm</p>', 'Playera dry fit;Polar delgado;Polar grueso;Chamarra rompe vientos o impermeable;Chamarra de pluma;Mallas tÃ©rmicas o pants ligero;PantalÃ³n rompe vientos o impermeable;2 Guantes;Gorro;2 pares de calcetines;Botas de media o alta montaÃ±a;Gafas 100 uv;LÃ¡mpara frontal.', 'Bastones;Casco;Piolet;Crampones;ArnÃ©s;Cuerda;Estacas;Tornillos de hielo;Mosquetones con seguro;Cordinos', '', '', '', 1),
(5, 2, 'Cerro San Miguel', 'Marquesa, Estado de MÃ©xico\r\nCerro situado en la cordillera neovolcanica, 3680 msnm', 1, 800, 0, 0, 'Transporte redondo CDMX - Marquesa - CDMX;GuÃ­as profesionales;Equipo', 3, '<span>Saldremos de la CDMX a las 7:00am rumbo al desierto de los leones, iniciaremos nuestra caminata por la vereda boscosa que nos lleva a Cruz Grande, atravesaremos milenarias mesquitas construidas por los franciscanos, veremos hermosos paisajes de la ciudad hasta llegar a la cumbre mas alta, el recorrido dura aproximadamente 4 horas, llegando comeremos, y tomaremos excelentes fotos de las vistas del bosque y ciudad, el regreso a la CDMX es a las 5:00pm.</span>', 'PantalÃ³n de trekking ligero o Pants;Playera dry fit;Polar delgado;Chamarra rompevientos o Impermeable;Guantes;Tenis o Botas de media montaÃ±a;Gorro;Gafas 100 uv;Calcetas calientes;LÃ¡mpara frontal.', 'Bastones;Casco', '', '', '', 1),
(6, 2, 'IZTACCÃHUATL', 'Ubicado entre Puebla y Estado de MÃ©xico, Amecameca VolcÃ¡n, 3er montaÃ±a mÃ¡s alta de MÃ©xico 5,220 msnm', 1, 1500, 0, 0, 'Transporte redondo CDMX - IztaccÃ­huatl - CDMX;GuÃ­as profesionales;Equipo;Entrada al parque', 2, '<span>Iniciaremos nuestra salida de la CDMX a las 6:30am, llegando a la Joya situada en la base del volcÃ¡n, iniciaremos nuestro ascenso por la ruta normal de los portillos hasta llegar al refugio de los 100, aquÃ­ tomaremos fotos delas hermosas vistas que nos presenta la montaÃ±a, comeremos nuestro lunch y descenderemos por el mismo camino, la llegada a la CDMX es a las 7:00pm.</span>', 'PantalÃ³n de trekking ligero o Pants;Playera dry fit;Polar delgado;Chamarra rompevientos o Impermeable;Guantes;Tenis o Botas de media montaÃ±a;Gorro;Gafas 100 uv;Calcetas calientes;Mochila mediana', 'Bastones;Casco', '', '', '', 1),
(7, 2, 'Huasca Hidalgo', 'Huasca, Hidalgo IncreÃ­ble zona en el Rancho Santa Elena, bosques milenarios.', 1, 1200, 0, 0, 'Transporte redondo CDMX - Huasca - CDMX;GuÃ­as profesionales;Equipo', 1, '<span>Iniciaremos nuestra salida de la CDMX a las 6:30am, tomaremos la carretera hacia Tulancingo que nos lleva a Huasca de Hidalgo, aquÃ­ iniciaremos nuestro recorrido por una hermosa vereda que nos lleva a disfrutar de unos paisajes increÃ­bles, el recorrido tiene una duraciÃ³n de 4 a 5 horas, el regreso a la CDMX serÃ¡ a las 7:00pm.</span>', 'PantalÃ³n de trekking ligero o Pants;Playera dry fit;Polar delgado;Chamarra rompevientos o Impermeable;Guantes;Tenis o Botas de media montaÃ±a;Gorro;Gafas 100 uv;Calcetas calientes;LÃ¡mpara frontal', 'Bastones;Casco', '', '', '', 1),
(8, 3, 'PeÃ±a Bernal', 'Bernal, Queretaro\r\nEl 3er monolito mÃ¡s grande del mundo', 1, 2500, 0, 0, 'Transporte redondo CDMX - Bernal - CDMX;GuÃ­as profesionales;Equipo', 3, '<span>Saldremos de la CDMX a las 6:30am rumbo a QuerÃ©taro por el camino que nos lleva a la PeÃ±a de Bernal, iniciaremos nuestra escalada con el objetivo de llegar al lugar mas alto de este monolito, escalando sus 120m de altura, en un tiempo aproximado de 4 horas, el descenso es de rappel, y el regreso a la CDMX es a las 8:00pm.</span>', 'Pants;Short;Calcetines;Playera dry fit de manga larga;Gafas 100 uv;Tenis;Gorra;Mochila pequeÃ±a (25L)', 'Casco;ArnÃ©s;Mosquetones con seguro;Cuerdas;Anillas;Cintas', '', '', '', 1),
(9, 3, 'CaÃ±on los Dinamos', 'Magdalena Contreras, 2 Dinamo\r\nAntiguos bosques milenarios', 1, 800, 0, 0, 'Transporte redondo CDMX - Dinamos - CDMX;GuÃ­as profesionales;Equipo', 2, '<span>La salida es en la CDMX a las 6:30am rumbo a la zona de la Magdalena Contreras en el parque de los dinamos, iniciaremos nuestro recorrido a travÃ©s de un sendero por el hermoso bosque de niebla, que nos lleva al caÃ±Ã³n, donde haremos el primer rappel bajando a pozas de agua y observando paisajes inigualables, continuaremos el descenso haciendo dos rappels, uno de 24 m que es el mÃ¡s grande y cruza una cascada, finalmente llegaremos a una vereda que nos regresa al camino inicial, el regreso a la CDMX es a las 4:00pm</span>', 'Short o Neopreno;Playera dry fit;Chamarra impermeable;Calcetines largos;Tenis;Muda de cambio.', 'Casco;ArnÃ©s;Mosquetones con seguro;Descensor (atc u ocho);Cuerdas;Anillas;Cintas', '', '', '', 1),
(10, 3, 'PeÃ±a de Perros', 'Salazar, Marquesa, Estado de MÃ©xico\r\nPeÃ±a de Perros, antigua escuela para escaladores de alto nivel.', 1, 1200, 0, 0, 'Transporte redondo CDMX - Marquesa - CDMX;GuÃ­as profesionales; Equipo', 1, '<span>La salida es en la CDMX a las 7:00am, rumbo a la Marquesa donde nos desviaremos hacia el pueblo de Salazar, llegando prepararemos nuestro equipo y subiremos a la peÃ±a donde se encuentran rutas armadas donde pondremos nuestras cuerdas fijas para bajar de rappel, aprenderemos tÃ©cnicas y lo haremos de la manera mas segura con equipo certificado, el regreso a la CDMX es a las 3:00pm.</span>', 'Short o pantalÃ³n ligero de trekking;Playera dry fit;Polar delgado o sudadera;Gafas 100 uv;Tines;Tenis o Botas de media montaÃ±a.', 'Casco;ArnÃ©s;Mosquetones con seguro;Descensor (atc u ocho);Cuerdas;Anillas;Cintas', '', '', '', 1),
(11, 4, 'EntrenaGO', 'Introducirte en el maravilloso mundo del correr, y darte a conocer los beneficios fÃ­sicos y personales. Te queremos ayudar de una manera divertida a planear tu entrenamiento a travÃ©s de rutinas que te permitirÃ¡n adquirir velocidad, resistencia aerÃ³bica, anaerÃ³bica y fuerza muscular. El primer entrenamiento y la prueba serÃ¡n realizados de manera presencial con el entrenador en cualquiera de los siguientes lugares: pista el sope, viveros, bosque de Tlalpan y Ocotal.', 30, 1000, 0, 0, 'Prueba de condiciÃ³n fÃ­sica (Prueba de Cooper).;Programa mensual personalizado.;AsesorÃ­a en la compra de equipo deportivo para correr.;Descuentos en los viajes de GoandLive.', 1, '', 'Shorts deportivos;licras;tennis deportivos;gorra', '', 'Principiantes', 'Pista el sope;Bosque de Tlalpan;Ocotal;Nevado de Toluca;Circuito Gandhi;Cualquier parque con una pista marcada de por lo menos 1 km.', 'Actitud y ganas, no tener padecimientos de enfermedades crÃ³nicas o cardiacas, poder entrenar por los menos tres veces a la semana, edad a partir de los 18 aÃ±os.', 1),
(13, 4, 'Entrena GO&SpecialForces', 'Si quieres conocer hasta donde llegara tu mente y cuerpo, este entrenamiento es para ti, te enseÃ±aremos a correr ultramaratones en montaÃ±a, desierto y bosque, si buscas experiencias de autocontrol mental, y manejo autoconsciente de tu cuerpo, espÃ­ritu y mente nosotros te decimos como lograrlo. ', 30, 1200, 0, 0, 'Prueba de condiciÃ³n fÃ­sica (Prueba de Cooper).;Programa mensual personalizado.;AsesorÃ­a en la compra de equipo deportivo para correr.;Descuentos en los viajes de GoandLive.;TÃ©cnicas de control mental, meditaciÃ³n y yoga.', 3, '', 'Shorts deportivos;licras;tennis deportivos;gorra', '', 'Avanzados', ' Pista el sope;Bosque de Tlalpan;Ocotal;Nevado de Toluca;Iztaccihuatl;La Pila;Sierra de Huasca;Tequisquiapan.', 'Actitud y muchas ganas de romper tus limites, no tener padecimientos de enfermedades crÃ³nicas o cardiacas, entrega de certificado medico expedido con cedula profesional, poder entrenar por los menos cinco veces a la semana, edad a partir de los 18 aÃ±os.', 1),
(14, 4, 'Entrenamiento para IztaccÃ­huatl', '', 30, 7000, 0, 0, 'Prueba de condiciÃ³n fÃ­sica (prueba de Copper) y mÃ¡ximos en el gimnasio.;Programa personalizado para incrementar fuerza y potencia en brazos, piernas, tronco, tren superior e inferior.;Dos salidas de trekking de entrenamiento a la Malinche y Nevado de Toluca.;GuÃ­as profesionales.;Seguro mÃ©dico.;Comida en el IztaccÃ­huatl.;Equipo tÃ©cnico.;Entradas al parque.;Transporte.', 3, '', 'Escalar el IztaccÃ­huatl, considerada la tercera montaÃ±a mÃ¡s alta en MÃ©xico, llegar a su cumbre exitosamente, con preparaciÃ³n fÃ­sica adecuada y tÃ©cnica. ', 'Crampones;piolet;casco;bastones;cuerdas;tiendas de campaÃ±a;equipo de cocina', 'Avanzados', 'Playera dry fit;Polar delgado;Chamarra rompe vientos o impermeable;PantalÃ³n de caminata ligero o pants;Guantes;Gorro;Calcetas calientes;Tenis o Botas de media montaÃ±a;Gafas 100 uv;LÃ¡mpara frontal', 'Actitud, condiciÃ³n fÃ­sica, (entrenar 4 dÃ­as a la semana alguna actividad aerÃ³bica: correr, nadar, bicicleta), Mayores de 18 aÃ±os, Comprometerse con el programa de inicio a fin.', 1),
(15, 4, 'Entrenamiento test', 'entreTest Descripcion', 1, 2, 3, 4, 'entreTest Incluye', 3, '', 'entreTest Vestimenta', 'entreTest Equipo', 'entreTest Nivel', 'entreTest Entrenar', 'entreTest Requisitos', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_evento`
--

CREATE TABLE `tbl_evento` (
  `eve_id` int(11) NOT NULL,
  `act_clave` int(11) NOT NULL,
  `eve_nombre` text NOT NULL,
  `eve_date` text NOT NULL,
  `eve_status` int(11) NOT NULL DEFAULT '1',
  `eve_autos` int(11) NOT NULL DEFAULT '3',
  `eve_lugares_ocupados` varchar(500) NOT NULL DEFAULT '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_evento`
--

INSERT INTO `tbl_evento` (`eve_id`, `act_clave`, `eve_nombre`, `eve_date`, `eve_status`, `eve_autos`, `eve_lugares_ocupados`) VALUES
(1, 1, 'Ascenso al IztaccÃ­huatl', '01/17/2015 7:00 AM - 01/18/2015 5:00 PM', 1, 3, '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'),
(2, 2, 'Nevado de Toluca', '01/24/2015 7:00 AM - 01/24/2015 9:00 AM', 1, 3, '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'),
(3, 2, 'IztaccÃ­huatl', '01/31/2015 7:00 AM - 01/31/2015 9:00 AM', 1, 3, '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'),
(4, 1, 'Ascenso al IztaccÃ­huatl', '02/14/2015 7:00 AM - 02/15/2015 5:00 PM', 1, 3, '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'),
(5, 1, 'Ascenso al Pico de Orizaba', '02/20/2015 7:00 AM - 02/22/2015 7:00 PM', 1, 3, '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'),
(6, 2, 'Nevado de Toluca', '02/28/2015 7:00 AM - 02/28/2015 9:00 AM', 1, 3, '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'),
(7, 2, 'IztaccÃ­huatl', '03/07/2015 7:00 AM - 03/07/2015 9:00 AM', 1, 3, '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'),
(8, 2, 'Cerro San Miguel', '03/14/2015 7:00 AM - 03/14/2015 9:00 PM', 1, 3, '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'),
(9, 2, 'Nevado de Toluca', '03/21/2015 7:00 AM - 03/21/2015 9:00 AM', 1, 3, '[ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]'),
(10, 1, 'Ascenso al IztaccÃ­huatl', '03/28/2015 7:00 AM - 03/29/2015 9:00 PM', 1, 3, '[ [1,0,0,1,0], [1,0,0,0,1], [1,1,0,0,0] ]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_galeria`
--

CREATE TABLE `tbl_galeria` (
  `gal_id` int(11) NOT NULL,
  `gal_imagen` text NOT NULL,
  `gal_status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_galeria`
--

INSERT INTO `tbl_galeria` (`gal_id`, `gal_imagen`, `gal_status`) VALUES
(8, '2ebdajXq95pS.jpeg', 1),
(7, 'Vc4TIbT8oiAT.jpeg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_guias`
--

CREATE TABLE `tbl_guias` (
  `gui_id` int(11) NOT NULL,
  `gui_nombre` text NOT NULL,
  `gui_imagen` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_guias`
--

INSERT INTO `tbl_guias` (`gui_id`, `gui_nombre`, `gui_imagen`) VALUES
(10, 'Ricardo Vigueras', 'RbZfoWNi6D0.jpeg'),
(12, 'Saltiel Serralde', 'xUSGnn3kdtNr.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_historial`
--

CREATE TABLE `tbl_historial` (
  `his_id` int(11) NOT NULL,
  `his_padre` int(11) NOT NULL DEFAULT '0',
  `his_anio` int(11) NOT NULL,
  `his_nombre` text NOT NULL,
  `his_imagen` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_historial`
--

INSERT INTO `tbl_historial` (`his_id`, `his_padre`, `his_anio`, `his_nombre`, `his_imagen`) VALUES
(21, 19, 2014, 'Fin', '2Z5JCl9ix54Z.jpeg'),
(2, 0, 2012, 'Mi test', 'n8K6OpDia6o.jpeg'),
(18, 17, 2010, 'sdff', 'gNZotmeTsBm.jpeg'),
(5, 0, 0, 'Test', 'lqswLbR7Jae1.jpeg'),
(6, 0, 0, 'test', 'Wk7PKZqVY1V3.jpeg'),
(7, 0, 0, 'test', '581oIMSra68H.jpeg'),
(22, 19, 2014, 'Fin 2', 'jY4jVqqWl1eo.jpeg'),
(19, 0, 2014, 'Abril', 'OCPL6mvhzOUx.jpeg'),
(10, 0, 2011, 'prueba 3', 'uTHI90f96xIg.jpeg'),
(17, 0, 2010, '', 'EaDNcwcXpc8P.jpeg'),
(20, 19, 2014, 'Inicio', 'c9Jxxa93Ps94.jpeg'),
(23, 0, 2014, 'Marzo', 'if2QOH4cYKYX.jpeg'),
(24, 23, 2014, 'Marzo 1', '5Xi5vC4M4kEz.jpeg'),
(25, 23, 2014, 'Marzo 2', '2udMvt6VNQwr.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_reservacion`
--

CREATE TABLE `tbl_reservacion` (
  `res_id` int(11) NOT NULL,
  `eve_id` int(11) NOT NULL,
  `res_nombre` text NOT NULL,
  `res_asientos` varchar(100) NOT NULL,
  `res_telefono` text NOT NULL,
  `res_mail` text NOT NULL,
  `res_comentarios` text NOT NULL,
  `res_fecha` datetime NOT NULL,
  `res_status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_reservacion`
--

INSERT INTO `tbl_reservacion` (`res_id`, `eve_id`, `res_nombre`, `res_asientos`, `res_telefono`, `res_mail`, `res_comentarios`, `res_fecha`, `res_status`) VALUES
(1, 2, 'Alejandro Grijalva Antonio', '[ [0,0,0,0,0], [0,1,0,1,0], [0,0,0,0,0] ]', '55 4867 1990', 'alejandrog@netweb.com.mx', 'sin comentarios', '2014-12-26 15:07:42', 1),
(2, 2, 'Jose Javier Grijalva Antonio', '[ [1,1,0,1,0], [0,0,0,0,0], [0,0,0,0,0] ]', '771 986 6868', 'jojagriant@gmail.com', 'Avisar de recibido por favor.', '2014-12-26 15:20:32', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_tipos`
--

CREATE TABLE `tbl_tipos` (
  `act_clave` int(11) NOT NULL,
  `act_nombre` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_tipos`
--

INSERT INTO `tbl_tipos` (`act_clave`, `act_nombre`) VALUES
(1, 'MontaÃ±ismo'),
(2, 'Trekking'),
(3, 'Escalada'),
(4, 'Entrenamiento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_users`
--

CREATE TABLE `tbl_users` (
  `usu_id` int(11) NOT NULL,
  `usu_nombre` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `usu_perfil` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `usu_mail` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `usu_password` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `usu_caduca` int(1) NOT NULL,
  `usu_fecha_registro` datetime NOT NULL,
  `usu_sexo` varchar(1) COLLATE utf8_spanish_ci NOT NULL,
  `usu_foto` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tbl_users`
--

INSERT INTO `tbl_users` (`usu_id`, `usu_nombre`, `usu_perfil`, `usu_mail`, `usu_password`, `usu_caduca`, `usu_fecha_registro`, `usu_sexo`, `usu_foto`) VALUES
(1, 'Alejandro Grijalva Antonio', '1', 'alejandrog@netweb.com.mx', 'qwerty', 0, '2014-06-11 15:58:20', 'm', ''),
(2, 'Administrador de Contenido', '2', 'pruebas@netweb.com.mx', 'a384b6463fc216a5f8ecb6670f86456a', 0, '2014-06-27 00:00:00', 'f', ''),
(3, 'Pruebas Usuario', '1', 'pruebas@ilimago.com.mx', 'a384b6463fc216a5f8ecb6670f86456a', 0, '2014-12-23 23:35:25', 'm', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_actividad`
--
ALTER TABLE `tbl_actividad`
  ADD PRIMARY KEY (`act_id`);

--
-- Indices de la tabla `tbl_evento`
--
ALTER TABLE `tbl_evento`
  ADD PRIMARY KEY (`eve_id`);

--
-- Indices de la tabla `tbl_galeria`
--
ALTER TABLE `tbl_galeria`
  ADD PRIMARY KEY (`gal_id`);

--
-- Indices de la tabla `tbl_guias`
--
ALTER TABLE `tbl_guias`
  ADD PRIMARY KEY (`gui_id`);

--
-- Indices de la tabla `tbl_historial`
--
ALTER TABLE `tbl_historial`
  ADD PRIMARY KEY (`his_id`);

--
-- Indices de la tabla `tbl_reservacion`
--
ALTER TABLE `tbl_reservacion`
  ADD PRIMARY KEY (`res_id`);

--
-- Indices de la tabla `tbl_tipos`
--
ALTER TABLE `tbl_tipos`
  ADD PRIMARY KEY (`act_clave`);

--
-- Indices de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`usu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_actividad`
--
ALTER TABLE `tbl_actividad`
  MODIFY `act_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de la tabla `tbl_evento`
--
ALTER TABLE `tbl_evento`
  MODIFY `eve_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `tbl_galeria`
--
ALTER TABLE `tbl_galeria`
  MODIFY `gal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `tbl_guias`
--
ALTER TABLE `tbl_guias`
  MODIFY `gui_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `tbl_historial`
--
ALTER TABLE `tbl_historial`
  MODIFY `his_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT de la tabla `tbl_reservacion`
--
ALTER TABLE `tbl_reservacion`
  MODIFY `res_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tbl_tipos`
--
ALTER TABLE `tbl_tipos`
  MODIFY `act_clave` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
