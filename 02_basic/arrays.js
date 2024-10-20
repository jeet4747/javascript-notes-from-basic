// arrays

const myArr = [0, 1, 2, 3, 4, 4, 5, 5, 7, 6] 

// console.log(myArr[6])

myArr.push("jeetmishra")
// console.log(myArr)

myArr.pop()
// console.log(myArr)

myArr.unshift(4)
myArr.shift()
// console.log(myArr)


// console.log(myArr.indexOf(6));


const newarr = myArr.join()

// console.log(typeof(newarr))

// slice , splice

console.log("A", myArr)

const myn1 = myArr.slice(1,6)
console.log("B",myn1);


const myn2 = myArr.splice(1,6)
console.log("C",myn2)

