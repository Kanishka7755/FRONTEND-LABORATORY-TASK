
// Function to add a task

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");

    li.innerHTML = task;

    // Create delete button
    let btn = document.createElement("button");

    btn.innerHTML = "Delete";

    btn.className = "delete";

    // Remove task when button is clicked
    btn.addEventListener("click", function () {
        li.remove();
    });

    // Add button to list item
    li.appendChild(btn);

    // Add list item to the list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    input.value = "";
}


// Function to change main image

function changeImage(img) {

    let mainImage = document.getElementById("mainImage");

    mainImage.src = img.src.replace("/100/70", "/500/300");

}