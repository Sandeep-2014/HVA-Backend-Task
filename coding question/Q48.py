user_input = input("Enter numbers seprated by space: ")

arrays = list(map(int, user_input.split()))

largest = 0

i = 0
while(i < len(arrays) - 1):
    j = arrays[i] + arrays[i + 1]
    if largest < j:
        largest = j
        i += 1
    else:
        i += 1 
print(largest)