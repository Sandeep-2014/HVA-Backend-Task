str = input()
vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

i = 0
Vowelcount = 0
consonantCount = 0
while i < len(str):
    if str[i] in vowelArr:
        Vowelcount += 1
        i+=1
    elif str[i] == ' ':
        i += 1
    else:
        consonantCount += 1
        i+=1
        
    
print(Vowelcount)
print(consonantCount)