const generatePassword = document.getElementById("generate-password")
const characterLength = document.getElementById("character-length")
const passwordDisplay = document.getElementById("password-display")
const characterLengthBar = document.getElementById("character-length-bar")
const characterLengthPercentage = document.getElementById("character-length-percentage")

const passwordStrengthDisplay = document.getElementById("password-strength-type")
const barLevel1 = document.getElementById("bar-level-1")
const barLevel2 = document.getElementById("bar-level-2")
const barLevel3 = document.getElementById("bar-level-3")
const barLevel4 = document.getElementById("bar-level-4")

const copyBtn = document.getElementById("fa-copy")
const copyText = document.getElementById("copy-text")

const uppercaseCheck = document.getElementById("uppercase-check")
const lowercaseCheck = document.getElementById("Lowercase-check")
const numberCheck = document.getElementById("numbers-check")
const symbolsCheck = document.getElementById("symbols-check")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let newCharacter


generatePassword.addEventListener("click",function(){
    passwordOptions()
    displayPassword()
    
})

characterLength.addEventListener("change",characterLengthBarDisplay)


copyBtn.addEventListener("click",function(){
    document.getElementById('finalPassword').focus()

    document.execCommand("copy")
})

copyBtn.addEventListener("mouseenter",function(){
    copyText.style.display = "block"
})

copyBtn.addEventListener("mouseleave",function(){
    copyText.style.display = "none"
})

function randomNumber(data){
    return Math.floor(Math.random() * data.length) 
}

function passwordOptions(){

   newCharacter = characters
    
  if(!uppercaseCheck.checked)
  {
    newCharacter = characters.join("").replace(/[A-Z]/g,"").split("")
    
  }
 
  if(!lowercaseCheck.checked)
  {
     newCharacter = newCharacter.join("").replace(/[a-z]/g,"").split("")
  }
 
  if(!numberCheck.checked)
  {
     newCharacter = newCharacter.join("").replace(/[0-9]/g,"").split("")
   
  }

  if(!symbolsCheck.checked)
  {
     newCharacter = newCharacter.join("").replace(/[^A-Z0-9]/ig,"").split("")
    
  }


}

function displayPassword(){

    let displayArray = []

    for(let i = 0; i < characterLength.value; i++)
    {
        let indexNumber = randomNumber(newCharacter)
        displayArray.push(newCharacter[indexNumber])
    }
   
  passwordDisplay.innerHTML = `<p id="finalPassword" style="margin-bottom:0" contenteditable="true" onfocus="document.execCommand('selectAll',false,null);">${displayArray.join("")}</p>`

}

function characterLengthBarDisplay(){
    let lengthPercentage = (characterLength.value/20) * 100
    characterLengthPercentage.style.width = `${lengthPercentage}%`
    strengthLevel()
}   

function strengthLevel(){
    
    if (characterLength.value > 5)
    {
        barLevel2.classList.add("bar-level-2")
        if(characterLength.value <= 10)
        {
            passwordStrengthDisplay.textContent = "Easy"
            passwordStrengthDisplay.style.color = "#10B981"
            
        }
        
    }else
    {
        passwordStrengthDisplay.style.color = "#10B981"
        barLevel2.classList.remove("bar-level-2")
        passwordStrengthDisplay.textContent = "Very Easy"
    }

    if(characterLength.value > 10)
    {
        barLevel3.classList.add("bar-level-3")
        if(characterLength.value <= 15)
        {
            passwordStrengthDisplay.style.color = "orange"
            passwordStrengthDisplay.textContent = "Normal"

        }

    }else
    {
       
        barLevel3.classList.remove("bar-level-3")
        
    }

    if(characterLength.value > 15 )
    {
        barLevel4.classList.add("bar-level-4")
        passwordStrengthDisplay.style.color = "red"
        passwordStrengthDisplay.textContent = "Hard"
    }else
    {
        barLevel4.classList.remove("bar-level-4")
    }

}