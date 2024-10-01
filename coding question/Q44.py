user_input = input("Enter numbers seprated by spaces: ")

arrays = list(map(int, user_input.split()))

sum = 0

i = 0

while(i < len(arrays)):
    sum += arrays[i]
    i += 1
average = sum / len(arrays)
print(average)