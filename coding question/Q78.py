s = input()

w = input()
lenofW = len(w)

i = 0
arr = []
str = ''
while i < len(s):
    if s[i] == ' ':
        arr = arr + [str] 
        str = ''
        i +=1
    else:
        str += s[i]
        i += 1
arr = arr + [str] 
# print(arr)

j = 0
while j < len(arr):
    # print(len(arr[j]))
    # j += 1
    if len(arr[j]) >= lenofW:
        if w == arr[j]:
            print('Yes')
            break
        else:
            j += 1
    else:
        j += 1
if j == len(arr):
    print('No')