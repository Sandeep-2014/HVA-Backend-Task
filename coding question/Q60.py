user_input = input("Enter numbres separated by space: ")

arrays = list(map(int, user_input.split()))

i = 0

while i < len(arrays):
    k = i + 1

    while k < len(arrays):
        if arrays [i] >= arrays[k]:
            temp = arrays[i]
            arrays[i] = arrays[k]
            arrays[k] = temp
            k += 1
        else:
            k += 1
    i += 1
print(arrays)

minimumDifference = arrays[1] - arrays[0]
maxDifference = arrays[len(arrays)- 1] - arrays[0]

print(minimumDifference)
print(maxDifference)