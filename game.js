var $game = document.getElementById('game');
$x = $game.children;
// var $card = document.getElementById('game').getElementsByClassName('card');
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
var img = ["memory_icecream.png", "memory_rainbow.png", "memory_watermelon.png", "memory_icecream.png", "memory_rainbow.png", "memory_watermelon.png"];
var back = "memory-_back.png";

//Lance l'affichage aléatoire du tableau img
shuffle(img);

function affiche() {
  $jeu="";
  var i;

  for(i = 0; i < img.length; i++){
    $jeu += "<div id=\"img" + i + "\" class=\"card\"> <img class=\"front\" name ="+i+" src=\"img/" + img[i] + "\"/><img class=\"back\"name ="+i+" src=\"img/" + back + "\"/></div>";
    // console.log("ok");
  }

  console.log(i);
  $game.innerHTML = $jeu;
}
affiche();



var $choix1="";
var $choix2="";
var compteur = 0;

function select(e){
  // console.log(img[e.target.name]); // affiche valeur du tableau
  // console.log(e.target.name) // affiche index

compteur++;
  if (compteur %2 == 1){
    e.target.parentNode.classList.add('flipped');
    // $choix1= img[e.target.name]; //VALEUR
    $choix1 = e.target.name; //INDEX
    console.log("index " + $choix1);
    console.log(img[$choix1]);
  }
  else {
    e.target.parentNode.classList.add('flipped');
      // $choix2= img[e.target.name]; //VALEUR
      $choix2 = e.target.name; //INDEX
      console.log("index " + $choix2);
      console.log(img[$choix2]);

      if(win()) {
        alert("ajouter classe win");
      }
      else {
        for (var i = 0; i < $x.length; i++){
          $x[i].classList.remove('flipped');
        }
      }


  }

}

$game.onclick = select;
// $game.onclick = select, choix;


function win(){
  alert("je suis dans win");
  if (img[$choix1] === img[$choix2]) {
  // alert(img[$choix1]);
    return true;
  }
  else {
    alert("perdu !");
    return false;
  }
}
