# pttinder
A University project done by my peers and I.

# Installation Guide

1. Clone the repository
    ```powershell
    git clone https://github.com/gTonelli/pttinder.git
    ```
2. Install dependencies
    ```powershell
    npm install
    ```
3. Install mysql database
   https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/
4. Create database
    ```powershell
    mysql -u root -p
    ```
    ```sql
    CREATE DATABASE pettinder;
    ```
5. Create a .env file, and write your environment's custom values to the file
    ```env
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_DATABASE=pettinder
    ```
6. Run the server
    ```powershell
    npm start
    ```
7. Visit the server at http://localhost:3000
