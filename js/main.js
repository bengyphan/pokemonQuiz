var questions = [
    {
        question: "You're just starting your journey, and the professor offers three Pokémon for you and your friends to pick from. Who picks first?",
        answers: ["me", "I'll let them go first because I'm nice", "I don't really care", "I can't decide"],
    },
    {
        question: "Do you think it's better to stay true to yourself or to be constantly changing and adopting new ideas?"
        answers: ["Prefer to stick to what I believe in", "I like to keep an open-mind"]
    },
    {   
        question: "You see some bad guys stealing from people! You..."
        answers: ["stop them", "get help", "none of my bees wax"]
    },
    {
        question: "What super ability would you like to have?"
        answers: ["super strength", "flying", "breathing under-water", "pyschic", "can't decide, I love them all"]
    },
    {
        question: "What is you biggest stress reliever?"
        answers: ["music", "dancing", "singing", "reading", "exercise", "something else"]
    },
    {
        question: "What kind of trainer are you?"
        answers: ["win at all costs!", "its all fun", "I'm competitive, but there's only so far I'll go"]
    },
    {
        question: "Where would you rather live?"
        answers: ["In the mountains", "near the beach", "somewhere with a lot of trees"]
    },
    {
        question: "On your free day what would you like to do?"
        answers: ["Stay home", "Go outside alone", "go out with your friends"]
    },
    {
        question: "Are you a girl or guy?",
        answers: ["I'm a girl", "I'm a dude"]
    }
]

var questionForm = document.getElementById("questionForm");

function startGame() {
    // clear form before beginning
    questionForm.innerHTML = "";
    // set form to appear in the middle
    questionForm.style.margin = "12% auto"
    // load the first question
    createQuestion();
}

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
        formGroup.className = "formGroup"
        questionEl.id = "questions" + [i]

        // create question text
        var questionText = document.createTextNode(questions[i].question);

        // add question to document
        questionEl.appendChild(questionText);

        // add element to the dom 
        formGroup.appendChild(questionEl);

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
    submitBtn.className = "btn btn-lg btn-primary";
    submitBtn.textContent = "Submit Answer"
    submitBtn.onclick = submitAnswer

    // add button to form group
    questionForm.appendChild(submitBtn);
}
