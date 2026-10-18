function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            resolve(num);
        },1000)
    })
}
async function demo() {
   console.log( await getNum());
   console.log( await getNum());
   console.log( await getNum());
   console.log( await getNum());
   console.log( getNum());
}
demo();
