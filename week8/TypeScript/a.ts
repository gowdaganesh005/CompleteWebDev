function hello(firstname:string){
    console.log("hello ",firstname)
}

hello("raman")


function sum(a: number,b: number):number{
    const c=a+b
    return c
}

function legal(x:number){
    return x>=18
}
legal(30)


function one(two: ()=> void){
    setTimeout(two,1000);
}

function two(){
    console.log("hi there")
}

one(two)