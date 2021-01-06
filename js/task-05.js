// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const nameInputRef = document.querySelector('#name-input');
const nameOutRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', handleInputChange);

function handleInputChange (event) {
    if (event.target.value.length === 0){
        nameOutRef.textContent = 'незнакомец';
    } else {
        nameOutRef.textContent = event.target.value; 
    }
     
};