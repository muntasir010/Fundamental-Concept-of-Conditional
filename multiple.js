const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = true;

if(salary > 20000 && height > 64){
    console.log('Su ...........patro');
}
else{
    console.log('onnoo patro khuji');
}

if(salary > 24000 ||  height > 64){
    console.log('eso baba kobul')
}
else{
    console.log('baag mokbul');
}

// more conditional
if(salary > 25000 ||  height > 74 || isBCS == false){
    console.log('eso baba kobul')
}
else{
    console.log('baag mokbul');
} 

if(salary > 2000 &&  height > 54 && isBCS == true){
    console.log('eso baba kobul')
}
else{
    console.log('baag mokbul');
} 


// more complex condition
if(salary > 24000 && hasCar == true && isBCS == true && height > 60 ){
    console.log('tomar 14 gusti raji');
}
else{
    console.log('ei biye hbe na');
}