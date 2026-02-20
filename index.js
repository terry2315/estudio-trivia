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
            <p class="list__text--questions">${quest.question}</p>
            <p class="list__text--">A)  ${quest.options[0]}</p>
            <p class="list__text--">B)  ${quest.options[1]}</p>
            <p class="list__text--">C)  ${quest.options[2]}</p>
            <p class="list__text--">D)  ${quest.options[3]}</p>




        `;
        console.log(quest.options)
        contentList.append(lista)
    })
}


