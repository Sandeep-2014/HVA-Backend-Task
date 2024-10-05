user_input = input("Enter numbers separated by space: ")

arrays = list(map(int, user_input.split()))

i = 0

while i < len(arrays) - 1:
    k = i + 1
    count = 1

    if arrays[i] != None:
        while k < len(arrays):
            if arrays[i] == arrays[k]:
                arrays[k] = None
                count += 1
                k += 1
            else:
                k += 1
        print(arrays[i], count)
    i += 1