const fs = require("fs");
const path = "./data/students.json";

// Read JSON
const readData = () => JSON.parse(fs.readFileSync(path));

// Write JSON
const writeData = (data) => fs.writeFileSync(path, JSON.stringify(data, null, 2));

exports.createStudent = (req, res) => {
  const students = readData();
  const newStudent = { id: Date.now(), ...req.body };

  students.push(newStudent);
  writeData(students);

  res.status(201).json(newStudent);
};

exports.getStudents = (req, res) => {
  res.json(readData());
};

exports.getStudent = (req, res) => {
  const students = readData();
  const student = students.find((s) => s.id == req.params.id);

  student ? res.json(student) : res.status(404).json({ message: "Student not found" });
};

exports.updateStudent = (req, res) => {
  const students = readData();
  const index = students.findIndex((s) => s.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: "Student not found" });

  students[index] = { ...students[index], ...req.body };
  writeData(students);

  res.json(students[index]);
};

exports.deleteStudent = (req, res) => {
  let students = readData();
  const filtered = students.filter((s) => s.id != req.params.id);

  writeData(filtered);
  res.json({ message: "Student deleted" });
};
