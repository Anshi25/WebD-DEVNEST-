const questiontoans=[
    {
        qs: "Q-1 Choose the correct HTML element for the largest heading",
        a:"h1",
        b:"h6",
        c:"head",
        d:"heading",
        ans:"opt1",
    },
    {
        qs: "Q-2 Who is making the Web standards?",
        a:"mozilla",
        b:"microsoft",
        c:"google",
        d:"the world wide web consortium",
        ans:"opt4",
    },
    {
        qs: "Q-3 What is the correct HTML element for inserting a line break?",
        a:"br tag",
        b:"break",
        c:"b",
        d:"hr",
        ans:"opt1",
    },
    {
        qs: "Q-4 Which character is used to indicate an end tag?",
        a:"*",
        b:"/",
        c:"-",
        d:"#",
        ans:"opt2",
    },
    {
        qs: "Q-5 How can you make a numbered list?",
        a:"ul",
        b:"ol",
        c:"dl",
        d:"list",
        ans:"opt2",
    }
];

const question=document.querySelector('.quest');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector("#btn");
const answers=document.querySelectorAll(".option");
const showscore=document.querySelector("#showscore");

let quescount=0;
let score=0;

const loadquestion=()=>{
    const questionlist=questiontoans[quescount];
    question.innerHTML=questionlist.qs;
    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;

}

loadquestion();
const getcheckanswer=()=>{
    let res;
    answers.forEach((curansele)=>{
        if(curansele.checked)
        {
            res=curansele.id;
        }
    });
    return res;
};

const deselectall=()=>{
    answers.forEach((curansele)=>curansele.checked=false)
};
submit.addEventListener('click',()=>{
    const checkedanswer=getcheckanswer();
    if(checkedanswer===questiontoans[quescount].ans){
        score++;
    }
    quescount++;
    deselectall();

    if(quescount<questiontoans.length){
        loadquestion();
    }
    else{
        showscore.innerHTML=
        `
        <h2>You scored ${score}/${questiontoans.length} </h2>
        <button class="play" onclick="location.reload()">Play again</button>
        `;
        showscore.classList.remove("last");
   }

});