/**
 function leerClientes(){
    //FUNCION GET
    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'JSON',
        success : function(clientes) {
            console.log(clientes);
            let cs=clientes.items;
        $("#listaClientes").empty();
            for(i=0;i<cs.length;i++){
                $("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
                $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>")
                
            }

        },
        error : function(xhr, status) {
        alert('ha sucedido un problema');
        }
        });
}
*/

function traerInformacion() {
    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'JSON',
        success : function(respuesta) {
            console.log(respuesta);
            pintarRespuestas(respuesta.items);
    
}

});
}


function pintarRespuestas(items) {
    
    let myTable="<table border='1' padding='30'>";
    myTable+="<tr>";
        myTable+="<th>"+' ID '+"</th>";
        myTable+="<th>"+' Nombre '+"</th>";
        myTable+="<th>"+' Correo electrónico '+"</th>";
        myTable+="<th>"+' Edad '+"</th>";
        myTable+="<th>"+' ¿Desea eliminar el registro? '+"</th>";
    myTable+="</tr>"   
    
    $("#resultado").empty();
    
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>"
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarCliente() {
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:emailCliente,
        age:edad
    };
    
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'POST',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(clientes) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            traerInformacion();
        }
        });
}

function editarCliente() {
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:emailCliente,
        age:edad
    };
    
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'PUT',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(clientes) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            traerInformacion();
        }
        });
}

function borrarCliente(idCliente) {
    
    let data={
        id:idCliente,
        };
    
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'DELETE',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(clientes) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edadCliente").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            traerInformacion();
        }
        });
}


function traerMaquina() {
    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/gym/gym',
        type : 'GET',
        dataType : 'JSON',
        success : function(respuesta) {
            console.log(respuesta);
            pintarRespuestasMaquinas(respuesta.items);
    
}

});
}


function pintarRespuestasMaquinas(items) {
    
    let myTable="<table border='1' padding='30'>";
    myTable+="<tr>";
        myTable+="<th>"+' ID '+"</th>";
        myTable+="<th>"+' Marca '+"</th>";
        myTable+="<th>"+' Modelo '+"</th>";
        myTable+="<th>"+' Categoria '+"</th>";
        myTable+="<th>"+' Nombre '+"</th>";
        myTable+="<th>"+' ¿Desea eliminar el registro? '+"</th>";
    myTable+="</tr>"   
    
    $("#resultadoMaquina").empty();
    
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarMaquina("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>"
    }
    myTable+="</table>";
    $("#resultadoMaquina").append(myTable);
}

function guardarMaquina() {
    let idMaquina=$("#idMaquina").val();
    let marcam=$("#marcaMaquina").val();
    let modelom=$("#modeloMaquina").val();
    let categoriam=$("#categoriaMaquina").val();
    let nombrem=$("#nombreMaquina").val();

    let data={
        id:idMaquina,
        brand:marcam,
        model:modelom,
        category_id:categoriam,
        name:nombrem
    };
    
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/gym/gym',
        type : 'POST',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(clientes) {
            $("#idMaquina").val("");
            $("#marcaMaquina").val("");
            $("#modeloMaquina").val("");
            $("#categoriaMaquina").val("");
            $("#nombreMaquina").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            traerMaquina();
        }
        });
}

function editarMaquina() {
    let idMaquina=$("#idMaquina").val();
    let marcam=$("#marcaMaquina").val();
    let modelom=$("#modeloMaquina").val();
    let categoriam=$("#categoriaMaquina").val();
    let nombrem=$("#nombreMaquina").val();

    let data={
        id:idMaquina,
        brand:marcam,
        model:modelom,
        category_id:categoriam,
        name:nombrem
    };
    
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/gym/gym',
        type : 'PUT',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(clientes) {
            $("#idMaquina").val("");
            $("#marcaMaquina").val("");
            $("#modeloMaquina").val("");
            $("#categoriaMaquina").val("");
            $("#nombreMaquina").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            traerMaquina();
        }
        });
}

function borrarMaquina(idMaquina) {
    
    let data={
        id:idMaquina,
        };
    
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/gym/gym',
        type : 'DELETE',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(clientes) {
            $("#idMaquina").val("");
            $("#marcaMaquina").val("");
            $("#modeloMaquina").val("");
            $("#categoriaMaquina").val("");
            $("#nombreMaquina").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            traerMaquina();
        }
        });
}

function traerMensajes() {
    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'GET',
        dataType : 'JSON',
        success : function(respuesta) {
            console.log(respuesta);
            pintarRespuestasMensajes(respuesta.items);
    
}

});
}

function pintarRespuestasMensajes(items) {
    
    let myTable="<table border='1' padding='30'>";
    myTable+="<tr>";
        myTable+="<th>"+' ID '+"</th>";
        myTable+="<th>"+' Mensaje '+"</th>";
        myTable+="<th>"+' ¿Desea eliminar el registro? '+"</th>";
    myTable+="</tr>"   
    
    $("#resultadoMensajes").empty();
    
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarMensajes("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>"
    }
    myTable+="</table>";
    $("#resultadoMensajes").append(myTable);
}

function guardarMensajes() {
    let idMensajes=$("#idMensajes").val();
    let mensajem=$("#mensajeMensaje").val();
    
    let data={
        id:idMensajes,
        messagetext:mensajem
    };
    
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'POST',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(clientes) {
            $("#idMensajes").val("");
            $("#mensajeMensaje").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            traerMensajes();
        }
        });
}

function editarMensajes() {
    let idMensajes=$("#idMensajes").val();
    let mensajem=$("#mensajeMensaje").val();

    let data={
        id:idMensajes,
        messagetext:mensajem
    };
    
    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'PUT',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(clientes) {
            $("#idMensajes").val("");
            $("#mensajeMensaje").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            traerMensajes();
        }
        });
}

function borrarMensajes(idMensajes) {
    
    let data={
        id:idMensajes,
        };
    
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        type : 'DELETE',
        //dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(clientes) {
            $("#idMensajes").val("");
            $("#mensajeMensaje").val("");
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        complete: function(){
            traerMensajes();
        }
        });
}
