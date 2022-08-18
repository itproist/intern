const numberRandom = () => {
    return Math.floor(Math.random() * 10);
}

const numberLength = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomLength = numberLength(3, 6);

let test = document.querySelector('.text__counter');
let p = document.createElement('p');
p.innerHTML = `Загаданное число состоит из ${randomLength} цифр`;
test.appendChild(p);

const computerGuessingANumber = () => {
    array = [];
    while (array.length < randomLength) {
        let randomNumber = numberRandom();
        if (array.includes(randomNumber) === false) {
            array.push(randomNumber)
        }
    }
    return array;
}

var computerNumber = computerGuessingANumber();
console.log(computerNumber)

const iGuessTheNumber = () => {
    let userNumber = document.getElementById('user').value;
    let myArray = [];

    for (let i = 0; i < 6; i++) {
        let arrayElement = parseInt(userNumber.substr(i, 1));
        myArray.push(arrayElement)
    };

    examination(myArray);
}

const examination = function (par) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < randomLength; i++) {
        if (par[i] === computerNumber[i]) {
            bulls++;
        } else if (computerNumber.indexOf(par[i] >= 0)) {
            cows++;
        }
    }

    if (bulls === 3 && cows === 0) {
        alert(`Выиграли, игра завершена! Компьютер загадал ${computerNumber}`)
    } else if (bulls === 4 && cows === 0) {
        alert(`Выиграли, игра завершена! Компьютер загадал ${computerNumber}`)
    } else if (bulls === 5 && cows === 0) {
        alert(`Выиграли, игра завершена! Компьютер загадал ${computerNumber}`)
    } else if (bulls === 6 && cows === 0) {
        alert(`Выиграли, игра завершена! Компьютер загадал ${computerNumber}`)
    }

    let text = document.querySelector('.text__list');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `совпавших цифр не на своих местах - ${cows}, цифр на своих местах - ${bulls}`;
    text.appendChild(paragraph);
}



