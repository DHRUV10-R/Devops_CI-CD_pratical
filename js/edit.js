// Load saved content when the page opens
window.onload = function () {

    const savedContent = localStorage.getItem("editedContent");

    if (savedContent) {
        document.getElementById("editText").value = savedContent;
    }

};

// Save edited content
function saveEdit() {

    const text = document.getElementById("editText").value.trim();
    const status = document.getElementById("saveStatus");

    // Validation
    if (text === "") {
        alert("Please enter some content before saving.");
        return;
    }

    // Save to Local Storage
    localStorage.setItem("editedContent", text);

    // Display success message
    status.innerHTML = "✅ Changes saved successfully!";

    alert("Content saved successfully.");
}

// Clear content
function clearContent() {

    if (confirm("Are you sure you want to clear the content?")) {

        document.getElementById("editText").value = "";

        localStorage.removeItem("editedContent");

        document.getElementById("saveStatus").innerHTML = "Content cleared.";

        alert("Content has been cleared.");
    }

}