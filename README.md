# myproject

This is a minimal Django project scaffolded for you.

Quick start (Windows `cmd.exe`):

1. Create and activate a virtual environment:

```cmd
cd /d C:\Users\ADMIN\Documents\DonMachiatos-Python
python -m venv venv
venv\Scripts\activate
```

2. Install dependencies:

```cmd
python -m pip install --upgrade pip
pip install -r requirements.txt
```

3. Run migrations and start server:

```cmd
python manage.py migrate
python manage.py createsuperuser  # optional
python manage.py runserver
```

Open http://127.0.0.1:8000/ in your browser to see the welcome message.
