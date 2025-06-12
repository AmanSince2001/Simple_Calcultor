let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if(display.value)
        display.value = eval(display.value);
       else
       display .value = 'Error';
    }
    catch  {
        display.value = ('Error');
    }
}
jncdenfrnvdji