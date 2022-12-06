babyObj = {
    weight: 0,
    eaten: 0,
    meals: 0,
    mealc: 0,

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
        lineInput.appendChild(input);

        let out = document.createElement("td");
        out.id = "out-" + i;
        row.appendChild(out);

        table.appendChild(row);
    }
}

/*function validate(id){
    let input = document.getElementById(id);
}*/
