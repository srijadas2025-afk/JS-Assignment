
function runQ5() {
    var N    = parseInt(prompt("Enter N:"));
    var seed = parseInt(prompt("Enter seed:"));

    var skip = seed + 2; 
    var sum  = 0;
    var m    = 0;

    while (sum < N) 
    {
        m = m + 1;

        if (m % skip !== 0) 
        {
            
            sum = sum + m;
        }
        
    }

    alert(m + " " + sum);
}