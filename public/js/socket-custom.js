var socket = io();

        //Los ON son para escuchar
        socket.on('connect', function(){
            console.log('conectado al servidor');
        });

        //Funcion para identificar el momento en que se pierde la conexion con el servidor
        socket.on('disconnect', function(){
            console.log('Perdimos conexion con el servidor');
        });

        //ENVIAR MENSAJE AL SERVIDOR
        //Los emit son para enviar informacion
        //La Funcion de abajo es un callback para determinar si se recibio o no la informacion enviada al servidor
        socket.emit('enviarMensaje', {
            usuario: 'Raul',
            mensaje: 'Hola Mundo'
        }, function( resp ){
            console.log('Respuesta server: ', resp);

        });

        //ESCUCHAR INFORMACION DEL SERVIDOR
        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor: ', mensaje);
        });