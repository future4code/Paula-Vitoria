array = [2,9,3,1];
function ordenaArray(array) {
    let novoArray =[]
    let controle = 0;
    let auxiliar;
    for(let i =1; i<array.length; i++){
        if(array[controle] < array[i]){
            auxiliar = array[controle];
            array[controle] = auxiliar;
        }
    }
    novoArray.push(array[controle]);
    controle ++ ;

}