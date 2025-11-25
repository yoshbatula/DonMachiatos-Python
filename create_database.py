import pymysql

# Connect to MySQL server (without specifying database)
try:
    connection = pymysql.connect(
        host='localhost',
        user='root',
        password='',  # Add your MySQL root password here if you have one
        charset='utf8mb4'
    )
    
    cursor = connection.cursor()
    
    # Create database
    cursor.execute("CREATE DATABASE IF NOT EXISTS donmachiatos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")
    print("✓ Database 'donmachiatos' created successfully!")
    
    cursor.close()
    connection.close()
    
except pymysql.err.OperationalError as e:
    print(f"Error connecting to MySQL: {e}")
    print("\nMake sure:")
    print("1. MySQL server is running")
    print("2. Your root password is correct (update PASSWORD in this script)")
    print("3. MySQL is installed on your system")
except Exception as e:
    print(f"Unexpected error: {e}")
