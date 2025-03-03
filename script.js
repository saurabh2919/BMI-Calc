let heightInput = document.querySelector("#heightInput");
let weightInput = document.querySelector("#weightInput");
let buttonClick = document.querySelector("#calBMI");
let optionClick = document.querySelector(".option");
let option = true;

optionClick.addEventListener("click", function(){
    if(optionClick.textContent === "Enter height in cm"){
        document.querySelector("h4").textContent = "Height(cm)";
        heightInput.setAttribute("placeholder", "Enter your height in cm");
        optionClick.textContent = "Enter height in m";
        option = false;
        return;
    }
    else if(optionClick.textContent === "Enter height in m"){
        document.querySelector("h4").textContent = "Height(m)";
        heightInput.setAttribute("placeholder", "Enter your height in m");
        optionClick.textContent = "Enter height in cm";
        heightInput.value = heightInput.value;
        option = true;
        return;
    }
}) 

function heightInCm(height){
    return height/100;
}

buttonClick.addEventListener("click", function(){
    let result = calculateBMI(heightInput.value, weightInput.value);
    if(result < 18.5){
        document.querySelector("h2").textContent = "You are under weight";
    }
    else if(result > 18.5 && result < 24.9){
        document.querySelector("h2").textContent = "You have Normal weight";
    }
    else if(result > 25 && result < 29.9){
        document.querySelector("h2").textContent = "You are overweight";
    }
    else if(result > 30){
        document.querySelector("h2").textContent = "You are obese";
    }

    heightInput.value = null;
    weightInput.value = null;
})

function calculateBMI(height, weight) {
    if(height <= 0 || weight <= 0 || height == null || weight == null){
        alert("Enter valid height and weight");
        return;
    }
    if(option === false){
       height = height/100;
    }
    let result = (weight) / (height * height);
    return result;
}


