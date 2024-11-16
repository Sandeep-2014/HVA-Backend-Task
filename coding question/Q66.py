# Subarray with a Given Sum:

# You are given an integer array and a target sum. Print a subarray that adds up to the target sum.
# If there are multiple possible subarrays, print the one that appears first and is smallest. And if, no such subarray is possible, print "Not Possible".
# A subarray is defined as a contiguous portion of an array.
# Sample Input 1: 
# 3 6 2 1 7
# 10
# Sample Output 1: 
# 2 1 7
# Explanation 1: 10 = 2+1+7. [2, 1, 7] is a subarray within the given array that adds up to 10.
# Sample Input 2: 
# 3 6 2 1 7
# 14
# Sample Output 2: 
# Not Possible

arr = list(map(int, input('Enter numbers separated by space: ').split()))
targetSum = int(input("enter the target sum :- "))

i = 0
while i < len(arr):
    j = i
    sum = 0
    while j < len(arr):
        subArr = arr[i: j+1]
        sum += arr[j]
        j+= 1
    if sum == targetSum:
        break
    else:
        i+=1
if sum == targetSum:
    print(subArr)
else:
    print('Not Possible')