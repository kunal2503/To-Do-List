let input = document.querySelector("input");
let addTask = document.querySelector(".add");
let ul = document.querySelector("ul");



addTask.addEventListener("click", function (e){
    
    let text =input.value.trim();
    if(text==""){
        alert("Enter task");
        input.style.backgroundColor="red";
        setTimeout(() => {
            input.style.backgroundColor="";
        }, 300);
    }
    else{
    let listItem =document.createElement("li");
    ul.prepend(listItem)

    let taskMassage =document.createElement("p");
    let text =input.value;
    taskMassage.innerText=text;
    listItem.prepend(taskMassage);
    
    let deleteButton =document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText="Delete";
    listItem.appendChild(deleteButton);
    deleteButton.addEventListener('click', function() {
        // console.log("click");
        ul.removeChild(listItem);
    });

    let markButton =document.createElement("button");
    markButton.classList.add("mark");
    markButton.innerText="Mark";
    listItem.appendChild(markButton);
    markButton.addEventListener("click",function(){
        taskMassage.style.textDecoration="line-through";
        
    })
}
input.value="";

});

