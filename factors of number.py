n=int(input("enter a number"))
f=[]
for i in range(1,n+1):
    if n%i==0:
       f.append(i)
print('the factors are:',f)