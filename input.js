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

function getData(id){
    let input = document.getElementById(id).value;
    if(input.value == null || input.value == 0){
        input.className = "wrong";
        return 0;
        
    }
    input.className = "";
    return parseInt( input.value );
}

function validate(){
    babyObj.weight=getData("weight");
    babyObj.eaten=getData("eaten");
    babyObj.meals=getData("meals");
    babyObj.mealc=getData("mealc");


    console.log(typeof(babyObj.weight));
    console.log(typeof(babyObj.eaten));
    console.log(typeof(babyObj.meals));
    console.log(typeof(babyObj.mealc));
    let val = count();
    let out = document.getElementById("out");
    out.innerText = val;

}

