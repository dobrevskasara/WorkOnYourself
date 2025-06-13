// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("quiz-form");
//     const resultDiv = document.getElementById("quiz-result");
//
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const answer = form.q1.value;
//         let message = "";
//
//         switch (answer) {
//             case "a":
//                 message = "Одлично! Физичката активност е одличен начин за справување со стрес.";
//                 break;
//             case "b":
//                 message = "Релаксирачко, но обиди се да комбинираш со активности на отворено.";
//                 break;
//             case "c":
//                 message = "Одлично! Споделувањето е важен дел од справувањето со стрес.";
//                 break;
//             case "d":
//                 message = "Обиди се да најдеш време за пауза и релаксација.";
//                 break;
//             default:
//                 message = "Ве молиме избери одговор.";
//         }
//
//         resultDiv.textContent = message;
//     });
// });
document.getElementById('check-answer').addEventListener('click', () => {
    const radios = document.querySelectorAll('input[name="stress"]');
    const resultDiv = document.getElementById('answer-result');
    let selected = null;

    radios.forEach(radio => {
        if (radio.checked) {
            selected = radio.value;
        }
    });

    if (!selected) {
        resultDiv.style.color = '#d32f2f'; // црвена боја за грешка
        resultDiv.textContent = 'Ве молиме изберете опција пред да проверите.';
        resultDiv.style.display = 'block';
        return;
    }

    // Овде можеш да додадеш поинаква логика за одговори, сега ќе ти дадам пример порака:
    let advice = '';

    switch(selected) {
        case 'спорт или прошетка':
            advice = 'Одлично! Физичката активност е одличен начин да се ослободиш од стрес.';
            break;
        case 'гледам серија или играм игра':
            advice = 'Понекогаш релаксацијата преку хоби е важна, но имај на ум да не претеруваш.';
            break;
        case 'разговарам со некого':
            advice = 'Разговарањето со блиски лица е многу здраво за менталната состојба.';
            break;
        case 'игнорирам и продолжувам со обврските':
            advice = 'Важно е да се соочиш со стресот, игнорирањето може да го влоши.';
            break;
        default:
            advice = 'Ве молиме изберете валидна опција.';
    }

    resultDiv.style.color = '#2e7d32'; // зелена боја за совет
    resultDiv.textContent = advice;
    resultDiv.style.display = 'block';
});
