user_input = input("Enter numbers seprated by space: ")

arrays = list(map(int, user_input.split()))

i = 0
smallest = 99999999999999

while(i < len(arrays)):
    if arrays[i] < smallest:
        smallest = arrays[i]
        i += 1
    else:
        i += 1
print(smallest)