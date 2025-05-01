# Write your MySQL query statement below
select Customers from 
(select name as Customers , Customers.id from Customers
except 
select name , Customers.id from Customers 
join orders on Orders.customerId = Customers.id) as res