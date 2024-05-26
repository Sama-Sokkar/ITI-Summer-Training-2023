// //Task 1
// do 
// {
//  var word = prompt("Write a string and i will calculate the number of 'e' in it!");
// } while (isFinite(word));
// length = word.length;
// var sum = 0;
// // console.log(length);
// for(var i=0 ; i<length ;i++ )
// {
//     if(word[i] === 'e')
//     {
//         sum=sum+1;
//         // sum++;
//     }
// }
// // console.log(sum);
// document.write("<h2>The number of 'e' characters is: " + sum +"</h2>");


////Task 2
// do 
// {
//   var naame = prompt("Please enter your Name :"); 
// } while (isFinite(naame));

// do 
// {
//     var phNumber = prompt("Please enter your phone number : (8-digit number)");
// } while (isNaN(phNumber) || phNumber.length !== 8);

// do 
// {
//     var mobNumber = prompt("Please enter your mobile number: (11-digit number and starts with 012 - 010 - 011)");
// } while (isNaN(mobNumber) || mobNumber.length !== 11 || !/^01[0125][0-9]{8}$/.test(mobNumber));

// var regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// do {
//   var email = prompt("please enter your E-mail :");
// } while (!regexpEmail.test(email));
// document.write("<h2>Welcome "+naame+" ! <br> Phone number: "+phNumber+"<br>Mobile number: "+mobNumber+"<br>E-mail: "+email+"</h2>");


////Task 3
// do 
// {
//     var radius = prompt("Write the radius of the circle to calculate it's area :");
// } while (isNaN(radius));
// var area = Math.PI * radius * radius;
// // console.log(area);
// alert("The area of the circle is: " + area);


////Task 4
// do 
// {
//     var sqroot = prompt("Write the number you want to calculate it's square root :");
// } while (isNaN(sqroot));
// var square = Math.sqrt(sqroot);
// alert("The square root of the number is : " + square);

////Task 5
// const daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// do 
// {
//     var date = prompt("Write the date in format YYYY-MM-DD :");
// } while (!/^\d{4}-\d{2}-\d{2}$/.test(date));
// var newDate = new Date(date);
// // console.log(newDate);
// var day = newDate.getDay();
// alert("Day name : " + daysWeek[day]);
// // console.log(day);


// //Task 6
// var arr = [];
// for (var i = 0; i < 3; i++) {
//   var number = parseInt(prompt(`Enter element ${i + 1}:`));
//   arr.push(number);
// }
// var sum = arr[0] + arr[1] + arr[2];
// var product = arr[0] * arr[1] * arr[2];
// var divide = arr[0] / arr[1] / arr[2];
// document.write("<h1>Adding -- Multiplying -- and dividing 3 numbers</h1><hr>")
// document.write("<span style='color: red;'>Sum of 3 values: </span>" + arr[0] + " + " + arr[1] + " + " + arr[2] + " = " + sum + "<br>");
// document.write("<span style='color: red;'>Product of 3 values: </span>" + arr[0] + " * " + arr[1] + " * " + arr[2] + " = " + product + "<br>");
// document.write("<span style='color: red;'>Division of 3 values: </span>" + arr[0] + " / " + arr[1] + " / " + arr[2] + " = " + divide + "<br>");


////Task 7
// function mul(x,y) 
// {
//     if (arguments.length !== 2) 
//     {
//       throw "parameters should be 2";
//     }
//     var mul = x*y;
//     return mul;
// }
// console.log(mul(2,2));


////Task 8
//Map();
//filter();