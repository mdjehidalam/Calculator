function input(e) {
    try {
        if (e.target.tagName == 'BUTTON') {
            let ans = document.querySelector('.output');
            let value = e.target.innerHTML; // button text

            if (value == 'AC') {
                ans.innerHTML = '0';
            }
            else if (value == 'X') {
                if (ans.innerHTML.length > 1)
                    ans.innerHTML = ans.innerHTML.slice(0, -1); // remove last char
                else ans.innerHTML = '0';
            }
            else if (value == '=') ans.innerHTML = eval(ans.innerHTML)
            else {
                if (ans.innerHTML == '0') ans.innerHTML = value;
                else ans.innerHTML += value;
            }
        }
    } catch (error) {
        let ans = document.querySelector('.output');
        ans.innerHTML = "Invalid Input!";
    }
    
}

const keyboard = document.querySelector('.keybord');
keyboard.addEventListener('click', input);
