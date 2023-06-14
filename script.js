document.addEventListener("DOMContentLoaded", function() {
    var messageInput = document.getElementById("message-input");
    var chatLog = document.getElementById("chat-log");

    document.getElementById("send-button").addEventListener("click", sendMessage);
    messageInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario al presionar "Enter"
            sendMessage();
        }
    });

    function sendMessage() {
        var userMessage = messageInput.value;
        appendMessage("Invitado: " + userMessage);

        // Generar una respuesta aleatoria del chatbot
        var botResponse = generarRespuestaAleatoria(); // Función para generar una respuesta aleatoria

        appendMessage("ChatGPT: " + botResponse);

        messageInput.value = "";
    }

    function appendMessage(message) {
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
    }

    function generarRespuestaAleatoria() {
        var respuestas = ["hola", "como te va?", "estas bien?"];
        var randomIndex = Math.floor(Math.random() * respuestas.length);
        return respuestas[randomIndex];
    }
});

