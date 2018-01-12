        $(function() {

            /* initialize the external events
             -----------------------------------------------------------------*/
            function ini_events(ele) {
                ele.each(function() {

                    // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
                    // it doesn't need to have a start or end
                    var eventObject = {
                        title: $.trim($(this).text()) // use the element's text as the event title
                    };

                    // store the Event Object in the DOM element so we can get to it later
                    $(this).data('eventObject', eventObject);

                    // make the event draggable using jQuery UI
                    $(this).draggable({
                        zIndex: 1070,
                        revert: true, // will cause the event to go back to its
                        revertDuration: 0  //  original position after the drag
                    });

                });
            }
            ini_events($('#external-events div.external-event'));

            /* initialize the calendar
             -----------------------------------------------------------------*/
            //Date for the calendar events (dummy data)
            var date = new Date();
            var d = date.getDate(),
                    m = date.getMonth(),
                    y = date.getFullYear();
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                buttonText: {//This is to add icons to the visible buttons
                    prev: "<img src='img/preview_calendario.png'>",
                    next: "<img src='img/next_calendario.png'>",
                    today: 'today',
                    month: 'month',
                    week: 'week',
                    day: 'day'
                },
                //Random default events
                events: [
                    {
                        title: 'Ascenso al Iztaccihuatl',
                        start: new Date(2015, 0, 17),
                        end: new Date(2015, 0, 18),
                        backgroundColor: "#87c1ca", //red 
                        url: 'detalle.html#01/ascenso-al-Iztaccihuatl',
                        borderColor: "#87c1ca" //red
                    },
                    {
                        title: 'Nevado de Toluca',
                        start: new Date(2015, 0, 24),
                        end: new Date(2015, 0, 24),
                        url: 'detalle.html#02/nevado-de-Toluca',
                        backgroundColor: "#a6c237", //yellow
                        borderColor: "#a6c237" //yellow
                    },
                    {
                        title: 'Iztaccihuatl',
                        start: new Date(2015, 0, 31),
                        end: new Date(2015, 0, 31),
                        url: 'detalle.html#03/Iztaccihuatl',
                        backgroundColor: "#e7b041", //Blue
                        borderColor: "#e7b041" //Blue
                    },
                    {
                        title: 'Ascenso al Iztaccihuatl',
                        start: new Date(2015, 1, 14),
                        end: new Date(2015, 1, 15),
                        backgroundColor: "#87c1ca", //red 
                        url: 'detalle.html#04/ascenso-al-Iztaccihuatl',
                        borderColor: "#87c1ca" //red
                    },
                    {
                        title: 'Ascenso al Pico de Orizaba',
                        start: new Date(2015, 1, 20),
                        end: new Date(2015, 1, 22),
                        url: 'detalle.html#05/ascenso-al-pico-de-Orizaba',
                        backgroundColor: "#a6c237", //yellow
                        borderColor: "#a6c237" //yellow
                    },
                    {
                        title: 'Nevado de Toluca',
                        start: new Date(2015, 1, 28),
                        end: new Date(2015, 1, 28),
                        url: 'detalle.html#06/nevado-de-Toluca',
                        backgroundColor: "#e7b041", //Blue
                        borderColor: "#e7b041" //Blue
                    },
                    {
                        title: 'Iztaccihuatl',
                        start: new Date(2015, 2, 07),
                        end: new Date(2015, 2, 07),
                        backgroundColor: "#87c1ca", //red 
                        url: 'detalle.html#07/Iztaccihuatl',
                        borderColor: "#87c1ca" //red
                    },
                    {
                        title: 'Cerro San Miguel',
                        start: new Date(2015, 2, 17),
                        end: new Date(2015, 2, 17),
                        url: 'detalle.html#08/cerro-san-miguel',
                        backgroundColor: "#a6c237", //yellow
                        borderColor: "#a6c237" //yellow
                    },
                    {
                        title: 'Nevado de Toluca',
                        start: new Date(2015, 2, 21),
                        end: new Date(2015, 2, 21),
                        url: 'detalle.html#09/nevado-de-Toluca',
                        backgroundColor: "#e7b041", //Blue
                        borderColor: "#e7b041" //Blue
                    },
                    {
                        title: 'Ascenso al Iztaccihuatl',
                        start: new Date(2015, 2, 28),
                        end: new Date(2015, 2, 29),
                        url: 'detalle.html#10/ascenso-al-Iztaccihuatl',
                        backgroundColor: "#e7b041", //Blue
                        borderColor: "#e7b041" //Blue
                    }
                ],
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar !!!
                drop: function(date, allDay) { // this function is called when something is dropped

                    // retrieve the dropped element's stored Event Object
                    var originalEventObject = $(this).data('eventObject');

                    // we need to copy it, so that multiple events don't have a reference to the same object
                    var copiedEventObject = $.extend({}, originalEventObject);

                    // assign it the date that was reported
                    copiedEventObject.start = date;
                    copiedEventObject.allDay = allDay;
                    copiedEventObject.backgroundColor = $(this).css("background-color");
                    copiedEventObject.borderColor = $(this).css("border-color");

                    // render the event on the calendar
                    // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                    $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                    // is the "remove after drop" checkbox checked?
                    if ($('#drop-remove').is(':checked')) {
                        // if so, remove the element from the "Draggable Events" list
                        $(this).remove();
                    }

                }
            });

            /* ADDING EVENTS */
            var currColor = "#f56954"; //Red by default
            //Color chooser button
            var colorChooser = $("#color-chooser-btn");
            $("#color-chooser > li > a").click(function(e) {
                e.preventDefault();
                //Save color
                currColor = $(this).css("color");
                //Add color effect to button
                colorChooser
                        .css({"background-color": currColor, "border-color": currColor})
                        .html($(this).text()+' <span class="caret"></span>');
            });
            $("#add-new-event").click(function(e) {
                e.preventDefault();
                //Get value and make sure it is not null
                var val = $("#new-event").val();
                if (val.length == 0) {
                    return;
                }

                //Create event
                var event = $("<div />");
                event.css({"background-color": currColor, "border-color": currColor, "color": "#fff"}).addClass("external-event");
                event.html(val);
                $('#external-events').prepend(event);

                //Add draggable funtionality
                ini_events(event);

                //Remove event from text input
                $("#new-event").val("");
            });
        });