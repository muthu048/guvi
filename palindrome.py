n=int(input())
s=str(n)
if s==s[::-1]:
    print('the number is palindrome')
else:
    print('the number is not a palindrome')
