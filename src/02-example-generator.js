
function* fibonacciSequence(){
  let last_but_1 = 0
  let last = 1

  yield last_but_1;
  yield last;

  while(true){
    [last_but_1, last] = [last, last_but_1 + last]
    yield last;
  }
}

function example(){

  console.log('Using a generator for the fibonacci sequence');

  let iterator = fibonacciSequence();

  do {
    var {value, done} = iterator.next();
    console.log(`Fib:${value}`);
  } while(!done && value < 100)

}

export default example;