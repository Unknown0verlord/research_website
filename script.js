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

var correct2 = 2;  //The first answer is at position 0, the last is at 3.

var question2 = "Who built Colossus Mark 1?";
document.getElementById('question2').innerHTML = question2;

var answers2 = ['Sidney Broadhurst', 'Winston Churchill', 'Tommy Flowers', 'William Chandler'];

var answerButtons2 = document.getElementsByClassName("quizButton2");

for(var spot2=0; spot2<answers2.length; spot2++)
{
    answerButtons2[spot2].innerHTML = answers2[spot2];

    answerButtons2[spot2].addEventListener('click', function() {
        disableAll2();
        if(this.innerHTML == answers2[correct2]) {
            this.setAttribute('style','background-color:rgb(76,175,80);')
            question2 = "That's Right!";
            document.getElementById('question2').innerHTML = question2;
        } else {
            this.setAttribute('style','background-color:rgb(210,50,35);')
            question2 = "Oops! Wrong Answer!"; 
            document.getElementById('question2').innerHTML = question2;
            document.getElementById('question2').setAttribute('style', 'color: #e91313;')
        }  
    });

}

function disableAll2() {
    for(var num2=0; num2<answerButtons2.length; num2++) {
        answerButtons2[num2].setAttribute('disabled', true);
    }
}


var correct3 = 0;  //The first answer is at position 0, the last is at 3.

var question3 = "Where was Colossus Operated?";
document.getElementById('question3').innerHTML = question3;

var answers3 = ['Bletchley Park, UK', 'London, UK', 'Central Park, NYC', 'Washington, DC'];

var answerButtons3 = document.getElementsByClassName("quizButton3");

for(var spot3=0; spot3<answers3.length; spot3++)
{
    answerButtons3[spot3].innerHTML = answers3[spot3];

    answerButtons3[spot3].addEventListener('click', function() {
        disableAll3();
        if(this.innerHTML == answers3[correct3]) {
            this.setAttribute('style','background-color:rgb(76,175,80);')
            question3 = "That's Right!";
            document.getElementById('question3').innerHTML = question3;
        } else {
            this.setAttribute('style','background-color:rgb(210,50,35);')
            question2 = "Oops! Wrong Answer!"; 
            document.getElementById('question3').innerHTML = question3;
            document.getElementById('question3').setAttribute('style', 'color: #e91313;')
        }  
    });

}

function disableAll3() {
    for(var num3=0; num3<answerButtons3.length; num3++) {
        answerButtons3[num3].setAttribute('disabled', true);
    }
}
