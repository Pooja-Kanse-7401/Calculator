let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll(".keys");
let string = " ";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (n) =>{
        if(n.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(n.target.innerHTML == 'C'){
            string = "";
            input.value = string;
        }
        else if(n.target.innerHTML == 'DE'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += n.target.innerHTML;
            input.value = string;
        }
    })
})

let ageInput = document.getElementById("inputage");
ageInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result")

function ageCalculator(){
    let birthDate = new Date(ageInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
