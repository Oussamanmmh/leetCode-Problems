# Write your MySQL query statement below

select Emp.name as Employee from Employee as Emp where Emp.salary > (select salary from Employee where id = Emp.managerId) ; 