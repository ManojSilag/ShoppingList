var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

alert('Click on the Item to scratch it or click on remove button to remove the Item from list');
function inputvalue(){
   return input.value.length;
}

function addListAfterClick(){
    if (inputvalue() > 0){
     var li = document.createElement("li");
     li.appendChild(document.createTextNode(input.value));
     ul.appendChild(li);
     var remove = document.createElement("button");
     var node = document.createTextNode("Remove");
     remove.appendChild(node);
     li.appendChild(remove);
     remove.classList.add("remove");
     input.value="";
    }
}

function addListAfterEnter(event){
    if(inputvalue() > 0 && event.which === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        var remove = document.createElement("button");
        var node = document.createTextNode("Remove");
        remove.appendChild(node);
        li.appendChild(remove);
        remove.classList.add("remove");
        input.value="";
        }
}
button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterEnter)
//***************************************************//

//1. If you click on the list item, it toggles the .done  class on and off.

// Event Delegation
ul.addEventListener('click', function(e) {
    var target = e.target;
    // check whether element clicked is an li
    if (e.target && e.target.nodeName == 'LI') {
      // toggle class on li
      target.classList.toggle('done');
    }
  });

//***********************************************//

//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
//When adding a new list item, it automatically adds the delete button next to it. 
//Add remove button
var butt =document.querySelectorAll("li");
for (let i = 0; i< butt.length; i++) {
    var remove = document.createElement("button");
    var node = document.createTextNode("Remove");
    remove.appendChild(node);
    butt[i].insertAdjacentElement("beforeend",remove);
    remove.classList.add("remove");
    }

//****************************************************//
//to delete the item when clicked on its corresponding delete button.
ul.addEventListener('click',function(e){
    var target = e.target;
    if(e.target && e.target.classList == 'remove'){
    // this.remove();
    target.parentNode.remove();
    target.remove();
    }
})






