user_input = input("Enter numbers separated by spaces: ")

arrays = list(map(int, user_input.split()))
count = 0

i = 0
while(i < len(arrays)):
    if arrays[i] % 2 != 0:
        count += 1
        i += 1
    else:
        i += 1
print(count)