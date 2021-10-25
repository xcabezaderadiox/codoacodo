function validar() {
  var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let x = document.forms["form"]["nombre"].value; 
  let y = document.forms["form"]["email"].value;
  let z = document.forms["form"]["mensaje"].value;
  if (x == "") {
    alert("Debe ingresar un nombre");
    return false;
  }
  if (y == "") {
    alert("Debe ingresar un email valido");
    return false;
  }
  if (!filter.test(y)) 
  {
    alert('Debe ingresar un email valido');
    email.focus;
    return false;
  }
  if (z.length < 5 ){ 
    alert("Debe ingresar un mensaje con un minimo de 5 caracteres");
    return false;
  }

}







































































































