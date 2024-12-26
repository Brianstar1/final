document.addEventListener('DOMContentLoaded', () => {
    const introBtn = document.getElementById("introBtn");
    const menu = document.getElementById("menu");
    const sections = document.querySelectorAll("#education-section, #hobby-section, #contact-section");
    const messageBoard = document.getElementById("message-board");
    const messageForm = document.getElementById("message-form");
    const messageContent = document.getElementById("message-content");
    const messagesDiv = document.getElementById("messages");

    introBtn.addEventListener("click", () => {
        menu.style.display = "block";
        sections.forEach(section => {
            section.style.display = "block";
        });

        introBtn.textContent = "已展示介紹！";
        introBtn.disabled = true;

        messageBoard.style.display = "block"; 
    });

    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = messageContent.value.trim();
        if (message) {
            const messageElement = document.createElement("p");
            messageElement.textContent = message;
            messagesDiv.appendChild(messageElement);
            messageContent.value = "";
        }
    });
});