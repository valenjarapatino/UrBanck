

        function formValidate(){
   
           let x = document.forms["myform"]["correo"].value;
           let y = document.forms["myform"]["cedula"].value;
           let z = document.forms["myform"]["edad"].value;
   
           if(x =="" || y =="" || z ==""){
               alert("Debe rellenar todos los campos");
               return false;x
           }
   
        }
   