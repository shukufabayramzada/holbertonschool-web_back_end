const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    lines.shift();

    const studentsByField = {};

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const students = studentsByField[field];
        console.log(
          `Number of students in ${field}: ${
            students.length
          }. List: ${students.join(', ')}`
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
