document.addEventListener('DOMContentLoaded', function() {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');
  
    sendBtn.addEventListener('click', function() {
      const message = userInput.value.trim();
  
      if (message !== '') {
        displayUserMessage(message);
        generateBotReply(message);
        userInput.value = '';
      }
    });
  
    function displayUserMessage(message) {
      const userMessage = createMessageElement('user-message', message);
      chatMessages.appendChild(userMessage);
      scrollToBottom();
    }
  
    function generateBotReply(message) {
      // Replace this with your own logic to generate bot replies
      const botReply = createMessageElement('AI-message', 'AI reply: ' + message);
      chatMessages.appendChild(botReply);
      scrollToBottom();
    }
  
    function createMessageElement(className, message) {
      const messageElement = document.createElement('div');
      messageElement.className = 'message ' + className;
      messageElement.textContent = message;
      return messageElement;
    }
  
    function scrollToBottom() {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
  