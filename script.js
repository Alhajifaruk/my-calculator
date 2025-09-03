const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => { 
button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    if(buttonValue === '=') {
        try{
            screen.value = eval(screen.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100').replace(/\^/, '**'));
            } catch (error){
                screen.value = 'Error';
            }
        
    }else if(buttonValue.toLowerCase() === 'c') {
        screen.value = '';
    } else if(buttonValue.toLowerCase() === 'del') {
        screen.value = screen.value.slice(0, -1);
    } else{
        screen.value += buttonValue;
    }
});
});