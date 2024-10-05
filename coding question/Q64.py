user_input = input("Enter numbers separated by space: ")

arrays = list(map(int, user_input.split()))
number = int(input("Enter the number : "))

i = 0

while i < len(arrays) - 1:
    k = i + 1
    while k < len(arrays):
        if (arrays[i] + arrays[k]) == number:
            print(arrays[i], arrays[k])
            break
        else:
            k += 1
    i += 1