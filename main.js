const arithmetic=require('./arithmatic');
const fs=require('fs');

const a=10;
const b=5;

const sum=arithmetic.add(a,b);
const difference=arithmetic.subtract(a,b);
const product=arithmetic.multiply(a,b);
const quotient=arithmetic.divide(a,b);

console.log(`Sum:${sum}`);
console.log(`Difference:${difference}`);
console.log(`Products:${product}`);
console.log(`quotient:${quotient}`);

const result=`
sum:${sum}
Difference:${difference}
Products:${product}
quotient:${quotient}
`
fs.writeFile('result.txt',result,(err)=>{
    if(err){
        console.log('error writing to file',err);
    }else{
        console.log('Results written to result.text:');

    }
});

fs.readFile('result.txt','utf8',(err,data)=>{
    if(err){
        console.log('error reading from file',err);
    }else{
        console.log('content of results.txt:');
        console.log(data);

    }
})