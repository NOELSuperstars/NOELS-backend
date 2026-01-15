
// mysql -u noels_user -p -h 172.23.16.1 -P 3306
// npx nodemon --legacy-watch server.js   
// C:\Users\kangh\Desktop\OESA\canvass\backend> XXXnode server.jsXXX ->  npx nodemon server.js       Win + R, type services.msc   check port# on cmd prompt: netstat -ano | findstr :3306 
// Never leave useSSL=false in production or on public networks.
/*  Scenario	                useSSL	      allowPublicKeyRetrieval
    Local/dev environment	    false	        true (common)
    Production (public site)	true	        usually false / not needed */

/* 

fetch('/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'test@example.com', password: '1234' })
}).then(res => res.json()).then(console.log);

*/


/* 


For web apps:
Use HTTP-only cookies with Secure and SameSite flags for best security.

For mobile apps or APIs:  
Usually store tokens in secure storage or localStorage but be aware of XSS risks.
______             ___________                           _______
Client	           Auth Method	                         Storage
Website	  JWT stored in httpOnly cookie	      ✅ Safer from XSS attacks
Mobile    App	JWT stored in secure storage	  Use Keychain (iOS) / Keystore (Android) : safest place to store JWTs and refresh tokens



How to prevent XSS
Sanitize and escape user input before displaying it.

Use Content Security Policy (CSP) headers.

Set cookies with HttpOnly to protect against theft.

Use frameworks that automatically handle escaping.

Avoid using innerHTML or dangerously injecting raw HTML.

          !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~  T9v$3kL!xPz7@qW#1mN8^rY&uE4*ZcJ0
          uppercase, lowercase, numbers, and symbols are acceptable charachers for secret password

*/



/* 
npm install express cookie-parser jsonwebtoken dotenv bcrypt express-validator express-rate-limit mysql2 body-parser

mysql2 - lets your Node.js app talk to MySQL.
body-parser (middleware to parse JSON/form data in requests)

npm install csurf - for CSRF protection
npm install asn1.js   // needed for RSA support      
// node-forge → Parse and validate X.509 certificates    //axios → Fetch the FIDO Metadata Service (MDS)  fetch MDS JWT// jose → verify and decode JWT
npm install axios jose node-forge //automatically fetch and parse FIDO MDS to dynamically load trusted TPM root  
npm install express-session - used to manage user sessions in an Express.js app.
npm install bn.js  - for handling arbitrary precision big numbers



don’t need to install path—it’s part of Node.js core


const express = require('express'); 
const path = require('path'); 
const cookieParser = require('cookie-parser'); 
const jwt = require('jsonwebtoken'); 
require('dotenv').config();
const bcrypt = require('bcrypt'); 
const { body, validationResult, matchedData } = require('express-validator'); 
const rateLimit = require('express-rate-limit');
// decode attestationObject to extract public key + id
const cbor = require('cbor');
const crypto = require('crypto');


Aug 16: Commands to install all npm packages
npm install express express-session express-validator csurf cookie-parser jsonwebtoken dotenv bcrypt express-rate-limit bn.js @peculiar/x509 cbor node-forge axios asn1.js mysql2 jose

*/

// package.json needs "type": "module",   /* needed when using ES module syntax like 'import' 'from' */
import session from 'express-session'; //Middleware that manages session storage (where your challenge is stored)
// Define the port the server will run on (http://localhost:2160) Ports below 1024 are reserved (like 80 for HTTP, 443 for HTTPS, 22 for SSH)

import path from 'path'; //const path = require('path');  //File paths differ on Windows (\) and Unix/Linux/macOS (/), and the path module handles those differences for you

import { fileURLToPath } from 'url'; // fixes this ReferenceError: __dirname is not defined in ES module scope with

/* These two lines: ES-module replacement for __dirname so you can build file paths that work in Node ESM. */
const __filename = fileURLToPath(import.meta.url); // import.meta.url knows the directory of this current file (server.js)
const __dirname = path.dirname(__filename); // gives the folder containing server.js

import express from 'express'; //const express = require('express');// Import the Express library (a web framework for Node.js) // for cookieParser
import cookieParser from "cookie-parser"; //const cookieParser = require('cookie-parser'); //for secure cookie-based token delivery on web
import jwt from 'jsonwebtoken'; //needed to make cookies



const ACCESS_TOKEN_SECRET  = process.env.ACCESS_TOKEN_SECRET; // store in .env in production
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const CERT_TOKEN_SECRET    = process.env.CERT_TOKEN_SECRET;

const noels = express();// Create an Express application (this "noels" will define routes and behavior)
noels.use(express.json({ limit: '1mb' }));// Middleware: Tells Express to automatically parse incoming JSON in requests, in other words turn the string to an object and store it in req.body // // 3. Parse JSON
noels.use(cookieParser());  // 1. Parse cookies FIRST


noels.get('/loginFiles', (req, res) => { // goes to wwwroot/public/login // called from form1.cs     webView21.Source = new Uri("http://localhost:2160/content");
  res.sendFile(path.join(__dirname, "../wwwroot/public/loginFiles/login.html")); // login.html is coded to ask server for css and js files
});  //WebView receives login.html just like a browser would, and renders it
noels.use('/public', express.static(path.join(__dirname, '../wwwroot/public'))); //If the browser requests any file (HTML, CSS, JS, images, etc.) under 'public' folder, serve it automatically


noels.use((req, res, next) => { //This will log every incoming request and show whether the request is actually reaching your route.  // 2. Logging middleware
  console.log(`===========Incoming request=============: ${req.method} ${req.path}`);
  //console.log("Incoming cookies (raw):", req.headers.cookie);
  /*console.log("Parsed cookies:", req.cookies); // <-- now works
  console.log({
    method: req.method,
    path: req.path,
    headers: req.headers,
    query: req.query,
    body: req.body
  });*/
  const short = v => v ? v.slice(0, 20) + "…" : null;
  const shortSig = token => {
    if (!token) return null;
    const parts = token.split('.');
    return parts[2] ? "…" + parts[2].slice(0, 14) : null; // first 20 chars of signature
  }
  console.log({
    cookie: shortSig(req.cookies?.accessToken),
    cookie: req.cookies?.accessToken,
    xNonce: req.headers["x-nonce"],
    xProof: short(req.headers["x-proof"])
  });  next();
});


// Middleware to protect private content
function requireAuth(req, res, next) {
  console.log("requireAuth ENTERED");

  const token = req.cookies?.accessToken;
  if (!token) {
    console.log("❌ No token found → Unauthorized");
    return res.status(401).json({ error: "Verification is missing" }); // cookie is missing

  }
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET); //jwt.verify recomputes signature from header+payload+ACCESS_TOKEN_SECRET, then compare with the signature already in the token
    
    req.auth = { //jwt has these properties: userEmail,   role: userInDB.subscription,  loginTime,  device_id,   jti
      userEmail: decoded.userEmail,
      deviceID:  decoded.device_ID, // hased hlakTPMkey OR windowsEK
      jti:       decoded.jti
    };
    next();
  } catch (err) {
    console.log("❌ Token verification failed:", err.message);
    return res.status(401).json({ error: "Verification failed" });
  }
} 
async function verifyDevicePossession(req, res, next) {
  console.log("verifyDevicePossession ENTERED");
  const deviceID = req.auth.deviceID; //deviceID comes from req.auth (not cookies directly, so I know the cookie issued by my server was properly decoded ) //req.cookies?.accessToken;// 2. Identify the client using a unique cookie (accessToken)  
  const userEmail = req.auth.userEmail;
  try {
    // 1. Headers must exist
    const returningNonceB64 = req.get('X-Nonce');
    const proofB64 = req.get('X-Proof');
    if (!returningNonceB64 || !proofB64)     throw Object.assign(new Error("Verification Missing"), { status: 400 });//Missing device proof
    if (!/^[A-Za-z0-9+/=]+$/.test(proofB64)) throw Object.assign(new Error("Verification Incomplete"), { status: 400 });//Malformed proof
    
    const proofBytes = Buffer.from(proofB64, 'base64');
    if (proofBytes.length !== 256)           throw Object.assign(new Error("Verification Invalid"), { status: 400 });//Invalid proof length
    
    const raw = await redisClient.get(`nonce:${deviceID}`);
    if (!raw)                                throw Object.assign(new Error("Verification Expired or is Invalid"), { status: 403 });//Nonce expired or invalid from the server side

    const { storedNonce, sessionBinding, createdAt } = JSON.parse(raw);
    if (Date.now() - createdAt > 24_000)     throw Object.assign(new Error("Verification Expired"), { status: 403 });//Nonce expired

    const nonceBytes = Buffer.from(returningNonceB64, 'base64');
    const storedNonceBytes = Buffer.from(storedNonce, 'base64');
    if (nonceBytes.length !== storedNonceBytes.length || !crypto.timingSafeEqual(nonceBytes, storedNonceBytes)) {
                                             throw Object.assign(new Error("Verification Error"), { status: 403 });//wrong length or mistmatch with stored nonce
    }
    //const sql = `SELECT signing_key, username, email, k_device FROM users WHERE email = ? AND device_id = ? LIMIT 1`;   // LIMIT 1 -  return at most 1 row
    const sql = `SELECT signing_key FROM users WHERE email = ? AND device_id = ? LIMIT 1`;   // LIMIT 1 -  return at most 1 row
    const rows = await query(sql, [userEmail, deviceID]);
    if (rows.length === 0)                   throw Object.assign(new Error("Verification Unsuccessful"), { status: 403 });//Error during registration:Device is unregistered   
    const sessionBytes = Buffer.from(sessionBinding, 'base64');
    const message = Buffer.concat([nonceBytes, sessionBytes]); 
    const userInDB = rows[0];
    const hlakPubBase64 = userInDB.signing_key; // uploaded to DB during registration
    if (!verifySignature(message, proofBytes, hlakPubBase64, 'requestNonceSigning'))
                                             throw Object.assign(new Error("Verification Failed"), { status: 403 });//
    await redisClient.del(`nonce:${deviceID}`);// Delete the key to clean up
    next(); // ✅ real device, real session
  } 
  catch (err) {
    if (deviceID) await redisClient.del(`nonce:${deviceID}`);// Delete the key. There was an error in the verification so delete to prevent replay
    console.error(`${userEmail} verifyDevicePossession error:`, err.message);
    const number = err.status || 403;
    return res.status(number).json({ error: err.message });
  }
}

noels.get('/nonceForSigning', requireAuth, async (req, res) => {
  const deviceID = req.auth.deviceID; //deviceID comes from req.auth (not cookies directly, so I know the cookie issued by my server was properly decoded ) //req.cookies?.accessToken;// 2. Identify the client using a unique cookie (accessToken)  
  const userEmail = req.auth.userEmail;

  try { //deviceID: hashed hlakTPMkey OR windowsEK
    if (!deviceID) throw Object.assign(new Error("Verification Uninitiated"), { status: 400 });//deviceID was not in the cookie
    const storedNonce = crypto.randomBytes(16).toString('base64');// Generate nonce        from verifyUser:   await redisClient.setEx(`tempUser:${deviceID}`, 900, JSON.stringify(tempUserData));
    const sessionBinding = crypto.createHash('sha256').update(req.auth.jti).digest('base64');

    const ok = await redisClient.set(`nonce:${deviceID}`, 
                                      JSON.stringify({ storedNonce, sessionBinding, createdAt: Date.now() }), 
                                      { EX: 24, NX: true }); //NX → only set if key does not exist //Store nonce with TTL (24-second validity
    if (!ok) {                                              // set ... NX guarantees exclusivity, makes issuance atomic
      throw Object.assign(new Error("Too Many Requests"), { status: 429 }); //Nonce already issued, already has an active challenge
    }

    res.json({storedNonce, sessionBinding });//Send the nonce and jti to the client
    //res.json({ storedNonce }); 
  } catch (err) {
    console.error(`${userEmail} nonce issuance failed`, {
      status: err.status,
      reason: err.message
    });
    const number = err.status || 403;
    return res.status(number).json({ error: err.message });
  }
});



// Optional: helper to verify later
function verifyNonce(deviceId, clientNonce) {
  const record = nonceStore.get(deviceId);
  if (!record) return false;
  const isValid = record.nonce === clientNonce;
  return isValid;
}






noels.get('/contentFilesss', requireAuth, (req, res) => {// Protect the HTML file
  res.sendFile(path.join(__dirname, "../wwwroot/private/contentFiles/content.html")); // content.html is coded to ask server for css and js files
  console.log(req.secure); // if true, then request arrived via TLS. 
});

noels.get('/verify-device', requireAuth, verifyDevicePossession, async (req, res) => {
  // Mark device and jti verified for a short window
  const deviceID = req.auth.deviceID;
  const jti      = req.auth.jti;
  // Bind verification to this exact JWT
  await redisClient.setEx(`deviceValid:${deviceID}:${jti}`, 5, '1'); //5 seconds
  res.json({ ok: true });
  }
);
/*
import fs from "fs";
noels.get('/verify-device', requireAuth, verifyDevicePossession, async (req, res) => {
  try {
    const htmlPath = path.join(__dirname, "../wwwroot/private/contentFiles/content.html");
    const html = await fs.promises.readFile(htmlPath, 'utf8');
    res.json({ ok: true, html });
  } catch (err) {
    console.error("Error reading HTML file:", err);
    res.status(500).json({ error: "Server failed to load content" });
  }
});
 req.secure          // true if HTTPS
  req.protocol        // 'https' or 'http'
  req.ip              // client IP (may be proxy-adjusted)
  req.ips  */         // array if trust proxy enabled
noels.get('/contentFiles', requireAuth, async (req, res) => {
  const deviceID = req.auth.deviceID;
  const jti      = req.auth.jti;
  const userEmail = req.auth.userEmail;

  const ok = await redisClient.get(`deviceValid:${deviceID}:${jti}`);
  try {
    if (!ok) throw Object.assign(new Error("Device verification required"), { status: 400 });
  } 
  catch (err) {  
    console.error(`${userEmail} Device verification required`, {
      status: err.status,
      reason: err.message
    });
    const number = err.status || 403;
    return res.status(number).send(err.message);
  }
  //res.sendFile(path.join(__dirname, "../wwwroot/private/contentFiles/content.html"));
  res.sendFile(path.join(__dirname, "../wwwroot/private/contentFiles/logo.html")); 

});




// Protect all static files under /private
noels.use('/private', /* requireAuth,*/ express.static(path.join(__dirname, '../wwwroot/private')));  //sends css and js files //Express automatically strips the prefix (/private) from the URL when looking for the file in the directory.
// <link rel="stylesheet" href="/private/contentFiles/content.css"> -> http://localhost:2160/private/contentFiles/content.css   Express sees /private (prefix) and strips it off, then looks for: ../wwwroot/private/ + contentFiles/content.css
/*
1) The browser sees: <script src="/private/contentFiles/content.js" defer></script> and makes an HTTP GET request to: GET /private/contentFiles/content.js
2) Express checks the middleware: noels.use('/private', express.static(path.join(__dirname, '../wwwroot/private')));
   - The /private prefix tells Express: "Anything requested that starts with /private should be served from the folder wwwroot/private."
3) Express strips the prefix /private from the URL(/private/contentFiles/content.js) and looks inside the folder: wwwroot/private + /contentFiles/content.js → wwwroot/private/contentFiles/content.js
*/
  // Serves static files from ../wwwroot/public
  // Anything inside that folder is accessible directly, e.g. "/file.png"
  // The request URL maps to the file path under public automatically
noels.use('/Images', express.static(path.join(__dirname, '../Images'))); 
  // Serves static files from ../Images
  // They are accessible under the "/Images" URL prefix
  // Example: "/Images/pic.jpg" will serve "../Images/pic.jpg"


import BN from 'bn.js'; //For TPM RSA keys, your modulus is huge, so you must convert it to a BN
import asn1 from 'asn1.js'; // npm install asn1.js // needed to convert bytes to DER when making credentialBlob // for function tpmPublicToPem(publicArea) {

//import fs from "fs"; //import fs from 'fs/promises';  // for MakeCredential with wsl/Linux and other things but didn't write notes on them (Enables clean async I/O)  // for async readFile/writeFile
//import fsSync from 'fs';  //then I can call console.log('wsl.exe exists?', fs.existsSync('C:\\Windows\\System32\\wsl.exe')); for MakeCredential   // for existsSync, writeFileSync
//console.log("mkdtempSync:", typeof fs.mkdtempSync);


import crypto from 'crypto'; //const crypto = require('crypto');  //MUST HAVE. provides cryptographic functionality like key generation, signing, encryption, hashing, and more // for MakeCredential with wsl/Linux






import dotenv from 'dotenv';
dotenv.config();//require('dotenv').config(); // need to 'npm install dotenv', can access .env values
dotenv.config({ path: '/mnt/c/Users/kangh/source/repos/NOEL/server/.env' });


import axios from 'axios'; //added this because endpoint /attest was using it even though I didn't call it from login.js
import { execSync } from 'child_process';  //added for MakeCredential with wsl/Linux
import qs from 'qs'; //const qs = require('qs');



const envAppHashBytes = Buffer.from(process.env.APP_HASH, 'hex');

let loginTime;
const users = [
  {
    id: 3,
    username: 'bob',
    password: 'a',
    email: 'b@b.com',
    role: 'user',
    isActive: true,
    inactiveDate: 'March 15, 2020',
    paymentStatus: 'active',  //'active', 'past_due', 'cancelled'
    subscriptionPlan: 'premium',
    subscriptionStart: '2024-01-01',
    subscriptionEnd: '2025-01-01',
    lastPaymentDate: '2024-06-01',
    paymentMethod: 'Visa **** 4242',
    billingAddress: '123 Main St, Seoul',
    failedPayments: 0,  //might automatically pause or downgrade their subscription until payment is resolved
    lastLoginTime: null
  }
];
/*
noels.use(session({
  secret: 'ACCESS_TOKEN_SECRET',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // In production, set secure: true so cookies are only sent over HTTPS
}));
*/
import filesys from 'fs';
import https from 'https';
const options = {
  key:  filesys.readFileSync('../cert/server.key'),   // your private key  // from folder server, go up a folder then into folder cert
  cert: filesys.readFileSync('../cert/server.crt')   // your certificate
};
const PORT = process.env.PORT || 3000;

https.createServer(options, noels).listen(PORT, () => { //Creates an HTTPS server, not HTTP, Enables TLS for every connection to https://localhost:2160
  console.log(`N.⬠.E.L.S. Server is running on https://localhost:${PORT}`);
});
/*
const PORT = 2160; //Ports already in use by other apps will throw an error (e.g. Error: listen EADDRINUSE)
noels.listen(PORT, () => {// Start the server, and listen on the specified port// When the server starts, log the URL to the console
  console.log(`N.⬠.E.L.S. Server is running on http://localhost:${PORT}`);//YRt4yEpUDGClCkPmxh2zAkbnPYS9qVft2p90HG3PpKo=
});


noels.get('/contents', (req, res) => {
  const refreshToken = req.cookies.refreshToken; // or accessToken, depending on your auth flow
  if (!refreshToken) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const payload = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET); // or ACCESS_TOKEN_SECRET
    // optional: check payload info like user id
    res.sendFile(path.join(__dirname, "../wwwroot/private/contents/content.html"));
  } catch (err) {
    return res.status(401).send("Unauthorized");
  }
});
*/
noels.get('/asdfa', (req, res) => {
  res.sendFile(path.join(__dirname, '../wwwroot/private/book-links.html'));
});


/*
Use middleware to protect all private routes:

function requireAuth(req, res, next) {
    const token = req.cookies.certToken;
    if (!token) return res.redirect('/login');
    // validate token here
    next();
}

noels.get('/', requireAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'private/book-links.html'));
});
*/


// csrfProtection not needed for an app
// sends login.html to the client when they hit a specific route (like /login) in other words: “When a user sends a GET request to /, respond with the file login.html.”
//noels.get('/', (req, res) => { //__dirname: a special node.js variable, it contains the absolute path of the directory where the current script is located
       // '/' refers to the root URL. In this case /login doesn't exist so middleware goes to the public folder to find login.html
       //     req (short for request)  = the object that contains information sent from the client (needed even if user sends nothing)
       //     res (short for response) = the object you use to send data back to the client
noels.get('/login53', (req, res) => {
    
  res.sendFile(path.join(__dirname, "../wwwroot/public/login/login.html"));



  const tokenAccess = req.cookies.accessToken;
  const tokenRefresh = req.cookies.refreshToken;
  const tokenCert = req.cookies.certToken;
  console.log('tokenCert: ' + tokenCert);
  if (tokenCert){   //bkmk
    //const { loginTime: userAccessTloginTime, id: userID } = getLoginTimeFromToken(tokenAccess, ACCESS_TOKEN_SECRET);
    //const { loginTime: userRefreshTloginTime }      = getLoginTimeFromToken(tokenRefresh, REFRESH_TOKEN_SECRET);
    const { loginTime: userCertloginTime, id: userID } = getLoginTimeFromToken(tokenCert, CERT_TOKEN_SECRET);

    const serverUserNow = users.find(usersIndex => usersIndex.id === userID);// Look for a user that matches both username and password
    
    console.log("serverUserNow.lastLoginTime " + serverUserNow.lastLoginTime);
    console.log("userCertloginTime           " + userCertloginTime);
    //serverUserNow.lastLoginTime = 45;  // to simulate invalid token, wrong timestamp
    if (serverUserNow.lastLoginTime === userCertloginTime) res.sendFile(path.join(__dirname, 'private', 'book-links.html')); /* This will go to a backend server Railway or 🟦 Render then after testing and debuggin move on to AWS*/
    else{   //res.sendFile(path.join(__dirname, 'public', 'login.html')); //res.sendFile: provided by Express. Sends a file as a response to the client    
    return res.status(401).sendFile(path.join(__dirname, 'public', 'warning.html'));}

  }
  else   res.sendFile(path.join(__dirname, '../wwwroot/public/contents/content.html')); //res.sendFile: provided by Express. Sends a file as a response to the client    

  function getLoginTimeFromToken(token, secret) {
    try {
      const decoded = jwt.verify(token, secret); // verify and decode token
      return { loginTime: decoded.loginTime, id: decoded.id }; // access loginTime from payload
    } catch (err) {
      console.error('Invalid token:', err.message); //err.message could be jwt expired
      return null; // or handle error as needed
    }
  }
});  //path.join: method from Node.js. ensures the correct file path format across different OS (Windows, macOS, Linux)

noels.get('/producer', (req, res) => { //__dirname: a special node.js variable, it contains the absolute path of the directory where the current script is located
  res.sendFile(path.join(__dirname, 'public', 'producer.html')); //res.sendFile: provided by Express. Sends a file as a response to the client
});  //path.join: method from Node.js. ensures the correct file path format across different OS (Windows, macOS, Linux)




  
import bcrypt from 'bcrypt'; //const bcrypt = require('bcrypt');

import { body, header, /* query as queryValidator, queryValidator targets values in the URL query string*/ validationResult, matchedData } from 'express-validator';//const { body, header, query: queryValidator, validationResult, matchedData } = require('express-validator'); // grabs these properties which are tools from express-validator // 'query' renamed during destructuring because 'query' is already used

import { query } from './config/db.js';  // Runs db.js (so any code in it executes, like creating the pool and testing the connection).//Promise-based MySQL query function using the connection pool(Imports the exported query function)

import rateLimit from 'express-rate-limit'; //const rateLimit = require('express-rate-limit');
import NodeRSA from 'node-rsa';  //for encrypting a secret with a public key // must install through bash: C:\Users\kangh\source\repos\NOEL\server> npm install node-rsa
 
import { createClient } from 'redis'; // Redis cache = super-fast in-memory storage for temporary data. Used for storing const tempUserData = {username, email, password, device_fingerprint, subscriptionPlan, createdAt: Date.now(),}; which will be saved permanently on DB once registration is successful
//const redisClient = createClient({ url: 'redis://172.23.16.198:6379' });
const redisClient = createClient({ url: 'redis://localhost:6379' });
redisClient.on('error', (err) => console.error('Redis error', err));
await redisClient.connect();
/*  ssh noels@192.168.0.104    vm name: noels   pw: doorcode
You can manually start Redis anytime with this command inside Ubuntu: wsl -d Ubuntu-22.04 sudo service redis-server start  // docker login
pw: home front door
go into terminal using powershell: wsl -d Ubuntu-22.04
Then check it’s running with: wsl -d Ubuntu-22.04 redis-cli ping
If it replies PONG, Redis is up ✅
👉 To stop it manually: sudo service redis-server stop
👉 To restart it: sudo service redis-server restart

--legacy-watch server.js

*/



/* const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit to 10 requests per IP
  message: 'Too many attempts. Try again later.'
  noels.use('/register', limiter);
}); */



/* const loginLimiter = rateLimit({
  windowMs: /* 15 * 60 * * / 10000, // 15 minutes
  max: 1,
  statusCode: 429 // optional, since 429 is the default
}); */

const windowMs =  15 * 1 * 1000; // 15 minutes in milliseconds (or just 10 sec for testing)
const loginLimiter = rateLimit({
  windowMs: windowMs, // e.g. 15 minutes
  max: 5,             // number of allowed attempts before lockout
  statusCode: 429,   //  optional (default is 429)
  standardHeaders: true, // adds Retry-After header
  legacyHeaders: false,  // disables deprecated X-RateLimit-* headers

  handler: (req, res) => {
    const retryUntil = Date.now() + windowMs; // number in ms represents the future time
    return res.status(429).json({ retryUntil }); // Sends number (can also `String(retryUntil)` if needed)  // sends an object(key-value pair) { retryUntil(key/attribute): 1721563950000(value) }
  }
});






// Define a POST route for user login at '/'  // - POST request (utilized to send data to the server)
noels.post('/loginStart', // Use DB to verify user then send nonce. Hash tpm_key for deviceId so loginEnd can recognize which user is logging in.
  loginLimiter,   // max 10 attempts / 15 min
  [ //body('email') means it will get email from req.body.email // body('email') grabs the email field from req.body.email 
    whitelist([ 'device_fingerprint', 'email', 'password', 'tpmKey' ]),  
    body('email')
      .notEmpty().withMessage('Email is required').bail()
      .trim()
      .isEmail().withMessage('Invalid e‑mail format')
      .normalizeEmail(),// Validate + sanitize email  //.escape() turns <script> into harmless HTML  //Use .escape() or .trim() on any text field // Use matchedData(req, { onlyValidData: true }) to discard anything not validated
    body('password')
      .notEmpty().withMessage('🔑 Access key is required🔑').bail()// Validate + sanitize password // HTML‑escape to kill any leftover markup
      .trim(),
    body('device_fingerprint')
      .notEmpty().withMessage('Unique digital identity is required').bail()
      .trim()
      .escape(),  //Device fingerprint is required
    body('tpmKey')  //Do not .escape() or .trim() — it will corrupt the key
      .notEmpty().withMessage('TPM key is required.').bail()
      .matches(/^[A-Za-z0-9+/=\s]+$/).withMessage('Invalid RSA key format')
      .isLength(216).withMessage('Unexpected RSA key length')   // 392 for persistent, 216 for transient
      .custom((key) => {
        if (!isValidTpmKey(key)) { // decoded byte length is 162, not 216
          throw new Error('RSA key failed validation');
        }
        return true;
      })
  ], //these are just registering the rules, not applying them
  async (req, res) => { 
    console.error('Login attempt:', new Date().toISOString(), 'IP:', req.ip);
    console.log(req.ip, req.ips, req.headers['x-forwarded-for']); //This helps you debug exactly what the client’s connection path looks like.

    /* console.error('ㄹ224 type: ' + req.body.type);  //type is login, registration, etc.*/
    const errors = validationResult(req); //It does not remove or block invalid fields — it just reports them, only says what’s wrong //collects the results of all the validation and sanitization rules that were defined earlier: body(), check(), etc.
    if (!errors.isEmpty()) { // if errors is not empty, there are errors
      console.error('error: ', errors.array());
      return res.status(400).json({ errors: errors.array() }); // login pw too short
    }
    // Safe to use:  
    try {
      const cleanData = matchedData(req); // matchedData returns only the fields from req that passed all the validation and sanitization rules // matchedData returns validated fields from all parts of the request you validated, not only from the body
      const { email, password, device_fingerprint, tpmKey } = cleanData; // Extract username and password from the request body. variables must be from what sent the request, in this case, login.js. same as cleanData.email etc

      //const device_fingerprint = req.headers['device_fingerprint']; // another way of getting the value
      //const userInDB = users.find(usersIndex => usersIndex.email === email && usersIndex.password === password);// Look for a user that matches both username and password
      //const db = require('./config/db');// 'users' is Table name// list only the columns you want 
      
      let userInDB;
      try {      
        const rows = await query('SELECT email, password, device_fingerprint FROM users WHERE email = ?', [email] );
        if (rows.length === 0) {
          console.log('Unauthorized: email not found - ' + email);
          return res.status(401).json({ message: '👮 Security Breach Detected 👮<br>User credentials: Unauthorized' }); 
        }
        userInDB = rows[0];
      } 
      catch (dbErr) {
        console.error('Database error:', dbErr);
        return res.status(500).json({ message: 'Database error' });
      }   
      
      try {
        const isMatch = await bcrypt.compare(password, userInDB.password);
        if (!isMatch) {
          console.log('Unauthorized: wrong password');
          return res.status(401).json({ message: '👮 Security Breach Detected 👮<br>User credentials: Unauthorized' }); 
        }
      } 
      catch (bcryptErr) {
        console.error('Password verification error:', bcryptErr);
        return res.status(500).json({ message: 'Invalid or corrupt data' }); //Password verification error
      }
    
      let deviceId, nonceBase64, sessionBinding, secret, secretHex;
      try{
        // hashes the binary form of tpmKey, converts that hash to a hex string, slices that string to the first 32 characters  // 2 hex char = 1 byte. so 32 hex char = 16 bytes
        deviceId = crypto.createHash('sha256').update(Buffer.from(tpmKey, 'base64')).digest('hex');   //.digest() is bytes but .digest('hex') is hex in string format. 
        nonceBase64 = crypto.randomBytes(16).toString('base64'); //generates 16 random bytes then immediately converts them to a base64 string  // for quote and secret that gets sealed
        sessionBinding = crypto.randomBytes(32).toString('base64'); //for not here, but must change it for production. This identifies the session for the client with the cookie
        // Store temporary user data in Redis with 15-minute expiration// Scales to multiple servers without losing temporary registration data
        secret = crypto.randomBytes(32);   // Generate a random secret in bytes
        secretHex = secret.toString('hex');// convert into hex string for storing and transport over HTTP      const publicKeyPem = `-----BEGIN PUBLIC KEY-----\n${tpmKey.match(/.{1,64}/g).join('\n')}\n-----END PUBLIC KEY-----`;
      } 
      catch (cryptoErr) {
        console.error('Crypto error:', cryptoErr);
        return res.status(500).json({ message: 'DATA creation operation failed' });//Crypto operation failed
      }

      let encryptedSecretB64;
      try {
        const rsaKeyObj = new NodeRSA(tpmKey, 'pkcs8-public-pem', { encryptionScheme: 'pkcs1' });// 2. Load the RSA public key
        encryptedSecretB64 = rsaKeyObj.encrypt(secret).toString('base64');// 3. Encrypt the secret with the RSA public key and convert to B64
       } 
       catch (rsaErr) {
        console.error('RSA encryption error:', rsaErr);
        return res.status(500).json({ message: 'DATA conversion failed' });// RSA encryption failed
      }
      try {
        const tempUserData = { email, device_fingerprint, createdAt: Date.now(), deviceId, nonceBase64, sessionBinding,
                             tpm_key: tpmKey, secretNonce: secretHex }; // keep the expected nonce (base64) for later verification 
        await redisClient.setEx(`tempUser:${deviceId}`, 72, JSON.stringify(tempUserData));
       } 
       catch (redisErr) {
        console.error('Redis error:', redisErr);
        return res.status(500).json({ message: 'Failed to save data' }); //Failed to store temporary user data
      }

      return res.json({ 
        nonce: nonceBase64, 
        session: sessionBinding,
        secret: encryptedSecretB64
      });
    }
    catch (err) {
      console.error('Login error:', err);
      return res.status(500).json({ error: '😲An unexpected internal server error occurred.<br>Please try again later.' });
    } 
  }
);
  
//res.json({ certToken });
//res.json({ accessToken });  // Even though it's not in the JSON response, refreshToken is sent to the client via an HTTP-only cookie
//res.json({ status: 'Login and token generation successful', accessToken });// ✅ Also send it in the response (for mobile apps to store)






noels.post('/refresh-token', (req, res) => {   //reissue token; when the access token expires, the frontend sends a request to /refresh, and the refresh token is automatically sent in the cookie — no manual handling needed
  /*                            Step	Action
  🔐  Login	User logs in → gets accessToken + refreshToken. AccessToken goes to frontend, refreshToken is saved in a secure HttpOnly cookie.
  🔐  Access	For protected routes like /private, frontend sends accessToken in Authorization header.
  🔁  Refresh	If accessToken expires, frontend calls /refresh-token, which verifies the refreshToken from the cookie and returns a new accessToken.
  🚪  Logout	/logout clears the refreshToken cookie. 
  Let me know if you want:  To store refresh tokens in memory or a database.
                            To auto-refresh tokens from frontend when accessToken expires.*/
  
                            //Let me know if you want the frontend code split across pages (e.g. login.js, private.js)
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);// No token = unauthorized

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // Invalid token
    
    const user = users.find(u => u.username === decoded.username);
    if (!user) return res.sendStatus(403); // User doesn't exist anymore
    
    const newAccessToken = jwt.sign(
      { id: user.id, role: user.role },
      ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );

    res.json({ accessToken: newAccessToken });
  });
});



// POST /logout
noels.post('/logout', (req, res) => {
  res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'Strict', secure: true });
  res.sendStatus(204);
});

//import db from './config/db.js'; // const db = require('./config/db'); // connects to db.js file
//import util from 'util'; // const util = require('util');
//const query = util.promisify(db.query).bind(db);


//const registerRouter = express.Router();
import { execFile } from 'child_process'; //used for credentialBlob, execFile launches the C# executable as a child process
import { spawn } from 'child_process';
import { writeFileSync, readFileSync, unlinkSync } from 'fs'; //read/write/delete files
import os from 'os'; // Provides operating system-related utilities. For example, os.tmpdir() gives the system’s temporary directory, os.platform() shows the platform
import forge from 'node-forge'; // for X.509 EK cert parsing/validation
import { promisify } from 'util'; //later used with const execFileAsync  = promisify(execFile);  //used to convert AK bytes into PEM




//==========================================================================================================================================


function whitelist(fields) {  
  return (req, res, next) => {   console.log("ENTERED WHITELIST FUNCTION");
    const extraFields = Object.keys(req.body).filter(f => !fields.includes(f));
    if (extraFields.length) {
      return res.status(400).json({
        errors: extraFields.map(f => ({ msg: `Received unexpected field: ${f}` }))
      });
    }
    next();
  };
}
const base64Regex = /^[A-Za-z0-9+/=]+$/;
const hexRegex    = /^[a-fA-F0-9]+$/;

function isValidTpmKey(tpmKeyB64, minLength = 150, maxLength = 400) {
  try {
    // Decode Base64
    const keyBuffer = Buffer.from(tpmKeyB64, 'base64');

    // Check decoded length range
    if (keyBuffer.length < minLength || keyBuffer.length > maxLength)
      return false;

    // Try parsing as DER-encoded public key (SPKI)
    crypto.createPublicKey({
      key: keyBuffer,
      format: 'der',
      type: 'spki'
    });
    return true; // valid key
  } catch {
    return false; // invalid key
  }
}

const control = "codesss";  //if it is any string other than "code", EK is on/active. If control is "code" EK is OFF, it is ignored. DB will have HLAK stored for both slots
noels.post('/regisStart',  // get user data and send nonce so user can certify AK 
  [
    whitelist([ 'device_fingerprint', 'username', 'email', 'password', 'subscriptionPlan', 'tpmKey' ]),
    body('device_fingerprint')
      .notEmpty().withMessage('Unique digital identity required').bail()
      .trim()
      .escape(),
    body('username')
      .notEmpty().withMessage('Username is required').bail()
      .trim()
      .isLength({ min: 3, max: 20 }).withMessage('Username must be 3-20 characters long')
      .matches(/^[a-zA-Z0-9_]+$/).withMessage('Username can only contain letters, numbers, and underscores'),
    body('email')
      .notEmpty().withMessage('Email is required').bail()
      .trim()
      .isEmail().withMessage('Invalid email format')
      .normalizeEmail(),
    body('password')
      .notEmpty().withMessage('Password is required').bail()
      .trim()
      .isLength({ min: 5 }).withMessage('Password must have at least 5 characters'),
    body('subscriptionPlan')
      .notEmpty().withMessage('Please choose a subscription plan').bail()
      .custom(subPlan => {
        if (Array.isArray(subPlan)) {
          throw new Error('Please select only one subscription plan');
        }
        return true;
      })
      .isIn(['Essentials', 'Standard', 'Premium']).withMessage('Invalid subscription plan.'),
    body('tpmKey')  //Do not .escape() or .trim() — it will corrupt the key
      .notEmpty().withMessage('TPM key is required.')
      .matches(/^[A-Za-z0-9+/=\s]+$/).withMessage('Invalid RSA key format')
      .isLength(216).withMessage('Unexpected RSA key length')   // 392 for persistent, 216 for transient
      .custom((key) => {
        if (!isValidTpmKey(key)) { // decoded byte length is 162, not 216
          throw new Error('RSA key failed validation');
        }
        return true;
      })
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){ return res.status(400).json({ errors: errors.array() }); }//Username must be 3-20 characters long, Password must have at least 5 characters, Please choose a subscription plan
    
    try {
      const { username, email, password, subscriptionPlan, device_fingerprint, tpmKey } = matchedData(req); // holds sanitized and validated data
      // hashes the binary form of tpmKey, converts that hash to a hex string, slices that string to the first 32 characters  // 2 hex char = 1 byte. so 32 hex char = 16 bytes
      const deviceId = crypto.createHash('sha256').update(Buffer.from(tpmKey, 'base64')).digest('hex').slice(0, 32);   //.digest() is bytes but .digest('hex') is hex in string format. 
      const nonceBase64 = crypto.randomBytes(16).toString('base64'); //generates 16 random bytes then immediately converts them to a base64 string

      const hashedPW = await bcrypt.hash(password, 10);// Hash password and insert into DB. Same pw can be hashed, the result will always be different
      // Store temporary user data in Redis with 15-minute expiration// Scales to multiple servers without losing temporary registration data
      
      const secret = crypto.randomBytes(32);   // Generate a random secret in bytes
      const secretHex = secret.toString('hex');// convert into hex string for storing and transport over HTTP      const publicKeyPem = `-----BEGIN PUBLIC KEY-----\n${tpmKey.match(/.{1,64}/g).join('\n')}\n-----END PUBLIC KEY-----`;
      const rsaKeyObj = new NodeRSA(tpmKey, 'pkcs8-public-pem', { encryptionScheme: 'pkcs1' });// 2. Load the RSA public key
    
      const encryptedSecretB64 = rsaKeyObj.encrypt(secret).toString('base64');// 3. Encrypt the secret with the RSA public key and convert to B64
      const nonceCB = crypto.randomBytes(32).toString('base64');
      const fake    = crypto.randomBytes(32).toString('base64');
      const trick   = crypto.randomBytes(32).toString('base64');
    
      const tempUserData = { username, email, hashedPW, device_fingerprint, subscriptionPlan, createdAt: Date.now(), deviceId,  nonceBase64, 
                              tpm_key: tpmKey, secretNonce: secretHex, credentialBlobNonce: nonceCB }; // keep the expected nonce (base64) for later verification 
      await redisClient.setEx(`tempUser:${deviceId}`, 72, JSON.stringify(tempUserData));
      
      return res.json({ 
        nonce: nonceBase64, 
        secret: encryptedSecretB64,
        credentialBlob: nonceCB,  // this will go into MakeCredential and output the secret. That secret will then go into ActivateCredential and ouput acSecret which is nonceCB
        credentialBlobBase64: fake,
        encryptedSecretBase64: trick,
        control: control
      });
    }
    catch (err) {
      console.error('Error encrypting secret:', err);
      return res.status(500).json({ error: '😲An unexpected internal server error occurred.<br>Please try again later.' });
    } 
  }
);



function getAttrOfKey(buffer) {
  const objectAttributes = buffer.readUInt32BE(6);  // TPM2B_PUBLIC starts with 2-byte length, type(2 bytes) + nameAlg(2 bytes)  ->  objectAttributes(4 bytes) is at offset 6
  return {
    fixedTPM:            !!(objectAttributes & 0x00000002),  stClear:             !!(objectAttributes & 0x00000004),
    fixedParent:         !!(objectAttributes & 0x00000010),  sensitiveDataOrigin: !!(objectAttributes & 0x00000020),
    userWithAuth:        !!(objectAttributes & 0x00000040),  adminWithPolicy:     !!(objectAttributes & 0x00000080),
    restricted:          !!(objectAttributes & 0x00010000),  decrypt:             !!(objectAttributes & 0x00020000),
    sign:                !!(objectAttributes & 0x00040000),
  };
}
function parseAttest(certifyInfoBytes) {
  let offset = 0;

  const magic = certifyInfoBytes.slice(offset, offset + 4); // 4 bytes
  offset += 4;

  const type = certifyInfoBytes.readUInt16BE(offset); // 2 bytes
  offset += 2;

  const qualifiedSigner = readTPM2B(certifyInfoBytes, offset);
  offset = qualifiedSigner.nextOffset;

  const extraDataTPM2B = readTPM2B(certifyInfoBytes, offset); // nonce / qualifying data
  const extraData = extraDataTPM2B.value;
  offset = extraDataTPM2B.nextOffset;

  const clockInfo = certifyInfoBytes.slice(offset, offset + 17); // 17 bytes
  offset += 17;

  const firmwareVersion = certifyInfoBytes.slice(offset, offset + 8); // 8 bytes
  offset += 8;

  // === Attested.creation ===
  const objectName = readTPM2B(certifyInfoBytes, offset);
  offset = objectName.nextOffset;

  const creationHash = readTPM2B(certifyInfoBytes, offset);
  offset = creationHash.nextOffset;

  // Return all essential info, no flags/TPMA_OBJECT
  return {
    magic,
    type,
    qualifiedSigner: qualifiedSigner.value,
    extraData,
    clockInfo,
    firmwareVersion,
    objectName: objectName.value,
    creationHash: creationHash.value,
  };

}
function readTPM2B(buffer, offset) { // Helper to read a TPM2B structure
  const size = buffer.readUInt16BE(offset);
  const value = buffer.slice(offset + 2, offset + 2 + size);
  return { value, nextOffset: offset + 2 + size };
}


function computeTpmNameFromPub(base64Public) {
  const pubBytes = Buffer.from(base64Public, "base64");
  // TPM2B_PUBLIC layout:
  // [0..1]   size of public area
  // [2..3]   type (TPM_ALG_RSA = 0x0001)
  // [4..5]   nameAlg (e.g. 0x000B = SHA256)
  const sizeField = pubBytes.readUInt16BE(0);
  const typeField = pubBytes.readUInt16BE(2);
  const nameAlgField = pubBytes.readUInt16BE(4);

  const algMap = {
    0x0004: "sha1",
    0x000b: "sha256",
    0x000c: "sha384",
    0x000d: "sha512",
  };
  const hashAlg = algMap[nameAlgField];
  if (!hashAlg) throw new Error(`Unsupported hash algorithm: 0x${nameAlgField.toString(16)}`);

  // Compute TPM Name = nameAlg (2 bytes) || hash(publicArea)
  const publicArea = pubBytes.slice(2); // Skip size field only

  const hash = crypto.createHash(hashAlg).update(publicArea).digest();
  const nameAlgBuf = Buffer.alloc(2);
  nameAlgBuf.writeUInt16BE(nameAlgField);

  const name = Buffer.concat([nameAlgBuf, hash]);
  return name;
}
function computeTpmNameFromPub2(pubBytesOrBase64) {
  const pubBytes = Buffer.isBuffer(pubBytesOrBase64)
    ? pubBytesOrBase64
    : Buffer.from(pubBytesOrBase64, "base64");

  // TSS.Net gives TPMT_PUBLIC (no size prefix)
  const tpmPublicBytes = pubBytes;

  const type = tpmPublicBytes.readUInt16BE(0);
  const nameAlg = tpmPublicBytes.readUInt16BE(2);

  const algMap = {
    0x0004: "sha1",
    0x000b: "sha256",
    0x000c: "sha384",
    0x000d: "sha512",
  };

  const hashAlg = algMap[nameAlg];
  if (!hashAlg) {
    throw new Error(`Unsupported nameAlg 0x${nameAlg.toString(16)}`);
  }

  const hash = crypto.createHash(hashAlg).update(tpmPublicBytes).digest();

  const nameAlgBuf = Buffer.alloc(2);
  nameAlgBuf.writeUInt16BE(nameAlg);

  return Buffer.concat([nameAlgBuf, hash]);
}



// Constants from TPM spec
const TPM_ST_CREATION = 0x8021; // tag value for creation tickets
const Endorsement_HIERARCHY = 0x4000000b; // TpmRh.Endorsement
const Owner_HIERARCHY_OLD   = 0x40000001; // TpmRh.Owner (old value)
const Owner_HIERARCHY_NEW   = 0x81000001; // TpmRh.Owner (new value)
// Helper: parse TPMT_TK_CREATION structure (simplified)
function verifyCreationTicket(creationTicketB64) {
    function parseCreationTicket(buffer) {
      // TPMT_TK_CREATION structure (simplified):
      // UINT16 tag (2 bytes) | TPMI_RH_HIERARCHY hierarchy (4 bytes) | TPM2B_DIGEST digest (length-prefixed)
      const tag = buffer.readUInt16BE(0);
      const hierarchy = buffer.readUInt32BE(2);
      const digestLength = buffer.readUInt16BE(6);
      const digest = buffer.slice(8, 8 + digestLength);
      return { tag, hierarchy, digest };
    }

    const creationTicketBytes = Buffer.from(creationTicketB64, 'base64');// Decode everything from Base64
    const ticket = parseCreationTicket(creationTicketBytes);// Parse the ticket (TPM ticket structure)

    // Verify ticket type and hierarchy
    if (ticket.tag !== TPM_ST_CREATION) { //this is indeed a creation ticket
        throw new Error(`Invalid creation ticket tag: expected 0x${TPM_ST_CREATION.toString(16)}, got 0x${ticket.tag.toString(16)}`);
    }
    /*Changed from Endorsement(persistent key) to Owner(non-persistent key)  if (ticket.hierarchy !== Endorsement_HIERARCHY) { //it was created under the Endorsement Hierarchy, meaning the TPM itself created it
        throw new Error(`Unexpected hierarchy in creation ticket: expected 0x${Endorsement_HIERARCHY.toString(16)}, got 0x${ticket.hierarchy.toString(16)}`);
    }*/
    if (ticket.hierarchy !== Owner_HIERARCHY_OLD && ticket.hierarchy !== Owner_HIERARCHY_NEW) {
        throw new Error(`Unexpected hierarchy in creation ticket: expected 0x${Owner_HIERARCHY_OLD.toString(16)} or 0x${Owner_HIERARCHY_NEW.toString(16)}, got 0x${ticket.hierarchy.toString(16)}`);
    }
    return true; // usually a Buffer
}
function parseAttestQ(attestBytes) {
  let offset = 0;

  // --- Common header ---
  const magic = attestBytes.slice(offset, offset + 4);
  offset += 4;

  const type = attestBytes.readUInt16BE(offset);
  offset += 2;

  const qualifiedSigner = readTPM2B(attestBytes, offset);
  offset = qualifiedSigner.nextOffset;

  const extraDataTPM2B = readTPM2B(attestBytes, offset); // nonce or qualifying data
  const extraData = extraDataTPM2B.value;
  offset = extraDataTPM2B.nextOffset;

  const clockInfo = attestBytes.slice(offset, offset + 17);
  offset += 17;

  const firmwareVersion = attestBytes.slice(offset, offset + 8);
  offset += 8;

  // --- Attested.quote section (for TPM2_Quote) ---
  const pcrSelectCount = attestBytes.readUInt32BE(offset);
  offset += 4;

  const pcrSelections = [];
  for (let i = 0; i < pcrSelectCount; i++) {
    const hashAlg = attestBytes.readUInt16BE(offset);  // reads 2 bytes(4hex digits) from a buffer
    offset += 2;

    const sizeOfSelect = attestBytes.readUInt8(offset);
    offset += 1;

    const pcrSelect = attestBytes.slice(offset, offset + sizeOfSelect);
    offset += sizeOfSelect;

    pcrSelections.push({ hashAlg, pcrSelect }); // short for: { hashAlg: hashAlg, pcrSelect: pcrSelect } -> creates an object with two properties
  }

  const pcrDigest = readTPM2B(attestBytes, offset);
  offset = pcrDigest.nextOffset;

  return {
    magic,
    type,
    qualifiedSigner: qualifiedSigner.value,
    extraData,
    clockInfo,
    firmwareVersion,
    pcrSelections,
    pcrDigest: pcrDigest.value,
  };
}


/*
 * TPM KDFa (SP800-108, HMAC)
 */
function kdfa(key, label, contextU, contextV, bytes) {
  let counter = 1;
  let result = Buffer.alloc(0);

  while (result.length < bytes) {
    const hmac = crypto.createHmac("sha256", key);

    hmac.update(Buffer.from([
      (counter >>> 24) & 0xff,
      (counter >>> 16) & 0xff,
      (counter >>> 8) & 0xff,
      counter & 0xff
    ]));

    hmac.update(Buffer.from(label, "ascii"));
    hmac.update(Buffer.from([0x00]));
    hmac.update(contextU);
    hmac.update(contextV);

    hmac.update(Buffer.from([
      (bytes * 8) >>> 24,
      (bytes * 8) >>> 16,
      (bytes * 8) >>> 8,
      (bytes * 8)
    ]));

    result = Buffer.concat([result, hmac.digest()]);
    counter++;
  }

  return result.slice(0, bytes);
}
function parseAttestCertify(attestBytes) {
  let offset = 0;

  // --- TPMS_ATTEST header ---
  const magic = attestBytes.slice(offset, offset + 4);
  offset += 4;

  const type = attestBytes.readUInt16BE(offset);
  offset += 2;

  // Sanity check: TPM_ST_ATTEST_CERTIFY = 0x8017
  if (type !== 0x8017) {
    throw new Error("Not a TPM2_Certify attestation");
  }

  const qualifiedSignerTPM2B = readTPM2B(attestBytes, offset);
  const qualifiedSigner = qualifiedSignerTPM2B.value;
  offset = qualifiedSignerTPM2B.nextOffset;

  const extraDataTPM2B = readTPM2B(attestBytes, offset);
  const extraData = extraDataTPM2B.value; // nonce
  offset = extraDataTPM2B.nextOffset;

  const clockInfo = attestBytes.slice(offset, offset + 17);
  offset += 17;

  const firmwareVersion = attestBytes.slice(offset, offset + 8);
  offset += 8;

  // --- TPMS_CERTIFY_INFO ---
  const objectNameTPM2B = readTPM2B(attestBytes, offset);
  const objectName = objectNameTPM2B.value;
  offset = objectNameTPM2B.nextOffset;

  const qualifiedNameTPM2B = readTPM2B(attestBytes, offset);
  const qualifiedName = qualifiedNameTPM2B.value;
  offset = qualifiedNameTPM2B.nextOffset;

  // Optional sanity check
  if (offset !== attestBytes.length) {
    throw new Error("Extra bytes at end of Certify attestation");
  }

  return {
    magic,               // must be FF 54 43 47
    type,                // 0x8017
    qualifiedSigner,     // AK qualified name
    extraData,           // nonce
    clockInfo,
    firmwareVersion,
    objectName,          // Name of certified object
    qualifiedName        // Qualified Name of certified object
  };
}
              
noels.post('/loginEnd', [ //verify quote, decrypted encryption of nonce with the tpmKey, then send cookie.
  whitelist([  // calls this function when server starts and middleware is loaded. Middleware is triggered when endpoint is activated
      'certifyHMACB64', 'certifyHMACSigB64', 'appHashB64', 'pcrHashB64', 'windowsEkPublicPEM', 'srkNameB64', 'publicKeyB64', 'decryptedText', 'HLAKPublicB64', 'attestQbase64', 'sigQbase64', 'rsaSignatureB64', 'hmacB64', 'hlakSigB64'
    ]),
  body('certifyHMACB64')  //next() is implicitly inside body
    .notEmpty().withMessage('certifyHMACB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid certifyHMACB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (!buf.length) throw new Error('certifyHMACB64 invalid Base64');
      if (buf.length < 64 || buf.length > 300) throw new Error('certifyHMACB64 size invalid');
      return true;  //nothing is added to the validationResult(req) array
    }),
  body('certifyHMACSigB64')
    .notEmpty().withMessage('certifyHMACSigB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid certifyHMACSigB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 256) throw new Error('certifyHMACSigB64 must be 256 bytes');
      return true;
    }),
  body('appHashB64')
    .notEmpty().withMessage('appHashB64 is required').bail()
    .custom(value => {
      const buf = Buffer.from(value, 'base64'); //converts it into a byte buffer
      if (buf.length !== 32) throw new Error('pcrHashB64 must be 32 bytes'); //buf.length is the number of actual bytes
      return true;
    }),
  body('pcrHashB64')
    .notEmpty().withMessage('pcrHashB64 is required').bail()
    .custom(value => {
      const buf = Buffer.from(value, 'base64'); //converts it into a byte buffer
      if (buf.length !== 32) throw new Error('pcrHashB64 must be 32 bytes'); //buf.length is the number of actual bytes
      return true;
    }),
  body('publicKeyB64')
    .notEmpty().withMessage('publicKeyB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid publicKeyB64 format')
    .custom(key => {
      if (!isValidTpmKey(key)) { //256 -> 162       from persistent to transient key
        throw new Error('Invalid publicKeyB64 size');        
      }
      return true;
    }),
  body('decryptedText')
    .notEmpty().withMessage('decryptedText is required').bail()
    .matches(hexRegex).withMessage('decryptedText must be hex')
    .custom(value => { //A single byte is represented by 2 hex characters. So 32 bytes × 2 hex chars per byte = 64 characters
      if (value.length !== 64) throw new Error('decryptedText must be exactly 32 bytes (64 hex chars)');
      return true;  //value.length here counts characters in the string, not bytes
    }),
  body('HLAKPublicB64')
    .notEmpty().withMessage('HLAKPublicB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid HLAKPublicB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length < 300 || buf.length > 400) throw new Error('HLAKPublic size invalid');
      return true;
    }),
  body('windowsEkPublicPEM')
    .notEmpty().withMessage('windowsEkPublicPEM is required').bail()
    .matches(base64Regex).withMessage('Invalid windowsEkPublicPEM format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length < 256 || buf.length > 400) throw new Error('windowsEkPublicPEM size invalid');
      return true;
    }),
  body('srkNameB64')
    .notEmpty().withMessage('srkNameB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid srkNameB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 34) throw new Error('srkNameB64 size invalid');
      return true;
    }),
  body('attestQbase64')
    .notEmpty().withMessage('attestQbase64 is required').bail()
    .matches(base64Regex).withMessage('Invalid attestQbase64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (!buf.length) throw new Error('attestQbase64 invalid Base64');
      if (buf.length < 110 || buf.length > 150) throw new Error('attestQbase64 size invalid');
      return true;
    }),
  body('sigQbase64')
    .notEmpty().withMessage('sigQbase64 is required').bail()
    .matches(base64Regex).withMessage('Invalid sigQbase64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 256) throw new Error('sigQbase64 must be 256 bytes');
      return true;
    }),
  body('hmacB64')
    .notEmpty().withMessage('Data type 9 is required').bail() //hmacB64 is required
    .matches(base64Regex).withMessage('Invalid data type 9') //Invalid hmacB64 format
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 34) throw new Error('Corrupt data type 9'); //hmacB64 must be 34 bytes. Base64 string length 48 decodes to 34 bytes
      return true;
    }),
  body('rsaSignatureB64')
    .notEmpty().withMessage('rsaSignatureB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid rsaSignatureB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 128) throw new Error('Invalid rsaSignatureB64 size: ' + buf.length);  // !== 256 -> !== 128      from persistent to transient key
      return true;  //nothing is added to the validationResult(req) array
    }),   
  body('hlakSigB64')
    .notEmpty().withMessage('hlakSigB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid hlakSigB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 256) throw new Error('Invalid hlakSigB64 size: ' + buf.length);  
      return true;  //nothing is added to the validationResult(req) array
    }), 
],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){ 
      const errorList = errors.array();
      console.log("Validation errors:", JSON.stringify(errorList, null, 2));
      return res.status(400).json({ errors: errors.array() }); 
    }

    try { //express.json() middleware, automatically parses that JSON text into a JavaScript object.
      const                 { certifyHMACB64, certifyHMACSigB64, appHashB64, pcrHashB64, publicKeyB64, decryptedText, HLAKPublicB64, windowsEkPublicPEM, srkNameB64, attestQbase64, sigQbase64, hmacB64, hlakSigB64, rsaSignatureB64 } = req.body;
      const packageFields = { certifyHMACB64, certifyHMACSigB64, appHashB64, pcrHashB64, publicKeyB64, decryptedText, HLAKPublicB64, windowsEkPublicPEM, srkNameB64, attestQbase64, sigQbase64, hmacB64, hlakSigB64 };



      // --- 0) Run signature verifications on the whole package ---
      const jsonBytes = Buffer.from(JSON.stringify(packageFields), 'utf8');//turn the object to a string, then it can be converted into bytes// JavaScript object (packageFields) → JSON string (JSON.stringify(packageFields)) → UTF-8 bytes (Buffer.from(..., 'utf8')).
      
      const verifiedPackage = verifySignature(jsonBytes, rsaSignatureB64, publicKeyB64, 'Package');
      if (!verifiedPackage)
        return res.status(400).json({ error: "Package verification failed" });   

      
      // --- 7) verify tempUserData.secretNonce equals decryptedText for preventing replay---
      // hashes the binary form of publicKeyB64, converts that hash to a hex string, slices that string to the first 32 characters  // 2 hex char = 1 byte. so 32 hex char = 16 bytes
      const tempDeviceId = crypto.createHash('sha256').update(Buffer.from(publicKeyB64, 'base64')).digest('hex');   //.digest() is bytes but .digest('hex') is hex in string format. 
      const tempUserJson = await redisClient.get(`tempUser:${tempDeviceId}`);
      if (!tempUserJson)  { return res.status(400).json({ error: "Login process for this device has timed out.<br>Please try again." }); }  //  tempUserJson is deleted after 72 seconds
      const tempUserData = JSON.parse(tempUserJson);
      const { secretNonce, createdAt, email } = tempUserData;// Extract what you need    
      // { email, device_fingerprint, createdAt, tempDeviceId, nonceBase64, tpm_key, secretNonce };


      const MAX_AGE_MS = 24 * 1000;// Example: verify nonce within 1 minutes (60,000 ms)
      const now = new Date();
      if (now - createdAt > MAX_AGE_MS) { throw new Error('Time period expired, please try again.'); }  //nonce expired

      const decryptedTextBytes = Buffer.from(decryptedText, 'hex');  //convert hex string to bytes
      if (!decryptedTextBytes.equals(Buffer.from(secretNonce, 'hex')))       { return res.status(403).json({ error: 'Device integrity check failed' }); }
      

      // --- 8) Quote verification ---    

      const windowsEKbytes = Buffer.from(windowsEkPublicPEM, 'base64'); // decode back to bytes. use HLAKPublicB64 IF windowsEK is not used at all
      const windowsEK      = crypto.createHash('sha256').update(windowsEKbytes).digest('base64');
      const hlaKBytes      = Buffer.from(HLAKPublicB64, 'base64'); // decode back to bytes
      const hlakTPMkey     = crypto.createHash('sha256').update(hlaKBytes).digest('base64');
      const device_ID      = (control === "code") ? hlakTPMkey : windowsEK;  // if control is "code" EK is OFF, it is ignored 
      const sql = `SELECT signing_key, username, email, k_device FROM users WHERE email = ? AND device_id = ? AND public_key = ? LIMIT 1`;   // LIMIT 1 -  return at most 1 row
      const rows = await query(sql, [email, device_ID, hlakTPMkey]);
      if (rows.length === 0) {  throw new Error("Device is unregistered");  } //Error during registration:Device is unregistered
      const userInDB = rows[0];
      const hlakPubBase64 = userInDB.signing_key; // uploaded to DB during registration
      const userEmail = userInDB.email;
      const k_device = userInDB.k_device;
      
      const subscription = userInDB.subscription;


      if (!verifySignature(attestQbase64, sigQbase64, hlakPubBase64, 'attestQbase64'))
        return res.status(400).json({ error: "Quote signature verification failed" });

      const parsedQuote = parseAttestQ(Buffer.from(attestQbase64, 'base64'));
      const firstNonce =   Buffer.from(tempUserData.nonceBase64,    'base64');  // nonce: nonceBase64 from verifyUser

      

      if (!parsedQuote.extraData.equals(firstNonce))
        return res.status(400).json({ error: "NonceQ mismatch" });

      // console.log("PCR Selections:", JSON.stringify(parsedQuote.pcrSelections, null, 2));
      /*Top-level: Array of length 1
        Array[0]: Object with 2 properties (hashAlg and pcrSelect)
          pcrSelect: Object with 2 properties (type and data)
            data: Array of 3 numbers [0-7, 8-15, 16-23]
      */ // parsedQuote.pcrSelections[0].pcrSelect is a Buffer object (from Buffer.from() in Node.js). it has a type and data property when you stringify it {"type": "Buffer", "data": [135, 0, 0]}. In memory, there is no .type or .data property.  
      
      const expectedPCR0to7 = 0xBF; // bits for PCRs 0–7
      const expectedPCR8to15 = 0x08; // bit for PCR 11
      const pcrSelection = parsedQuote.pcrSelections[0].pcrSelect; // Buffer object
      if (pcrSelection.length < 2) {
          console.log("PCR selection buffer too short");
          return res.status(400).json({ error: "PCR selection buffer too short" });
      }
      if (pcrSelection[0] !== expectedPCR0to7 || pcrSelection[1] !== expectedPCR8to15) {
          return res.status(400).json({ error: "Quote PCRs don't match expected mask" });
      }

      //const pcr0to7 = parsedQuote.pcrSelections[0].pcrSelect[0]; //pcrSelect[0] is the first byte of the buffer, which is 135 //You are not accessing a data array; you are directly indexing into the buffer itself
      //if (pcr0to7 !== 0x87) { // I know selected PCRs are in the 8th byte(index 7). PCRs 0,1,2,7 in bits are  1 0 0 0  0 1 1 1 = 135 or 87 hex
      //  return res.status(400).json({ error: "Quote PCRs don't match" });
      //}  
      const pcrHashBuf = Buffer.from(pcrHashB64,      'base64');
      if (!pcrHashBuf.equals(parsedQuote.pcrDigest))  //     pcrDigest: pcrDigest.value,
        return res.status(400).json({ error: "Device verification failed" }); //pcrDigest mismatch

      console.log("Quote done!");
      if (!verifySignature(certifyHMACB64, certifyHMACSigB64, hlakPubBase64, 'certifyHMACB64'))
        return res.status(400).json({ error: "Certify signature verification failed" });

      // --- Magic verification ---    
      const attestCertifyHMACB64 = parseAttestCertify(Buffer.from(certifyHMACB64, 'base64')); //converts Base64-encoded string into raw bytes 
      const TPM_GENERATED_VALUE = Buffer.from([0xFF, 0x54, 0x43, 0x47]);
      if (!attestCertifyHMACB64.magic.equals(TPM_GENERATED_VALUE)) {
        return res.status(400).json({ error: "Invalid TPM certify attestation (magic mismatch)" });
      }
      // --- Type verification ---    
      if (attestCertifyHMACB64.type !== 32791) { //0x8017 (decimal 32791) is permanently defined as the type for TPM_ST_ATTEST_CERTIFY - Certify command was performed.
         return res.status(400).json({ error: "Invalid certify attestation type" });
      }

      // --- Nonce verification ---  
      if (attestCertifyHMACB64.extraData.length !== firstNonce.length ||
          !crypto.timingSafeEqual(attestCertifyHMACB64.extraData, firstNonce)){
        return res.status(500).json({ error: 'Corrupt Certify Data ❌' });
      }
      // --- Name verification ---
      const hmacKeyName = Buffer.from(hmacB64, 'base64'); 
      if ( hmacKeyName.length !== attestCertifyHMACB64.objectName.length || !crypto.timingSafeEqual(hmacKeyName, attestCertifyHMACB64.objectName)) {
        return res.status(400).json({ error: "Security Device mismatch" }); // the name of hmacB64 from certifyHMACB64 does not match the name of hmacB64
      }


      console.log("Certify done!");


      const sessionBytes = Buffer.from(tempUserData.sessionBinding, 'base64');  // nonce: sessionBinding from verifyUser
      const message = Buffer.concat([firstNonce, sessionBytes]);                   
      if (!verifySignature(message, hlakSigB64, hlakPubBase64, 'hlakSigB64'))
        return res.status(400).json({ error: "AK Signature verification failed" });


      const appHashBuf = Buffer.from(appHashB64, 'base64');
      console.log("appHashBuf      :", appHashBuf);
      console.log("envAppHashBytes :", envAppHashBytes)
      if (appHashBuf.length !== envAppHashBytes.length || !crypto.timingSafeEqual(appHashBuf, envAppHashBytes)) {
        console.log("appHash does NOT match ❌");
        //return res.status(400).json({ error: 'appHash does NOT match ❌' });
      }
      //const { username, email, hashedPW, device_fingerprint, subscriptionPlan } = tempUserData
      await redisClient.del(`tempUser:${tempDeviceId}`);// Delete the key to clean up
      


    /*are you sure it's safe to only verify the fingerprint at log in?
    ChatGPT said:

    Yes—if you do it carefully. The key points:
    Server-issued nonce: Every login attempt should include a fresh server-generated nonce that the device signs 
    (or includes in the quote). This prevents replay attacks. Device fingerprint: Only allow mid-level access if the fingerprint
    matches exactly what’s stored. Fingerprints alone aren’t foolproof, but they are usually enough for low-to-mid risk.High-level
    check on mismatch: If the fingerprint fails, always require the HLAK / signed quote before granting access. This ensures that 
    an attacker who stole the credentials cannot bypass the high-level attestation.
    Token issuance: Issue your JWTs only after the security check passes. Don’t trust the token if the fingerprint check fails and
    HLAK verification hasn’t been done. So yes, it’s safe to skip HLAK verification when fingerprint matches, as long as the 
    fingerprint is unique and stored securely. The risk comes only if the fingerprint can be spoofed.
    
    You said:
    I think signing a quote should always happen at login. after that with tokens issued, fingerprinting can be done and checked
    ChatGPT said:
    Yes—that’s actually a very solid approach for high security. Here’s the reasoning and flow:
    Login:
    Always perform HLAK attestation / signed quote verification. This proves the device possesses the high-level key and that it’s 
    legitimate. Only after this verification do you issue your access, refresh, and cert tokens.
    Subsequent API requests:
    The user sends their tokens with each request.
    Optionally, you can check device fingerprint as a lightweight mid-level check, e.g., to detect if the request comes from a 
    new device. If the fingerprint fails, you could either block the request or trigger another HLAK attestation if needed.
    ✅ Advantages:
    No risk of stolen credentials alone being sufficient, because login requires the signed quote.
    Fingerprint checking after login is lightweight and doesn’t block normal token-based requests.
    You can refresh/update fingerprints safely after successful login verification.
    Basically: HLAK at login, tokens afterward, fingerprint as ongoing monitoring.*/
    //const loginTime = new Date().toISOString().slice(0, 19).replace('T', ' '); 
    const loginTime = new Date().toLocaleString('sv-SE', { hour12: false });
    await query(
      'UPDATE users SET last_login = ? WHERE email = ?',
      [loginTime, email]
    );
    
    // Issue cookies + JWT
    const jti = crypto.randomUUID();
    console.log("JTI:    ", jti);
    const accessSealed = jwt.sign(//generates a jwt, header is automatically created by the jsonwebtoken library, pass in a number, it is interpreted as seconds by default
      {  //payload
        userEmail, 
        role: userInDB.subscription,
        loginTime,
        device_ID, // hased hlakTPMkey OR windowsEK
        jti
      }, 
      ACCESS_TOKEN_SECRET,
      { expiresIn: 900 }
    );


    //Issues JWT (HS256)
    res.cookie('accessToken', accessSealed, {
      httpOnly: true,// ✅ Send token as an HTTP-only cookie (for web users)  // Since it’s marked httpOnly, JavaScript on the page cannot read or modify it, which helps prevent XSS attacks.
      secure: true,  //allows cookies to be sent over HTTP // set to true in production, never allow any sensitive cookies (access or refresh) to be transmitted over HTTP, ever  // secure: true - sent only over TLS (Each side mixes its own secret with the other side’s public value, and because the math is commutative, both mixtures collapse to the same secret.)
      sameSite: 'Strict',  //The cookies you read and inject into WebView2 are only secure if the server sets them with Secure; SameSite=Strict and you’re on HTTPS. Otherwise, a local attacker could read them.
      maxAge: 15 * 60 * 1000
    });
    //sameSite: 'Strict' may block cookies if your app is making cross-origin requests (your app runs on file:// or a different domain than your cloud server). 
    //You might need sameSite: 'None' and secure: true for cross-origin cookies. 
    //For fetch or axios requests: you need credentials: 'include' to send cookies automatically.
    



      /* Use HttpOnly → prevents JavaScript access (protects from XSS).

      Use Secure → only sent over HTTPS.

      Add SameSite → helps prevent CSRF. * /
    res.cookie('certToken', certSealed, {  
      httpOnly: true,
      secure: false,  // also set to true in production, never allow any sensitive cookies (access or refresh) to be transmitted over HTTP, ever
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
    }); 
    //res.json({ ok: true });
    res.sendStatus(200);// sends status 200 ("OK") and finishes the response //If the only thing your front‑end checks is response.ok, then all you need to do is return any status in the 200–299 range—no body required

        });
      }
    );*/

    /* if (results.email !== email || results.password != password) {// If no user found, return a 401 (Unauthorized) response
      return res.status(401).json({ message: '⚠️Unauthorized Entry'});
    }    */


      // --- 4️⃣ Send both results back ---
      return res.json({
        successMsg:    `⭐ Logged in successfully ⭐<br>Welcome back ${userInDB.username}!`,
      });
    } 
    catch (err) {
      console.error('Error in /loginEnd:', err);
      //res.status(500).send(err.message);
      return res.status(500).json({ success: false, error: 'Error during user verification: <br>' + err.message });
    }
}); 
// --- Helper function for verification ---
const verifySignature = (dataB64orBytes, signatureB64, generalPublicKeyB64, label) => {
  const signerAKpem = `-----BEGIN PUBLIC KEY-----\n${generalPublicKeyB64.match(/.{1,64}/g).join('\n')}\n-----END PUBLIC KEY-----`;
  const infoBytes = Buffer.isBuffer(dataB64orBytes) ? dataB64orBytes : Buffer.from(dataB64orBytes, 'base64');        
  const sigBytes = Buffer.from(signatureB64, 'base64');
  const isValid = crypto.verify('sha256', //crypto.verify parameters: (algorithm, data, key, signature)//crypto. - Node.js built-in function that verifies digital signatures
                        /*data*/ infoBytes,  // infoBytes gets hashed
                        /*key*/  { key: signerAKpem,   //  From client, private key signs data that got hashed. Server hashes that same data; next, the public key decrypts the signature and the result should match the hashed data
                                  padding: crypto.constants.RSA_PKCS1_PADDING },
                  /*signature*/ sigBytes  //Node.js will use the public key to decrypt the signature(sigBytes), then compare it to the hash of infoBytes
  ); console.log(`${label} signature VALID?`, isValid);
  return isValid;
};

noels.post('/regisEnd', [   // verify AK certifyCreation, quote, etc. If successful, store user info in the DB.
  whitelist([  // calls this function when server starts and middleware is loaded. Middleware is triggered when endpoint is activated
      'certifyInfo', 'certifySig', 'certifyInfoEnd', 'certifySigEnd', 'akPubBase64', 'HLAKPublicB64', 'creationDataB64', 'creationHashB64', 'pcrHashB64',  'creationTicketB64', 
      'ekPublicPem', 'windowsEkPublicPEM', 'publicKeyB64', 'decryptedText', 'hlakPubBase64', 'attestQbase64', 'sigQbase64', 'acSecret', 'rsaSignatureB64'
    ]),
  body('certifyInfo')  //next() is implicitly inside body
    .notEmpty().withMessage('certifyInfo is required').bail()
    .matches(base64Regex).withMessage('Invalid certifyInfo format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (!buf.length) throw new Error('certifyInfo invalid Base64');
      if (buf.length < 64 || buf.length > 300) throw new Error('certifyInfo size invalid');
      return true;  //nothing is added to the validationResult(req) array
    }),
  body('certifySig')
    .notEmpty().withMessage('certifySig is required').bail()
    .matches(base64Regex).withMessage('Invalid certifySig format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 256) throw new Error('certifySig must be 256 bytes');
      return true;
    }),
  body('certifyInfoEnd')
    .notEmpty().withMessage('certifyInfoEnd is required').bail()
    .matches(base64Regex).withMessage('Invalid certifyInfoEnd format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (!buf.length) throw new Error('certifyInfoEnd invalid Base64');
      if (buf.length < 64 || buf.length > 300) throw new Error('certifyInfoEnd size invalid');
      return true;
    }),
  body('certifySigEnd')
    .notEmpty().withMessage('certifySigEnd is required').bail()
    .matches(base64Regex).withMessage('Invalid certifySigEnd format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 256) throw new Error('certifySigEnd must be 256 bytes');
      return true;  //nothing is added to the validationResult(req) array
    }),
  body('akPubBase64')
    .notEmpty().withMessage('akPubBase64 is required').bail()
    .matches(base64Regex).withMessage('$$$Invalid akPubBase64 format')
    .custom(key => {
      if (!isValidTpmKey(key)) { //actual size: 256
        console.log("Invalid TPM key detected:", key);
        throw new Error('$$$$akPubBase64 size invalid');
      }
      return true; //nothing is added to the validationResult(req) array
    }),
  body('HLAKPublicB64')
    .notEmpty().withMessage('HLAKPublicB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid HLAKPublicB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length < 300 || buf.length > 400) throw new Error('HLAKPublic size invalid');
      return true;
    }),
  body('creationDataB64')
    .notEmpty().withMessage('creationDataB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid creationDataB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (!buf.length) throw new Error('creationDataB64 invalid Base64');
      if (buf.length < 20 || buf.length > 256) throw new Error('creationDataB64 size invalid');
      return true;
    }),
  body('creationHashB64')
    .notEmpty().withMessage('creationHashB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid creationHashB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 32) throw new Error('creationHashB64 must be 32 bytes');
      return true;
    }),  
  body('pcrHashB64')
    .notEmpty().withMessage('pcrHashB64 is required').bail()
    .custom(value => {
      const buf = Buffer.from(value, 'base64'); //converts it into a byte buffer
      if (buf.length !== 32) throw new Error('pcrHashB64 must be 32 bytes'); //buf.length is the number of actual bytes
      return true;
    }),
    body('creationTicketB64')
    .notEmpty().withMessage('creationTicketB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid creationTicketB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 40) throw new Error('creationTicketB64 must be 40 bytes (SHA-256 TPMT_TK_CREATION)');
      return true;
    }),
  body('ekPublicPem')
    .notEmpty().withMessage('ekPublicPem is required').bail()
    .matches(base64Regex).withMessage('Invalid ekPublicPem format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length < 256 || buf.length > 400) throw new Error('ekPublicPem size invalid');
      return true;   //nothing is added to the validationResult(req) array
    }),
  body('windowsEkPublicPEM')
    .notEmpty().withMessage('windowsEkPublicPEM is required').bail()
    .matches(base64Regex).withMessage('Invalid windowsEkPublicPEM format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length < 256 || buf.length > 400) throw new Error('windowsEkPublicPEM size invalid');
      return true;
    }),
  body('publicKeyB64')
    .notEmpty().withMessage('publicKeyB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid publicKeyB64 format')
    .custom(key => {
      if (!isValidTpmKey(key)) { //256 -> 162       from persistent to transient key
        throw new Error('Invalid publicKeyB64 size');        
      }
      return true;
    }),
  body('decryptedText')
    .notEmpty().withMessage('decryptedText is required').bail()
    .matches(hexRegex).withMessage('decryptedText must be hex')
    .custom(value => { //A single byte is represented by 2 hex characters. So 32 bytes × 2 hex chars per byte = 64 characters
      if (value.length !== 64) throw new Error('decryptedText must be exactly 32 bytes (64 hex chars)');
      return true;  //value.length here counts characters in the string, not bytes
    }),

  body('hlakPubBase64')
    .notEmpty().withMessage('hlakPubBase64 is required').bail()
    .matches(base64Regex).withMessage('Invalid hlakPubBase64 format')
    .custom(key => {
      if (!isValidTpmKey(key)) { //256 -> 162       from persistent to transient key
        throw new Error('hlakPubBase64 size invalid');        
      }
      return true;  //nothing is added to the validationResult(req) array
    }),
  body('attestQbase64')
    .notEmpty().withMessage('attestQbase64 is required').bail()
    .matches(base64Regex).withMessage('Invalid attestQbase64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (!buf.length) throw new Error('attestQbase64 invalid Base64');
      if (buf.length < 110 || buf.length > 150) throw new Error('attestQbase64 size invalid');
      return true;
    }),
  body('sigQbase64')
    .notEmpty().withMessage('sigQbase64 is required').bail()
    .matches(base64Regex).withMessage('Invalid sigQbase64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 256) throw new Error('sigQbase64 must be 256 bytes');
      return true;
    }),
  body('acSecret')
    .notEmpty().withMessage('acSecret is required').bail()
    .matches(base64Regex).withMessage('Invalid acSecret format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 32) throw new Error('acSecret must be 32 bytes');
      return true;  
    }),
  body('rsaSignatureB64')
    .notEmpty().withMessage('rsaSignatureB64 is required').bail()
    .matches(base64Regex).withMessage('Invalid rsaSignatureB64 format')
    .custom(value => {
      const buf = Buffer.from(value, 'base64');
      if (buf.length !== 128) throw new Error('Invalid rsaSignatureB64 size: ' + buf.length);  // !== 256 -> !== 128      from persistent to transient key
      return true;  //nothing is added to the validationResult(req) array
    }),  
],

  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()){ 
      const errorList = errors.array();
  console.log("Validation errors:", JSON.stringify(errorList, null, 2));

      return res.status(400).json({ errors: errors.array() }); }

    try { //express.json() middleware, automatically parses that JSON text into a JavaScript object.
      const { certifyInfo,   certifySig,         certifyInfoEnd, certifySigEnd, akPubBase64,   HLAKPublicB64, creationDataB64, creationHashB64, pcrHashB64,  creationTicketB64, 
              ekPublicPem,   windowsEkPublicPEM, publicKeyB64,   decryptedText, hlakPubBase64, attestQbase64, sigQbase64, acSecret, rsaSignatureB64 } = req.body;

      const packageFields = { certifyInfo, certifySig, certifyInfoEnd, certifySigEnd, akPubBase64, HLAKPublicB64, creationDataB64, creationHashB64, pcrHashB64, creationTicketB64, 
                              ekPublicPem, windowsEkPublicPEM, publicKeyB64, decryptedText, hlakPubBase64, attestQbase64, sigQbase64, acSecret};


      // --- 0) Run signature verifications on the whole package ---
      const jsonBytes = Buffer.from(JSON.stringify(packageFields), 'utf8');//turn the object to a string, then it can be converted into bytes// JavaScript object (packageFields) → JSON string (JSON.stringify(packageFields)) → UTF-8 bytes (Buffer.from(..., 'utf8')).
      const verifiedPackage = verifySignature(jsonBytes, rsaSignatureB64, publicKeyB64, 'Package');
      if (!verifiedPackage)
        return res.status(400).json({ error: "Package verification failed" });   

      // --- 1) Run signature verifications on certifyInfo and certifyInfoEnd ---
      const verifiedCert    = verifySignature(certifyInfo,    certifySig,    akPubBase64, 'certifyInfo');
      const verifiedCertEnd = verifySignature(certifyInfoEnd, certifySigEnd, akPubBase64, 'certifyInfoEnd');
      if (!verifiedCert || !verifiedCertEnd)
        return res.status(400).json({ error: "Certify Creation verification failed" });    

      // --- 2️) Name, Magic, and Type verification ---
      const attestCertifyInfo    = parseAttest(Buffer.from(certifyInfo,    'base64')); //converts Base64-encoded string into raw bytes 
      const attestCertifyInfoEnd = parseAttest(Buffer.from(certifyInfoEnd, 'base64')); //and then sends to parseAttest   
      const name_hiAK = computeTpmNameFromPub(HLAKPublicB64);

      if (attestCertifyInfo.objectName.length    !== name_hiAK.length || !crypto.timingSafeEqual(attestCertifyInfo.objectName, name_hiAK) ||
          attestCertifyInfoEnd.objectName.length !== name_hiAK.length || !crypto.timingSafeEqual(attestCertifyInfoEnd.objectName, name_hiAK)){
        return res.status(400).json({ error: "Security Device mismatch" }); // the name of the HLAK from certifyInfo(End) does not match the name of HLAKPublicB64
      }
      /*console.log(" name_hiAK ✅:", name_hiAK);
      console.log(" attestCertifyInfo.objectName ✅:", attestCertifyInfo.objectName);
      console.log(" attestCertifyInfoEnd.objectName ✅:", attestCertifyInfoEnd.objectName);*/
      const TPM_GENERATED_VALUE = Buffer.from([0xFF, 0x54, 0x43, 0x47]);
      if (!attestCertifyInfo.magic.equals(TPM_GENERATED_VALUE) || !attestCertifyInfoEnd.magic.equals(TPM_GENERATED_VALUE)) {
        return res.status(400).json({ error: "Invalid TPM attestation (magic mismatch)" });
      }
      if (attestCertifyInfo.type !== 32794 || attestCertifyInfoEnd.type !== 32794) { //0x801A (decimal 32794) is permanently defined as the type for TPM_ST_ATTEST_CREATION - CertifyCreation command was performed.
        return res.status(400).json({ error: "Invalid attestation type" });
      }

      // --- 3) Attributes verification ---
      const attributes = getAttrOfKey(Buffer.from(HLAKPublicB64, 'base64'));//HLAKPublicB64: names can be compared to verify this AK and the one in certifyInfo are the same // has data on attributes
      if (!(attributes.fixedTPM && attributes.sensitiveDataOrigin && attributes.userWithAuth && attributes.sign && attributes.fixedParent)) {
          console.error("Security Device is not hardware-backed or has invalid settings");
          return res.status(400).json({ error: "Security Device is not hardware-backed<br> or has invalid settings" });
      }//console.log("AK is hardware-backed and has correct key attributes ✅");


      // --- 4) Creation Hash verification ---
      //proves that the hi level AK the TPM certified is the same object that was originally created (same public key, same template, same PCR, etc.).

      const creationDataBuf = Buffer.from(creationDataB64, 'base64');
      const creationDataHash = crypto.createHash('sha256').update(creationDataBuf).digest();
      const creationHashBuf = Buffer.from(creationHashB64, 'base64');

      function hashEqual(a, b) {
        return a.length === b.length && crypto.timingSafeEqual(a, b);
      }

      if (!hashEqual(creationDataHash, attestCertifyInfo.creationHash)    ||
          !hashEqual(creationDataHash, attestCertifyInfoEnd.creationHash) ||
          !hashEqual(creationDataHash, creationHashBuf)) {
        return res.status(400).json({ error: "Security Device mismatch" });
      }
      /*console.log("creationHashB64 ✅:       ", Buffer.from(creationHashB64, 'base64'));
      console.log("attestEnd.creationHash ✅:", attestCertifyInfoEnd.creationHash);
      console.log("creationHash ✅:          ", creationDataHash);*/


      // --- 5) Selected PCRs (0,1,2,7) and PCR hash verification ---
      const pcrHashBuf      = Buffer.from(pcrHashB64,      'base64');
      const expectedPCR0to7 = 0xBF; // bits for PCRs 0–7 excluding 6    0xBF in binary is 10111111 
      const expectedPCR8to15 = 0x08; // bit for PCR 11
      if (creationDataBuf[7] !== expectedPCR0to7 || creationDataBuf[8] !== expectedPCR8to15) {
          return res.status(400).json({ error: "PCRs don't match" });
      }
      //00 00 00 01 00 0b 03   87   00 00 00 20   b9 4a 22 66 1c a4 c8 30 8d ee 00 98 03 e0 c1 81 70 ca 02 4b 72 c3 3a b3 8d ff c6 76 93 59 57 e3   01001000044000000b00044000000b0000
      // 0  1  2  3  4  5  6    7    8  9 10 11   12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43
      /* const PCRdigestHashLen = creationDataBuf.readUInt32BE(8); // readUInt32BE always reads 4 bytes// readUInt32BE(8) -> read 4 bytes starting at position 8(9th index)// should be 0x20 (32) digest length starts at byte offset 8
      const digestStart = 12; //PCRdigestHashLen = 00 00 00 20 hex = 32 decimal 
      const digestEnd = digestStart + PCRdigestHashLen;
      const allPCRdigestHash = creationDataBuf.slice(digestStart, digestEnd); //(inclusive, exclusive)  ->  (12, 44) means 12 through 43
      if (!pcrHashBuf.equals(allPCRdigestHash)) {
        return res.status(400).json({ error: "Invalid hash PCR digests" });
      }*/

      //if (creationDataBuf[7] !== 0x87) { // I know selected PCRs are in the 8th byte(index 7). PCRs 0,1,2,7 in bits are  1 0 0 0  0 1 1 1 = 135 or 87 hex
      //  return res.status(400).json({ error: "PCRs don't match" });
      //}      
      const attestedPcrHash = creationDataBuf.slice(12, 44);
      if (pcrHashBuf.length !== attestedPcrHash.length || !crypto.timingSafeEqual(pcrHashBuf, attestedPcrHash)) {
        return res.status(400).json({ error: "Invalid PCR digests hash" });
      }
      /* unnecessary to convert '87 hex string' to binary and then see which bits have 1 and then store them in arrays which will be [0,1,2,7]
      const pcrByteBuf = Buffer.from(creationDataB64, 'base64').slice(7, 8); // gets the 8th byte, 7 is the start index (inclusive)→ byte at index 7 (the eighth byte).  8 is the end index (exclusive) → stops before index 8
      console.log(getSelectedPcrs(pcrByteBuf.toString('hex'))); // [0,1,2,7]
      const expectedPCRs = [0, 1, 2, 7];
      const actual = getSelectedPcrs(pcrByteBuf.toString('hex'));
      const arraysEqual = actual.length === expectedPCRs.length && actual.every((v, i) => v === expectedPCRs[i]);
      if (!arraysEqual) {
        return res.status(400).json({ error: "PCRs don't match" });
      }
      function getSelectedPcrs(pcrBitmapHex) { //pcrBitmapHex = '87'
        const everyByte = Buffer.from(pcrBitmapHex, 'hex'); //bitmap is now a 1-byte buffer: <Buffer 87>.  When 'hex' Buffer.from reads 2 characters at a time:  [0x87] → length 1
        const pcrs = [];
        for (let currentByte = 0; currentByte < everyByte.length; currentByte++) { //bitmap.length = 1, so currentByte = 0
          for (let bit = 0; bit < 8; bit++) {
            if ((everyByte[currentByte] >> bit) & 1) {  // >> means push number of bits to the right   //if (!((everyByte[currentByte] >> bit) & 1)) { to check if it's 0
              pcrs.push(currentByte * 8 + bit);
            }
          }
        }
        return pcrs;
      }

      Trying to encrypt a secret 
      const secretTest = crypto.randomBytes(32);   
      const pubKeyPem = Buffer.from(hlakPubBase64, 'base64').toString('utf8');

      const encrypted = crypto.publicEncrypt(
        {
          key: pubKeyPem,
          padding: crypto.constants.RSA_PKCS1_PADDING
        },
        secretTest
      );*/


      // --- 6) Ticket type and Hierarchy verification ---
      try { //confirm that the key is TPM-protected and was not created outside the TPM.
        if (!verifyCreationTicket(creationTicketB64)){ throw new Error("Invalid creation ticket"); }
      }  
      catch (err){ return res.status(400).json({ error: "Creation ticket verification failed:<br> " + err.message }); }


      // --- 7) verify tempUserData.secretNonce equals decryptedText and tempUserData.credentialBlobNonce equals acSecret---
      // hashes the binary form of publicKeyB64, converts that hash to a hex string, slices that string to the first 32 characters  // 2 hex char = 1 byte. so 32 hex char = 16 bytes
      const deviceId = crypto.createHash('sha256').update(Buffer.from(publicKeyB64, 'base64')).digest('hex').slice(0, 32);   //.digest() is bytes but .digest('hex') is hex in string format. 
      const tempUserJson = await redisClient.get(`tempUser:${deviceId}`);
      if (!tempUserJson)  { return res.status(400).json({ error: "Registration for this device has timed out.<br>Please try again." }); }
      const tempUserData = JSON.parse(tempUserJson);
      const { tpm_key, secretNonce, createdAt, credentialBlobNonce } = tempUserData;// Extract what you need    

      console.log("tpm_key     : ", tpm_key);
      console.log("publicKeyB64: ", publicKeyB64);
      

      const MAX_AGE_MS = 45 * 1000;// Example: verify nonce within 1 minutes (60000 ms)
      const now = new Date();
      if (now - createdAt > MAX_AGE_MS) { throw new Error('Time period expired, please try again.'); }  //nonce expired


      const decryptedTextBytes = Buffer.from(decryptedText, 'hex'); //convert hex string to bytes
      const expectedNonce     = Buffer.from(secretNonce, 'hex');

      if (decryptedTextBytes.length !== expectedNonce.length || !crypto.timingSafeEqual(decryptedTextBytes, expectedNonce)) {
        return res.status(403).json({ error: 'Device integrity check failed' });
      }


      const hlaKBytes = Buffer.from(HLAKPublicB64, 'base64'); // decode back to bytes
      const hlakTPMkey    = crypto.createHash('sha256').update(hlaKBytes).digest('base64');

      const windowsEKbytes = Buffer.from(windowsEkPublicPEM, 'base64'); // decode back to bytes
      const windowsEK    = crypto.createHash('sha256').update(windowsEKbytes).digest('base64');
      

      /*
      if (hlakTPMkey !== windowsEK){ // if these keys are equal, then EK is not used as the deviceId which means MakeCredential and ActivateCredential with CredentialBlob couldn't have been used'
        const acSecretBytes = Buffer.from(acSecret, 'base64');  //convert base64 string to bytes

        console.log("credentialBlobNonce: " + Buffer.from(credentialBlobNonce, 'base64'));
        console.log("acSecretBytes:       " + acSecretBytes);

        if (!acSecretBytes.equals(Buffer.from(credentialBlobNonce, 'base64')))  { return res.status(403).json({ error: 'Device integrity check failed2' }); }
      }
      */

      // --- 8) Quote verification ---
      if (!verifySignature(attestQbase64, sigQbase64, hlakPubBase64, 'attestQbase64'))
        return res.status(400).json({ error: "Quote signature verification failed" });

      const parsedQuote = parseAttestQ(Buffer.from(attestQbase64, 'base64'));
      const firstNonce = Buffer.from(tempUserData.nonceBase64, 'base64');  // nonceBase64 from register/initialFilter
      if (parsedQuote.extraData.length !== firstNonce.length || !crypto.timingSafeEqual(parsedQuote.extraData, firstNonce)) {
        return res.status(400).json({ error: "NonceQ mismatch" });
      }


      // console.log("PCR Selections:", JSON.stringify(parsedQuote.pcrSelections, null, 2));
      /*Top-level: Array of length 1
        Array[0]: Object with 2 properties (hashAlg and pcrSelect)
          pcrSelect: Object with 2 properties (type and data)
            data: Array of 3 numbers [0-7, 8-15, 16-23]
      */ // parsedQuote.pcrSelections[0].pcrSelect is a Buffer object (from Buffer.from() in Node.js). it has a type and data property when you stringify it {"type": "Buffer", "data": [135, 0, 0]}. In memory, there is no .type or .data property.  
      
      const pcrSelection = parsedQuote.pcrSelections[0].pcrSelect; // Buffer object
      if (pcrSelection.length < 2) {
          console.log("PCR selection buffer too short");
          return res.status(400).json({ error: "PCR selection buffer too short" });
      }
      if (pcrSelection[0] !== expectedPCR0to7 || pcrSelection[1] !== expectedPCR8to15) {
          return res.status(400).json({ error: "Quote PCRs don't match expected mask" });
      }

      
      //const pcr0to7 = parsedQuote.pcrSelections[0].pcrSelect[0]; //pcrSelect[0] is the first byte of the buffer, which is 135 //You are not accessing a data array; you are directly indexing into the buffer itself
      //if (pcr0to7 !== 0x87) { // I know selected PCRs are in the 8th byte(index 7). PCRs 0,1,2,7 in bits are  1 0 0 0  0 1 1 1 = 135 or 87 hex
      //  return res.status(400).json({ error: "Quote PCRs don't match" });
      //}  

      if (pcrHashBuf.length !== parsedQuote.pcrDigest.length || !crypto.timingSafeEqual(pcrHashBuf, parsedQuote.pcrDigest)) { //     pcrDigest: pcrDigest.value
        return res.status(400).json({ error: "pcrDigest mismatch" });
      }

      // --- 9) Qualifying Data (nonce and RSA hash) / ExtraData verification ---
      /* surgically extracting the data
      console.log("certifyInfo2 bytes:", Array.from(certifyInfoBytes).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join('-'));
                                        //.slice(start, end) in Node.js includes start but excludes end
      const secretNonce2 = certifyInfoBytes.slice(46, 62); // 0-based index   //46 through 61, which is exactly 16 bytes (46-62)
      const halvedRSAhash2 = certifyInfoBytes.slice(62, 78);
      const toHexLowercase = (buffer) => Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join('');
      const formatHex = (buffer) => Array.from(buffer).map(b => b.toString(16).padStart(2, '0').toUpperCase()).join('-');
      console.log("Bytes 46-62:", toHexLowercase(secretNonce2));   
      console.log("Bytes 62-78:", toHexLowercase(halvedRSAhash2)); 
      console.log("certifyInfo1 bytes:", formatHex(certifyInfoBytes));*/
      const CertifyInfoExtraData = attestCertifyInfo.extraData.slice(2);   // skip 2-byte length //A TPM2B structure always has a 2-byte length prefix (UINT16) followed by the actual data.
      const clientNonce = CertifyInfoExtraData.slice(0, 16); // the nonce server stored in redis to identify registering user
      if (clientNonce.length !== firstNonce.length || !crypto.timingSafeEqual(clientNonce, firstNonce)) {
        return res.status(500).json({ error: 'Corrupt Data ❌' });
      }

      const clientHalfRSAhash = CertifyInfoExtraData.slice(16);   // from extraData
      try {
        const expected = Buffer.from(tempUserData.deviceId, 'hex').slice(0, 16); 
        if (clientHalfRSAhash.length !== expected.length || !crypto.timingSafeEqual(clientHalfRSAhash, expected)) {// clientHalfRSAhash originated in RegisterDeviceKey while RSA key is returned to login.js
          console.log("RSA hashes do not match!");
          return res.status(400).json({ error: 'RSA hashes do not match' });
        }
      } 
      catch (err) {
        console.log("Error caught:", err);
        return res.status(500).json({ error: 'Integrity check on Security Device failed' }); // Tampered key detected. clientHalfRSAhash certifyInfo does not match the initial clientHalfRSAhash
      }

      const CertifyInfoEndExtraData = attestCertifyInfoEnd.extraData;     // TPM2B from parseAttest
      if (CertifyInfoEndExtraData.length < 2 + 32) {
        return res.status(400).json({ error: "Invalid qualifying data length" });
      }
      const actualQualifyingEndData = CertifyInfoEndExtraData.slice(2); // skip 2-byte length // the first 2 bytes are the length
      const appHash = actualQualifyingEndData.slice(0, 32);

      console.log("appHash         :", appHash);
      console.log("envAppHashBytes :", envAppHashBytes)

      if (appHash.length !== envAppHashBytes.length || !crypto.timingSafeEqual(appHash, envAppHashBytes)){
        console.log("appHash does NOT match ❌ also, AK and EK must be unique during production (public_key, signing_key)");
        //return res.status(400).json({ error: 'appHash does NOT match ❌' });
      }      
      


      const { username, email, hashedPW, device_fingerprint, subscriptionPlan } = tempUserData
      await redisClient.del(`tempUser:${deviceId}`);// Delete the key to clean up

      const localLoginTime = new Date().toLocaleString('sv-SE', { hour12: false }).replace('T', ' ');
      const k_device = crypto.randomBytes(32); // 256-bit shared secret

      // Insert into permanent users table
      const sqlInsert = `INSERT INTO users 
        (username, email, password, device_fingerprint, subscriptionPlan, last_login, created_at, device_id, public_key, signing_key, k_device, active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      try {
        await query(sqlInsert, [
          username, email, hashedPW, device_fingerprint, subscriptionPlan, null, localLoginTime, windowsEK, hlakTPMkey, hlakPubBase64, k_device, 1
        ]);
        console.log("Registered successfully");
        const nonce2 = 'Registered successfully';
        //res.json({ nonce2 });
        //return res.json({ successMsg: `✅ Registered successfully!<br>Welcome aboard ${username}!` });
      } 
      catch (dbErr) {
        console.error(dbErr);
        if (dbErr.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: '😢 Email already in use.<br>Please enter another email.' });
        return res.status(500).json({ error: 'Database error during registration' });
      }


      /*
      console.log("akPubBase64         : " + akPubBase64);
      console.log("ekPublicPem         : " + ekPublicPem);
      console.log("windowsEkPublicPEM  : " + windowsEkPublicPEM);
      console.log("hlakPubBase64       : " + hlakPubBase64);
      console.log('name_hiAK :' + name_hiAK);
      console.log("name_hiAK length:", name_hiAK.length);
      */
      return res.json({ successMsg: `⭐ Registered successfully ⭐<br>Welcome aboard ${username} !` });
    } 
    catch (err) {
      console.error('Error in /tpm/start-registration:', err);
      //res.status(500).send(err.message);
      return res.status(500).json({ success: false, error: 'Error during registration: <br>' + err.message });

    }
}); // at login do tpm.Certify and Quote


import { execFileSync } from "child_process";
export function makeCredential(ekPubPem, akNameBuf, secretBuf) {
  const seed = crypto.randomBytes(32);

  const encryptedSecret = crypto.publicEncrypt(
    {
      key: ekPubPem,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
      oaepLabel: Buffer.concat([
        Buffer.from("IDENTITY", "ascii"),
        Buffer.from([0x00])
      ])
    },
    seed
  );

  const protectionKey = kdfa(seed, "IDENTITY", akNameBuf, Buffer.alloc(0), 16);

  const encSecret = crypto.createCipheriv(
    "aes-128-cfb",
    protectionKey,
    Buffer.alloc(16, 0)
  ).update(secretBuf);

  const integrityKey = kdfa(seed, "INTEGRITY", akNameBuf, Buffer.alloc(0), 32);
  const integrityHmac = crypto.createHmac("sha256", integrityKey).update(Buffer.concat([encSecret, akNameBuf])).digest();

  const idObjectInner = Buffer.concat([
    uint16be(integrityHmac.length),
    integrityHmac,
    uint16be(encSecret.length),
    encSecret
  ]);

  return {
    credentialBlob: Buffer.concat([uint16be(idObjectInner.length), idObjectInner]),
    encryptedSecret
  };
}

function parseEkPublic(tpmPub) {
  let o = 0;

  const readU16 = () => (tpmPub[o++] << 8) | tpmPub[o++];
  const readU32 = () => (readU16() << 16) | readU16();

  const type = readU16();              // TPM_ALG_RSA
  const nameAlg = readU16();           // TPM_ALG_SHA256

  o += 4; // objectAttributes
  const authPolicySize = readU16();
  o += authPolicySize;

  const symmetricAlg = readU16();      // TPM_ALG_AES
  const symKeyBits = readU16();         // 128 or 256
  const symMode = readU16();            // TPM_ALG_CFB

  const schemeAlg = readU16();          // TPM_ALG_OAEP
  const schemeHash = readU16();         // TPM_ALG_SHA256

  const keyBits = readU16();            // RSA size
  const exponent = readU32();           // 0 → 65537

  return {
    nameAlg,
    symKeyBits,
    schemeHash,
    exponent
  };
}

export function makeCredential_TPM(
  ekTpmPublic,
  ekPem,
  akName,
  secret
) {
  const ek = parseEkPublic(ekTpmPublic);

  const hashAlg = "sha256"; // nameAlg must be SHA256 on Windows EKs
  const seed = crypto.randomBytes(32);

  // --- Encrypt seed (OAEP per TPM parameters) ---
  const encryptedSecret = crypto.publicEncrypt(
    {
      key: ekPem,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: hashAlg,
      oaepLabel: Buffer.from("IDENTITY\0", "ascii")
    },
    seed
  );

  // --- Protection key ---
  const symKeyBytes = ek.symKeyBits / 8;
  const protectionKey = kdfa(seed, "IDENTITY", akName, Buffer.alloc(0), symKeyBytes);

  const encSecret = crypto.createCipheriv(
    `aes-${ek.symKeyBits}-cfb`,
    protectionKey,
    Buffer.alloc(16, 0)
  ).update(secret);

  // --- Integrity ---
  const integrityKey = kdfa(seed, "INTEGRITY", akName, Buffer.alloc(0), 32);
  const integrity = crypto
    .createHmac("sha256", integrityKey)
    .update(Buffer.concat([encSecret, akName]))
    .digest();

  const inner = Buffer.concat([
    uint16be(integrity.length),
    integrity,
    uint16be(encSecret.length),
    encSecret
  ]);

  return {
    credentialBlob: Buffer.concat([uint16be(inner.length), inner]),
    encryptedSecret
  };
}



/* ================== Helpers ================== */

function uint16be(n) {
  const b = Buffer.alloc(2);
  b.writeUInt16BE(n);
  return b;
}


noels.post('/register/verify',
  [
    body('tpmKey').notEmpty().withMessage('TPM public key is required'),
    body('signedNonce').notEmpty().withMessage('Signed nonce is required')
  ],
  async (req, res) => {// tpmKey is from the client and tpm_key is from the database
    try {
      // Validate inputs
      const errors = validationResult(req); //only possible errors are 1) no TPM public key or 2) nonce not signed
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() }); 

      const { tpmKey, signedNonce } = matchedData(req); // from client/frontend  // tpmKey is from the client and tpm_key is from the database
      const deviceID = crypto.createHash('sha256').update(tpmKey).digest('hex');

      const tempUserJson = await redisClient.get(`tempUser:${deviceID}`);// Retrieve nonce + TPM key from Redis
      if (!tempUserJson)  { return res.status(400).json({ error: "No registration in progress for this device.<br>Please try again." }); }
      const tempUserData = JSON.parse(tempUserJson);// Parse JSON back into an object
      const { nonce, tpm_key, createdAt } = tempUserData;// Extract what you need    
      
      // Verify signature safely
      let isValid;
      try { 
        const MAX_AGE_MS = 10 * 60 * 1000;// Example: verify nonce within 10 minutes (600000 ms)
        const now = new Date();
        if (now - createdAt > MAX_AGE_MS) { throw new Error('Nonce expired'); }
        isValid = verifySignature(nonce, tpm_key, signedNonce);    // tpmKey is from the client and tpm_key is from the database
      } //check notes on 'function verifySignature' below
      catch (sigErr) { 
        console.error(sigErr); //Signature verification could not be completed because something is wrong with these values: nonce, tpm_key, signedNonce
        return res.status(400).json({ error: "Could not complete security check.<br>Please try again." });//occurs when tpm_key = undefined 
      }
      if (isValid){
        try {
          const nonce2 = crypto.randomBytes(32).toString('hex');// Generate nonce (64 characters ranging from 0-9 and a-f)

          //  const { username } = global.tempUserData[deviceID]; //#1
          //  return res.json({ successMsg: `✅ Almost there, hang tight! ${username}!` }); //#2// only use line #2 and get res.status(500).json({ error: 'An unexpected internal server error
          //res.json({ nonce2 }); 
          
          //return res.json({ successMsg: nonce2 });
        } 
        catch (err) {
          console.error(err);
          return res.status(500).json({ error: "2An unexpected internal server error occurred.<br>Please try again later." });  // only use line #2 return res.json({ successMsg: `✅ Almost there, hang tight! ${username}!` }); and get res.status(500).json({ error: 'An unexpected internal server error
        }
      }
      else //if (!isValid)    Invalid TPM proof-of-possession
        return res.status(400).json({ error: "⚠️ Security check failed.<br>Your device could not be verified." }); //occurs when verifySignature('sdfsdfsdf', tpm_key, signedNonce);
        //return res.status(400).json({ error: 'Invalid TPM proof-of-possession' }); // will lead to catch (err) Failed to reach server.<br>Please check your connection

  //return;


      //=================================================================================================
      // Retrieve temporarily stored user info safely
      //if (!global.tempUserData || !global.tempUserData[deviceID]) {
      //  return res.status(400).json({ error: 'Temporary user data missing. Please retry registration.' }); }
      //const { username, email, password, device_fingerprint, subscriptionPlan } = global.tempUserData[deviceID];
      //delete global.tempUserData[deviceID]; // clean up
      
      const tempDataRaw = await redisClient.get(`tempUser:${deviceID}`);// Retrieve temporary user data from Redis
      if (!tempDataRaw) {
        return res.status(400).json({ error: 'Temporary registration data not found or expired.<br>Please try registering again.' });
      }
      const { username, email, hashedPW, device_fingerprint, subscriptionPlan } = JSON.parse(tempDataRaw);// Parse JSON
      await redisClient.del(`tempUser:${deviceID}`);// Delete the key to clean up

      const localLoginTime = new Date().toLocaleString('sv-SE', { hour12: false }).replace('T', ' ');

      // Insert into permanent users table
      const sqlInsert = `INSERT INTO users 
        (username, email, password, device_fingerprint, subscriptionPlan, last_login, created_at, device_id, public_key, active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      try {
        await query(sqlInsert, [
          username, email, hashedPW, device_fingerprint, subscriptionPlan, null, localLoginTime, deviceID, tpm_key, 1
        ]);

        const nonce2 = 'Registered successfully';
        res.json({ nonce2 });
        //return res.json({ successMsg: `✅ Registered successfully!<br>Welcome aboard ${username}!` });
      } 
      catch (dbErr) {
        console.error(dbErr);
        if (dbErr.code === 'ER_DUP_ENTRY') 
          return res.status(409).json({ error: '😢 Email already registered.<br>Please enter another email.' });
        return res.status(500).json({ error: 'Database error during registration' });
      }

    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: '3An unexpected internal server error occurred.<br>Please try again later.' });
    }
  }
);


/*
function verifySignature(nonce, publicKeyPem, signedNonce) {
  const verifier = crypto.createVerify('SHA256'); //object configured to use SHA-256 hashing internally before the signature check happens.  that will check signatures made with SHA-256 as the hashing algorithm.
  verifier.update(nonce); //crypto.createVerify will automatically run the SHA-256 hash function on that nonce, the original message
  verifier.end();      //Signals that no more data will be added.  verifier has the final SHA-256 hash of the message and is holding onto it.
  const signatureBuffer = Buffer.from(signedNonce, 'base64'); //crypto.verify expects the actual signature bytes, not a Base64 string.
  return verifier.verify(publicKeyPem, signatureBuffer); //1. Take the hash it already computed from nonce
}                                                       // 2. Decrypt the signedNonce using the publicKeyPem to recover what the signer’s hash should have been. 
                                                       //  3. compare the two
*/

// 2️⃣ Cleanup function and interval must be **outside** noels.post
const EXPIRATION_MS = 5 * 60 * 1000; // 5 minutes
function cleanTempUserData() {
  const now = Date.now();
  for (const [id, data] of Object.entries(global.tempUserData || {})) {
    if (now - data.createdAt > EXPIRATION_MS) {
      delete global.tempUserData[id];
    }
  }
}
setInterval(cleanTempUserData, 60 * 1000); // every 1 minute





noels.post('/admin', (req, res) => {// Define a POST route for user login at '/login'  // - POST request (utilized to send data to the server)
  const { username, password } = req.body;// Extract username and password from the request body
  const user = users.find(user => user.username === username && user.password === password);// Look for a user that matches both username and password
  
  if (!user) {// If no user found, return a 401 (Unauthorized) response
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
  res.json({ success: true, message: 'Login successful' });// If login is successful, respond with a message
});

const fingerprintDB = new Set();
noels.post('/api/save-fingerprint', (req, res) => {
  const { fingerprint } = req.body;
  if (!fingerprint) {
    return res.status(400).json({ errors: [{ msg: 'Fingerprint missing.' }] });
  }

  if (fingerprintDB.has(fingerprint)) {
    return res.status(400).json({ errors: [{ msg: 'Fingerprint already exists — possible account sharing or returning user.' }] });
  } else {
    fingerprintDB.add(fingerprint);
    return res.status(400).json({ errors: [{ msg: 'Fingerprint saved — new user/device.' }] });
  }
});




const allChallenges = new Map(); //Map() is like an array but more versatile //allChallenges is a JavaScript Map object stored in a server’s(AWS, home computer) memory
function storeChallenge(email, challenge) { 
  allChallenges.set(   // Map: allChallenges.set(key, value);  .set() adds or updates entries
    email, //key: email
    { challenge, //value: an object  which has 2 key-value pairs     challenge: challenge  and expires: Date.now() + 1 * 55 * 1000
      expires: Date.now() + 1 * 55 * 1000 // considered as expired in 55 seconds, it actually stays in memory until deleted
    }
  );
}








/* 

Never use string concatenation like this:
const sql = `INSERT INTO users VALUES ('${email}', '${password}')`; // ❌ dangerous!

✅ 4. Rate Limiting / Brute Force Protection
Prevent bots from hammering your registration or login routes:


const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit to 10 requests per IP
  message: 'Too many attempts. Try again later.'
});

app.use('/register', limiter);
✅ 5. HTTPS Only
If you’re in production, enforce HTTPS:

Use a reverse proxy like Nginx

Or use middleware like:


app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
});



✅ 8. Store Secrets Securely
Never hardcode passwords, API keys, or DB credentials in source code.

Instead, use .env:

env

DB_PASSWORD=secret
And load with:


require('dotenv').config();
✅ 9. Log Auth Failures Without Revealing Details
res.status(401).send('Invalid credentials'); // ❌ don’t say "wrong email" or "wrong password"

*/

   /* 

2️⃣ Client-Side Setup
Step 1: Background Task
Use setInterval to periodically request a challenge and sign it.

Runs silently without user interaction.

async function periodicTPMCheck() {
  try {
    const challengeRes = await fetch('/tpm-challenge', { credentials: 'include' });
    const { challenge } = await challengeRes.json();

    // Use TPM/WebAuthn to sign the challenge
    const signature = await navigator.credentials.get({
      publicKey: {
        challenge: Uint8Array.from(atob(challenge), c => c.charCodeAt(0)),
        allowCredentials: [{ id: userCredentialId, type: 'public-key' }],
        timeout: 30000
      }
    });

    await fetch('/tpm-verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ signature: btoa(String.fromCharCode(...new Uint8Array(signature.response.signature))) })
    });
  } catch (err) {
    console.error('TPM verification failed', err);
    // Optionally handle failed verification UI
  }
}
// Run every 96 seconds
setInterval(periodicTPMCheck, 96_000);
✅ Behavior
Every 96 seconds, client silently signs a challenge and sends it back.
If it fails or is missing, server revokes session → prevents friends from using shared tokens.
Genuine users don’t see any popup or delay.
   */




/* 
certutil -csp NGC -key:  lists all the keys
how do I delete this:   
S-1-5-21-1434296886-465149884-24708195-1001/51825a8f-01a4-4b12-b4d8-c4e1d22b8de2/FIDO_AUTHENTICATOR//49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d9763_1d928cfc11708df42a2b881b88cef83e
  RSA
certutil -csp "Microsoft Passport Key Storage Provider" -delkey "S-1-5-21-1434296886-465149884-24708195-1001/51825a8f-01a4-4b12-b4d8-c4e1d22b8de2/FIDO_AUTHENTICATOR//49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d9763_661299015d09e1d6c473991a499345a6" */



/* You don’t need a TPM attestation certificate. Instead, you let the OS enforce that the private key cannot be cloned, and you use a public key + challenge-response protocol to prove uniqueness.
    signing:        hash .exe → hashabcd → privateKey(hashabcd) → signaturewxyz       not anyone can produce signaturewxyz  
    verification:   publicKey(signaturewxyz) → hashabcd    =   .exe → hashabcd  

    for verification, you need: the 1) signature, 2) public key, and the 3) app binary(.exe)
    signing:               hash .exe → hashabcd                   anyone can do this
    verification:          → hashabcd    =   .exe → hashabcd  

    verify(public_key, signature, message) = true
    implies:
      - The signature was generated by the private key that pairs with this public key. Both keys are bound together like a key and a lock
      - The message hasn’t been altered since it was signed.

      If the attacker produces a new signature to match H2(which is mathematically infeasible), it cannot have been generated by the legitimate private key.
      Therefore, the public key check will fail — the system will detect that the signature is not bound to the correct private key.

      Any modification to a signature makes it invalid. The public key does not need the original message to detect that the signature is not valid for that key,
      it can mathematically tell that the signature could not have been produced by its paired private key.
      Private key = parent
        The parent produces something unique for each message.
        Signature = drop of blood
        For each message, the parent puts a “drop of blood” (signature) into it.
        Each drop is unique to that message but still carries the parent’s genetic pattern.
      Public key = child
        The child can check any drop of blood and verify, “Yep, this came from my parent.”
        The child doesn’t know what the parent looks like (the private key is secret), but it can still confirm authenticity.
      Tampered signature = mutated blood
        If someone changes the signature, it’s like altering the drop of blood.
        The child checks it and immediately sees, “This doesn’t match my parent’s blood.”
*/



/*
Server sends challenge (nonce)
       |
       v
RSACng AK signs challenge (proof-of-possession)          //Maps to the TPM signing an attestation structure — though here it’s a simpler challenge
       |
       v
Server verifies signature using public key
       |
       v
1) Check an appHash / challenge-response

Prevents trivial scripting or replay attacks.

Ensures that the client app is the one generating the signature, not a copy-pasted script.

2) Generate an RSACng key. Use the RSACng key to sign a nonce and verify signature. Only proves possession, not TPM


2. Normal Login Flow (after registration)
[User launches app]
       |
       v
GetOrCreateHardwareKey() --> RSACng AK (high-level)
       |
       v
Export Public Key from RSACng AK
       |
       v
Hash public key --> Device ID
       |
       v
Server looks up Device ID
       |
       v
Compare stored device fingerprint with current fingerprint
       |
       v
IF fingerprint matches:
    - Server sends login challenge (nonce)
    - RSACng AK signs challenge
    - Server verifies signature
    - Login successful
ELSE: certifyCreation? as done with registration?

Backend verifies:

App hash matches expected version


*/

/*

12) Server registers device:
    - DeviceID = hash(AK public key)
    - Store AKpub, last-seen PCRs, platform metadata



__________________________________________________________________________
Sept 23


Client: Once attestation is successful, create or load a high-level RSACng AK for device continuity.
Used only to derive deviceID = hash(RSACng AK public key).
Persists across app runs.
Server: Stores deviceID for future identification.

11) Registration complete

Device is now bound to TPM + app + hardware.
Server can trust future requests signed by the high-level RSACng AK or based on previously verified attestation.

After step 6(activate credential), the server can now be confident:

Low-level AK proves TPM possession and signs PCRs.

High-level RSACng AK is persistent and used to derive deviceID.

App hash sent separately proves the client is running the authorized app.

PCRs ensure platform integrity (Secure Boot, OS, boot chain).

Anti-VM check is performed before key creation.


*/
/*


Oct 5
Optimized Registration Flow
Step 0 — Initialize Registration

App starts registration sequence.

Server generates a random nonce for this session.

Step 1 — VM / Emulator Check

App checks platform for virtualization indicators.

If a VM is detected → abort registration.

Ensures keys are only created on real hardware.

Step 2 — Prepare Low-Level TPM Keys

Generate transient low-level AK in the TPM.

Set attributes:

fixedTPM=1

sensitiveDataOrigin=1

non-exportable

Bind the keys to PCR values representing the current platform state.

This ensures the keys are tied to the device and platform configuration.

Step 3 — Generate / Prepare High-Level AK

Generate the persistent high-level AK for the user account.

A separate RSA key will be saved in your database for login.

Step 4 — CertifyCreation

Use low-level AK to sign a TPM2B_ATTEST structure that includes:

High-level AK public key

Server-provided nonce

PCR values

Hash of the RSA key

This proves that the high-level AK was generated inside the TPM and is bound to the platform.

Step 5 — App Binary Verification

Check the integrity of the client binary (e.g., hash or signature of the executable).

Fail registration if verification fails.

Prevents attackers from using modified clients to bypass attestation.

Step 6 — Hash the Attestation Package (optional but recommended)

Concatenate deterministically:

low_level_AK_public ||
high_level_AK_public ||
TPM2B_ATTEST ||
low_level_AK_signature ||
PCR_values ||
nonce and hash of RSA


Compute SHA-256 hash.

Can be used for:

Transport integrity check

Deduplication / logging

Quick audit reference

Note: Signature verification is still the ultimate trust anchor — hash is convenience / defense-in-depth.

Step 7 — Send to Server

Package sent includes:

Low-level AK public

High-level AK public

TPM2B_ATTEST + low-level AK signature

PCR values

Nonce and RSA hash

Optional hash

Step 8 — Server Verification

Verify low-level AK signature on TPM2B_ATTEST.

Check nonce matches server session.

Verify PCR values to confirm platform integrity.

Validate key attributes of the high-level AK (non-exportable, fixedTPM).

Optionally verify the hash matches recomputed value from received data.

✅ If all checks pass:

Server stores high-level RSA AK public key in the database.

Registration succeeds.

Transient low-level keys can now be discarded — trust moves to high-level RSA AK.

Step 9 — Login Flow (Post-Registration)

Server issues a login nonce.

Client signs it using high-level persistent RSA AK.

Server verifies signature, PCRs (optional), and app binary.

Successful login only occurs on the original TPM + platform.

Step 10 — Residual Attack Mitigation
Layer	Mitigation
VM detection	Blocks ephemeral software TPMs in virtualized environments
PCR-binding	Prevents key cloning or usage on different hardware
CertifyCreation + nonce	Proof that high-level AK was TPM-created; prevents replay
App binary verification	Blocks modified clients from sending fake attestations
Hash of full package	Optional integrity check and deduplication
High-level AK attributes	Ensure non-exportable, hardware-bound for login
✅ Key Takeaways

Transient low-level keys work perfectly — they act as a temporary attestation authority for the persistent high-level AK.

Nonce + PCR + app verification + ephemeral keys gives strong protection against:

Account sharing

Key cloning

Replay attacks

Virtualized environments / software TPMs

Hashing is optional but useful for transport integrity, logging, and auditing.

CredentialBlob is not required for your scenario, because you fully control server and app, and the flow already prevents practical spoofing.


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Oct. 17
Step 0 — Initialize Registration

App starts registration sequence.

Server generates a random nonce for this session.

Step 1 — VM / Emulator Check

App checks platform for virtualization indicators.

If VM detected → abort registration.
Ensures keys are only created on real hardware.

Step 2 — Prepare Transient Signing AK

Generate a transient AK in the TPM.

Set attributes:

fixedTPM = 1

sensitiveDataOrigin = 1

sign-only

Bind this transient AK to current PCR values (optional but recommended).

Step 3 — Certify Transient AK Using Windows AK

Use the Windows low-level AK to CertifyCreation on the transient signing AK.

This produces a TPM2B_ATTEST structure signed by the Windows AK.

Include:

Public key of the transient AK

Server-provided nonce

PCR values

This proves the transient AK was created inside the TPM on that device.

Step 4 — Send to Server

Send the server:

Public key of transient AK

TPM2B_ATTEST signed by Windows AK

PCR values

Nonce

Step 5 — Server Verification

Verify:

Signature on TPM2B_ATTEST using the Windows AK public key

PCR values match platform integrity

Nonce matches server session

If verification passes:

Store the Windows AK public key (or a hash) associated with this user. (CORRECTION: Store the high-level AK (or its hash) on the server. The Windows AK only
                                                                      signs the high-level AK during registration — it’s not needed for login verification.)
Transient AK is discarded — trust is now anchored in the Windows AK.

Login Flow

Step 0 — Initialize Login

Server issues a login nonce.

Step 1 — Transient Signing AK

App generates a new transient signing AK.

Certify this transient AK using the Windows low-level AK (same as registration).

Sign the server-provided nonce with the transient AK.

Step 2 — Send to Server

Send the server:

Signed nonce

Transient AK public key

TPM2B_ATTEST signed by Windows AK

Step 3 — Server Verification

Verify:

TPM2B_ATTEST is signed by the stored Windows AK public key.

PCRs indicate correct platform.

Signature on nonce is valid using transient AK public key.

Successful verification → user is authentic.

*/


