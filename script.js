// const input = document.getElementById('input');

function display(val){
    document.getElementById('input').value += val
    return val
}

function solve(){
    let x = document.getElementById('input').value
    let y = eval(x);
    document.getElementById('input').value = y
    return y
}

function clearScreen(){
    document.getElementById('input').value = ''
}

function backspace()
{
var exp = this.input.value;
this.input.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}
