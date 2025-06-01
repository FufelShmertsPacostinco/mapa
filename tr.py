import psycopg2
from psycopg2 import OperationalError

def create_connection(table, db_name, db_user, db_password, db_host, db_port):
    connection = None
    try:
        connection = psycopg2.connect(
            database=db_name,
            user=db_user,
            password=db_password,
            host=db_host,
            port=db_port,
        )
        cursor = connection.cursor()
        res = cursor.execute(f"SELECT * from {table};")
        return [list(row) for row in cursor.fetchall()]
        #print("Подключение к PostgreSQL успешно установлено")
    except OperationalError as e:
        print(f"Произошла ошибка '{e}'")
    return connection

