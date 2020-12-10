const correctAnswers = ["B", "C", "A", "D", "B"];
const form = document.querySelector('form');
const formOpt = document.querySelector('.form-option');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    // declaring user answers...

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index) => {

        // checking user answers...
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });
    result.querySelector('span').textContent = `${score}%`;
    result.style.display = 'flex';
});