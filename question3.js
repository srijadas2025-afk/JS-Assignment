
function isPalindrome(num) 
{
    var s = "" + num;
    var reversed = "";
    
    for (var i = s.length - 1; i >= 0; i--) 
        {
          reversed = reversed + s.charAt(i);
        }
    return s === reversed;
}

function runQ3() 
{
    var N = parseInt(prompt("Enter N:"));
    var K = parseInt(prompt("Enter K:"));

    var answer = -1;

    for (var X = 0; X <= 100000; X++) 
        {
          var candidate = N + X;
          if (isPalindrome(candidate) && candidate % K === 0) 
            {
             answer = X;
             break; 
            }
        }

    alert(answer);
}
