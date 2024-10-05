user_input = input("Enter numbers separated by space: ")

arrays = list(map(int, user_input.split()))

i = 0
difference = 0

while i < len(arrays) - 1:
    k = i + 1

    while k < len(arrays):
        if arrays[i] > arrays[k]:
            diff = arrays[i] - arrays[k]
            difference += diff
            k += 1
        else:
            diff = arrays[k] - arrays[i]
            difference += diff
            k += 1
    i += 1
print(difference)