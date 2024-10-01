user_input = input("Enter numbers sperated by space: ")

arrays = list(map(int, user_input.split()))

number = int(input("Enter the numbers that we want to search in the array; "))

i = 0

while(i < len(arrays)):
    if arrays[i] == number:
        print("Yes")
        break
    else:
        i += 1
if i == len(arrays):
    print("No")