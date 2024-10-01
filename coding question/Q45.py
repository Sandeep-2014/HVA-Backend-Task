user_input = input("Enter numbers seprated by space: ")

arrays = list(map(int, user_input.split()))
product = 1
i = 0

while(i < len(arrays)):
    if arrays[i] == 0:
        i += 1
    else:
        product = product* arrays[i]
        i += 1
print(product)