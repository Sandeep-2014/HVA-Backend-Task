user_input = input("Enter numbers seprated by space: ")

arrays = list(map(int, user_input.split()))

smallest = 99999999999
i = 0

while(i < len(arrays)):
    if arrays[i] < smallest:
        smallest = arrays[i]
        smallest_index = i
        i += 1
    else:
        i += 1

print(smallest_index + 1)