
id=input('type your mail id',)
passwrd= input('type new password',)
print ('login to take ur ride')
#login
loginid=input('username:',)
password=input('password',)

if (id!=loginid):
 print ('please rigister your id')
elif (passwrd!=password):
        i=1
        while(i<4):
            i+=1
            print('password is incorrect re enter it')
            password=input()
            if( password==passwrd):
                break
if(password!=passwrd):
         print('attempt is over')
else:
    print('u succesfully loged in')
#source   
    source=int(input('enter a source point',))
    while (source<0):
        source=int(input('renter a source point',))
    destination=int(input('enter end point',))
    while (destination<0):
         destination=int(input('renter end point',))
    distance=destination-source
#car
    carlist=['mini','sedan','muv','prime']
    car=input('please enter the car : mini,sedan,xuv,prime',)
    if car=='mini':
            print('rate per km for 1st 5km is 60 and 15/km above 5km')
            model=input('select the model alto,indica,maruti',)
            if distance<=5:
                rate=60
                print('ur booking is confirmed''ur payment amount',rate)
            else:
                rate=60+((distance-5)*15)
                print('ur booking is confirmed''ur payment amount',rate)
                
    elif car=='sedan':
            print('rate per km for 1st 5km is 75 and 20/km above 5km')
            model=input('select the model swift,lancer,i20',)
            if distance<=5:
                rate=75
                print('ur booking is confirmed''ur payment amount',rate)
            else:
                rate=75+((distance-5)*20)
                print('ur booking is confirmed''ur payment amount',rate)
    elif car=='muv':
            print('rate per km for 1st 5km is 100 and 25/km above 5km')
            model=input('select the model xuv,xylo,bolero',)
            if distance<=5:
                rate=100
                print('ur booking is confirmed''ur payment amount',rate)
            else:
                rate=100+((distance-5)*25)
                print('ur booking is confirmed''ur payment amount',rate)
    elif car=='prime':
            print('rate per km for 1st 5km is 200 and 15/km above 50km')
            model=input('select the model benz,audi,bmw',)
            if distance<=5:
                rate=200
                print('ur booking is confirmed''ur payment amount',rate)
            else:
                rate=200+((distance-5)*50)
                print('ur booking is confirmed''ur payment amount',rate)
    
            
        
        
    
         
         
    

    

         
    
    
