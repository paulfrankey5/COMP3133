const fs = require("fs")

//Path to the file where you want to save the data
let filePath = "output_data.txt"
//If file doesn't exist, save there

console.log(`Trying to write the data to ${filePath}....`);

let dataBuffer = Buffer.from("Yellow warning = snow with wind. up to 10 cm of snow")

// write to file asynchronously
// overwrite existing content if flag is not provided
fs.writeFile(filePath, dataBuffer, (error) => {
  if (error) {
    console.log(`Option 1 - Unable to write to file ${filePath}: ${JSON.stringify(error)}`);
  } else {
    console.log(`Option 1 - Data successfully written to ${filePath}`);
  }
});

// dataBuffer = "923793505979238020348238"
dataBuffer = "\n this is new message from option 2 attempt \n \n this will expand multiple";

// append the data to previous one
fs.writeFile(filePath, dataBuffer, { flag: 'a' }, (error) => {
  if (error) {
    console.log(`\nOption 2 - Unable to write to file ${filePath}: ${JSON.stringify(error)}`);
  } else {
    console.log(`\nOption 2 - Data successfully written to ${filePath}`);
  }
});

//write to file synchronously
dataBuffer = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const err = fs.writeFileSync(filePath, dataBuffer)

if (err){
    console.log(`Option 3 - Unable to write to file ${filePath} : ${JSON.stringify(err)}`);
}else{
    console.log(`\nOption 3 - Data successfully written to ${filePath}`);
}

// delete the file
//console.log(`\nTrying to delete the file ${filePath}`);

//fs.unlink(filePath, err => {
 // if (err) {
  //  console.log(`Error while trying to delete file ${filePath}: ${JSON.stringify(err)}`);
 // } else {
 //   console.log(`File ${filePath} deleted successfully`);
 // }
//})
