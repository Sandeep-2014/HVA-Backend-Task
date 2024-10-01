user_input = input("Enter numbers serparated by space: ")

arrays = list(map(int, user_input.split()))

number = int(input("Enter the number that you want to search in given array; "))
count = 0

i = 0
while(i < len(arrays)):
    if arrays[i] == number:
        count += 1
        i += 1
    else:
        i += 1
print(count)