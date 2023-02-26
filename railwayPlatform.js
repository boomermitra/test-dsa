/*Problem Statement 2:
Problem Statement
Given the arrival and departure times of all trains that reach a railway station, 
the task is to find the minimum number of platforms required for the railway station so that no train waits. 
We are given two arrays that represent the arrival and departure times of trains that stop.

Constraint 

Input should be in the time format (hours:minutes) format

Input Format
Two arrays separated by newline and each array element separated by space

Output Format
Integer	

Explanation
	
From the below input default 1 track should be free for train to be arrived

1)9:00 => 9:10 (default track is booked and it will be released at 9:10)
2)9:40 => 12:00 (default track is released and it is free to use the default track so far required track is 1)
3)9:50 => 11:20 (Need one more track as the default track is not free at that interval so far required track is 2)
4)11:00 => 11:30 (Need one more track as the existing track is not free at that interval so far required track is 3)
5)15:00 => 19:00 (No additional track is required since all tracks are free at that interval so far required track is 3)
6)18:00 => 20:00 (No additional track is required since all tracks are free at that interval so far required track is 3)

So, the output is 3

Sample Input 1 :
900 940 950 1100 1500 1800
910 1200 1120 1130 1900 2000

  
output :  
3

Sample Input 2 :
900 940
910 1200

output :  
1*/

function findPlatform(arr, dep) {
  // plat_needed indicates number of platforms
  // needed at a time
  var plat_needed = 1,
    result = 1;
  //var i = 1, j = 0;

  // run a nested loop to find overlap
  for (var i = 0; i < arr.length; i++) {
    // minimum platform
    plat_needed = 1;

    for (var j = 0; j < arr.length; j++) {
      // check for overlap
      if (i != j) if (arr[i] >= arr[j] && dep[j] >= arr[i]) plat_needed++;
    }

    // update result
    result = Math.max(result, plat_needed);
  }

  return result;
}

let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 120, 1120, 1130, 1900, 2000];
console.log(findPlatform(arr, dep));
