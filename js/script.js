function addCart(title) {
  var cartNumber = document.getElementById("cartNumber");
  var nbr = Number(cartNumber.textContent);

  cartNumber.textContent = nbr + 1;

  if (cartNumber.classList.contains("badge-info")) {
    cartNumber.classList.remove("badge-info");
    cartNumber.classList.add("badge-warning");
  }

  document.getElementById("exampleModalLabel").textContent = title;
  document.getElementById("modal-body").textContent =
    title + " has been added successfully!";
}

function add(QteP1, prix, priceLabel) {
  var inputQteP1 = document.getElementById(QteP1);
  var spanPrice = document.getElementById(priceLabel);

  inputQteP1.value = Number(inputQteP1.value) + 1;
  spanPrice.textContent = Number(spanPrice.textContent) + prix;
}

function remove(QteP1, prix, priceLabel) {
  var inputQteP1 = document.getElementById(QteP1);
  var spanPrice = document.getElementById(priceLabel);

  if (Number(inputQteP1.value) > 1) {
    inputQteP1.value = Number(inputQteP1.value) - 1;
    spanPrice.textContent = Number(spanPrice.textContent) - prix;
  }
}

function supp(idProduct) {
  document.getElementById(idProduct).classList.add("d-none");
}

//function empty() {
//if (cardempty)
//{
// empty.classList.remove("d-none");
// } else {
// empty.classList.add("d-none");
//}
/* alert("hello world");
prompt("Enter your name");
confirm("do you really want to delete?");
document.write("<h1>Hello world</h1>"); // write on the page
console.log("Hello World"); */

//var x = Number(prompt("entrer la valeur de x"));
//var y = Number(prompt("entrer la valeur de y"));
// x = x.toString();
// y = y.toString();
// isNAN (variable) traja3 true si variable is not number, false else
// && et || ou !not
/*
if (isNaN(x) || isNaN(y)) {
  document.write("please enter a valid number");
} else {
  document.write(
    "la somme de " + x + " + " + y + " est egal Ã  " + (x + y) + "<br>"
  );
  document.write(
    "la soustraction de " + x + " - " + y + " est egal Ã  " + (x - y) + "<br>"
  );
  document.write(
    "la multiplication de " + x + " * " + y + " est egal Ã  " + x * y + "<br>"
  );
  document.write(
    "la division de " + x + " / " + y + " est egal Ã  " + x / y + "<br>"
  );
} */

/* function calculer() {
  var x = Number(document.NumbersForm.x.value);
  var y = Number(document.NumbersForm.y.value);

  if (isNaN(x) || isNaN(y)) {
    document.write("please enter a valid number");
  } else {
    document.write(
      "la somme de " + x + " + " + y + " est egal Ã  " + (x + y) + "<br>"
    );
    document.write(
      "la soustraction de " + x + " - " + y + " est egal Ã  " + (x - y) + "<br>"
    );
    document.write(
      "la multiplication de " + x + " * " + y + " est egal Ã  " + x * y + "<br>"
    );
    document.write(
      "la division de " + x + " / " + y + " est egal Ã  " + x / y + "<br>"
    );
  }
} 

function addition() {
   var x = Number(document.NumbersForm.x.value);
   var y = Number(document.NumbersForm.y.value);

   if (isNaN(x) || isNaN(y)) {
      document.NumbersForm.z.value = "please enter a valid number";
   } else {
      document.NumbersForm.z.value = x + y;
   }
}

function soustraction() {
   var x = Number(document.NumbersForm.x.value);
   var y = Number(document.NumbersForm.y.value);

   if (isNaN(x) || isNaN(y)) {
      document.NumbersForm.z.value = "please enter a valid number";
   } else {
      document.NumbersForm.z.value = x - y;
   }
}

function multiplication() {
   var x = Number(document.NumbersForm.x.value);
   var y = Number(document.NumbersForm.y.value);

   if (isNaN(x) || isNaN(y)) {
      document.NumbersForm.z.value = "please enter a valid number";
   } else {
      document.NumbersForm.z.value = x * y;
   }
}

function division() {
   var x = Number(document.NumbersForm.x.value);
   var y = Number(document.NumbersForm.y.value);

   if (isNaN(x) || isNaN(y)) {
      document.NumbersForm.z.value = "please enter a valid number";
   } else {
      document.NumbersForm.z.value = x / y;
   }
}

function calculer(operation) {
   var x = Number(document.NumbersForm.x.value);
   var y = Number(document.NumbersForm.y.value);
   var errorcalculatrice = document.getElementById("errorcalculatrice");

   /*  if (isNaN(x) || isNaN(y)) {
     document.NumbersForm.z.value = "please enter a valid number";
   } else if (operation == "+") {
     document.NumbersForm.z.value = x + y;
   } else if (operation == "-") {
     document.NumbersForm.z.value = x - y;
   } else if (operation == "*") {
     document.NumbersForm.z.value = x * y;
   } else if (operation == "/") {
     document.NumbersForm.z.value = x / y;
   }
 } 

   if (isNaN(x) || isNaN(y)) {
      errorcalculatrice.classList.remove("d-none");
   } else {
      errorcalculatrice.classList.add("d-none");

      switch (operation) {
         case "+":
            document.NumbersForm.z.value = x + y;
         case "-":
            document.NumbersForm.z.value = x - y;
         case "*":
            document.NumbersForm.z.value = x * y;
         case "/":
            document.NumbersForm.z.value = x / y;
      }
   }
}

function factoriel() {
   var x = Number(document.FactorielForm.x.value);
   var errorfactoriel = document.getElementById("errorfactoriel");

   if (isNaN(x)) {
      errorfactoriel.classList.remove("d-none");
   } else {
      errorfactoriel.classList.add("d-none");

      var f = 1;
      for (var i = 1; i <= x; i++) {
         f = f * i;
      }
      document.FactorielForm.z.value = f;
   }
}

*/
