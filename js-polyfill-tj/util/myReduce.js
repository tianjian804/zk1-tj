var arr = [1,2,3,4]

const myReduce=(sum,two)=>{

    var sum = arr.myReduce((prev, next)=>{
        console.log('pre:', prev, 'next:', next)
        return prev+next;
    }, 1000)
    return sum
}

module.exports=myReduce;