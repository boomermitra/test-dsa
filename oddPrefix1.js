/*Question Name: Odd Prefix 1

Problem Statement

Antonio has an array A consisting of N integers.

An array B is a prefix of array A if B can be formed by deleting several(possibly zero but not all) elements from the end of array A. Like for array A = [5,1,4,2], the prefixes are A1..1 = [5], A1..2 = [5,1], A1..3 = [5,1,4], A1..4 = [5,1,4,2].

A prefix is considered good if the sum of its elements is an odd number. Like for A = [5,1,4,2], A1..1 and A1..4 are the good prefixes.

Now, Antonio wants to rearrange the elements of array A such that there are a maximum number of good prefixes in final array A.

Given array A, print the maximum number of good prefixes Antonio can get in final array A.

Input Format

    First line contains a single integer denoting N.
    Next line contains N space separated integers denoting the elements of array A.

Output Format

    First print the maximum number of good prefixes Antonio can get in final array A.

Constraints

    1<=N<=105
    1<=Ai<=105

Sample Input 1

3

4 3 6

Sample Output 1

3

Explanation of Sample 1

Rearrange the elements of array A as [3,4,6]

Sum of elements in prefix A1..1 = 3

Sum of elements in prefix A1..2 = 3+4 = 7

Sum of elements in prefix A1..3 = 3+4+6 = 13

Hence it is possible to rearrange the elements of the given array such that all its three prefixes are good.*/

// Function candidate has to implement
function solve(arr, n) {}

//Driver Code
var t = 1;
while (t--) {
  var n = readline();
  var temp = readline().trim();
  var s = temp.split(" ");
  for (i = 0; i < n; i++) {
    s[i] = Number(s[i]);
  }
  var num = solve(s, n);
  print(num);
}
