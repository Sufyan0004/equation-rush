const responseInput = document.getElementById("response");
const problemDiv = document.getElementById("problem");
const submitButton = document.getElementById("submit");

let correctAnswer = 0;

function generateAddProblem() {
    let y = Math.floor(Math.random() * 100) + 1;
    let z = Math.floor(Math.random() * 100) + 1;
     
   

 
  correctAnswer = y + z;
  while (correctAnswer >= 100){
    y = Math.floor(y/2);
    z = Math.floor(z/2);
    correctAnswer = y + z;
  }

  problemDiv.textContent = `${y} + ${z} = ?`;


  
}

function checkAnswer() {
  const userAnswer = parseInt(responseInput.value);

  if (userAnswer === correctAnswer) {
    alert("✅ Correct!");
    responseInput.value = "";
    generateProblem();
  } else {
    alert("❌ Try again.");
    
  }

  
}

submitButton.addEventListener("click", checkAnswer);
responseInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });
generateProblem(); 

function generateSubProblem(){
    let y = Math.floor(Math.random() * 100) + 1;
    let z = Math.floor(Math.random() * 100) + 1;
    
while (z > y){
    [y, z] = [z, y]; 
}
correctAnswer = y - z;
problemDiv.textContent = `${y} - ${z} = ?`;
} 
function generateDivProblem(){
    let y, z;

    do {
        y = Math.floor(Math.random() * 144) + 1;
        z = Math.floor(Math.random() * 12) + 1;
        correctAnswer = y / z;
    } while (y % z !== 0 || correctAnswer > 12);

problemDiv.textContent = `${y} ÷ ${z} = ?`;
} 

function generateMulProblem(){
let y = Math.floor(Math.random() * 12) + 1;
let z = Math.floor(Math.random() * 12) + 1;
    
correctAnswer = y * z;
problemDiv.textContent = `${y} x ${z} = ?`;
} 
function generateProblem(){
    let y = Math.floor(Math.random() * 4) + 1;

    if (y === 1){
        generateAddProblem();
    }
    else if(y === 2){
        generateSubProblem();
    }
    else if(y === 3){
        generateMulProblem();
    }
    else{
        generateDivProblem();
    }

    }


