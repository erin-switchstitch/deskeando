-- DROP DATABASE IF EXISTS deskeando;
-- Create database deskeando;
-- \c deskeando;

-- If the table "desks" exists delete it
drop table if exists desks;

-- If the table "bookings" exists delete it
drop table if exists bookings;

-- Creating a table called "desks"
CREATE TABLE desks (id INT PRIMARY KEY,
                                   desk_features JSONB);

-- Creating a table called "bookings"
create TABLE bookings (id INT PRIMARY KEY, name_of_staff VARCHAR(30) NOT NULL, desk_id INT REFERENCES desks(id), date_booked DATE NOT NULL, am BOOLEAN NOT NULL, pm BOOLEAN NOT NULL);



-- We are having issues getting the date serach api working. I believe it is an issue with how we are storing
-- the date within SQL. I've tried changing how the date structure is setup in the SQL file (from DATE NOT NULL to VARCHAR(30) NOT NULL)
-- but this did not work. I believe we may need to change the way that we store the date so that it is 
-- YYYY-MM-DD rather than DD/MM/YYYY as this seems to be the standard that is used in SQL 

-- create TABLE bookings (id INT PRIMARY KEY, name_of_staff VARCHAR(30) NOT NULL, desk_id INT REFERENCES desks(id), date_booked VARCHAR(10) NOT NULL, am BOOLEAN NOT NULL, pm BOOLEAN NOT NULL);


-- Adding rows of data to the "desks" table
INSERT INTO desks (id, desk_features)
VALUES (1,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (2,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (3,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (4,
        '{"accessibilty":true, "capacity":2}');


-- Adding rows of data to the "bookings" table
INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (1,
        'Amanda',
        2,
        '13/03/2022',
        TRUE,
        FALSE);


INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (2,
        'Sharmaine',
        1,
        '14/03/2022',
        FALSE,
        TRUE);


INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (3,
        'Bimbola',
        3,
        '15/03/2022',
        TRUE,
        FALSE);


INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (4,
        'Erin',
        3,
        '16/03/2022',
        FALSE,
        TRUE);