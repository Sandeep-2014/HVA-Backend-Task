user_input = input("Enter numbres separated by space: ")

arrays = list(map(int, user_input.split()))

# i = 0
# arr = []
# # j = 1
# while(i < len(arrays) - 1):
#     if arrays[i + 1] >= arrays[i]:
#         arr += [arrays[i]]
#         i += 1
#     else:
#         if len(arr) > 1:
#             arr += [arrays[i]]
#             print(arr)
#             arr = []
#             i += 1   
#         else:
#             i += 1

max_count = 0
count = 1
i = 0
arr = []

while i < len(arrays)-1 : 
    if arrays[i] <= arrays[i + 1] : 
        count += 1
        # arr += arrays[]
    else : 
        print(count)
        count = 1
    
    if max_count > count : 
        max_count = max_count
    else : 
        max_count = count 
    print("this is max counr", max_count)
    i += 1
print(max_count)
    
    