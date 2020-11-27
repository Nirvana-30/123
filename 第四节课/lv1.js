let str=('I-love-redrock')//声明一个字符串变量
function stringToCamel(str){
  let temp=str.split("-");
  for(var i=1;i<temp.length;i++){
       temp[i]=temp[i][0].toUpperCase()+temp[i].slice(1);
   }
    return temp.join("");
}




let arr=["myfirstactivity","today activity","yourActivity","activity"]
let result=arr.map;
console.log(result)
