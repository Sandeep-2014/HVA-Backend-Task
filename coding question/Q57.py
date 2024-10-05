user_input = input("Enter numbres separated by space: ")

arrays = list(map(int, user_input.split()))


# we can do this question by using temp in the given arrays but I am reversing this array by taking an new array
i = 0
new_arr = [None] * len(arrays)
n = len(arrays)
while i < n/2:
    new_arr[i] = arrays[n - i - 1]
    new_arr[n - i - 1] = arrays[i]
    i += 1
print(new_arr)
