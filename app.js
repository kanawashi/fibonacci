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

const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}
