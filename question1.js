
function isPrime(num) 
{
    if (num < 2) {
        return false; // 0 and 1 are not prime
    }
    for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false; // found a divisor, so not prime
        }
    }
    return true;
}

function digitSum(num) 
{
    var s = "" + num;   
    var sum = 0;
    for (var i = 0; i < s.length; i++) 
    {
        sum = sum + parseInt(s.charAt(i));
    }
    return sum;
}

function hasZero(num) 
{
    var s = "" + num;
    for (var i = 0; i < s.length; i++) 
        {
        if (s.charAt(i) === "0") 
            {
             return true;
            }
        }
    return false;
}

function runQ1() {
    var L = parseInt(prompt("Enter L:"));
    var R = parseInt(prompt("Enter R:"));
    var K = parseInt(prompt("Enter K:"));

    var count = 0;

    for (var x = L; x <= R; x++) {
        if (x % K === 0) {
            if (!hasZero(x)) {
                if (isPrime(digitSum(x))) {
                    count = count + 1;
                }
            }
        }
    }

    alert(count);
}