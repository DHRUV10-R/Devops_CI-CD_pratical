// Upload Function
function uploadFile() {

    const fileInput = document.getElementById("file");
    const status = document.getElementById("uploadStatus");

    // Check file selected
    if (fileInput.files.length === 0) {
        alert("Please select a file.");
        return;
    }

    const file = fileInput.files[0];

    // Maximum file size (5 MB)
    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
        alert("File size should not exceed 5 MB.");
        return;
    }

    // Allowed file types
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(file.type)) {
        alert("Unsupported file type.");
        return;
    }

    // Display upload details
    status.innerHTML =
        "<strong>Upload Successful!</strong><br><br>" +
        "File Name: " + file.name + "<br>" +
        "File Size: " + (file.size / 1024).toFixed(2) + " KB";

    console.log("Uploaded File:", file);
}