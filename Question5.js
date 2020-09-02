// Print an array in reverse order
console.log('Question 5')
var series = ["Dark", "Prison", "Lucifer", "Supernatural", "Mentallist"];
console.log("The given array is:", series)
var c = series.reverse();
console.log("The reversed array using reverse method is:",c)


// by looping
var series = ["Dark", "Prison", "Lucifer", "Supernatural", "Mentallist"];
console.log("The given array is:", series)
var reversedseries = [];
for (let i = series.length-1; i >= 0; i--){
    reversedseries.push(series[i]);
}
console.log("The reversed array using for loop is:", reversedseries)