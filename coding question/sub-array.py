user_inut = input("Enter the numbers separated by space: ")
arr = list(map(int, user_inut.split()))


# i = 0 

# while(i < len(arr)):
#     j = i
#     pointer = i
#     while(j <= len(arr)):
#         k = j
#         sub_arr = []
#         while(k <= pointer):
#             sub_arr += [arr[k]]
#             k += 1
#         print(sub_arr)
#         pointer += 1
#     i += 1
        
# arr = [1, 2, 3, 4] 
i = 0

while i < len(arr):
    j = i
    # k = i
    sub_arr = []
    while(j >= i):
        sub_arr += [arr[j]]
        j -= 1
    print(sub_arr)
    i += 1
