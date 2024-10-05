user_input = input("Enter numbers separated by space: ")

arrays = list(map(int, user_input.split()))

i  = 0

n = len(arrays)

while(i < n//2):
    if arrays[i] == arrays[n - i - 1]:
        i += 1
    else:
        print("No")
        break
if i == n//2:
    print("Yes")