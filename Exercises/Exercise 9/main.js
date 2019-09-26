let btnColar = document.querySelector("#btnColar").addEventListener("click", colar);
let v = [];

for(let c = 0; c<1000; c++){
    let a = 1;
    v.push(a);
}
console.log(v);

function colar(){
    for(let i=2; i<1000; i++){
        if(v[i]===1){
            for(let j=i+1;j<1000;j++){
                if(j%i==0){
                    v[j]=0;
                }
            }
        }
    }
    console.log(v);
}

