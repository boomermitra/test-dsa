/*DIVISIBILITY BY K

Problem Statement


Amy has an array A of N integers.


In one operation she can select a non-empty subsequence of array A and increase or decrease each element of the array by 1.


Find the minimum number of operations she needs to make each element of the array A, divisible by K.


You are given T independent test cases.



Constraints


    1 <= T <= 10
    1 <= N <= 105
    2 <= K <= 105
    0 <= Ai <= 109
    All input values are integers.



Input Format


    First-line contains T.
    First line of each test case consists of two space separated integers N and K.
    Second line of each test case has N space separated integers denoting the array A.



Output Format


    Print in a newline for each test case a single integer denoting the minimum number of operations she needs to make each element of the array divisible by K.



Sample Input 1


1

4 3

4 3 6 2



Sample Output 1


2



Explanation of Sample 1


She selects the subsequence, {A1, A3} and decrease each by 1. So, A = [3, 3, 5, 2]

Then, she selects the subsequence, {A3, A4} and increase each by 1. So, A = [3, 3, 6, 3]

Now each element of the array is divisible by 3.*/

// Function candidate has to implement
function divisibilityByK(arr, n, k) {}

//Driver Code
var t = readline();
while (t--) {
  var temp1 = readline().trim();
  var temp2 = temp1.split(" ");
  var n = Number(temp2[0]);
  var k = Number(temp2[1]);
  var temp = readline().trim();
  var s = temp.split(" ");
  for (i = 0; i < n; i++) {
    s[i] = Number(s[i]);
  }
  var num = divisibilityByK(s, n, k);
  print(num);
}
