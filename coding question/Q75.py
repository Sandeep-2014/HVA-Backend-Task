str = input()
nthNumber = int(input())

i = 0
newStr= ''

while i < len(str):
    if i == nthNumber:
        upperChar = str[i].upper()
        newStr += upperChar
    else:
        newStr += str[i]
    i += 1
print(newStr)