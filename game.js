// $board = document.getElementById('board');
var $liste = document.getElementById('liste');
var $case = document.getElementsByClassName('case');
var $li = "";

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
//var tableau=["can", "water", "cocktail", "can", "water", "cocktail"];
shuffle(img);

function affiche() {
  $li="";
  var i;
  for(i = 0; i < img.length; i++){
    $li += "<li id=\"img" + i + "\" class=\"case\"> <img name ="+i+" src=\"img/" + img[i] + "\"/></li>";
  }
  $liste.innerHTML = $li;
}
affiche();



//////////////////////////////////////////////////////////
// JEU
//////////////////////////////////////////////////////////

var $choix1="";
var $choix2="";
var compteur = 0;


function selectionne(e){
  // alert(img[e.target.name]); // affiche valeur du tableau
  //alert(e.target.name) // affiche index

  if (compteur%2 == 0){
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


    if(win())
    //supprimer du tableau => d'abord l'index le plus grand
    {
      if ($choix1 > $choix2){
        alert("index choix1 est plus grand : " + $choix1);
        img.splice($choix1,1);
        img.splice($choix2,1);
      }
      // sinon supprimer $choix2
      else {
        alert("index choix2 est plus grand : " + $choix2);
        img.splice($choix2,1);
        img.splice($choix1,1);
      }
      console.log(img);


      // img.pop();
      // img.pop();
      // affiche();
    }

  }
  compteur++;
  console.log("compteur = " + compteur);

}

$liste.onclick = selectionne;


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
