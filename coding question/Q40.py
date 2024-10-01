user_input = input("Enter numbers separated by spaces: ")

arrays = list(map(int, user_input.split()))

i = 0

while(i < len(arrays)):
    if arrays[i] % 2 == 0:
        print("Even")
        i += 1
    else:
        print("Odd")
        i += 1
