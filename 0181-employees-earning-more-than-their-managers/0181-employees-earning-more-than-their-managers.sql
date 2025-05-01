SELECT Emp.name AS Employee
FROM Employee AS Emp
JOIN Employee AS Manager
  ON Emp.managerId = Manager.id
WHERE Emp.salary > Manager.salary;
