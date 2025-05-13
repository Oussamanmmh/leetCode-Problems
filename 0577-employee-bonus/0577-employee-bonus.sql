# Write your MySQL query statement below


select name,B.bonus from Employee as E 
left outer join bonus as B on E.empId=B.empId
where bonus < 1000 or bonus is null ;