/* Problem Statement
You are given an array A of N elements composed only of 1s and 0s.
There is a machine that does the following operations on the array in one second:
· Swap Ai and Ai+1 for i (1<=i<N) such that Ai = 1 and Ai+1 = 0

For, example, if A = [ 0, 1, 0, 0, 1 ,0, 1, 0] and N= 8 then in one second the machine will convert the array into A = [0, 0, 1, 0, 0 ,1, 0, 1]. (Here i = 2, 5, 7)
Find the minimum time required to sort the array using the machine.

Constraints
1 <= T <= 10
1 <= N <= 105
0 <= Ai <= 1
All input values are integers.

Input Format
First-line contains T.
First line of each test case consists of a single integer N.
Second line of each test case consists of N space separated integers denoting the array A.

Output Format
Print in a newline for each test case a single integer denoting the minimum time required to sort the array using the machine.

Sample Input 1
2
3
1 0 0
2
0 1

Sample Output 1
2
0

Explanation of Sample 1
For the 1st test case,
A = [1, 0, 0]
In first second machine converts array to A = [ 0, 1, 0]
In next second machine converts array to A = [ 0, 0, 1]
Array has become sorted.

For 2nd test case, array is already sorted.*/
