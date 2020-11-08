let arr=[[1,2],[[3],4]]
function flatten(arr){
    return[].concat(
        ...arr.map(x=>Array.isArray(x)?flatten(x,x)
    :}
console.log(flatten(arr))//->[1,2,3,4]

let arr = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}]

function compare(property){
    return function(a,b){
     let value1=a[property];
     let value2=b[property];
     return value1 -value2;
    }
}
console.log(arr.sort(compare('id')))