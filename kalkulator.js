let waga = document.querySelector("#waga");
let wzrost = document.querySelector("#wzrost")
let oblicz = document.querySelector(".oblicz");
let wyniki = document.querySelector(".wyniki");
let bmiSpan = document.querySelector(".bmi");
let normyBmi = document.querySelector(".normy-bmi");
let normyBtn = document.querySelector(".normy-bmi-przycisk");
let calc = document.querySelector(".kalkulator");

let weightValue;
let heightValue;
let bmi;

oblicz.addEventListener("click", () =>{
    weightValue = parseFloat(waga.value);
    heightValue = parseFloat(wzrost.value) / 100;
    bmi = weightValue / (Math.pow(heightValue, 2));
    console.log(bmi);
    
    
    if(isNaN(weightValue)  || isNaN(heightValue)){
        wyniki.style.display = "block";
        bmiSpan.innerHTML = "Podaj poprawne wartości"
    }
    else{
        wyniki.style.display = "block";
        bmiSpan.innerHTML = bmi.toFixed(2);
       

    }
    
});

normyBtn.addEventListener("click", () => {
    normyBmi.style.visibility = "visible";
    normyBmi.classList.add("animation-normy");
    calc.classList.add("animation-calc");
});

let bmiContainer = document.querySelector(".kontener-bmi");


// Animations

let bmiInfoInerval = setInterval(function(){
    if(bmiContainer.getBoundingClientRect().bottom <= 890){
        bmiContainer.style.visibility = "visible";
        bmiContainer.classList.add("animation-bmi");
        clearInterval(bmiInfoInerval);
    }
   
}, 1000/60)



