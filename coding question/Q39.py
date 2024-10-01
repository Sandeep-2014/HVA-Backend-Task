user_input = input("Enter numbers separated by spaces: ")

arrays = list(map(int, user_input.split()))

i = 0

while(i < len(arrays)):
    print(arrays[i]**2, end=" ")
    i += 1