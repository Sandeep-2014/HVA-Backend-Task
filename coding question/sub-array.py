arr = [1, 2, 3, 4]

i = 0 
n = len(arr)

while(i < n):
    j = 0
    while(j<n-i):
        k = i
        while k<=i+j:
            print(arr[k], end = " ")
            k += 1
        print()
        j += 1
    i += 1
