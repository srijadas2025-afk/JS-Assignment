
function runQ2() 
{
    var N    = parseInt(prompt("Enter N:"));
    var seed = parseInt(prompt("Enter seed:"));

    var current = N;

    for (var i = 0; i < 3; i++) 
    {
        if (current % 2 === 0) 
        {
            current = current / 2 + seed;
        } 
        else 
        {
            current = current * 3 - seed;
        }
    }

    var isThreeDigit = (current >= 100 && current <= 999);

    var s = "" + current;
    var middleDigit = parseInt(s.charAt(1));
    var middleMatches = (middleDigit === seed);

    if (isThreeDigit && middleMatches) 
    {
        alert("YES, " + current);
    } 
    else 
    {
        alert("NO, " + current);
    }
}
