str1 = input().replace(" ", '').lower()
str2 = input().replace(" ", '').lower()

print(str1)
print(str2)
str2Arr = list(str2)

if len(str1) == len(str2):
    count = 0
    i = 0
    while i < len(str1):
        j = 0
        while j < len(str2Arr):
            if str1[i] == str2Arr[j]:
                str2Arr[j] = 0
                count += 1
                break
            j += 1
        i += 1
    if len(str1) == count:
        print('Yes')
    else:
        print('No')
else:
    print('No')
