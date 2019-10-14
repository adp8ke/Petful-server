const { Queue } = require('../queue');

const users = new Queue;

users.enqueue({
  username: 'testuser',
  password: 'testuser',
  name: 'Arpan Patel'
});

users.enqueue({
  username: 'testuser2',
  password: 'testuser2',
  name: 'Kirk Gibson'
});

users.enqueue({
  username: 'testuser3',
  password: 'testuser3',
  name: 'Randy Moss'
});


module.exports = users;