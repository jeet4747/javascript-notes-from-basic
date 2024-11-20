const coding = ["js", "ruby", "java", "python", "cpp", "rust"]

// coding.forEach( function(val){
//    console.log(val);
    
// } )

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printme(item){
//    console.log(item);
    
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);  
// })

const mycoding = [
    {
        languagename: "javascript",
        languagefilename:"js"
    },
    {
        languagename: "python",
        languagefilename:"py"
    },
    {
        languagename: "java",
        languagefilename:"jv"
    },
]

mycoding.forEach((item)=>{
    console.log(item.languagefilename);
    
})