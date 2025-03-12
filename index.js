// sum of n natural numbers

function sum(n){
    let total = 0;
    for(int i = 1; i<=n; i++) {
        total += i;
    }
    return total;
}

let ans = sum(12);
console.log(ans);