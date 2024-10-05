user_input = input("Enter numbres separated by space: ")

arrays = list(map(int, user_input.split()))


i = 1
arrays_lenght = len(arrays)
print(arrays_lenght)

while i < len(arrays):
    j = i
    empt = []
    while j < len(arrays):
        if arrays[j-1] <= arrays[j]:
            # empt.append(arrays[j])
            empt += [arrays[j-1]]
            # k += 1
            j += 1
        else:
            if len(empt) > 1:
                empt += [arrays[j - 1]]
                # empt.append(arrays[j])
                print(empt)
            break 
    if j == len(arrays):
        empt += [arrays[j-1]]
        print(empt)
        break
    else:
        i = j + 1