var questions = [
    {
        question: "Ash is just starting his journey, what pokemon did Ash choose as his first pokemon?",
        answers: ["Charmander", "Squirtle", "Bulbasaur", "Pikachu"],
        correct: "Pikachu"
    },
    {
        question: "What town is Ash from?",
        answers: ["Azalea Town", "Cerulean Town", "Pallet Town", "Mahogany Town"],
        correct: "Pallet Town"
    },
    {   
        question: "What is not a category in the Pokemon contests?",
        answers: ["cuteness", "coolness", "beauty", "talent"],
        correct: "talent"
    },
    {
        question: "How many shapes/forms can Unown be?",
        answers: ["26", "32", "38", "28", "20"],
        correct: "28"
    },
    {
        question: "What type is the move sing?",
        answers: ["normal", "grass", "fairy", "fire"],
        correct: "normal"
    },
    {
        question: "What type is the pokemon Koffing?",
        answers: ["poison and grass", "poison and flying", "poison and pyschic", "poison"],
        correct: "poison"
    },
    {
        question: "What type of Pokemon does Misty have?",
        answers: ["grass", "water", "fire"],
        correct: "water"
    },
    {
        question: "What is the evolved form of Onix?",
        answers: ["Ironix", "Steelix", "Copperix", "Stonix"],
        correct: "Steelix"
    },
    {
        question: "Name the Legendary Pokemon",
        answers: ["Celebi", "Mew", "Jirachi", "Mespirit"],
        correct: "Mew"
    }
]

var questionForm = document.getElementById("questionForm");

function startGame() {
    // clear form before beginning
    questionForm.innerHTML = "";
    // set form to appear in the middle
    questionForm.style.margin = "12% auto";
    // load the first question
    createQuestion();
};

// create the questions
function createQuestion() {
    // clear any previous Html
    questionForm.innerHTML = "";

    // loop through the questions
    for(var i = 0; i < 1; i++) {
        // create elements when the page loads
        var formGroup = document.createElement("div");
        var questionEl = document.createElement("h2");

        // add attributes to elements
        formGroup.className = "formGroup";
        formGroup.style.backgroundColor = "#a9a9a9";
        formGroup.style.padding = "25px"
        formGroup.style.borderRadius = "10px"
        questionEl.id = "questions" + [i];

        // create question text
        var questionText = document.createTextNode(questions[i].question);

        // add question to document
        questionEl.appendChild(questionText);

        // add element to the dom 
        formGroup.appendChild(questionEl);

        // question 10 add Legendary Pokemon picture

        if(questions[i].question == "Name the Legendary Pokemon") {
        var mewImg = document.createElement("img");

        mewImg.src = "img/mew.png";
        mewImg.alt = "Legendary Pokemon Mew";
        mewImg.style.backgroundColor = "green";

        formGroup.appendChild(mewImg);
        };

        // add formgroup to questionForm
        questionForm.appendChild(formGroup);

        // add answers to the dom
        for(var j = 0; j < questions[i].answers.length; j++) {
            // create variable answers
            var answerDiv = document.createElement("div");
            var answerEl = document.createElement("input");

            // create answer text
            var answerText = document.createTextNode(questions[i].answers[j]);

            // add question to div
            answerDiv.appendChild(answerEl);
            answerDiv.appendChild(answerText);

            // add attributes
            answerDiv.className = "questionWrap";
            answerEl.type = "radio";
            answerEl.name = "radio" + [i];
            answerEl.value = questions[i].answers[j];

            // add answers to form group
            formGroup.appendChild(answerDiv);
        };
    };

    // create submit button
    var submitBtn = document.createElement("button");    

    // add attributes
    submitBtn.type = "button";
    submitBtn.className = "btn btn-med btn-primary";
    submitBtn.textContent = "Submit Answer"
    submitBtn.onclick = submitAnswer

    // add button to form group
    questionForm.appendChild(submitBtn);

    // create a back button
    var backBtn = document.createElement("button");

    // add attributes
    backBtn.type = "button";
    backBtn.className = "btn btn-med btn-dark float-right";
    backBtn.textContent = "Back";
    backBtn.onclick = goBack;

    // add button to form group
    questionForm.appendChild(backBtn);

};


function submitAnswer() {
    // get all the elements with input tag
    var els = document.getElementsByTagName("input");

    // loop through all possible answers
    for(var i=0; i < els.length; i++) {
        // check which answer is correct 
        if (els[i].checked && els[i].value.trim() == questions[0].correct.trim()) {
            // confirm for developer that the user got the question correct
            console.log("Correct Answer", els[i]);
            // remove the current question from the questions arranged
            questions.shift();
            
            // find parent and add class of right
            els[i].parentElement.className = "questionWrap right";

            // check to see if there are any more questions if 0 then game over
            if(questions.length == 0)  {
                // clear any previous html
                questionForm.innerHTML = "";

                // update the styles of questionForm
                questionForm.style.textAlign = "center";
                questionForm.style.margin = "0 auto";


                // Display game over to the user
                questionForm.innerHTML = "<h1> Good Job you have completed the Quiz!</h1>" + "<br>" + "<img src='img/success.jpg'>";

                // stop when the user wins
                return;
            };
            // if the user is correct and more questions exist, move to the next question
            setTimeout(function(){
                createQuestion();
            }, 2000)
            // stop the funciton, user got it correct
            return;
            };
        };
    // confirm to developer ataht the user got the answer correct
    console.log("Incorrect Answer");

    // find the parent element to it and add a class of wrong 
    for (var i = 0; i < els.length; i++) {
        // find correct radio selected
        if(els[i].checked) {
            // find parent element add class of wrong
            els[i].parentElement.className = "questionWrap wrong";
        };
    }; 
    // end for loop
};

