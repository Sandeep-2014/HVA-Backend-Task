arr = list(map(int, input().split()))

i = 0 
totalSum = 0
while i < len(arr):
    j = i
    currentSum = 0
    while j < len(arr):
        currentSum += arr[j]
        totalSum += currentSum
        j += 1
    i += 1
print(totalSum)