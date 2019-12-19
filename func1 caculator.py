while True:
    a,c,b=input().split()
    def add(a,b):
        ad=int(a)+int(b)
        print(ad)
    if c=='+':
      add(a,b)
    def mul(a,b):
        mu=int(a)*int(b)
        print(mu)
    if c=='*':
      mul(a,b)
    def div(a,b):
      di=int(a)/int(b)
      print(di)
    if c=='/':
      div(a,b)
    n=int(input())
    if n==1:
        continue
    else:
        break
    
  
