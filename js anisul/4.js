alert("this is 4 code");

var nam;
var age;
var roll;
var sub;
var cgpa;

//print
nam  = "Rashidul haq";
age = 22;
document.write("Name :" ,nam ,"<br/>");
document.write("Age : ", age, "<br/>");

//converd number to string 
roll = 56;
roll = toString(roll);
document.write(typeof roll ,"<br/>");


//converd int
sub = "CSE";
sub = parseInt(sub);
document.write(typeof sub, "<br/>");

//find to fixed point
cgpa = 3.60;
document.write(cgpa.toFixed(1) , "<br/>");

//find precision
var sgpa = 3.98;
document.write(sgpa.toPrecision(2) , "<br/>");


//number method
var code = "356";
document.write(Number(code), "<br/>");

//string concatenent
var firstName = "Md ";
var secName = "Rashidul ";
document.write(firstName + secName + "Haq <br/>");

// concatenent
var cgpa = 3.70;
var sgpa = 3.90;
document.write("Your CGPA is " + cgpa + "\\t And Your SGPA is " + sgpa +"<br/>");