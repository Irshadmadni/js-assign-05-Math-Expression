document.write('Q1:')
document.write('<br>')

var a=3
var b=a+5
document.write("Sum of 3 and 5 is",b)
document.write("<br>")
document.write('<br>')

document.write('Q2:')
document.write('<br>')

var c=5
var d=c-3
document.write("Sub of 5 and 3 is",d)
document.write("<br>")
var c=5
var d=c*3
document.write("Multiply 5 and 3 is",d)
document.write("<br>")
var c=9
var d=c/3
document.write("9 devided by 3 is",d)
document.write("<br>")
var c=9
var d=c%3
document.write("9 modulus by 3 is",d)
document.write("<br>")
document.write('<br>')

document.write('Q3:')
document.write('<br>')

var a="3+5=??"
document.write('(b)',a)
document.write("<br>")
document.write("<br>")

var a=5
document.write("(d) Initial Value is",":",a)
document.write("<br>")
document.write("<br>")
var a=5
var b=++a
document.write("(f) Value after increment is",":",b)
document.write("<br>")
document.write("<br>")
var a=5
var b=++a+7
document.write("(h) Value after Addition is",":",b)
document.write("<br>")
document.write("<br>")
var a=5
var b=++a+7
var c=--b
document.write("(j) Value after Decremnent is",":",b)
document.write("<br>")
document.write("<br>")
var a=5
var b=++a+7
var c=--b
var d=c%3
document.write("(k) The remained is",":",d)
document.write("<br>")
document.write("<br>")
document.write("One movie ticket is:600PKR")
document.write("<br>")
document.write("Required tickets:05")
document.write("<br>")
document.write("<br>")

document.write('Q4:')
document.write('<br>')

var a=600
var b=5*a
document.write("Total cost of buy 5 tickets to a movie is",":",b,"PKR")
document.write("<br>")
document.write("<br>")

document.write('Q5:')
document.write('<br>')

var table = prompt ('Enter Table Number')
if (table >= 1) {
    document.write('Table of ' + table)
    document.write('<br>')
    document.write(table + 'x' + 1 + '=' + table*1)
    document.write('<br>')
    document.write(table + 'x' + 2 + '=' + table*2)
    document.write('<br>')
    document.write(table + 'x' + 3 + '=' + table*3)
    document.write('<br>')
    document.write(table + 'x' + 4 + '=' + table*4)
    document.write('<br>')
    document.write(table + 'x' + 5 + '=' + table*5)
    document.write('<br>')
    document.write(table + 'x' + 6 + '=' + table*6)
    document.write('<br>')
    document.write(table + 'x' + 7 + '=' + table*7)
    document.write('<br>')
    document.write(table + 'x' + 8 + '=' + table*8)
    document.write('<br>')
    document.write(table + 'x' + 9 + '=' + table*9)
    document.write('<br>')
    document.write(table + 'x' + 10 + '=' + table*10)
}
else {
    document.write('Table of ' + 5)
    document.write('<br>')
    document.write(5 + 'x' + 1 + '=' + 5*1)
    document.write('<br>')
    document.write(5 + 'x' + 2 + '=' + 5*2)
    document.write('<br>')
    document.write(5 + 'x' + 3 + '=' + 5*3)
    document.write('<br>')
    document.write(5 + 'x' + 4 + '=' + 5*4)
    document.write('<br>')
    document.write(5 + 'x' + 5 + '=' + 5*5)
    document.write('<br>')
    document.write(5 + 'x' + 6 + '=' + 5*6)
    document.write('<br>')
    document.write(5 + 'x' + 7 + '=' + 5*7)
    document.write('<br>')
    document.write(5 + 'x' + 8 + '=' + 5*8)
    document.write('<br>')
    document.write(5 + 'x' + 9 + '=' + 5*9)
    document.write('<br>')
    document.write(5 + 'x' + 10 + '=' + 5*10)
}

document.write('<br>')
document.write('<br>')

document.write('Q6:')
document.write('<br>')

var a=70
var b=(a-32)*5/9
document.write("70 <sup>0</sup>F is",":",b,"<sup>0</sup>C")
document.write("<br>")
document.write("<br>")
var a=25
var b=(a*9/5)+32
document.write("25 <sup>0</sup>C is",":",b,"<sup>0</sup>F")
document.write("<br>")
document.write("<br>")

document.write('Q7:')
document.write('<br>')

document.write('<h1>Shopping Cart</h1>')
document.write('<br>')
var item1=650
document.write('Price of Item1 is :650')
document.write('<br>')
var item2=100
document.write('Price of Item2 is :100')
document.write('<br>')
var qty1=3
document.write('quantity of Item1 is :3')
document.write('<br>')
var qty2=7
document.write('quantity of Item2 is :7')
document.write('<br>')
var t1=item1*qty1
var t2=item2*qty2
var ship=100
document.write('Total cost of your order is :',t1+t2+ship)
document.write('<br>')
document.write('<br>')

document.write('Q8:')
document.write('<br>')

document.write('<h1>Marks Sheet</h1>')
document.write('<br>')

var t=980
document.write('Total marks :980')
document.write('<br>')
var o=804
document.write('Total marks :804')
document.write('<br>')
var per=o*100/t
document.write('Percentage :',per)
document.write('<br>')
document.write('<br>')

document.write('Q9:')
document.write('<br>')

document.write('<h1>Currency in PKR</h1>')
document.write('<br>')
var dollar=10
var ryal=25
var d=104.80
var r=28
var total=(dollar*d)+(ryal*r)
document.write('Total Currency in PKRis:',total)
document.write('<br>')
document.write('<br>')

document.write('Q10:')
document.write('<br>')

var a=2+5*10/2
document.write('airthmatic result is:',a)
document.write('<br>')
document.write('<br>')

document.write('Q11:')
document.write('<br>')

document.write('<h1>Age Calculator</h1>')
document.write('<br>')
var a=2023
document.write('Current Year :',a)
document.write('<br>')
var b=1988
document.write('Birth Year :',b)
document.write('<br>')
var c=a-b
document.write('Your Age is:',c)
document.write('<br>')
document.write('<br>')

document.write('Q12:')
document.write('<br>')

document.write('<h1>The Geometrizer</h1>')
document.write('<br>')
var r=20
document.write('Redious of Circle is:',r)
document.write('<br>')
var circum=2*(3.142*r)
document.write(' The Circumference of is :',circum)
document.write('<br>')
var area=3.142*(r*r)
document.write('The Area of Circle is :',area)
document.write('<br>')
document.write('<br>')

document.write('Q13:')
document.write('<br>')

document.write('<h1>The Lifetime Supply Calculator</h1>')
document.write('<br>')
var fSnack=('Choclate Chip')
document.write('<br>')
document.write('Favourite snack :',fSnack)
document.write('<br>')
var cAge=15
document.write('Current Age :',cAge)
document.write('<br>')
var mAge=65
document.write('Estimated Maximum Age :',mAge)
document.write('<br>')
var rAge=mAge-cAge
document.write
var pDay_chc=3
document.write('Amount of snacks per day :',pDay_chc)
document.write('<br>')
var pYear_chc=365*3
document.write('You will need ',rAge*pYear_chc,' Chocolate Chip to last you until the ripe Old age of 65 ')
document.write('<br>')

