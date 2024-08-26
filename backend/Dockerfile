FROM python:3

WORKDIR /home/app/backend

COPY requirements.txt .
RUN pip --timeout=1000 install --no-cache-dir -r requirements.txt

COPY . .