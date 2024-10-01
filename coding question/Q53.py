user_input = input("Enter nubers separated by space: ")

arrays = list(map(int, user_input.split()))

i = 0

while(i < len(arrays) - 1):
    if arrays[i] < arrays[i + 1]:
        i += 1
    else:
        print("No")
        break
if i == len(arrays) - 1:
    print("Yes")