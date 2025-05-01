# Write your MySQL query statement below
select Person.lastName ,Person.firstName , Address.city , address.state from Person 
left join Address on Address.personId = Person.personId ;