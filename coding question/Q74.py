str = input()

i = 1
newStr = ''
while i < len(str):
    j = i - 1
    while j < len(str) - 1:
        if str[j] == str[i]:
            break
        else:
            newStr += str[j]
            j += 1
    k = len(str) - 1
    if(j == k):
        newStr += str[k]
    i += 1
print(newStr)