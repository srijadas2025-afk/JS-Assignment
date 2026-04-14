# JS-Assignment
Assignment 4 of Fundamentals of Web Design by Srija Das

Steps taken in making this assignment:
1. Created .js files for each individual question
2. Created an index.html file that will display these questions in browser for ease
3. Wrote the code for each problem given in seperated .js files.

Question 1:Digit Gatekeeper
Given three integers L, R, and K, count how many integers x satisfy all of the following:
• L ≤ x ≤ R
• x is divisible by K
• the sum of digits of x is a prime number
• x does not contain the digit 0

Approach: 
1. isPrime(num) checks if a number is prime by trying all divisors from 2 up to root(num). If any divisor divides the number, it is not prime.
2. digitSum(num) converts the number to a string, takes each digit one by one, and adds them to get the digit sum.
3.hasZero(num) also converts the number to a string and checks if any digit is '0'.
4. runQ1(): 
 i.Reads L,R and K.
 ii.Loops over every x from L to R.
 iii. for each x, checks the three functions written above.
 iv. If all three are true, it increases the count.
 v.Shows the final count as alert.

Question 2:
Roll-Seed Lock
Take an integer N and the student’s seed value. Repeat the following exactly 3 times:
• if the current number is even, replace it with current / 2 + seed
• otherwise, replace it with current * 3 - seed
After 3 steps:
• print YES if the final number is between 100 and 999 inclusive, and • the middle digit of the final number is equal to seed
Otherwise print NO.

Approach:
1. Take 2 inputs N and seed.
2. If the current number is even, it replaces it with (current divided by 2) plus seed.
3. If the current number is odd, it replaces it with (current multiplied by 3) minus seed.
4. Do the steps 2 and 3 exactly three times.
5. After 3 steps, check 2 conditions:
 i.Is the final number between 100 and 999, including both 100 and 999?
 ii.Is the middle digit of the final number equal to the seed?
6. To get the middle digit:
 i.Convert the final number to a string.
 ii.Take the character at index 1 (the second digit in a 3‑digit number).
 iii.Convert that character back to an integer and compare it with seed.
7. If both conditions are true, we show "YES, <final number>".
If any one is false, we show "NO, <final number>".

Question 3:Mirror Corridor
Given integers N and K, find the smallest non-negative integer X such that:
• N + X is a palindrome number
• N + X is divisible by K
If no such X exists for 0 ≤ X ≤ 100000, print -1.

Approach:
1. Take 2 inputs N and K.
2. isPalindrome(num):
 i.Converts the number to a string.
 ii.Builds a new string by reading the original string from the last character to the first (reverse it).
 iii.Compares the original string with the reversed string.
 iv.Returns true if they are the same,the number is a palindrome.
3.runQ3():
 i.t tries values of X from 0 to 100000.
 ii.For each X, it computes candidate = N + X.
 iii.It checks if Is candidate a palindrome? and Is candidate divisible by K (i.e., candidate % K == 0)?
4.As soon as it finds the first X that satisfies both conditions, it stores X in answer and stops the loop using break.
5.Finally, it displays the value of answer (or -1 if no such X is found within the loop, though in practice the loop almost always finds one).

Question 4:Fare Calculator
A ride fare is computed as follows:
• start with fare = base + 7 * distance
• if minutesLate > 15, add 20
• if distance > 10, add ⌊10% of fare ⌋
• if seed is odd, subtract seed
• otherwise, add seed
• finally, round the result up to the nearest multiple of 5

Approach:
1.Start with the base fare and add 7 times the distance:
fare = base + 7 * distance
2.If the service is more than 15 minutes late, add a penalty of 20 to the fare.
3.If the distance is more than 10 units, add 10% of the current fare (rounded down) as an extra charge.
4.Depending on the seed:
 i.If the seed is odd, subtract the seed value from the fare.
 ii.If the seed is even, add the seed value to the fare.
5.Finally, round the fare up to the nearest multiple of 5.
This is done by dividing the fare by 5, rounding up to the next whole number, and then multiplying back by 5.
6.Final fare shows up in alert.

Question 5:Skipping Numbers
Given N and seed, find the smallest positive integer m such that the sum of all numbers
from 1 to m that are not divisible by (seed + 2) is at least N.
Print both:
• the value of m
• the computed sum

Approach:
1.It sets skip = seed + 2. This is the number that tells which values to skip.
2.It starts with sum = 0 and m = 0.
3.It repeatedly increases m by 1 (going through natural numbers 1, 2, 3, ...).
4.For each m, it checks if m is not divisible by skip (i.e., m % skip !== 0).
 i.If m is not divisible by skip, it adds m to the sum.
 ii.If m is divisible by skip, it skips that number and does not add it.
5.The loop continues until the sum becomes greater than or equal to N.
6.When the loop stops, the program shows two values:
 i.m: the last number that was considered (either added or skipped).
 ii.sum: the total sum after adding only the non‑skipped numbers up to that point.

Question 6: Contest Score Judge
A student submits:
• a correct answers
• b partially correct answers
• c wrong answers
Compute the score:

score = 3a + b − 2c

Then apply these rules:
• if the score becomes negative, replace it with 0
• if a + b + c > 50, subtract 10
• final result determines status:
– PASS if score ≥ 60
– FAIL otherwise

Approach:
1.raw score is:
score = 3 * a + b - 2 * c
2.If the score becomes negative, it is set to 0
3.If the total number of answers (a + b + c) is more than 50, a penalty of 10 points is subtracted from the score.
4.If the final score is 60 or more, the status is "PASS".
5.If the final score is less than 60, the status is "FAIL".
6.The program then shows the final score and the status in the format: score, status.






