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
    return ((babyObj.weight/6)-eaten) / (meals-mealc);
}

function getData(id){
    return document.getElementById(id).value;
}

function vaidate(){
    babyObj.weight=getData("weight");
    babyObj.eaten=getData("eaten");
    babyObj.meals=getData("meals");
    babyObj.mealc=getData("mealc");
}

