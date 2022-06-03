window.onload=principal;
 
function principal(){
    document.getElementById("btnModificar").addEventListener("click",modificarCliente)
    document.getElementById("mostrarClientes").addEventListener("click", mostrarClientes)
    document.getElementById("btnAceptar").addEventListener("click",agregarCliente)
    document.getElementById("btnCancelar").addEventListener("click",cancelarCliente)
}
var var_id;
async function agregarCliente(){

    let nombre=document.getElementById("nomYape").value;
    let dni=document.getElementById("numDNI").value;
    let direccion=document.getElementById("direccion").value;
    try {
      let agregar=await axios.post("http://localhost:3000/clientes",{
        nomYape:nombre,
        dni:dni,
        direccion:direccion
    });  
    alert("Cliente Agendado Correctamente")
    } catch (err) {
        alert(err)
    }
    

}

function limpiarImput(){
   document.getElementById("nomYape").value="";
   document.getElementById("numDNI").value="";
   document.getElementById("direccion").value="";

}
async function mostrarClientes(){
    document.getElementById("CuerpoTabla").innerHTML="";
    try {
           let cliente=await axios.get("http://localhost:3000/clientes");

    for (let item of cliente.data) {
        document.getElementById("CuerpoTabla").innerHTML+=
        `<tr>
                        <th scope="row">${item.id}</th>
                        <td>${item.nomYape}</td>
                        <td>${item.dni}</td>
                        <td>${item.direccion}</td>
                        <td><button onclick="modCliente(${item.id})">M</button></td>
        
        </tr>`;

    } 
    }catch (err) {
        alert(err)
    }

 }
async function modCliente(id){
    var_id=id;
    let cli=await axios.get("http://localhost:3000/clientes");
    for (let item of cli.data) {
        if (item.id==var_id) {
            document.getElementById("nomYape").value=item.nomYape;
            document.getElementById("numDNI").value=item.dni;
            document.getElementById("direccion").value=item.direccion;
        }
    }
    
}
   
async function cancelarCliente(){

    document.getElementById("nomYape").value=" ";
    document.getElementById("numDNI").value=" ";
    document.getElementById("direccion").value=" ";
    
}
async function modificarCliente(){
    try {
          let nombre=document.getElementById("nomYape").value;
    let dni=document.getElementById("numDNI").value;
    let direccion=document.getElementById("direccion").value;
    let cliente=await axios.put("http://localhost:3000/clientes/"+var_id,{
      nomYape: nombre,
      dni: dni,
      direccion: direccion,
    });
    alert("Cliente Modificado Correctamente")
    } catch (err) {
        alert(err)
    }
  
   

}
