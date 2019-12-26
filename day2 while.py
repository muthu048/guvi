a=int(input())
l=[]
odd=[]
even=[]
for i in range (0,a):
 val=int(input())
 l.append(val)
print (l)
for j in l:
     if (j%2==0):
        even.append(j)
     else:
          odd.append(j)
print(even,'is even list')
print(odd,'is odd list')
e=sum(even)
o=sum(odd)
print('the sum of even is:',e)
print('the sum of odd is:',o)

     
