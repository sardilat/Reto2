function leerClientes(){
    //FUNCION GET
    $.ajax({
        url : 'https://g9a9a234c72c860-hr1j563ga8bjgnvd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type : 'GET',
        dataType : 'json',

        success : function(clientes) {
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
            leerClientes();
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
            leerClientes();
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
            leerClientes();
        }
        });
}
