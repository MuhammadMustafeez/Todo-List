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
        
        //Task Completed
        var compButton = document.createElement("button");
        compButton.textContent = "Done";
        compButton.className="comp-btn";
        li.appendChild(compButton);
        compButton.addEventListener("click", function(e){
            var task = e.target.parentElement;
            task.classList.toggle("completed");
        });

        //Add Remove Button
        var remove = document.createElement("button");
        remove.textContent="Remove";
        remove.className="remove-btn";
        li.appendChild(remove);
        remove.addEventListener("click",function(){
            List.removeChild(li);
        });


    }else{
        alert("Add Task Input!");
    }
})