user_input = input("Enter numbers separated by space: ")

arrays = list(map(int, user_input.split()))

i = 0
count = 0

while i < len(arrays) - 1:
    k = i + 1
    while k < len(arrays):
        if arrays[i] == arrays[k]:
            print(arrays[i])
            count += 1
            break
        else:
            k += 1
    if count > 0:
        break
    else:
        i += 1
if i == len(arrays) - 1:
    print("No")           