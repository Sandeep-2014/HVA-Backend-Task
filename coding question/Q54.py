user_input = input("Enter numbers seprated by space: ")

arrays = list(map(int, user_input.split()))

i = 0

while(i < len(arrays)):
    j = arrays[i] ** 0.5
    # print(j)
    if j%1 == 0:
        print(arrays[i])
        break
    else:
        i += 1
if i == len(arrays):
    print("No")