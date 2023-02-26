/*Problem Statement 1:
Problem Statement
Given a value N, if we want to make change for N cents, 
and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins, 
how many ways can we make the change? The order of coins doesn’t matter.

Constraint
Input should be a number

Explanation:
From the input 4 is the total number when we add the pair of number {1, 2, 3}
Below are the pairs
{ 1, 1, 1, 1 } => 4
{ 1, 2, 1 } => 4
{ 2, 2 } => 4
{ 1, 3 } => 4
Total 4 pairs so the output is 4

Input Format
First line of Input should be a number N
Second line of input should be a number separated by space

Output Format
Number of pairs as Number	

Sample Input 1 :
4
1 2 3
  
output :  
4

Sample Input 2 :
10
1 2 3 4 5 6

output :  
35 */

function count(S, m, n) {
  if (n == 0) return 1;
  if (n < 0) return 0;
  if (m <= 0) return 0;
  return count(S, m - 1, n) + count(S, m, n - S[m - 1]);
}

let arr = [1, 2, 3, 4, 5, 6];
let n = 10;
let m = arr.length - 1;

console.log(count(arr, m, n));
