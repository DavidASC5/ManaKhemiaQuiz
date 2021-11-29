// Questions will be asked
const Questions = [{
    id: 0,
    q: "What was the name of Vayne cat in Mana Khemia?",
    a: [{ text: "Phosphorus", isCorrect: false },
        { text: "Sulpher", isCorrect: true },
        { text: "Astatine", isCorrect: false },
        { text: "Selenium", isCorrect: false }
    ]

},
{
    id: 1,
    q: "When is Vayne's birthday?",
    a: [{ text: "Spet. 29th", isCorrect: true, isSelected: false },
        { text: "Oct. 18", isCorrect: false },
        { text: "Oct. 14", isCorrect: false },
        { text: "Sept. 28", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is Vayne's secret identity?",
    a: [{ text: "The Sulpher Mana", isCorrect: false },
        { text: "The God Mana", isCorrect: false },
        { text: "The Wish Mana", isCorrect: true },
        { text: "The War Mana", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#8eafcc";
    op2.style.backgroundColor = "grey";
    op3.style.backgroundColor = "grey";
    op4.style.backgroundColor = "grey";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "grey";
    op2.style.backgroundColor = "#8eafcc";
    op3.style.backgroundColor = "grey";
    op4.style.backgroundColor = "grey";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "grey";
    op2.style.backgroundColor = "grey";
    op3.style.backgroundColor = "#8eafcc";
    op4.style.backgroundColor = "grey";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "grey";
    op2.style.backgroundColor = "grey";
    op3.style.backgroundColor = "grey";
    op4.style.backgroundColor = "#8eafcc";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "#8eafcc";
        result[0].style.backgroundColor = "#9e9e9eb7"
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "#3d0500";
        result[0].style.backgroundColor = "#9e9e9eb7"
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})
