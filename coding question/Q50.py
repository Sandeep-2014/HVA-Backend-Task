user_input = input("Enter numbers seperated by spaces: ")

arrays = list(map(int, user_input.split()))

i = 0
sum = 0

while(i < len(arrays)):
    if arrays[i] == 0:
        break
    else:
        sum += arrays[i]
        i += 1
print(sum)