const fs=require("fs")
const data=require("./someData")
fs.writeFileSync("text.txt","this file is clreated using fs")

console.log(data.Name)
console.log(data.work)
console.log(data.z())

const array=[2,3,4,5,3,5,6,7]
const filteredArr=array.filter((item)=>{
  return (item%2==0?item:"")

    
})
console.log(filteredArr)