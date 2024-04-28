function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput !== "") {
        addMessage("You", userInput);
        document.getElementById("userInput").value = ""; // Clear input field
        // Here you can add code to send the user's message to your backend for processing
        // and receive a response from the chatbot
        // For demonstration purposes, let's simulate a response from the chatbot
        setTimeout(function() {
            var response = "This is a response from the chatbot.";
            addMessage("Chatbot", response);
        }, 500);
    }
}

function addMessage(sender, message) {
    var chatBox = document.getElementById("chatBox");
    var newMessage = document.createElement("div");
    newMessage.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}
