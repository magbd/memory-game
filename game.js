var $game = document.getElementById('game');
var $x = $game.children;
var $card = document.getElementById('game').getElementsByClassName('card');
var $moves = document.getElementById('moves');
var $jeu = "";
var $choix1="";
var $choix2="";
var $compteur = 0;
var $match = 0;
var $compteurMoves = 0;


//////////////////////////////////////////////////////////
// AFFICHAGE
//////////////////////////////////////////////////////////
$moves.innerHTML = "MOVES : "+$compteurMoves; //affichage compteur coups joués

var $img = ["memory_icecream.png", "memory_rainbow.png", "memory_watermelon.png", "memory_icecream.png", "memory_rainbow.png", "memory_watermelon.png"];
var $back = "memory_back.png";

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

//Lance l'affichage aléatoire du tableau $img
shuffle($img);

function affiche() {
  $jeu="";
  var i;

  for(i = 0; i < $img.length; i++){
    $jeu += "<div id=\"img" + i + "\" class=\"card onGame\"> <img class=\"front\" name ="+i+" src=\"img/" + $img[i] + "\"/><img class=\"back\"name ="+i+" src=\"img/" + $back + "\"/></div>";
  }

  $game.innerHTML = $jeu;
}
affiche();

//////////////////////////////////////////////////////////
// JEU
//////////////////////////////////////////////////////////

function play(e){
  if (verifie(e)) { //fonction qui vérifie si la carte a été jouée
    alert ("Choisissez une autre carte !");
  } else { // fonction qui selectionne la carte choix1 puis choix2
    select(e);
  }
}

function verifie(e){
  if (e.target.parentNode.classList.contains('flipped') || e.target.parentNode.classList.contains('win')) {
    return true
    //si condition true, la fonction s'arrete et exécute ligne 60 alert("Choisissez une autre carte !")
  } else {
    return false
    // si condition false, lance la ligne 62 et lance la fonction select(e)
  }
}


function select(e){
  // console.log($img[e.target.name]); // affiche valeur du tableau
  // console.log(e.target.name) // affiche index

  $compteur++;
  if ($compteur %2 == 1){
    e.target.parentNode.classList.add('flipped');
    // $choix1= $img[e.target.name]; //VALEUR
    $choix1 = e.target.name; //INDEX
    console.log("index " + $choix1);
    console.log($img[$choix1]);
  }
  else {
    e.target.parentNode.classList.add('flipped');
    // $choix2= $img[e.target.name]; //VALEUR
    $choix2 = e.target.name; //INDEX
    console.log("index " + $choix2);
    console.log($img[$choix2]);

    $compteurMoves ++;

    timer = setInterval("win()", 1000);

  }

  $moves.innerHTML = "MOVES : "+$compteurMoves;
}


// $game.onclick = select;
$game.onclick = play;


function win(){

  clearInterval(timer); //stop timer
  if ($img[$choix1] === $img[$choix2]) {
    $match += 2;
    // alert($img[$choix1]);
    // alert("gagné!");
    for (var i = 0; i < $x.length; i++){
      if($x[i].classList.contains('flipped')){
        $x[i].classList.add('win');
        $x[i].classList.remove('onGame');
      }
    }
    if($match == 6){
      alert("BRAVO ! Partie terminée en " + $compteurMoves + " coups !");
    }
  }
  else {
    // alert("perdu !");
    for (var i = 0; i < $x.length; i++){
      if($x[i].classList.contains('onGame')){
        $x[i].classList.remove('flipped');
      }
    }
  }
}
