let num = 33721, arr = [5];
let str = String(num);
let n = 1;
for (var i = 0; i < str.length; i++){
    arr[i]= Number(str[i]);
    console.log(arr[i]);
    n = n * arr[i];
}
num = String(n ** 3);
console.log(num[0],num[1]);