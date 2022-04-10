const path = require('path');

function getMessages(req, res) {
  // res.send('<ul>Hello Albert!</ul>');
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'quotes.jpg'));
  res.render('messages', {
    title: 'Messages to my friend',
    friend: 'Issac Newton'
  });
}

function postMessage(req, res) {
  console.log('updating messaages');
  // res.send('<ul>Hello Albert!</ul>');
}

module.exports = { getMessages, postMessage };
