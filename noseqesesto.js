const array1 = new Array();
for(let x=0;x<50;x++){
    array1.push(Math.floor(Math.random()*100+1));
const cantidadNum = array1.reduce((contadorNum, num) => {
    contadorNum[num] = (contadorNum[num] || 0)+1;
    return contadorNum;
},{});
console.log(contadorNum)
document.write(Object.values(cantidadNum))
}