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
    button1.innerHTML = " ✅ ";
    button2.innerHTML = " ✖ ";

    var taskText = document.createTextNode(text);

    x.appendChild(button1);
    x.appendChild(taskText);
    x.appendChild(button2);

    // Add a click event listener to the delete button
    button1.addEventListener("click", function() {
        var listItem = document.getElementById(x.id);
        listItem.remove();
    });


    button2.addEventListener("click", function() {
        var listItem = document.getElementById(x.id);
        listItem.remove();
    });

    document.getElementById("tasklist").appendChild(x);

    document.querySelector('.input-task input').value = '';
    listid++;
}
