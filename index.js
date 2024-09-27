var textInput = document.getElementById("textFieldInput");
var List = document.getElementById("list");
var button = document.getElementById("button")
button.addEventListener("click",function(){
    var check = textInput.value.trim();
    if(check !== ""){
        var li = document.createElement("li");
        li.textContent = textInput.value;
        List.appendChild(li);

    }else{
        alert("Plz Add The Task!");
    }
})
