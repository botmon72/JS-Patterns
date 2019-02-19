// //Basic Structure

// (function () {
//   //Declare PRIVATE variables and functions

//   return {
//     //Declare PUBLIC variables and functions
//   }
// })();

// //STANDARD MODULE PATTERN
// const UICtrl = (function(){
//   //Private
//   let text = 'Hello World';

//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     //Public
//     callChangeText: function(){
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();

// console.log(UICtrl.text);

//REVEALING MODULE PATTERN
const ItemCtrl = (function(){
  let _data = [];

  function add(item){
    _data.push(item);
    console.log('Item Added...');
  }

  function get(id){
    return _data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});

console.log(ItemCtrl.get(1));