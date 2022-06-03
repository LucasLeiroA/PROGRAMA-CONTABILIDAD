window.onload=principal;

function principal(){
    document.getElementById("btnAceptar").addEventListener('click',aceptar)
}   

function aceptar(){
    let contrasena=document.getElementById("contraseña").value;
    if(contrasena!="milanesa"){
        document.getElementById("contraseña").value="";
        document.getElementById("cuadrado").innerHTML== `
        <input type="text" id="contraseña">
        <button id="btnAceptar">Ingresar</button>
        <button id="btnCancelar">Cancelar</button>

        `                                   
        
    }else{
         document.getElementById("cuadrado").innerHTML=="";
    document.getElementById("cuadrado").innerHTML+=`

    <button><a href="/Registrar Stock/RegistrarStock.html">Registrar Stock</a> </button>
   
    `;  
    }
 

}