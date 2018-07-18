// Challenge 1
// 


//  const coffee = 4

// if (coffee < 3) {
//    console.log("I'm okay for now")
// } 

// else if (coffee > 3) {
//    console.log("Yes I'll take another cup of coffee")
//  }

// challenge 2

// const temp = 90
// // const precipitation = false
// const precipitation = 'raining'

// console.log('The temp is ' + temp +' degrees')

// if (temp > 80 && !precipitation){
// 	console.log("It's time to swim")
// }

const temp = 90
const precipitation = false
const indoors = true


console.log('The temp is ' + temp +' degrees')

if ((temp > 80 && !precipitation) || indoors){
	console.log("It's time to swim")
}