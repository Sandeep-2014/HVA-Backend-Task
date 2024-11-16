# Common Elements in Two Arrays:
# You are given an integer n and two integer arrays each of length n. Print all the common elements between these two arrays.
# Print the elements in an order as they appear in the first array. If one common element is repeated multiple times, print it just once. If there are no common elements, print No.
# Sample Input 1: 
# 7
# 4 9 2 5 7 4 3
# 9 6 4 8 6 1 12
# Sample Output 1: 
# 4 9
# Explanation 1: In the given arrays, 4 is repeating multiple times, but you need to print it just once. Also, the order of printing 4 and 9 are as per their appearance in the 1st array.
# Sample Input 2: 
# 7
# 2 7 6 4 7 4 3
# 8 5 9 1 5 8 9
# Sample Output 2: 
# No
# Explanation 2: No elements are common in the two given array.

arrLenght = int(input('enter the lenght of arrays :- '))
arr = list(map(int, input('Enter numbers separated by space: ').split()))
arr1 = list(map(int, input('Enter numbers separated by space: ').split()))

# i = 0
# while i < arrLenght:
#     j = 0
#     while j < arrLenght:
#         if arr[i] == arr1[j]:
#             print(arr[i])
#             break
#         else:
#             j+=1
#     i+=1


# arrLenght = int(input('enter the lenght of arrays :- '))
# arr = list(map(int, input('Enter numbers separated by space: ').split()))
# arr1 = list(map(int, input('Enter numbers separated by space: ').split()))

# i = 0
# while i < arrLenght:
#     # j = 0
#     if arr[i] in arr1:
#         print(arr[i])
#     i+=1

arr.sort()     # Sort the first array
arr1.sort()    # Sort the second array
print(arr)
print(arr1)
i, j = 0, 0    # Initialize two pointers

# Traverse both arrays to find common elements
while i < len(arr) and j < len(arr1):
    print(i)
    print(j)
    if arr[i] == arr1[j]:
        print(arr[i])  # Print common element
        i += 1         # Move both pointers
        j += 1
    elif arr[i] < arr1[j]:
        i += 1         # Move pointer in the first array
    else:
        j += 1         # Move pointer in the second array
