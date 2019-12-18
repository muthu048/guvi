a=int(input())
if (a!=0):
   t= int(a/2000)
   print (t ,'number of 2000')
   tt=(a%2000)
   if (tt!=0):
       f=int(tt/500)
       print (f,'number of 500')
       ff=(tt%500)
       if (ff!=0):
           h=int(ff/100)
           print (h,'number of 100')
           hh=(ff%100)
           if (hh!=0):
               fi=int(hh/50)
               print (fi,'number of 50')
               ffi=(hh%50)
               if (ffi!=0):
                   te=int(ffi/10)
                   print(te,'number of 10')
                   tte=(ffi%10)
                   if (tte!=0):
                       print(tte,'rupees of coins')
                       
else:
    print ('no amount')
               
    
        
        
        
    
        
    
