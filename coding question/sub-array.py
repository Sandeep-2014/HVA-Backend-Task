# user_inut = input("Enter the numbers separated by space: ")
# arr = list(map(int, user_inut.split()))

# i = 0

# while i < len(arr):
#     l = i
#     r = i
#     while(r < len(arr)):
#         sub_arr = []
#         p = l
#         while(p <= r):
#             sub_arr += [arr[p]]
#             p += 1
#         print(sub_arr)
#         r += 1
#     i += 1


# i = 0

# while i < len(arr):
#     l = i
#     r = i
#     while r < len(arr):
#         print(arr[l:r+1])
#         r += 1
#     i += 1


# i = 0
# while i < len(arr):
#     j=i
#     subarray = []
#     while j < len(arr):
#         subarray += [arr[j]]
#         print(subarray)
#         j+=1
#     i+=1



# arr1 = list(map(int, user_inut.split()))

# l = 0
# r = 0
# sum = arr1[l]
# target = int(input("Enter the target number: "))
# while(l <= r):
#     if r < len(arr1):
#         if l == r:
#             if sum == target:
#                 print("Yes")
#                 break
#             else:
#                 r += 1
#         else:
#             print(sum)
#             if sum < target:
#                 sum += arr1[r]
#                 print(r)
#                 r += 1
#             elif sum > target:
#                 sum -= arr1[l]
#                 print(l)
#                 l += 1
#             else:
#                 print("Yes")
#                 break
#     print("NO")
#     break


# while(l <= r):
#     if r < len(arr1):
#         sub_arr = arr1[l:r+1]

#         if sum < target:
#             r += 1
#         elif sum > target:
#             l += 1
#         else:
#             print("Yes")
#             break
#     print("NO")
#     break

# arr1 = list(map(int, input("Enter the array of numbers: ").split()))

# l = 0
# r = 0
# target = int(input("Enter the target number: "))
# sum = arr1[l]

# while l <= r:
#     # print(sum)
#     if r < len(arr1) - 1:
#         if sum == target:
#             count = arr1[l: r+1]
#             lenght = len(count)
#             print(count)
#             sum = arr1[l + 1] + arr1[r + 1]
#             r += 1
#             l += 1
#         elif sum < target:
#             sum += arr1[r + 1]
#             r += 1
#         else:
#             sum -= arr1[l]
#             l += 1
#     else:
#         break


arr1 = list(map(int, input("Enter the array of numbers: ").split()))

l = 0
r = 1
target = int(input("Enter the target number: "))
sum = arr1[l]
smallestLenght = 999999999999999999

while l < len(arr1):
    # print(r)
    # print(sum)
    if sum == target:
        subarr = arr1[l: r]
        length = len(subarr)
        print(subarr)
        if smallestLenght > length:
            smallestLenght = length
            smallestArray = arr1[l: r]
            # print(smallestLenght)
        sum -= arr1[l]
        l += 1
    elif sum < target and r < len(arr1):
        sum += arr1[r]
        r += 1
    else:
        sum -= arr1[l]
        l += 1
        
if smallestLenght == 999999999999999999:
    print("Not Available")
else:
    print(smallestArray)
    print(smallestLenght)

