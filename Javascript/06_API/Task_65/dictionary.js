const form = document.getElementById('form')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    let word = document.getElementById('wordSearch').value
    // console.log(word);
    fetchMeaning(word)
})

async function fetchMeaning(word) {
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        if (!res.ok) {
            throw new Error('HTTP error request:-', res.status)
        }

        let data = await res.json()
        // console.log(data);
        displayWordMeaning(data)
    }
    catch (err) {
        console.error('This is the error: ', err)
        displayIvalidWordError(word)
    }
}


function displayWordMeaning(data){
    console.log(data);
    const content = document.getElementById('content')
    content.innerHTML = `<h1>Word:- ${data[0].word}</h1>`
    // content.style.padding = '15px'

    data.forEach((element) => {
        // console.log(element);
        let subDiv = document.createElement('div')
        subDiv.style.marginLeft = '20px'
        // subDiv.style.marginBottom = '25px'
        // subDiv.style.border = '2px solid black'
        element.meanings.forEach((meaning) => {

            const partOfSpeech = document.createElement('h2')
            partOfSpeech.innerHTML = `${meaning.partOfSpeech}`
            subDiv.appendChild(partOfSpeech)

            const Outersynonyms = document.createElement('p')
            let syno = ''
            
            if(meaning.synonyms.length > 0){
                syno += meaning.synonyms.join(', ')
                Outersynonyms.innerHTML = `<b>Synonyms :- </b> ${syno}`
            }else{
                Outersynonyms.innerHTML = `<b>Synonyms :- </b> <span style = "color:red;">Synonyms are not avalable</span>`
            }
            subDiv.appendChild(Outersynonyms)

            const outerAntonyms = document.createElement('p')
            let anto = ''
            if(meaning.antonyms.length > 0){
                anto += meaning.antonyms.join(', ')
                outerAntonyms.innerHTML = `<b>Antonyms :- </b> ${anto}`
            }else{
                outerAntonyms.innerHTML = `<b>Antonyms :- </b> <span style = "color:red;">Antonyms are not avalable</span>`
            }
            subDiv.appendChild(outerAntonyms)

            const definationTitle = document.createElement('p')
            definationTitle.innerHTML = `<b>Definations are:- `
            subDiv.appendChild(definationTitle)

            const definationsDiv = document.createElement('div')
            definationsDiv.style.marginBottom = '40px'
            definationsDiv.style.paddingLeft = '20px'
            subDiv.appendChild(definationsDiv)

            meaning.definitions.forEach((defination, index) => {
                const meaningPara = document.createElement('p')
                meaningPara.innerHTML = `<b>${index+1}. Defiantion:-</b> ${defination.definition}`
                definationsDiv.appendChild(meaningPara)

                const examplePara = document.createElement('p')
                if(defination.example){
                    examplePara.innerHTML = `<b>Example :- </b> ${defination.example}`
                }else{
                    examplePara.innerHTML = `<b>Example :- </b> <span style="color:red;">Example is not available</span>` 
                    // console.log(examplePara);
                }
                definationsDiv.appendChild(examplePara)

                const innerSynonyms = document.createElement('p')
                let innerSynonym = ''
                if(defination.synonyms.length > 0){
                    innerSynonym += defination.synonyms.join(', ')
                    innerSynonyms.innerHTML = `<b>Definition-specific Synonyms :- </b> ${innerSynonym}`
                }else{
                    innerSynonyms.innerHTML = `<b>Definition-specific Synonyms :-</b> <span style = "color:red;">Defination-specific Synonyms is not available</span>`
                }
                definationsDiv.appendChild(innerSynonyms)

                const innerAntonyms = document.createElement('p')
                let innerAntonym = ''
                if(defination.antonyms.length > 0){
                    innerAntonym += defination.synonyms.join(', ')
                    innerAntonyms.innerHTML = `<b>Definition-specific Antonyms :- </b> ${innerSynonym}`
                }else{
                    innerAntonyms.innerHTML = `<b>Definition-specific Antonyms :-</b> <span style = "color:red;">Defination-specific Antonym is not available</span><br><br>`
                }
                definationsDiv.appendChild(innerAntonyms)
            });
            
        })

        content.appendChild(subDiv)

    })
    
}

function displayIvalidWordError(word){
    const content = document.getElementById('content')
    content.innerHTML = `<h1 style="font-size: 35px;"><span style="color: red;">"${word}"</span>, This word meaning is not found please enter another word or correct the word spelling.</h1>`
}