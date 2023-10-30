let listid = 0;

function addtask() {
    var text = document.querySelector('.input-task input').value;
    if (text == '') {
        alert('Add something!');
        return; // Use "return" instead of "exit()" to stop the function
    }

    var x = document.createElement("li");
    x.id = "listItem_" + listid;

    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    button1.className = "task-done";
    button2.className = 'delete';
    button1.innerHTML = "✓";
    button2.innerHTML = " ✖ ";
    var span= document.createElement('span')
    span.textContent=text
 //   var taskText = document.createTextNode(text);

    x.appendChild(button1);
    x.appendChild(span)
   // x.appendChild(taskText);
    x.appendChild(button2);

    // Add a click event listener to the delete button
    button1.addEventListener("click", function() {
        var listItem = document.getElementById(x.id);
        var button1 = listItem.querySelector(".task-done"); // Get the "✅" button
        var text = listItem.querySelector('span'); // Get the text
    
        if (text.style.textDecoration === "line-through") {
            text.style.textDecoration = "none"; // Remove the strikethrough
            button1.innerHTML = "✓ "; // Change the button symbol back
        } else {
            text.style.textDecoration = "line-through"; // Apply strikethrough style to the text
            button1.innerHTML = " ✅ "; // Change the button symbol to a checkmark
        }
    });
    
    
    
    


    button2.addEventListener("click", function() {
        var listItem = document.getElementById(x.id);
        listItem.remove();
    });

    document.getElementById("tasklist").appendChild(x);

    document.querySelector('.input-task input').value = '';
    listid++;
}
