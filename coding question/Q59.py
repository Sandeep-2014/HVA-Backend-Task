user_input = input("Enter the numbers separated by space ")

arrays = list(map(int, user_input.split()))

i = 0
max_count = 0

while i < len(arrays):
    k = i + 1
    count = 1
    while k < len(arrays):
        if arrays[i] == arrays[k]:
            count += 1
            k += 1
        else:
            k += 1
    if max_count < count:
        max_count = count
        element = arrays[i]
    i += 1
print(element)