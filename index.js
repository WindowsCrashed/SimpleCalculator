function calculate() {    
    const expression = Object.fromEntries(new FormData(document.querySelector('form'))).input
    
    if (expression == '') return

    let result

    try {
        result = math.evaluate(expression) 
    } catch {
        result = 'ERROR' 
    }
       
    input.value = result
}

function clear() {
    input.value = ''
}

function getValue(value) {
    input.value += value
}

function eventHandler(event) {
    event.preventDefault()
    getValue(event.target.value)
}

const input = document.querySelector('[numberInput]')

document.querySelectorAll('.calc-btn').forEach(btn => btn.addEventListener('click', eventHandler))
document.querySelector('[calculate]').addEventListener('click', calculate)
document.querySelector('[clear]').addEventListener('click', clear)