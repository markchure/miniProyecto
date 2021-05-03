//Espera a que la página cargue por completo
$(document).ready(function(){
  $("#button").click(function(){
    // https://www.youtube.com/watch?v=trmLZVfNdlU | Activar y desactivar boton dinámicamente
    $("#button").attr("disabled", "disabled");
    setTimeout(function(){
      $("#button").removeAttr("disabled");
    }, 3000);
  })
});
/*Lo de arriba es lo mismo que:
$(function(){

});*/
function setValues() {
  let project = {
    tittle: document.getElementById("tittle").value,
    description: document.getElementById("description").value,
    productOwner: document.getElementById("productOwner").value,
    priority: document.getElementById("priority").value,
    dateCreated: document.getElementById("dateCreated").value,
  };

  let validateMessage = validateFields(project.tittle, project.description, project.productOwner, project.priority, project.dateCreated);

  if (validateMessage.length > 0){
    alert(validateMessage);
  }
  else{
    alert(`${project.tittle}\n${project.description}\n${project.productOwner}\n${project.priority}\n${project.dateCreated}`);
  }
}

function validateFields(tittle,description,productOwner,priority,dateCreated){
  let message = "";

  if (tittle.length == 0) {
    message += "Tittle is empty\n"
  }

  if (description.length == 0) {
    message += "Description is empty\n"
  }

  if (productOwner == "Product Owner") {
    message += "Product Owner is empty\n"
  }

  if (priority == "Priority") {
    message += "Priority is empty\n"
  }

  if (dateCreated.length == 0) {
    message += "Date Created is empty"
  }

  return message;
}