# Write your MySQL query statement below
select email from Person Group By email having COUNT(email) > 1 ;