const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split file content into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim().length > 0);

    // Remove the first line (the header)
    const header = lines.shift();

    // Initialize an object to store students by field
    const studentsByField = {};

    // Iterate over each line to process the students
    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      // Add the student to the respective field
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    // Count the total number of students
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students for each field
    for (const field in studentsByField) {
      const students = studentsByField[field];
      console.log(
        `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}`
      );
    }
  } catch (error) {
    // Handle file read errors
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
