const API_KEY = "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";
const sendBtn = document.querySelector("#send-btn");
const inputElement = document.querySelector("#user-input");

const getImages = async () => {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      'Content-Type': "application/json",
    },
    body: JSON.stringify({
      "prompt": inputElement.value,
      "n": 2,
      "size": "256x256"
    })
  };

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', options);
    const data = await response.json();
    console.log('Received data:', data); // Display the received data 
  } catch (error) {
    console.log('Error:', error);
  }
};

sendBtn.addEventListener('click', getImages);










































































































// document.addEventListener('DOMContentLoaded', function() {
//     const sendBtn = document.getElementById('send-btn');
//     const userInput = document.getElementById('user-input');
//     const chatMessages = document.getElementById('chat-messages');
  
//     sendBtn.addEventListener('click', function() {
//       const message = userInput.value.trim();
  
//       if (message !== '') {
//         displayUserMessage(message);
//         generateBotReply(message);
//         userInput.value = '';
//       }
//     });
  
//     function displayUserMessage(message) {
//       const userMessage = createMessageElement('user-message', message);
//       chatMessages.appendChild(userMessage);
//       scrollToBottom();
//     }
  
//     function generateBotReply(message) {
//       // Replace this with your own logic to generate bot replies
//       const botReply = createMessageElement('AI-message', 'AI reply: ' + message);
//       chatMessages.appendChild(botReply);
//       scrollToBottom();
//     }
  
//     function createMessageElement(className, message) {
//       const messageElement = document.createElement('div');
//       messageElement.className = 'message ' + className;
//       messageElement.textContent = message;
//       return messageElement;
//     }
  
//     function scrollToBottom() {
//       chatMessages.scrollTop = chatMessages.scrollHeight;
//     }
//   });
  