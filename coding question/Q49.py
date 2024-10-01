user_input = input("Enter numbers seperated by space: ")

arrays = list(map(int, user_input.split()))

i = 0
count = 0

while(i < len(arrays)):
    if arrays[i] < 0:
        break
    else:
        count += 1
        i += 1
print(count)