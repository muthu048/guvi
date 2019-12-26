t=int(input())
l=[]
for i in range (0,t):
 val=int(input())
 l.append(val)
 print (l)
for j in l:
  for a in range(2,j+1):
      if (j%a==0):
          break
      else:
          print (j,'is a prime number')
          break
        
    


        
