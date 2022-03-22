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

create TABLE bookings (id SERIAL PRIMARY KEY, name_of_staff VARCHAR(30) NOT NULL, desk_id INT REFERENCES desks(id), date_booked DATE NOT NULL, am BOOLEAN NOT NULL, pm BOOLEAN NOT NULL);

-- create TABLE users (id SERIAL PRIMARY KEY, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(30) NOT NULL, user_password VARCHAR(30) NOT NULL, accessibilty BOOLEAN NOT NULL);

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


INSERT INTO desks (id, desk_features)
VALUES (5,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (6,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (7,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (8,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (9,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (10,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (11,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (12,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (13,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (14,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (15,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (16,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (17,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (18,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (19,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (20,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (21,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (22,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (23,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (24,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (25,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (26,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (27,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (28,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (29,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (30,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (31,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (32,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (33,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (34,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (35,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (36,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (37,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (38,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (39,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (40,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (41,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (42,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (43,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (44,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (45,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (46,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (47,
        '{"accessibilty":true, "capacity":2}');


INSERT INTO desks (id, desk_features)
VALUES (48,
        '{"accessibilty":false, "capacity":3}');


INSERT INTO desks (id, desk_features)
VALUES (49,
        '{"accessibilty":false, "capacity":4}');


INSERT INTO desks (id, desk_features)
VALUES (50,
        '{"accessibilty":true, "capacity":2}');

-- Adding rows of data to the "bookings" table

INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Amanda',
        2,
        '2022-03-13',
        TRUE,
        FALSE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Sharmaine',
        1,
        '2022-03-14',
        FALSE,
        TRUE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Bimbola',
        3,
        '2022-03-15',
        TRUE,
        FALSE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Erin',
        3,
        '2022-03-16',
        FALSE,
        TRUE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Paul',
        4,
        '2022-03-12',
        TRUE,
        FALSE);

-----

INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Sean',
        2,
        '2022-03-18',
        TRUE,
        FALSE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Sadaf',
        1,
        '2022-03-19',
        FALSE,
        TRUE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Peju',
        3,
        '2022-03-20',
        TRUE,
        FALSE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Chris',
        3,
        '2022-03-21',
        FALSE,
        TRUE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Candy',
        2,
        '2022-03-22',
        TRUE,
        FALSE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Alicia',
        1,
        '2022-03-23',
        FALSE,
        TRUE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'Mya',
        3,
        '2022-03-24',
        TRUE,
        FALSE);


INSERT INTO bookings(name_of_staff, desk_id, date_booked, am, pm)
VALUES (
        'David',
        3,
        '2022-03-25',
        FALSE,
        TRUE);