

function waiter(message){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(message);
    }, 1500);
  });
}


async function example(){
  console.log("Waiting for signs of life....")
  console.log(await waiter('Hello World!'));
  console.log("Thankfully someone is out there!")
}


export default example;