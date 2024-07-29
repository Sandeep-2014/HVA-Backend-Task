
t = int(input("enter the the numbers of cake: "))

i = 0

while(i < t):
    cake_binary = (input("enter the binary number of cake: "))
    j = int(cake_binary)
    palindrome = ""
    while(j>0):
        last_digit = j % 10
        palindrome = palindrome + str(last_digit)
        j = j // 10
        # print(palindrome)
    # print(type(palindrome))
    # print(palindrome)
    if(palindrome == cake_binary):
        print("YES")
    else:
        print("NO")
    i += 1

