

//function to find factorial 

let fact=(n)=>{

    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }
    
    else{
        return n * fact(n-1);
    }


}

//event listner

document.getElementById('btn').addEventListener('click',_=>{
    const num=Number(document.getElementById('num').value);
    if(num>=0){
        const res=fact(num);
        let pTag=document.createElement('p');
        pTag.innerText='Factorial of number '+num+' is ' + res;
        document.getElementById('btn-div').appendChild(pTag)
    }
    else{
        let pTag=document.createElement('p');
        pTag.innerText='Enter valid number';
        document.getElementById('btn-div').appendChild(pTag)
    }
})
document.getElementById('btn-reset').addEventListener('click',_=>{
    window.location.reload();
})