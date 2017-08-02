var config = {
  apiKey: "AIzaSyBgbA-ZX4ktrSjr1tU8VCYLHXVIWjXMagQ",
  authDomain: "primerproyecto-react.firebaseapp.com",
  databaseURL: "https://primerproyecto-react.firebaseio.com",
  projectId: "primerproyecto-react",
  storageBucket: "primerproyecto-react.appspot.com",
  messagingSenderId: "1045378714785"
};
firebase.initializeApp(config);

var objDb = {
  usuarios: []
};
var formulario = document.getElementById('crear-usuario');
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  var nombre = document.getElementById('name').value;
  var correo= document.getElementById("email").value;
  var password = document.getElementById('password').value;
  objDb.usuarios.push({
    name: nombre,
    email: correo,
    password: password

  });
guardadDatos(objDb);

});



// Get a reference to the database service
  var database = firebase.database();

function guardadDatos(usuarios) {
  //Usar el metodo set() para guardar la base de datos

  database.ref('/').set(usuarios);

}
function mostrarUsuarios(usuarios) {
  usuarios.forEach(function (usuario) {
      document.getElementById('usuarios').innerHTML = "";
    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    h3.textContent = usuario.name;
    p.innerHTML = "<strong>Email:</strong>" + usuario.email;
    div.appendChild(h3);
    div.appendChild(p);
    document.getElementById('usuarios').appendChild(div);

  });

}

  //leer datos usar el metodo .on(value)
database.ref('/usuarios').on('value', function (snapshot) {
  var usuarios= snapshot.val();
  objDb.usuarios= usuarios;
mostrarUsuarios(usuarios);

});
