'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
/**
 * n 番目のフィボナッチ数を連想配列memoに格納して、返す　fib関数
 * @param {Number} n
 * @returns {Number} value
 */
function fib(n){
    if (memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n-1) + fib(n-2);
    memo.set(n, value);
    return value;
}

let length =　parseInt(process.argv[2], 10);
if (!length){
    console.log('This input is　NOT NUMBER. So we did as if the input was 0.' );
    length = 0;
}
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}
