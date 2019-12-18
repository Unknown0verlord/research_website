var correct = 3;  //The first answer is at position 0, the last is at 3.

var question = "When was Colossus built?";
document.getElementById('question').innerHTML = question;

var answers = ['1939', '1950', '1987', '1944'];

var answerButtons = document.getElementsByClassName("quizButton");

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers[correct]) {
            this.setAttribute('style','background-color:rgb(76,175,80);')
            question = "That's Right!";
            document.getElementById('question').innerHTML = question;
        } else {
            this.setAttribute('style','background-color:rgb(210,50,35);')
            question = "Oops! Wrong Answer!"; 
            document.getElementById('question').innerHTML = question;
            document.getElementById('question').setAttribute('style', 'color: #e91313;')
        }  
    });

}

function disableAll() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled', true);
    }
}
