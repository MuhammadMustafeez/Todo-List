var input = document.getElementById("textFieldInput");
var button = document.getElementById("button1");
var List = document.getElementById("list")

button.addEventListener("click", function(){
    var check = input.value.trim();
    if (check !== "") {
        // Add Task in List
        var li = document.createElement("li");
        li.textContent= check;
        input.value = "";
        
        //Task Completed
        var compButton = document.createElement("button");
        compButton.textContent = "Done";
        compButton.className="comp-btn";
        compButton.addEventListener("click", function(){
            li.classList.toggle("completed");
        });
        
        //Add Remove Button
        var remove = document.createElement("button");
        remove.textContent="Remove";
        remove.className="remove-btn";
        remove.addEventListener("click",function(){
            List.removeChild(li);
        });
        List.appendChild(li);
        li.appendChild(compButton);
        li.appendChild(remove);
        
        
    }else{
        alert("Add Task Input!");
    }
})