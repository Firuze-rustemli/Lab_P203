// var mayCat={
//     name:"kitty",
//     food:"kitKat"
// }
// mayCat.name
// var colors=["black","white"];
// colors[1]

//json
// var pet=[
//     {
//         name:"kitty",
//         food:"kitKat"
//     },
//     {
//         name:"barky",
//         food:"apple"
//     }
// ]
// pet[1].food


var pageCounter=1;
var informaton=document.getElementById("info");
var btn=document.getElementById("btn");
btn.addEventListener("click", function(){
    var request=new XMLHttpRequest();
    request.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    request.onload=function(){
    // console.log(request.responseText);
    var Ourdata=JSON.parse(request.responseText);
    // console.log(data[0]);
    renderHTML(Ourdata);
    };
    request.send();
    pageCounter++;
     if(pageCounter>3){
         btn.classList.add("hide-me");
     }
});

function renderHTML(data){
    var result="";
    
    for(i=0; i<data.length;i++){
         result+= "<p>" + data[i].name + " is a " + data[i].species + "</p>";
    }

   informaton.insertAdjacentHTML('beforeend', result);
}