const Employee = require('../models/employee.model');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json({ message: 'Employee created successfully', employee_id: newEmployee._id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.eid);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndUpdate(req.params.eid, req.body);
    res.status(200).json({ message: 'Employee details updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error });
  }
};

exports.deleteEmployee = async (req, res) => {
    try {
      const employeeId = req.query.eid;
      const employee = await Employee.findByIdAndDelete(employeeId);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      return res.status(204).json;
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting employee', error });
    }
  };