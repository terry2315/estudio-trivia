const datos = './db/teologyGenesis.json'

const contentQuestion = document.querySelector('#content__question');
const contentList = document.querySelector('#content__list');
console.log(contentList)
getData();

async function getData() {
    try {
        const response = await fetch(datos);
        const teology = await response.json();
        renderQuestion(teology);
    } catch (error) {
        console.log('Error al conectar con la base de datos', error);
    }
}


function renderQuestion(quest) {
    quest.forEach(quest => {
        const lista = document.createElement('li');
        lista.classList.add('list__question');
        lista.innerHTML = `
             <p class="list__text">${quest.question}</p>
        `;
        console.log(quest.question)
        contentList.append(lista)
    })
}


