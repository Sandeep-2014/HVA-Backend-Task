str = input()
char = input('enter the Character that you want to search: ')

i = 0
count = 0
while i < len(str):
    if str[i] == char:
        count += 1
    i += 1
if count > 0:
    print(count)
else:
    print('No')