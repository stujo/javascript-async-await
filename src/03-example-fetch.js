import 'fetch-everywhere';

function errorHandler(message){
  console.trace();
  console.error("An error has occurred", message);
}

function emojisToArray(emojisObject){
  var emojis = []
  for (var label in emojisObject) {
    if (emojisObject.hasOwnProperty(label)) {
      emojis.push({
        label,
        url : emojisObject[label]
      });
    }
  }
  return emojis;
}

function filterZEmojis(emojis){
  return emojis.filter(function(emoji){
    return emoji.label.match(/z/); // Contain 'z'
  });
}

function handleJSONResponse(response) {
    // Fetch doesn't throw on a 500 or 404!
    if (!response.ok) {
        throw Error(`${response.status} : ${response.url} : ${response.statusText}`);
    }
    // Fetch doesn't auto convert JSON
    return response.json();
  }

function fetchEmojis(){

  const url = 'https://api.github.com/emojis';

  return fetch(url).then(
    handleJSONResponse
  ).then(
    emojisToArray
  ).then(
    filterZEmojis
  );
}

async function example(){
  try
  {
    var emojis = await fetchEmojis();
    emojis.forEach(function(emoji){
      console.log(`Emoji ${emoji.label} : ${emoji.url}`);
    });
  } catch(e){
    errorHandler(e)
  }
}

export default example;