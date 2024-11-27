s = input()
c = input()

i = 0
while i < len(s):
    if s[i] == c:
        print('Yes')
        break
    elif i == (len(s) - 1):
        print('No')
    i += 1