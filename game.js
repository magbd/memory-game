var $game = document.getElementById('game');
var $card = document.getElementById('game').getElementsByClassName('card');
var $jeu = "";

// $tableau = $board.children;



function shuffle(a)
{
  var j = 0;
  var valI = '';
  var valJ = valI;
  var l = a.length - 1;
  while(l > -1)
  {
    j = Math.floor(Math.random() * l);
    valI = a[l];
    valJ = a[j];
    a[l] = valJ;
    a[j] = valI;
    l = l - 1;
  }
  return a;
}

//////////////////////////////////////////////////////////
// AFFICHAGE
//////////////////////////////////////////////////////////
var img = ["can.svg", "water.svg", "cocktail.svg", "can.svg", "water.svg", "cocktail.svg"];
var imgOk = [];
var back = "question-grey.svg";
//var tableau=["can", "water", "cocktail", "can", "water", "cocktail"];

//Lance l'affichage aléatoire du tableau img
shuffle(img);

// //vérifie si l'image est dans le tableau imgOK
// function estOk(testOk)
// {
//   for(i = 0; i < imgOk.length; i++) {
//
//     if (imgOk[i]===testOk) {
//       return true;
//       //j'affiche face visible
//     }
//   }
//   return false;
//   //  j'affiche face caché
// }



function affiche() {
  $jeu="";
  var i;
  // for(i = 0; i < img.length; i++) {

  // if (estOk(img[i])) {
  //Si img[i] dans tableau imgOk => afficher face (...et retirer le click ??)
  for(i = 0; i < img.length; i++){
    $jeu += "<div id=\"img" + i + "\" class=\"card\"> <img class=\"front\" name ="+i+" src=\"img/" + img[i] + "\"/><img class=\"back\"name ="+i+" src=\"img/" + back + "\"/></div>";
    // console.log("ok");
  }
  // }
  // else {
  //sinon
  //Si img[i] dans tableau img => afficher le dos
  // $card += "<div id=\"img" + i + "\" class=\"case\"> <img name ="+i+" src=\"img/" + img[i] + "\"/></div>";
  // }
  // }
  console.log(i);
  $game.innerHTML = $jeu;
}
affiche();

// FLIP CARD JQUERY
// $('.card').click(function (e) {
//   $(this).toggleClass('flipped');
// });

$x = $game.children;
var $choix1="";
var $choix2="";
var compteur = 0;

function select(e){
  // e.target.parentNode.classList.toggle('flipped');

  // console.log(img[e.target.name]); // affiche valeur du tableau
  // console.log(e.target.name) // affiche index

compteur++;
  if (compteur <= 2){
    e.target.parentNode.classList.add('flipped');
    // $choix1= img[e.target.name]; //VALEUR
    $choix1 = e.target.name; //INDEX
    console.log("index " + $choix1);
    console.log(img[$choix1]);
  }
  else {
      // $choix2= img[e.target.name]; //VALEUR
      $choix2 = e.target.name; //INDEX
      console.log("index " + $choix2);
      console.log(img[$choix2]);

      if(win()) {
        alert("select/if win");
      }
      else {
        alert("select/else perdu");
        for (var i = 0; i < $x.length; i++){
          $x[i].classList.remove('flipped');
          compteur = 0;
        }
      }


  }

}

$game.onclick = select;
// $game.onclick = select, choix;

//////////////////////////////////////////////////////////
// JEU
//////////////////////////////////////////////////////////





function choix(e){
  console.log(img[e.target.name]); // affiche valeur du tableau
  console.log(e.target.name) // affiche index
  // e.target.parentNode.classList.toggle('flipped'); OK


  // if (compteur%2 == 0){
  //   // $choix1= img[e.target.name]; //VALEUR
  //   $choix1 = e.target.name; //INDEX
  //   console.log("index " + $choix1);
  //   console.log(img[$choix1]);
  //
  // }
  // else {
  //   // $choix2= img[e.target.name]; //VALEUR
  //   $choix2 = e.target.name; //INDEX
  //   console.log("index " + $choix2);
  //   console.log(img[$choix2]);
  //
  //
  //   if(win())
  //   //supprimer du tableau => d'abord l'index le plus grand
  //
  //   {
  //     if ($choix1 > $choix2){
  //       alert("index choix1 est plus grand : " + $choix1);
  //       //Envoie les cartes validées dans un nouveau tableau imgOk
  //       imgOk.push(img[$choix1]);
  //       imgOk.push(img[$choix2]);
  //       //Supprime du tableau img
  //       img.splice($choix1,1);
  //       img.splice($choix2,1);
  //
  //     }
  //     // sinon supprimer $choix2
  //     else {
  //       alert("index choix2 est plus grand : " + $choix2);
  //       //Envoie les cartes validées dans un nouveau tableau imgOk
  //       imgOk.push(img[$choix2]);
  //       imgOk.push(img[$choix1]);
  //       //Supprime du tableau img
  //       img.splice($choix2,1);
  //       img.splice($choix1,1);
  //     }
  //     console.log(img);
  //     console.log(imgOk);
  //
  //     affiche();
  //
  //
  //     // img.pop();
  //     // img.pop();
  //     // affiche();
  //   }
  //
  // }
  // compteur++;
  // console.log("compteur = " + compteur);

}


function win(){
  alert("je suis dans win");
  if (img[$choix1] === img[$choix2]) {
    alert("gagné ! je suis dans la condition true de win");


    // alert(img[$choix1]);
    return true;
  }
  else {
    alert("perdu !");
    return false;
  }
}
