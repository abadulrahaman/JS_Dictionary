const form = document.querySelector('.form');
const meaning_name = document.querySelector('.meaning_name');
const adjective = document.querySelector('.adjective');
const meaning = document.querySelector('.meaning');
const exaple_text = document.querySelector('.exaple_text');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.querySelector('.input_box').value;
    console.log(input);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    .then(function (data) {
        return data.json();
    })
    .then(function(jsondata) {
        const meaning_name_1 = jsondata[0].word;
        meaning_name.innerHTML = meaning_name_1;

        const adjective1 = jsondata[0].phonetics[0].text; 
        adjective.innerHTML = adjective1;

        const meanings =jsondata[0].meanings[0].synonyms.join(',');
        meaning.innerHTML = meanings;

        const exaple_text1 = jsondata[0].meanings[0].definitions[0].definition;
        exaple_text.innerHTML = exaple_text1;
          


    })

})