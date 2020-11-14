function fn(n){
    if(n==1 || n==2){
        return 1;
    }else {
        return fn(n-1)+fn(n-2);
    }
}
let res=fn(50);
console.log(res);