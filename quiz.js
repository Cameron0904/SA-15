let correctAnswers = 0;
let totalQuestions = 8;

function checkAnswer(answer, button) {
    parentArticle = button.closest('article');
    buttons = parentArticle.querySelectorAll('button');
    clicked(buttons, answer === 'correct');

    if (answer === 'correct') {
        correctAnswers++;
    }
}

function clicked(buttons, correct) {
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.onclick.toString().includes("'correct'")) {
            btn.style.backgroundColor = 'lightgreen';
        } 
    });
}

function show_final_grade() {
    const gradePercentage = (correctAnswers / totalQuestions) * 100;
    const gradeText = `Your final grade is: ${gradePercentage.toFixed(2)}%`;
    alert(gradeText);
}


