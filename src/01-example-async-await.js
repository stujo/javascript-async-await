

function waiter(message){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(message);
    }, 1500);
  });
}


async function example(){
  console.log(await waiter('Hello World!'));
}


example()