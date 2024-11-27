specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

password = input()
splCharCount = 0
numberCount = 0
lowerCount = 0
upperCount = 0

if len(password) >= 8:
    i = 0
    while i < len(password):
        if password[i] in upperAlpha:
            if upperCount == 0:
                upperCount += 1
            i += 1
        elif password[i] in lowerAlpha:
            if lowerCount == 0:
                lowerCount += 1
            i += 1
        elif password[i] in specialCharArr:
            if splCharCount == 0:
                splCharCount += 1
            i += 1
        elif password[i] in numbersArr:
            if numberCount == 0:
                numberCount += 1
            i += 1
        else:
            i += 1
    print(lowerCount)
    print(upperCount)
    print(splCharCount)
    print(numberCount)
    if lowerCount == 1 and upperCount == 1 and splCharCount == 1 and numberCount == 1:
        print('Yes')
    else:
        print('No')
else:
    print('No')

    
    
