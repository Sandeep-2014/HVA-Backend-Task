user_input = input("Enter numbers separated by space: ")

arrays = list(map(int, user_input.split()))

number = int(input("Enter the number: "))

i = 0
while(i < len(arrays)):
    if arrays[i] > number:
        print(arrays[i])
        break
    else:
        i += 1
if i == len(arrays):
    print("No")