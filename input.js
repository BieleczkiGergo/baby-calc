let babyObj = {
    weight : 0,
    eaten : 0,
    meals : [],
    mealc : 0,

}

/*
súly/6 /étkezések száma
aktuális étkezésnél mennyit evett
ha kevesebbet evett, mint kell
meg kell enni a bónusz mennyiséget
*/

function count(){
    return Math.round(((babyObj.weight/6)-babyObj.eaten) / (babyObj.meals-babyObj.mealc));
}

function setWeight(){
    
}

function makeRows(){
    let count = document.getElementById("mealc").value;
    babyObj.mealc = count;
    let table = document.getElementById("mealTable");
    table.innerHTML = "";
    console.log(babyObj);
    babyObj.meals = Array(count);

    for(let i=0; i<count; i++){
        let row = document.createElement("tr");
        let lineC = document.createElement("td");
        lineC.innerText = (i+1) + ". étkezés";
        row.appendChild(lineC);

        let lineInput = document.createElement("td");
        row.appendChild(lineInput);

        let input = document.createElement("input");
        input.type = "number";
        input.id = "in-" + i;
        input.oninput = validateDecor(input, i);
        lineInput.appendChild(input);

        let out = document.createElement("td");
        out.id = "out-" + i;
        row.appendChild(out);

        table.appendChild(row);
    }
}

//decorator function for meal input validation
function validateDecor(element, index){
    function something(){
        console.log(element.value + typeof(element.value));
        try{
            babyObj.meals[index] = parseInt(element.value);

        }catch{
            element.className = "invalid";

        }
    }

    return something;
}

function showMeals(){
    console.log("showMeals function called");
    console.log(babyObj.meals);

}

/*function validate(id){
    let input = document.getElementById(id);
}*/


