function bmi() {
    let NU=prompt("Enter your name");
    let weight = +document.querySelector("#weight").value;
    let heightcm = +document.querySelector("#height").value;
    let meter = heightcm / 100;
    let res = weight / (meter*meter);
    
    document.querySelector("#dev").innerHTML=`${NU} your body mass is ${res}`
}


