-- This extension will be used to encrypt a user's password. First DROP the extension if it exists then CREATE it again.
DROP EXTENSION if exists pgcrypto;

CREATE EXTENSION pgcrypto;

-- If the table "bookings" exists delete it.
DROP TABLE if exists bookings CASCADE;

-- If the table "desks" exists delete it.
DROP TABLE if exists desks;

-- If the table "users" exists delete it.
DROP TABLE if exists users;



-- Creating a table called "desks"
CREATE TABLE desks (id INT PRIMARY KEY,
                                   desk_features JSONB);

-- Creating a table called "users"
CREATE TABLE users(id SERIAL PRIMARY KEY,
                                     first_name VARCHAR(30) NOT NULL,
                                                            last_name VARCHAR(30) NOT NULL,
                                                                                  email VARCHAR(254) NOT NULL,
                                                                                                     password VARCHAR(100) NOT NULL,
                                                                                                                           accessibility BOOLEAN); -- Creating a table called "bookings"

-- Creating a table called "bookings"
CREATE TABLE bookings (booking_id SERIAL PRIMARY KEY, staff_id INT REFERENCES users(id), desk_id INT REFERENCES desks(id), date_booked DATE NOT NULL, am BOOLEAN NOT NULL, pm BOOLEAN NOT NULL);

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

-- Adding rows of data to the "users" table
INSERT INTO users(first_name, last_name, email, password, accessibility)
VALUES ('Amanda',
        'Nwadukwe',
        'amandanwadukwe@gmail.com',
        crypt('AmandaNwadukwe1%', gen_salt('bf')),
        True);

INSERT INTO users(first_name, last_name, email, password, accessibility)
VALUES ('Sharmaine',
        'Sharmaine',
        'sharmaine@gmail.com',
        crypt('Sharmaine1%', gen_salt('bf')),
        True);

INSERT INTO users(first_name, last_name, email, password, accessibility)
VALUES ('Erin',
        'Dyson',
        'erindyson@gmail.com',
        crypt('ErinDyson1%', gen_salt('bf')),
        True);

INSERT INTO users(first_name, last_name, email, password, accessibility)
VALUES ('Bimbola',
        'Lasisi',
        'bimbolalasisi@gmail.com',
        crypt('BimbolaLasisi1%', gen_salt('bf')),
        True);

-- Adding rows of data to the "bookings" table
INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        2,
        '2022-03-13',
        TRUE,
        FALSE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        1,
        '2022-03-14',
        FALSE,
        TRUE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        3,
        '2022-03-15',
        TRUE,
        FALSE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        3,
        '2022-03-16',
        FALSE,
        TRUE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        4,
        '2022-03-12',
        TRUE,
        FALSE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        2,
        '2022-03-18',
        TRUE,
        FALSE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        1,
        '2022-03-19',
        FALSE,
        TRUE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        3,
        '2022-03-20',
        TRUE,
        FALSE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        3,
        '2022-03-21',
        FALSE,
        TRUE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        2,
        '2022-03-22',
        TRUE,
        FALSE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        1,
        '2022-03-23',
        FALSE,
        TRUE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        3,
        '2022-03-24',
        TRUE,
        FALSE);


INSERT INTO bookings(staff_id, desk_id, date_booked, am, pm)
VALUES (1,
        3,
        '2022-03-25',
        FALSE,
        TRUE);

