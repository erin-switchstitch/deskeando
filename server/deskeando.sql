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
        '2022-03-13',
        TRUE,
        FALSE);


INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (2,
        'Sharmaine',
        1,
         '2022-03-14',
        FALSE,
        TRUE);


INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (3,
        'Bimbola',
        3,
         '2022-03-15',
        TRUE,
        FALSE);


INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (4,
        'Erin',
        3,
         '2022-03-16',
        FALSE,
        TRUE);
        
INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (5,
        'Paul',
        4,
        '2022-03-12',
        TRUE,
        FALSE);

-----
INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (6,
        'Sean',
        2,
        '2022-03-18',
        TRUE,
        FALSE);

INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (7,
        'Sadaf',
        1,
         '2022-03-19',
        FALSE,
        TRUE);

INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (8,
        'Peju',
        3,
         '2022-03-20',
        TRUE,
        FALSE);

INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (9,
        'Chris',
        3,
         '2022-03-21',
        FALSE,
        TRUE);
INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (10,
        'Candy',
        2,
        '2022-03-22',
        TRUE,
        FALSE);

INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (11,
        'Alicia',
        1,
         '2022-03-23',
        FALSE,
        TRUE);

INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (12,
        'Mya',
        3,
         '2022-03-24',
        TRUE,
        FALSE);

INSERT INTO bookings(id, name_of_staff, desk_id, date_booked, am, pm)
VALUES (13,
        'David',
        3,
         '2022-03-25',
        FALSE,
        TRUE);