import mysql from 'mysql2/promise';
import dotenv from 'dotenv'; // Read environment variables
dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Ensure all required DB env variables are present
if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error('Missing required DB env variables');
}

// Create the connection pool
const pool = mysql.createPool({
  host: DB_HOST,              // Use WSL IP for MySQL connection
  port: Number(DB_PORT),      // MySQL port (default: 3306)
  user: DB_USER,              // Database user
  password: DB_PASSWORD,      // Password
  database: DB_NAME,          // Database name
  waitForConnections: true,   // Wait for connections if all are in use
  connectionLimit: 10,        // Max number of connections
  queueLimit: 0,              // Unlimited queued requests
  connectTimeout: 80000       // Timeout (10 seconds)
});

// Export a simple query function to use throughout the app
export const query = async (sql, params) => {
  const start = Date.now();
  const connection = await pool.getConnection();  // Get connection from pool
  const waitTime = Date.now() - start;
  
  // Log if connection wait time is long
  if (waitTime > 55) { 
    console.warn(`Connection waited ${waitTime}ms — pool might be too small`);
  }

  try {
    const [rows] = await connection.query(sql, params);
    return rows;
  } finally {
    connection.release();  // Release back to pool
  }
};

// Test connection immediately on startup (for troubleshooting)
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log('✅ Connected to MySQL via pool!');
    conn.release(); // Release connection back to pool
  } catch (err) {
    console.error('❌ MySQL pool connection failed:', err);
  }
})();

