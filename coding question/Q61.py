user_input = input("Enter numbres separated by space: ")

arrays = list(map(int, user_input.split()))

i = 0

while(i < len(arrays)):
    k = 0
    sum = 0
    while k < len(arrays):
        if i == k:
            k += 1
        else:
            sum += arrays[k]
            k += 1
    print(sum, end=" ")
    i += 1