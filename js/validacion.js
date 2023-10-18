
const contraseñaValid = document.getElementById("contraseñaValid")
const contraseñaInvalid = document.getElementById("contraseñaInvalid")
const contraseña2 = document.getElementById("contraseña2");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

//contraseñas
const btnSubmit = document.getElementById("submit");

password1.addEventListener("input",() => {
    if (password1.checkValidity()) {
      password2.setCustomValidity(""); // Restablecer la validación personalizada
    } else {
      password2.setCustomValidity("Por favor, complete el campo Contraseña primero");
    }
  });

  password2.addEventListener("input", () => {
    if (password1.value === password2.value) {
      password2.setCustomValidity("");
      document.getElementById("contraseñaValid").textContent = "Las contraseñas coinciden";
    } else {
       password2.setCustomValidity("Las contraseñas no coinciden");
      document.getElementById("contraseñaInvalid").textContent = "Las contraseñas no coinciden";
    }
  });




btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    
})

document.getElementById("submit").addEventListener("click",(event)=>{
    event.preventDefault();

    
})

// document.getElementById("myForm").addEventListener("submit", function(event){
//     var elements = this.elements;
//     for (var i = 0, len = elements.length; i < len; ++i) {
//         elements[i].required = true;
//     }
// });

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la validación y el envío predeterminados
    var elements = form.elements;
    
    var isEmpty = Array.prototype.map.call(elements, function(element) {
        return element.value === '';
    }).includes(true);

    if (!isEmpty) {
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].required = true;
        }
        form.submit(); // Envía el formulario si todos los campos están rellenados
    }
});