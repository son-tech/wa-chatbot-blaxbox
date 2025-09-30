const wppconnect = require('@wppconnect-team/wppconnect');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

wppconnect.create().then(client => {
  console.log('WhatsApp client ready!');

  client.onMessage(message => {
    if (message.body.toLowerCase() === 'halo') {
      client.sendText(message.from, 'Halo, ini chatbot!');
    }
  });
}).catch(error => {
  console.error('Error creating WhatsApp client:', error);
});

app.get('/', (req, res) => {
  res.send('Chatbot WhatsApp berjalan');
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
