/***********************************/
/*Función para Insertar Usuarios*/
/**********************************/

CREATE OR REPLACE PROCEDURE insert_users(u_name TEXT, u_email TEXT, u_emailverified BOOLEAN, u_password TEXT, u_phonenumber TEXT, u_roleid INT)

    LANGUAGE plpgsql
    AS $$
    BEGIN
        INSERT INTO users (name, email, emailverified, password, phonenumber, roleid) 
        VALUES (u_name, u_email, u_emailverified, u_password, u_phonenumber, u_roleid);
    END;
    $$;


/*************************************/
/*Función para Eliminar Usuarios*/
/************************************/

CREATE OR REPLACE PROCEDURE delete_users(u_id INT)

    LANGUAGE plpgsql
    AS $$
    BEGIN
        DELETE FROM users WHERE id = u_id;
    END;
$$;


/*************************************/
/*Función para Actualizar Usuarios*/
/************************************/

    CREATE OR REPLACE PROCEDURE update_users(u_name TEXT, u_email TEXT, u_emailverified BOOLEAN, u_password TEXT, u_phonenumber TEXT, u_roleid INT, u_createdat INT)

    LANGUAGE plpgsql
    AS $$
    BEGIN
        UPDATE users SET
                                    name = u_name, email = u_email, emailverified = u_emailverified, password = u_password, phonenumber = u_phonenumber, roleid = u_roleid, createdat = u_createdat
        WHERE id = u_id;
    END;
    $$;