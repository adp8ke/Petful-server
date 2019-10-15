const { Queue } = require('../queue');

const users = new Queue;

users.enqueue({
  name: 'Arpan Patel'
});

users.enqueue({
  name: 'Kirk Gibson'
});

users.enqueue({
  name: 'Randy Moss'
});


module.exports = users;