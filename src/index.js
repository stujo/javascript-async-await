import asyncExample from './01-example-async-await.js';
import generatorExample from './02-example-generator.js';
import fetchExample from './03-example-fetch.js';

async function runExamples(){
  console.log('#'.repeat(50)) // ES2015 String repeat
  await asyncExample();
  console.log('#'.repeat(50))
  await generatorExample();
  console.log('#'.repeat(50))
  await fetchExample();
  console.log('#'.repeat(50))
}

runExamples();