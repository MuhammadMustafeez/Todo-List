var input = document.getElementById("textFieldInput");
var button = document.getElementById("button1");
var List = document.getElementById("list")

button.addEventListener("click", function(){
    var check = input.value.trim();
    if (check !== "") {
        // Add Task in List
        var li = document.createElement("li");
        li.textContent= check;
        List.appendChild(li);
        input.value = "";

        //Add Remove Button
        var remove = document.createElement("button");
        remove.textContent="Remove";
        remove.className="remove-btn";
        li.appendChild(remove);
        remove.addEventListener("click",function(){
            List.removeChild(li);
        });

        //Task Completed
    
    }else{
        alert("Add Task Input!");
    }
})