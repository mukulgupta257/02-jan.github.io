

const findfizbuzz=_=>{
    const range=Number(document.getElementById('fizbuzz_range').value);
    console.log(range)
    for(let i=1;i<=range;i++){
        console.log('i')
        const printfizbuzz=document.createElement('span')
        printfizbuzz.innerText=i
        if(i%3==0){
            printfizbuzz.innerText='fizz'
        }
        if(i%5==0){
            printfizbuzz.innerText="buzz"
        }
        if( i%3==0 && i%5==0 ){
            printfizbuzz.innerText='Fizz Buzz'
        }
        printfizbuzz.classList.add('series')
        let print=document.getElementById('fizbuzz_print')
        print.appendChild(printfizbuzz);
    }
}

document.getElementById('fizbuzz_btn').addEventListener('click',findfizbuzz)