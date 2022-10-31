const refs = {
    inputRange: document.querySelector('#font-size-control'),
    textChangeFontSize: document.querySelector('#text'),
}
refs.inputRange.addEventListener('input', makeValueFontSize)

function makeValueFontSize(event) {      
    refs.textChangeFontSize.style.fontSize = `${event.currentTarget.value}px`;
}


