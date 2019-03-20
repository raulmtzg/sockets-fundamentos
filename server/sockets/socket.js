
const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario conectado');

    //Enviar mensaje al usuario
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta APP'
    });

    //Cuando un cliente se desconecta de la aplicacion
    client.on('disconnect', () =>{
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente,
    //El primer parametro dentro de ON, se debe llamar igual que del lado del front-end, para este caso es "enviarMensaje"
    client.on('enviarMensaje', (data, callback) => {
        
        console.log(data);

        //Esto es para enviar mensajes a todos los usuarios
        client.broadcast.emit('enviarMensaje', data );

        //Estas lineas son para confirmar al front-end que se recibio bien el mensaje, utilizando el callback
        // if( mensaje.usuario ) {
        //     callback({
        //         resp: 'todo salio bien'
        //     });
        // }else{
        //     callback({
        //         resp: 'todo salio mal!!!'
        //     });
        // }
        

    });


});