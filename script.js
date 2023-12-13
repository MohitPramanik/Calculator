let show = '';
let calculator = '';
let compute;
let last_char, repeat = 0;
let screen = document.getElementById('expressions');
let result = document.getElementById('result');
let buttons = document.querySelectorAll('button');


Array.from(buttons);
// For click events
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        // for clear screen button
        if (e.target.innerHTML == 'C') {
            show = '0';
            screen.innerHTML = show;
            calculator = '0';
            result.innerHTML = '';
            if (window.screen.availWidth < 637 && window.screen.availWidth > 359) {
                screen.style.fontSize = '42px'
                result.style.fontSize = '24px';
                result.style.marginTop = '-180px';

            }
            else if (window.screen.availWidth < 360 && window.screen.availWidth > 274) {
                screen.style.fontSize = '32px'
                result.style.fontSize = '17px';
                result.style.marginTop = '-206px';
                result.style.paddingRight = '8px';
            }
            else {
                screen.style.fontSize = '82px';
                result.style.fontSize = '35px';
                result.style.marginTop = '-127px';
                result.style.paddingRight = '24px';
            }
        }
        // for delete button
        else if (e.target.innerHTML == 'DEL') {
            show = show.slice(0, show.length - 1);
            screen.innerHTML = show;
            calculator = calculator.slice(0, calculator.length - 1);
            compute = eval(calculator);
            result.innerHTML = '= ' + compute;
            if (screen.innerHTML == '') {
                result.innerHTML = '';
                screen.innerHTML = '0';

                if (window.screen.availWidth < 637 && window.screen.availWidth > 359) {
                    screen.style.fontSize = '42px'
                    result.style.fontSize = '24px';
                    result.style.marginTop = '-180px';

                }
                else if (window.screen.availWidth < 360 && window.screen.availWidth > 274) {
                    screen.style.fontSize = '32px'
                    result.style.fontSize = '17px';
                    result.style.marginTop = '-206px';
                    result.style.paddingRight = '8px';
                }
                else {
                    screen.style.fontSize = '82px';
                    result.style.fontSize = '35px';
                    result.style.marginTop = '-127px';
                    result.style.paddingRight = '24px';
                }
            }
        }
        // for decimal point
        else if (e.target.value == '.') {
            if (screen.innerHTML == "0") {
                show = '0.';
                screen.innerHTML = show;
                calculator = '0.';
                compute = eval(calculator);
                result.innerHTML = ' =' + compute;
            }
            // to prevent point from repeating in a number
            else if (show[show.length - 1] != '.' && repeat == 0) {
                show = show + '.';
                screen.innerHTML = show;
                calculator = calculator + '.';
                repeat = 1;
            }
        }

        // for operator buttons
        else if (e.target.value == '+' || e.target.value == '-' || e.target.value == '*' || e.target.value == '/' || e.target.value == '%') {
            if (calculator[calculator.length - 1] == '+' || calculator[calculator.length - 1] == '-' || calculator[calculator.length - 1] == '*' || calculator[calculator.length - 1] == '/' || calculator[calculator.length - 1] == '%') {
                show = show.slice(0, show.length - 1) + e.target.innerHTML;
                screen.innerHTML = show;
                calculator = calculator.slice(0, calculator.length - 1) + e.target.value;
            }
            else {
                show = show + e.target.innerHTML;
                screen.innerHTML = show;
                calculator = calculator + e.target.value;
            }
            repeat = 0;
        }

        // for equal button
        else if (e.target.innerHTML == '=') {
            if (show == '') {
                result.innerHTML = '';
            }
            else {
                // screen.style.fontSize = '35px';
                if (result.innerHTML.length > 12) {
                    result.style.fontSize = '38px';
                    screen.style.fontSize = '33px';
                }
                else {
                    if (window.screen.availWidth < 637 && window.screen.availWidth > 359) {
                        screen.style.fontSize = '24px'
                        result.style.fontSize = '42px';
                        result.style.marginTop = '-205px';
                        result.style.paddingRight = '6px';
                    }
                    else if (window.screen.availWidth < 360 && window.screen.availWidth > 274) {
                        screen.style.fontSize = '17px'
                        result.style.fontSize = '32px';
                        result.style.marginTop = '-219px';
                        result.style.paddingRight = '6px';
                    }
                    else {
                        screen.style.fontSize = '35px';
                        result.style.fontSize = '82px';
                        result.style.marginTop = '-181px';
                        result.style.paddingRight = '6px';
                    }
                }
            }
        }

        // for all number buttons
        else {
            if ((calculator[calculator.length - 2] == '+' || calculator[calculator.length - 2] == '-' || calculator[calculator.length - 2] == '*' || calculator[calculator.length - 2] == '/' || calculator[calculator.length - 2] == '%') && calculator[calculator.length - 1] == '0') {
                // if after operator 0 is entered and then again another number is entered then it will replace that 0
                show = show.slice(0, show.length - 1) + e.target.innerHTML;
                screen.innerHTML = show;
                calculator = calculator.slice(0, calculator.length - 1) + e.target.innerHTML;
                compute = eval(calculator);
                result.innerHTML = compute;
            }
            // if divided by zero
            else if (calculator[calculator.length - 1] == '/' && e.target.innerHTML == 0) {
                show = show + e.target.innerHTML;
                screen.innerHTML = show;
                calculator = calculator + e.target.innerHTML;
                result.innerHTML = '= Error';
            }
            else if (screen.innerHTML == '0') {
                show = e.target.innerHTML;
                screen.innerHTML = show;
                calculator = e.target.innerHTML;
                compute = eval(calculator);
                result.innerHTML = '= ' + compute;
            }
            else {
                show = show + e.target.innerHTML;
                screen.innerHTML = show;
                calculator = calculator + e.target.innerHTML;
                compute = eval(calculator);
                result.innerHTML = '= ' + compute;
            }
        }

        // if screen element length become larger
        if (screen.innerHTML.length > 12) {
            if (window.screen.availWidth < 637 && window.screen.availWidth > 359) {
                screen.style.fontSize = '23px'
                result.style.fontSize = '19px';
            }
            else if (window.screen.availWidth < 360 && window.screen.availWidth > 274) {
                screen.style.fontSize = '20px'
                result.style.fontSize = '16px';
            }
            else {
                screen.style.fontSize = '42px'
                result.style.fontSize = '35px';
            }
            screen.style.overflow = 'scroll';
        }
    })
})
