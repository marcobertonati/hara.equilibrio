console.log('Index.js asd');

// alert('Es tu priemra vez comprando?')

// const btnYes = document.getElementById('btn-aside_yes');
// const btnNo =document.getElementById('btn-aside_no');

// btnYes.addEventListener('click', nextQuestion);
// btnNo.addEventListener('click', nextQuestion);

function nextSecondQuestion() {
    const asideWidget = document.getElementById('aside-widget');
    const asideToRemove = document.getElementById('aside-widget__question');
    const asideRadio = document.getElementById('aside-widget__radio');
    asideWidget.removeChild(asideToRemove);
    const msgAside = document.createElement('div');
    msgAside.innerHTML = `<div>¡Te esperamos para tu compra!</div>`
    asideWidget.insertBefore(msgAside,asideRadio);
    // asideWidget.appendChild(msgAside);
}

function goToWhatsapp() {
    alert('¡Lo esperamos en Whatsapp!')
    window.location.href = "https://api.whatsapp.com/send?phone=+542616171509"
    
}

function nextQuestion() {
    const asideWidget = document.getElementById('aside-widget__question');
    const questionTwo = document.createElement('div');
    questionTwo.setAttribute("class", "aside-widget__question");
    questionTwo.innerHTML = `
                <div>¿Necesitás ayuda con tu compra?</div>
                <div>
                  <button type="button" id="btn-aside_yes-second" class="btn btn-outline-primary">SI</button>
                  <button type="button" id="btn-aside_no-second" class="btn btn-outline-primary">NO</button>
                </div>
    `;
    asideWidget.appendChild(questionTwo);
    btnYes.removeEventListener('click',nextQuestion);
    btnNo.removeEventListener('click',nextQuestion);

    const btnYesSecond = document.getElementById('btn-aside_yes-second');
    const btnNoSecond = document.getElementById('btn-aside_no-second');

    btnYesSecond.addEventListener('click', goToWhatsapp);
    btnNoSecond.addEventListener('click', nextSecondQuestion);
}


