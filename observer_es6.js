class EventObserver{
  constructor(){
    this.observers = [];
  }
  
  subscribe(fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn){
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item;
      }
    })
  }

  fire(){
    this.observers.forEach(function(item){
      item.call();
    })
  }
}

const click = new EventObserver();

//Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function(e){
  click.subscribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(e){
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.fire').addEventListener('click', function(e){
  click.fire();
});

document.querySelector('.sub-s').addEventListener('click', function(e){
  click.subscribe(getCurrentSeconds);
})

document.querySelector('.unsub-s').addEventListener('click', function(e){
  click.unsubscribe(getCurrentSeconds);
})

//Click Handler
const getCurrentMilliseconds = function(){
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrentSeconds = function(){
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}