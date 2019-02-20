const User = function(name){
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },

  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`)
  }
}

const Chatroom = function(){
  let users = {}; //list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },

    send: function(message, from , to) {
      if(to){
        //Single user message
        to.receive(message, from);
      }else{
        //Mass message using for-in loop
        for(key in users){
          if(users[key] !== from){
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const brad = new User(`Brad`);
const ben = new User('Ben');
const jill = new User('Jill');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(ben);
chatroom.register(jill);

brad.send(`Hello Ben`, ben);
jill.send(`Hello Ben, you are great!`, ben);
ben.send(`Hello everyone!`);