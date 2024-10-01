user_input = input("Enter numbers separated by space: ")

arrays = list(map(int, user_input.split()))

i = 0

while(i < len(arrays)):
    if arrays[i] < 0:
        print("Yes")
        break
    else:
        i += 1
if i == len(arrays):
    print("No")