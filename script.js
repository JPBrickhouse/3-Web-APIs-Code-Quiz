
var element;

for (i=1; i <=2; i++) {
    
    if(element.getAttribute("data-question")=i){
       element.setAttribute("style", "display:block;");
    }
    else {
        element.setAttribute("style","display:none;")
    }
};


