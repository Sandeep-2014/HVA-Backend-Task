# Check for a Subarray in an Array
# You are given two arrays. Check if the second array is a subarray of the first array. Print yes if it is, else print no.
# A subarray is defined as a contiguous portion of an array.
# Sample Input 1: 
# 3 6 2 1 7 6 4 9 7
# 7 6 4 9 7
# Sample Output 1: 
# Yes
# Sample Input 2: 
# 3 6 2 1 7 6 4 9 7
# 7 6 4 9 6
# Sample Output 2: 
# No


arr = list(map(int, input('Enter numbers separated by space: ').split()))
arr1 = list(map(int, input('Enter numbers separated by space: ').split()))

i = 0
while i < len(arr):
    j = i
    while j < len(arr):
        subArr = arr[i: j+1]
        j+= 1
    if subArr == arr1:
        break
    else:
        i+=1
if subArr == arr1:
    print(subArr)
    print('Yes')
else:
    print('No')