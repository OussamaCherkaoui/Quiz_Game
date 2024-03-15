const contentQuiz = document.querySelector('.ContentGame');
const buttonStart = document.getElementById('play');

// Vairable of Start Game
let QuestionGame = [
    {Question:"Quelle est l'extension des fichiers exécutables en Java ?",answer1: ".jvm", answer2: ".jar",answer3:".class",correctAnswer:".jar"},
    {Question:"Quelles méthodes et variables peuvent être utilisées dans une classe héritée ?",answer1: "public ou protected", answer2: "private ou public",answer3:"private ou protected",correctAnswer:"public ou protected"},
    {Question:"Que renvoie (char)65 ?",answer1: "A", answer2: "65 au format texte",answer3:"une erreur",correctAnswer:"A"},
    {Question:"Compiler du Java donne ",answer1: "un exécutable", answer2: "un fichier .jve",answer3:"du byte code",correctAnswer:"du byte code"},
    {Question:"Qu'utilise-t-on pour un commentaire sur une ligne ?",answer1: "//", answer2: "##",answer3:"/*",correctAnswer:"//"},
    {Question:"Comment afficher le nom de la classe instanciée ?",answer1: "this.Class()", answer2: "this.getClass()",answer3:"this.className()",correctAnswer:"this.getClass()"}
];



var level = 1;
var scorePlayer = 0;

let choice = null;


const contentStart = document.createElement('div');
contentStart.className='contentStart';

const infogame = document.createElement('div');
infogame.className='infogame';

const levelQuestion = document.createElement('div');
levelQuestion.className='levelQuestion';


const score = document.createElement('div');
score.className='score';

const Question = document.createElement('div');
Question.className='Question';

const Answer = document.createElement('div');
Answer.className='Answer';
const Answer1=document.createElement('button');
Answer1.id='Answer1';

const Answer2=document.createElement('button');
Answer2.id='Answer2';

const Answer3=document.createElement('button');
Answer3.id='Answer3';

const NextQuestion = document.createElement('div');
NextQuestion.className='NextQuestion';

const ButtonNext = document.createElement('button');
ButtonNext.id='ButtonNext';

const NameButton = document.createElement('div');
NameButton.className='NameButton';
NameButton.textContent="Next Question";

const iconNext = document.createElement('div');
iconNext.className='iconNext';

const pictureNext = document.createElement('img');
pictureNext.src="./Pictures/next.png";
pictureNext.alt="Picture Next";
 
//Variables of Result

const result = document.createElement('div');
result.className='result';

const titleResult = document.createElement('div');
titleResult.className='titleResult';
titleResult.textContent="Your Result is there";

const contentResult = document.createElement('div');
contentResult.className='contentResult';

const messageResult = document.createElement('div');
messageResult.className='messageResult';

const textMessage = document.createElement('div');
textMessage.className='textMessage';

const iconMessage = document.createElement('div');
iconMessage.className='iconMessage';

const pictureMessage = document.createElement('img');

iconMessage.appendChild(pictureMessage);

messageResult.appendChild(textMessage);
messageResult.appendChild(iconMessage);


const OverallScore = document.createElement('div');
OverallScore.className='OverallScore';
OverallScore.textContent="YOUR OVERALL SCORE :";

const points = document.createElement('div');
points.className='points';

const resultLevel = document.createElement('div');
resultLevel.className='resultLevel';

const typeResult = document.createElement('div');
typeResult.className='typeResult';

const low = document.createElement('div');
low.className='low';

const textlow = document.createElement('div');
textlow.className='textlow';
textlow.textContent="Low";

const iconLow = document.createElement('div');
iconLow.className='iconLow';

low.appendChild(textlow);
low.appendChild(iconLow);


const medium = document.createElement('div');
medium.className='medium';

const textmedium = document.createElement('div');
textmedium.className='textmedium';
textmedium.textContent="Medium";

const iconmedium = document.createElement('div');
iconmedium.className='iconmedium';

medium.appendChild(textmedium);
medium.appendChild(iconmedium);

const high = document.createElement('div');
high.className='high';

const texthigh = document.createElement('div');
texthigh.className='texthigh';
texthigh.textContent="High";

const iconhigh = document.createElement('div');
iconhigh.className='iconhigh';

high.appendChild(texthigh);
high.appendChild(iconhigh);

typeResult.appendChild(low);
typeResult.appendChild(medium);
typeResult.appendChild(high);

contentResult.appendChild(messageResult);
contentResult.appendChild(OverallScore);
contentResult.appendChild(points);
contentResult.appendChild(resultLevel);
contentResult.appendChild(typeResult);

const Restart = document.createElement('div');
Restart.className='Restart';

const buttonRestart = document.createElement('button');
buttonRestart.id="buttonRestart";

const NameRestart = document.createElement('div');
NameRestart.className='NameRestart';
NameRestart.textContent="Restart";

const iconRestart = document.createElement('div');
iconRestart.className='iconRestart';

const pictureRestart = document.createElement('img');
pictureRestart.src="./Pictures/Restart.png";
pictureRestart.alt="Picture Restart";

iconRestart.appendChild(pictureRestart);

buttonRestart.appendChild(NameRestart);
buttonRestart.appendChild(iconRestart);

Restart.appendChild(buttonRestart);

result.appendChild(titleResult);
result.appendChild(contentResult);
result.appendChild(Restart);

//Start Game

const hideContent=()=>{
    while(contentQuiz.firstChild)
    {
        contentQuiz.removeChild(contentQuiz.firstChild);
    }    
}

const showGame=()=>{

    infogame.appendChild(levelQuestion);
    infogame.appendChild(score);

    Answer.appendChild(Answer1);
    Answer.appendChild(Answer2);
    Answer.appendChild(Answer3);

    iconNext.appendChild(pictureNext);

    ButtonNext.appendChild(NameButton);
    ButtonNext.appendChild(iconNext);

    NextQuestion.appendChild(ButtonNext);

    contentStart.appendChild(infogame);
    contentStart.appendChild(Question);
    contentStart.appendChild(Answer);
    contentStart.appendChild(NextQuestion);
    
    contentQuiz.appendChild(contentStart);
}

const win = () =>{
    hideContent();
    textMessage.textContent="Congratulations, you are the winner!";
    pictureMessage.src="./Pictures/win.png";
    pictureMessage.alt="Picture Win";
    points.textContent=`${scorePlayer} points`;
    if(scorePlayer<80)
    {
        resultLevel.textContent="Medium";
        points.style.cssText="color:#FF7A00";
        resultLevel.style.cssText="color:#FF7A00"
    }
    else{
        resultLevel.textContent="High";
        points.style.cssText="color:#7EFF2F";
        resultLevel.style.cssText="color:#7EFF2F"
    }
    contentQuiz.appendChild(result);
}

const lose = () =>{
    hideContent();
    textMessage.textContent="You Failed!";
    pictureMessage.src="./Pictures/failed.png";
    pictureMessage.alt="Picture lose";
    points.textContent=`${scorePlayer} points`;
    resultLevel.textContent="Low";
    points.style.cssText="color:#FF0000";
    resultLevel.style.cssText="color:#FF0000"
    contentQuiz.appendChild(result);
}

const logicgame=()=>{
    Answer1.addEventListener('click',()=>{
        Answer1.style.cssText="border: #7EFF2F solid 2px";
        Answer2.style.cssText="border: white solid 2px";
        Answer3.style.cssText="border: white solid 2px";
        choice=Answer1.textContent;
    });

    Answer2.addEventListener('click',()=>{
        Answer2.style.cssText="border: #7EFF2F solid 2px";
        Answer1.style.cssText="border: white solid 2px";
        Answer3.style.cssText="border: white solid 2px";
        choice=Answer2.textContent;
    });

    Answer3.addEventListener('click',()=>{
        Answer3.style.cssText="border: #7EFF2F solid 2px";
        Answer2.style.cssText="border: white solid 2px";
        Answer1.style.cssText="border: white solid 2px";
        choice=Answer3.textContent;
    });

    NextQuestion.addEventListener('click',()=>{
        if(choice!=null)
        {
            if(QuestionGame[level-1].correctAnswer==choice){
                scorePlayer=scorePlayer+20;
            }
            Answer3.style.cssText="border: white solid 2px";
            Answer2.style.cssText="border: white solid 2px";
            Answer1.style.cssText="border: white solid 2px";
            choice=null;
            level++;
            if(level>6)
            {
                if(scorePlayer>=60)
                {
                    win();
                }
                else{
                    lose();
                }
            }
            levelQuestion.textContent="Question "+ level +" / 6";
            score.textContent=scorePlayer;
            Question.textContent=QuestionGame[level-1].Question;
            Answer1.textContent=QuestionGame[level-1].answer1;
            Answer2.textContent=QuestionGame[level-1].answer2;
            Answer3.textContent=QuestionGame[level-1].answer3;
        }
    });
    Restart.addEventListener('click',()=>{
        startGame();
    });
}


const startGame=()=>{
    hideContent();
    level = 1;
    scorePlayer = 0;
    choice = null;
    score.textContent=scorePlayer;
    levelQuestion.textContent="Question "+ level +" / 6";
    Question.textContent=QuestionGame[level-1].Question;
    Answer1.textContent=QuestionGame[level-1].answer1;
    Answer2.textContent=QuestionGame[level-1].answer2;
    Answer3.textContent=QuestionGame[level-1].answer3;
    showGame();
    logicgame();
}

buttonStart.addEventListener("click" ,()=>{
    startGame();
});