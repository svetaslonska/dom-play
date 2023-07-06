//alert("Hi from DOM Play");

/*

    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play

    Un-highlight (normal or otherwise) all lines from all other actors in the play
    
    Must do the work without page re-loads (i.e. it must be done via JavaScript and the DOM)
    
    We can change the HTML as needs

*/

//document.querySelector(".hamlet").style.backgroundColor = "yellow";

function highlight(el){

    if(el.style.backgroundColor == 'white'){//change to blue
        el.style.backgroundColor='blue';
    }else{//change to white
        el.style.backgroundColor='white';
    }
}

function myAlert(){
    alert("I am clicked!");
}

function highlightActor(actor){
    //alert("The current actor is: " + actor);
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){//current actor
            mySpan.style.backgroundColor='blue';
        }else//other actor
            mySpan.style.backgroundColor='white';
    };

}


const spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans){
    //mySpan.addEventListener("click", myAlert);
    mySpan.addEventListener("click", function(ev){
        highlightActor(mySpan.dataset.actor);
    });

}