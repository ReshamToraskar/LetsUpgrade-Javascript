// Program to display only elements containing 'a' in them from an array
console.log('Question 4')
var series = ["Dark", "Prison", "Lucifer", "Supernatural", "Mentallist"];
console.log("The given array is:", series)
var l  = series.length
for (i = 0; i < l; i++) { 
    var c = series[i].includes('a');
    if (c == true) {
        console.log("Elements of array containing a in them is:",series[i]);
    }
    
} 