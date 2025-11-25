# MySQL Setup Instructions

## Configuration Complete! ✓

I've updated your Django project to use MySQL.

## Next Steps:

### 1. Install Python MySQL connector:
```cmd
cd /d C:\Users\ADMIN\Documents\DonMachiatos-Python
venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Create MySQL Database:

**Option A: Using MySQL Workbench (GUI)**
- Open MySQL Workbench
- Connect to your local MySQL server
- Run this SQL:
```sql
CREATE DATABASE donmachiatos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**Option B: Using Command Line**
```cmd
mysql -u root -p
```
Then in MySQL prompt:
```sql
CREATE DATABASE donmachiatos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

### 3. Update Database Credentials:

Edit `myproject/settings.py` and update these lines:
```python
'USER': 'root',        # Your MySQL username
'PASSWORD': '',        # Your MySQL password (add it here)
```

### 4. Run Migrations:
```cmd
python manage.py migrate
python manage.py createsuperuser
```

### 5. Restart Server:
```cmd
python manage.py runserver
```

## Notes:
- MySQL must be installed and running on your system
- Default user is 'root', change if you use a different user
- Don't forget to add your MySQL password in settings.py
- The database name is 'donmachiatos'

## Troubleshooting:
If you get connection errors:
- Verify MySQL is running
- Check username/password in settings.py
- Confirm database 'donmachiatos' exists
- Ensure MySQL is listening on port 3306
