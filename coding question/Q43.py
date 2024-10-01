user_input = input("Enter numbers seprated by space: ")

array = list(map(int, user_input.split()))

sum = 0

i = 0

while(i < len(array)):
    sum += array[i]
    i += 1
print(sum)