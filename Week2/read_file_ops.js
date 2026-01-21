const fs = require('fs');

console.log('Trying to read data from input_data.txt file...');

// path to file
const filePath = 'input_data.txt';

// reading the file asynchronously
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.log(`Error while reading the file ${filePath}: ${error}`);
  } else {
    // readFile is successful; process the data
    if (data) {
      console.log(`Data from ${filePath}:\n${data}`);
    } else {
      console.log(`No data received from ${filePath}`);
    }
  }
});

// reading the file within async function
const accessFileData = async() => {
  try {
    const data = await fs.promises.readFile(filePath);
    console.log(`\nData from async function : \n${data}`);
  } catch (error) {
    console.log(`Error while reading file using async function : ${JSON.stringify(error)}`);
  }
}

accessFileData()

