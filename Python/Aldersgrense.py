from datetime import date


def age(birthdate):
    today = date.today()
    age = today.year - birthdate.year - \
        ((today.month, today.day) < (birthdate.month, birthdate.day))
    return age


yearborn = int(input("Whate year were you born?"))
monthborn = int(input("Which month were your born? (Number Month)"))
dayborn = int(input("What day were you born?"))
alder = age(date(yearborn, monthborn, dayborn))
fortsett = True
while (fortsett):
    fortsett = False
    if (alder < 0):
        print("This is not a valid age.")
        yearborn = int(input("Whate year were you born?"))
        monthborn = int(input("Which month were your born? (Number Month)"))
        dayborn = int(input("What day were you born?"))
        alder = age(date(yearborn, monthborn, dayborn))
        fortsett = True

    elif (alder < 12):
        alder = str(alder)
        print('You are ' + alder + 'years old, therefore you can do this:')
        print("""
            Bike: Allowed
            El-Scooter: Not Allowed
            Moped, Tractor, Light Motorcycle: Not Allowed
            Car: Not Allowed
            Lorry / Bus: Not Allowed""")

    elif (alder < 16):
        alder = str(alder)
        print('You are ' + alder + 'years old, therefore you can do this:')
        print("""
            Bike: Allowed
            El-Scooter: Allowed
            Moped, Tractor, Light Motorcycle: Not Allowed
            Car: Not Allowed
            Lorry / Bus: Not Allowed""")

    elif (alder < 18):
        alder = str(alder)
        print('You are ' + alder + 'years old, therefore you can do this:')
        print("""
            Bike: Allowed
            El-Scooter: Allowed
            Moped, Tractor, Light Motorcycle: Allowed
            Car: Not Allowed
            Lorry / Bus: Not Allowed""")

    elif (alder < 21):
        alder = str(alder)
        print('You are ' + alder + 'years old, therefore you can do this:')
        print("""
            Bike: Allowed
            El-Scooter: Allowed
            Moped, Tractor, Light Motorcycle: Allowed
            Car: Alloweds
            Lorry / Bus: Not Allowed""")

    elif (alder > 20):
        alder = str(alder)
        print('You are ' + alder + 'years old, therefore you can do this:')
        print("""
            Bike: Allowed
            El-Scooter: Allowed
            Moped, Tractor, Light Motorcycle: Allowed
            Car: Allowed
            Lorry / Bus: Allowed""")
