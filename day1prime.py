n = int(input("Enter number of elements : ")) 
  
# Below line read inputs from user using map() function  
a = list(map(int,input("\nEnter the numbers : ").strip().split()))
m=int(input())
t=int(len(a)/m)
for i in range (1,t+2):
    ma=a[0:m]
    print(*ma)
    del a[:m]


        
    


        
