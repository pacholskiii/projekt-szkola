let plec = document.querySelector("#plec");
let wiek = document.querySelector("#wiek");
let wzrost = document.querySelector("#wzrost");
let masa = document.querySelector("#masa");
let aktywnosc = document.querySelector("#aktywnosc");
let cel = document.querySelector("#cel");

let wyniki = document.querySelector(".wyniki")
let oblicz = document.querySelector("#oblicz");
let wynikiMacro = document.querySelector("#wyniki-macro");
let wynikiBlank = document.querySelector(".wyniki-blank");

let calories;
let proteinCalories;
let fatCalories;
let carbsCalories;

let protein, fat, carbs = "";

let ppmM;
let ppmK;
let baseCalories = ""



oblicz.addEventListener("click", () => {
   
    
    if(isNaN(parseFloat(wiek.value)) || isNaN(parseFloat(wzrost.value)) || isNaN(parseFloat(masa.value))){
       
        oblicz.innerHTML = "Podaj poprawne wartości!";
        oblicz.style.fontSize = "18px";
        
        setTimeout(() => {
            oblicz.innerHTML = "Oblicz";
        }, 3000);
     
       
    }
    else if(!wyniki){
       
          
          calculateCalories();
         
          wynikiBlank.classList.add("animation-wyniki-blank");
            wynikiBlank.style.display = "none";
    }
   

});


function writeAnswers(){
   if(wyniki){
    wyniki.style.display = "block";
   }
}

const PPM_M = () =>{

    ppmM = 66.5 + (13.7 * masa.value) + (5 * wzrost.value) - (6.8 * wiek.value);
    console.log(ppmM);
    return ppmM;
}
const PPM_K = () =>{
    ppmK = 655 + (9.6 * masa.value) + (1.85 * wzrost.value) - (4.7 * wiek.value);

    return ppmK;
}



function calculateCalories(){

    let section = document.querySelector("#wyniki-macro");
    let results = document.createElement('div');
   
   

    if (section.querySelector('.wyniki')) {
        section.removeChild(section.querySelector('.wyniki'));
        
        //BASE CALORIES

        let optionsPhysical = document.querySelector("#aktywnosc");
        let selectedIndex = optionsPhysical.selectedIndex + 1;
        let physicalFactor = optionsPhysical[selectedIndex - 1].value;
        console.log("Physical factor: " + physicalFactor);

        if(plec.value == "Mężczyzna"){
            baseCalories = PPM_M() * physicalFactor;
        }
        else{
            baseCalories = PPM_K() * physicalFactor;
        }
        calculateMacros();

        writeHTML(results, section);
       
    }
    else{
        
        section.classList.add("active");

        //BASE CALORIES

        let optionsPhysical = document.querySelector("#aktywnosc");
        let selectedIndex = optionsPhysical.selectedIndex + 1;
        let physicalFactor = optionsPhysical[selectedIndex - 1].value;
        console.log("Physical factor: " + physicalFactor);

        if(plec.value == "Mężczyzna"){
            baseCalories = PPM_M() * physicalFactor;
        }
        else{
            baseCalories = PPM_K() * physicalFactor;
        }
        calculateMacros();

        writeHTML(results, section);
        
    }
   
   
}

function calculateMacros(){
   
    protein = Math.floor((baseCalories * 0.2) / 4);
   fat = Math.floor((baseCalories * 0.3) / 9);
   carbs = Math.floor((baseCalories * 0.5) / 4);
    
   
    
 }
 

function writeHTML(results, section){

   

    let goalValue = document.querySelector("#cel");
    let selectedGoalIndex = goalValue.selectedIndex;
    console.log(selectedGoalIndex);
   
    let goalText = goalValue[selectedGoalIndex].text;
    console.log(goalText);
    console.log(parseFloat(protein));
  

    results.classList.add("wyniki", "animation-wyniki");
    results.innerHTML =  `
<h2>Twoje zapotrzebowanie kaloryczne</h2>
  <div class="inner-box">
      <div class="calories">
          <img src="img/human-body.png" alt="human-body">
          <div class="calories-info">
              <p>Zapotrzebowanie na:</p>
              <strong>${goalText}</strong>
              <div class="demand"><span>${baseCalories.toFixed(0)}</span> <span class="added">${selectedGoalIndex == 2 ? "+ 300" : (selectedGoalIndex == 0 ? '- 300' : "")}</span></div>  
          </div>
      </div >
          <div class="values">
              <div>
                  <img src="img/whey-protein.png" alt="">
                  <span>Białko</span>
                  <strong>${protein}</strong>g
              </div>
             
              <div>
                  <img src="img/fat.png" alt="">
                  <span>Tłuszcz</span>
                  <strong>${fat}</strong>g
              </div>

              <div>
                  <img src="img/bread.png" alt="">
                  <span>Węglowodany</span>
                  <strong>${carbs}</strong>g
              </div>
              `
             
                section.appendChild(results);  
}

// nav

let btn = document.querySelector(".hamburger");
let links = document.querySelector(".nav-links");
let header = document.querySelector(".header")

btn.addEventListener('click', () => {
    links.classList.toggle("active");
    header.classList.toggle("active2")
}); 

