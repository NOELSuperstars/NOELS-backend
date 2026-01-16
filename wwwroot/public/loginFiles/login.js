/*
Aug 11 (11:10 pm ) making sure AAGUID is verified by MDS. AAGUID can be spoofed, must use native app later
Aug 8 (11:20 pm ) Debugging, trying to have full attestation without certificate. need blob.js Root-R3 and AAGUID
Aug 6 (11:30 pm ) /register frontend has bare min. code. Server handles as much code as possible.
Aug 4 (11:20 pm ) JWT signature verified successfully but need to analyze all the code.
Aug 4  (4:00 am) added a lot of code, need to debug and figure out what's happening.
Aug 2  (11:25 pm)  asking for PIN, debugging. need to make verifyTPMSignature()
Aug 1  (11:10 pm)  implementing TPM in register
July 30 (11:20 pm) device fingerprint moved from body to header. still gets sanitized and validated, login if email, pw, and fingerprint matches
July 29 (11:25 am) device fingerprint not stored in localStorage bc user can share it. now only exists inside the browser’s runtime memory, sharing this is more technical and inconvenient
July 28 (11:25 am) device fingerprint stored in mySQL
July 24 (11:25 pm) debugged: messages in regis and login h2s all fade in and out smoothly and regis msg timed correctly to slide up and down 
July 23 (11:25 pm) adding CSRF protection
July 23 (11:35 pm) regis height adjust smoothly depending on h2's msg but needs to clean up code
July 22 (11:15 pm) all messages to users go through const fadeoutin, regis inputs sanitized and validated
July 22 (11:15 am) added inline block and padding to keep text from shifting during countdown
July 21 (11:15 pm) countdowns don't reset on refresh, new tab, or when multiple tabs are open and user inputs on the 1st tab then 2nd 
July 21 (11:15 pm) countdown shows on refresh and on a new window but when 2 windows can accept inputs countdowns are not synchronized.
July 20 (11:15 pm) added countdown which still shows on refresh but not on a new window
July 20 (4:35 am)  handlers is login's user inputs are organized. client receives status, not json.
July 18 (11:05 pm) adding ratelimit (#4 of security checklist) to prevent bots from infinite login attempts. new msg: too many login attempts. favicon added.
July 18 (2:30 am) toggling login and sign up now done by js and not html onclick(), thus don't need href="#", improved timings of messages (dis)appearing
July 17 (11:05 pm) added animations and emojis on all scenarios of login and registration
July 17 (11:05 am) messages on different scenarios fade in and out
July 16 (11:05 pm) can't register if subscription plan is not checked. debugged autofill, msg given in registration page
July 15 (11:05 pm) DBeaver connected, can create new column, can register user and store in DB
July 13 (11:00 pm) added pricings and pic toggles
July 13 (12:30 pm) login and registration pages toggle
July 13 (1:00 am) timestamp on certToken, started registration page
 July 10 (1:00 pm) warning.html created. Need to put timestamp on certToken
    July 10 (12:50 am) log in, token sent to user in cookies with timestamps. cookie timestamps must be equal to server's user's timestamps to gain access
    July 9 (12:50 am) refresh and access tokens are created
   July 8 (12:40 pm) token is checked before displaying the webpage, not viewable when time runs out */
'use strict';

const loginButton = document.querySelectorAll('.wrapper-login .btn');
const publicURL = "https://localhost:2160";
//const publicURL = "https://noels-backend-production.up.railway.app/";

//loginButton[0].style.cursor = `url(../Images/rocket0.cur) 2 2, auto`;
//const frames = ['../Images/rocket1.cur', '../Images/rocket2.cur', '../Images/rocket3.cur', '../Images/rocket4.cur', '../Images/rocket5.cur'];

loginButton[0].style.cursor = `url(https://local.app/rocket0.cur) 2 2, auto`;
const frames = [
  'https://local.app/rocket1.cur',
  'https://local.app/rocket2.cur',
  'https://local.app/rocket3.cur',
  'https://local.app/rocket4.cur',
  'https://local.app/rocket5.cur'
];
let animationInterval = null;
let idleTimeout = null;
let isTransitioning = false;
let i = 0;
function startCursorAnimation() {
  if (animationInterval) return;
  i = 0;
  animationInterval = setInterval(() => {
    loginButton[0].style.cursor = `url(${frames[i]}) 2 2, auto`;
    i = (i + 1) % frames.length;
  }, 96);
}

function stopCursorAnimation() {
  clearInterval(animationInterval);
  animationInterval = null;
  //loginButton[0].style.cursor = `url(/Images/rocket0.cur) 2 2, auto`;
  loginButton[0].style.cursor = `url(https://local.app/rocket0.cur) 2 2, auto`;
}

loginButton[0].addEventListener('mousemove', () => {
  startCursorAnimation();
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(stopCursorAnimation, 360);
});              //If the mouse keeps moving, the countdown is reset over and over, and stopCursorAnimation() never runs.


const body = document.body;
const idHeaders = document.querySelectorAll('.wrapper-login h2');
const loginHeader = idHeaders[0];
const regisHeader = idHeaders[1];



document.addEventListener('DOMContentLoaded', async () => {
  await getFingerprint(); // Ensures fingerprint is generated before any user actions
    /* need date to be in server, user can just delete date in local storage */     //1. User accesses URL, receives login.html with the loginHeader hidden.
  const savedRetry = localStorage.getItem('retryUntil');  //2. While the DOM is being parsed, the deferred script is downloaded. 
  if (savedRetry) {                                       //3. Once the DOM is fully loaded, the deferred script runs(loginHeader declared here), sets up the DOMContentLoaded event listener, 
    const retryUntil = new Date(savedRetry);              //4. since the DOM is already ready, DOMContentLoaded fires immediately, executing the logic that makes loginHeader visible.
    /* console.log('savedRetry: ' + savedRetry);//savedRetry: 2025-07-22T07:18:42.791Z
    console.log('retryUntil: ' + retryUntil);   //retryUntil: Tue Jul 22 2025 16:18:42 GMT+0900 (Korean Standard Time)*/
    if (retryUntil > new Date()) {
      loginHeader.style.color = 'red';
      startCountdown(retryUntil);  //start updateCountdown running every second and that's it, it doesn't wait for updateCountdown to finish it's repeated calls every second
    }
    else  { localStorage.removeItem('retryUntil'); }
  }
  loginHeader.style.visibility = 'visible';// If no retry, show the default header
});




body.addEventListener('mouseup', async (e) => { //Go back to the default header but if the user clicked buttons Blast Off! or Register, then STOP this function
  if (loginHeader.textContent.includes('High frequency of invalid inputs') || isTransitioning || regisBtn.disabled || e.target.tagName === 'BUTTON') return;
  //if (e.target.tagName === 'BUTTON' /* || regisActive */) return; 
  const regisActive = document.getElementById('register-form').classList.contains('active');
  
  if (regisActive){
    if (planOptions[0].classList.contains('haloGlow') || !regisHeader.textContent.includes('Registration Form')){ // go back to the default regisHeader header (Registration Form) 
      planOptions.forEach(aPlanOption =>  { aPlanOption.classList.remove('haloGlow'); });    
      regisHeader.style.height = '72%';       
      await fadeOutIn(regisHeader, 'Registration Form', 'white');
    }
  }
  else{  // go back to the default loginHeader
    wrapperLogin.style.height = '60%';    // can't be delayed or else it will coincide with 72% if it switches into registration form
    if (!loginHeader.textContent.includes('Initiating identity')) {
      await fadeOutIn(loginHeader, `🤖 Initiating identity 🤖<br>verification protocol <span class="loading-dots"><span>.</span><span>.</span><span>.</span></span>`, 'white');
    }
  }
});

const heading = document.querySelector('.content h2');
heading.classList.add('locked');

heading.addEventListener('mouseup', () => {//picture switches between lock and pencil
  heading.classList.toggle('locked');
  heading.classList.toggle('unlocked');
});



const checkboxes = document.querySelectorAll('input[type="checkbox"][name="subscriptionPlan"]'); //makes sure only one box is checked at a time
checkboxes.forEach(chk => {
  chk.addEventListener('change', () => {
    if (isTransitioning || regisBtn.disabled) { // during this phase, when box is checked nothing appears to happen. In reality it got checked but immediately gets unchecked or vice versa.
      //console.log("chk.checked: " + chk.checked); 
      chk.checked = !chk.checked; // prevent checking // w/o this, there could be no boxes checked, register button clicked, check box, message saying check a box appears 
      //console.log("chk.checked: " + chk.checked); 
      if (regisHeader.textContent.includes("Please choose a subscription plan")){ // exception when no boxes were checked, you can check a box
        chk.checked = true;
      }
    }
    if (chk.checked) {
      checkboxes.forEach(box => {
        if (box !== chk) box.checked = false;
      });
    }
  });
});
/*

 const fadeOutIn = async (header, message, color = 'red', addClass) => {
  header.style.transition = 'opacity 0.72s ease';     // Set transition
  header.style.opacity = '1';                         // Ensure it's fully visible

  void header.offsetHeight; // 👈 Force reflow

  header.style.opacity = '0';                         // Trigger fade-out
  if (message)  { 
    isTransitioning = true; //during transition, nothing happens when you click 'Register'
    animateHeightChange(header, message);
  }
  await new Promise(res => setTimeout(res, 890));// After fade-out completes change text and fading back in
  header.style.opacity = '1';
  header.style.color = color;
  header.classList.remove('fade-loop');
  if (addClass === 'fadeLoop')  { loginHeader.classList.add('fade-loop'); }
  else if (addClass === 'haloGlow')  { emailInput.classList.add('haloGlow'); }
  isTransitioning = false;
};  
function animateHeightChange(h2, content) {
  const startHeight = h2.offsetHeight;// Measure current height
  toInnerHTML(h2, content);// Set new content//h2.innerHTML = content;
  const newHeight = h2.offsetHeight;// Measure new height

  // Set back to start height and disable transition to prepare animation
  h2.style.height = startHeight + 'px';
  h2.style.transition = 'none';

  h2.offsetHeight;// Force reflow
  
  h2.style.height = newHeight + 'px';
  h2.style.transition = 'height 1.08s ease';// Enable transition and animate to new height

  
  h2.addEventListener('transitionend', () => {// Cleanup: after animation ends, remove explicit height to allow normal flow
    h2.style.height = '';
    h2.style.transition = '';
  }, { once: true });
} */

const fadeOutIn = async (header, message, color = 'red', addClass) => {
  //if (isTransitioning) return;
  isTransitioning = true;
  const startHeight = header.offsetHeight;
  header.classList.remove('fade-loop'); // if put at bottom, 'initiating...(default msg) appears instantly
  let newHeight = startHeight;
  if (!message) message = header.innerHTML;
  if (message) {
    const originalHTML = header.innerHTML;    
    toInnerHTML(header, message);// Set new content to get the new height
    newHeight = header.offsetHeight;

    //header.style.opacity = '0';
    header.style.height = startHeight + 'px'; // w/o this line header will instantly jump up// Set back to start height and disable transition to prepare animation
    void header.offsetHeight;// void is an extra touch of clarity signaling the value won't be used  // w/o this line header will also instantly jump up //Merely reading offsetHeight causes the browser to: 1)Flush the style changes 2)Recalculate layout
    //header.style.transition = 'none'; //  w/o it, the text in h2 disappears and reappears twice, this let's the text instantly disappear so it could gradually reappear
    //header.style.height = newHeight + 'px';
     /*header.addEventListener('transitionend', () => {// Cleanup: after animation ends, remove explicit height to allow normal flow
      header.style.height = '';
      header.style.transition = '';
    }, { once: true }); */
    toInnerHTML(header, originalHTML);

  }

  // Set combined transitions
  header.style.transition = 'opacity 0.72s ease, height 0.96s ease';
  //header.style.height = startHeight + 'px';
  // header.style.opacity = '1';
  //void header.offsetHeight; // Force reflow

  // Trigger both animations
  header.style.opacity = '0';
  header.style.height = newHeight + 'px';

  await new Promise(pause  => setTimeout(pause , 960));  // Wait for the longer of the two transitions (height) to use anywhere: const pause = ms => new Promise(pause => setTimeout(pause, ms));  ->  await pause(960);

  // After animation, update content and reset styles
  toInnerHTML(header, message); 
  header.style.transition = 'opacity 0.72s ease'; // keep for fade-in, doesn't work if height 0.96s ease is included

  header.style.opacity = '1';
  header.style.height = ''; // remove inline height to allow auto layout // w/o it h2 will slide down only on the first click //essential to return to natural layout after you temporarily override height for animation purposes. Without it, your header becomes "stuck" at a fixed height
  header.style.color = color;

  if (addClass === 'fadeLoop') {
    header.classList.add('fade-loop');
  } 
  else if (addClass == 'multipleHaloGlows'){
    planOptions.forEach(aPlanOption => {
      aPlanOption.classList.add('haloGlow');
    }); 
  }
  isTransitioning = false;
};


function startCountdown(retryUntil) {
  updateCountdown(); // Call once immediately to update UI right away
  const timer = setInterval(updateCountdown, 1000); //Every 1 second, call the updateCountdown() function
  async function updateCountdown() {
    loginHeader.classList.remove('fade-loop');/* won't get removed if blast off was clicked twice quickly, but gets removed in this setInterval */
    const timeLeft = Math.max(0, retryUntil - new Date());
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    const pad = n => n.toString().padStart(2, '0');  //add '0' to the start until its length is 2
     //         n => n.toString() converts any input n into a string: Takes one argument n   Returns the result of n.toString()
    toInnerHTML(loginHeader,
      ` ⚠️High frequency of invalid inputs.⚠️
        <br>
        <span class="timer-text" style='padding-left: 2.1em'>Next mission launch:</span>
        <span class="timer-text">${pad(minutes)}m ${pad(seconds)}s</span>`
    );
    //toInnerHTML(loginHeader, `⚠️High frequency of invalid inputs.⚠️<br>Next mission launch: ${minutes}m ${seconds}s`);
    if (timeLeft <= 0) {
      clearInterval(timer);
      await fadeOutIn(loginHeader, `🤖 Initiating identity 🤖<br>verification protocol <span class="loading-dots"><span>.</span><span>.</span><span>.</span></span>`, 'white');
    }
  }
}

//her's  he's  could don't have     hili his her not  subject verb agreement(there is/are)   subject/object pronouns  I you he she   me you him her

    /*  response.json().catch   NOTES          
    const result = await response.json();    /    const response = await fetch('/
    console.log(result.status + '\nToken: ' + result.accessToken); */// Show the result (e.g. "Login successful" or "Invalid username or password")
    //if (!response.ok) {//response is an object from const response = await fetch('/', 
    //     response.ok === true  if status is in the 200–299 range; 
    //     response.ok === false if status is anything else (e.g. 400-599)
    //const { message } = await response.json().catch(() => { //{ message } is shorthand for { message: message } meaning get the 'message' property and name it 'message'
                                             //.catch() executes if json() fails ie disconnected or server sent back HTML/plain text, not JSON, or response body was empty/malformed
                                             //.catch() NOT all possible failures — just .json() parsing failures
    //return { message: 'An error occurred while connecting to the server.' }; // returning an object that JSON failed to do
const planOptions = document.querySelectorAll('.plan-option');
const emailInput  = document.getElementById('reg-email');
/* const registerFormHeader = document.querySelector('#register-form h2.spotlight');
const loginFormHeader    = document.querySelector('#login-form h2.spotlight'); */

const links = document.querySelectorAll('.spotlight2');  /* for toggling Login and Sign-up Now */
links[0].addEventListener('click', function(e) {
  e.preventDefault();
  showForm('register-form');
});
links[1].addEventListener('click', function(e) {
  e.preventDefault();
  showForm('login-form');
});

const wrapperLogin = document.querySelector('.wrapper-login');
function showForm(formID){  /* switches between login form and register form */
  let type = 'login'; // selected to be removed but may change
  if (formID === 'login-form') {
      wrapperLogin.style.height = '60%';
      type = 'register';/* will be removed because it's login-form*/
  }
  else {    // else login will be removed
    wrapperLogin.style.height = '72%';
    loginButton[1].style.cursor = 'pointer';

  }
  document.querySelector(`#${type}-form`).classList.remove('active');
  document.getElementById(formID).classList.add('active');
}





// Concatenate two Uint8Arrays
function concat(a, b) {
  const c = new Uint8Array(a.length + b.length);
  c.set(a, 0);
  c.set(b, a.length);
  return c;
}

// Compute HMAC using SHA-256
async function HMAC(keyBytes, messageBytes) {
  // Web Crypto API
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, messageBytes);
  return new Uint8Array(sig);
}

// Retrieve TLS exporter for the current session
async function getTlsExporter() {
  // This depends on your platform:
  // In a WebView2/C# environment, you might call a host object method to get the TLS exporter.
  // For example:
  return await chrome.webview.hostObjects.noelsApp.GetTlsExporter(); // should return Uint8Array
}
const loginBtn = document.querySelector('#login-form button[type="submit"]');// Select the register button
loginBtn.disabled = false;

document.getElementById('login-form').addEventListener('submit', async (e) => {  //listens for submit event in other words 'blast off' click or enter on the 'login-form' element
  /*   Step	Action   BKMK
  1️⃣	Login sends credentials and receives accessToken + cookie refreshToken
  2️⃣	Save both Tokens in cookies
  3️⃣	Use access accessToken with req.cookies.accessToken 
  4️⃣	If accessToken is expired, call /refresh-token to get a new one and retry the request
  5️⃣	On logout, clear localStorage and refresh token cookie gets cleared */

  e.preventDefault(); //  Stop form from reloading the page  //Do NOT submit this form the normal way. I’ll take care of it using JavaScript
  if (isTransitioning || loginHeader.textContent.includes('High frequency of invalid inputs')) return;
  loginBtn.disabled = true; // disable immediately to prevent double submits
  loginBtn.classList.add('shake');
  ///*
  const vmVerificationResult = await chrome.webview.hostObjects.noelsApp.PerformVMvericationBridge();
  if (vmVerificationResult !== "Hardware"){ 
    await fadeOutIn(loginHeader, vmVerificationResult);
    return;
  } //*/
  
  const emailEntry = e.target.querySelector('input[type="email"]').value;
  const pwEntry    = e.target.querySelector('input[type="password"]').value;
  
  const data = await getDataToSend(e);
  if (!data) return; // registration or fingerprint failed
    console.log("data: ", data);
    console.log("Outgoing request body:", data);
  console.log("Outgoing request body (JSON):", JSON.stringify(data, null, 2));
 
  let response;
  try{
    response = await fetch('/loginStart', {  
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // ✅ this lets the browser store the cookie // Ensures cookies round‑trip automatically //cookie is stored and sent automatically on subsequent requests
      body: JSON.stringify(data) // actual data stringified and sent. i.e. '{"username":"kevin@example.com","password":"supersecret"}'
    });
  } 
  catch (err) {  //issues sending the request
    console.error(err);
    await fadeOutIn(loginHeader, '📡 Network Error. 🔌<br>Please check your connection.'); //triggered when disconnected
    loginBtn.disabled = false;
    loginBtn.classList.remove('shake');
    return;
  }

  let status = response.status;
  console.log("status: " + status);
  let resData;
  try {
    resData = await response.json();
  } 
  catch {   //issues receiving the request i.e. invalid JSON
    await fadeOutIn(loginHeader, 'Server returned an invalid response.<br>Please try again.');
    loginBtn.disabled = false;
    loginBtn.classList.remove('shake');
    return;
  }   
  if (!response.ok) { //true if the HTTP status code is in the 200–299   false if the status code is outside that range (e.g., 400, 404, 500).
    loginBtn.disabled = false;  //login button reactivated bc user didn't register successfully
    loginBtn.classList.remove('shake');
    //checkboxes.forEach(chk => { chk.disabled = false; });
   
    if      (status === 400) {//Username must be 3-20 characters long, Password must have at least 5 characters, Please choose a subscription plan
      //const data = await response.json();
      //const messages = resData.errors.map(err => err.msg).join('<br>');
      const messages = resData.errors.map(err => err.msg).join('<br>');
      await fadeOutIn(loginHeader, messages);
      return;         
    }
    if      (status === 401) {//'⚠️Security Breach👮<br>Unauthorized Entry.' Unauthorized login signature
      await fadeOutIn(loginHeader, resData.message, 'red', 'fadeLoop');  
      return;
    }   
    if      (status === 403) {//'Device//fingerprint not recognized. verify with the creation of HLAK
      await fadeOutIn(loginHeader, resData.message);
      return;
    }    
    if (status === 429) { //too many login attempts
      const now = new Date();
      const dateObjChecker = new Date(localStorage.getItem('retryUntil')); // converts 'retryUntil', a string representing milliseconds to a Date object. null is returned if retryUntil isn't in localStorage.
      
      if (dateObjChecker.getTime() === 0  || dateObjChecker < now) {  //  new Date(null) is Unix epoch (1970-01-01T00:00:00Z) or getTime() === 0
        const retryUntil = new Date(Number(resData.retryUntil)); // convert resData.retryUntil (which is milliseconds from the server) to Date object
        localStorage.setItem('retryUntil', retryUntil.toISOString()); // this executes if there is nothing in localStorage or dateObjChecker has passed, countdown is over
      }
      const savedDateObj = new Date(localStorage.getItem('retryUntil'));// ✅ Always use the stored value (first-write wins)
      await fadeOutIn(loginHeader, '⚠️High frequency of invalid inputs.⚠️<br>Next mission launch:'); // this message will be overwritten almost immediately by startCountdown but still need it for a smooth transition bc fadeOutIn only does a smooth transition if there is a message
      startCountdown(savedDateObj);
      return;
    }
    if (status === 500){
      await fadeOutIn(loginHeader, `An unexpected error occurred:<br>${resData.message}`); //😲 An unexpected error occurred.<br>Please try again later.
      return;
    }
    else{// any other unexpected error (401, 403, 404, etc.)
      await fadeOutIn(loginHeader, 'Initial verification failed:<br>' + (resData.message || 'Unknown error'), 'white'); //run if status is none of the above(400,409,500)
      //await fadeOutIn(regisHeader, `Unexpected error: ${status}`);
      return;  
    }
  }
  console.log("nonce: " + resData.nonce);
  console.log("secret: " + resData.secret);
  console.log("resData.session: " + resData.session);

  const userVerificationResult = await chrome.webview.hostObjects.noelsApp.PerformUserVerificationBridge(// -> grantAccess through C# // grantAccess sends cookie(s)
                                 publicURL, resData.nonce, resData.secret, resData.session);               // cookies attached on every request now
   
  console.log("userVerificationResult: " + userVerificationResult);

  if (!userVerificationResult){ // This error message is already thrown but added this just in case somehow userVerificationResult returns false
    await fadeOutIn(loginHeader, 'This application requires a physical Windows PC.<br>Virtual machines are not supported.');
    return;
  } 

  loginBtn.classList.remove('shake');
  const decoratedResult = userVerificationResult.includes("successfully") ? `<span class="spotlight3">${userVerificationResult}</span>` : userVerificationResult;
  await fadeOutIn(loginHeader, decoratedResult);
  if (userVerificationResult.includes("Time period expired")||userVerificationResult.includes("Device is unregistered")||userVerificationResult.includes("Please try again")) {
    loginBtn.disabled = false;  //login button reactivated bc user didn't register successfully
  }
  

  //From this point on, cookies are automatically attached after grantAccess/successful user verfification

  if (userVerificationResult.includes("successfully")) {
    try {
      // 1. Ask server for a one-time nonce
      const oNonceResp  = await fetch('/nonceForSigning', {  //oNonceResp  has metadata: .status, .ok, .headers and the body is in bytes. 
        credentials: 'include'
      });
      const oNonceRespBody = await oNonceResp.json(); // ✅ read once  .json() reads and converts those body bytes into a JavaScript object 

      let sErrMsg = `Request failed (${oNonceResp.status})`;
      if (!oNonceResp.ok) {
        if (oNonceRespBody?.error) sErrMsg = oNonceRespBody.error; //so oNonceResp .error === "No valid device identifier";
        throw new Error(sErrMsg); //Error(message) throws an Error object, not a string to the catch block  
      }                           //By default Error() includes err.name, err.message, and err.stack. By default err.name is "Error"




      // 3. Ask TPM (via C#) to prove device possession
      const { storedNonce, sessionBinding } = oNonceRespBody;
      const nonceBytes = Uint8Array.from(atob(storedNonce), c => c.charCodeAt(0));
      const storedNonceB64      = btoa(String.fromCharCode(...nonceBytes));
      const sessionBytes = Uint8Array.from(atob(sessionBinding), c => c.charCodeAt(0));
      const sessionBindingB64   = btoa(String.fromCharCode(...sessionBytes));

      //const sessionB64 = btoa(String.fromCharCode(...sessionBindingRaw));
      //console.log("sessionBindingB64:", sessionBindingB64);  // Output the raw value returned

      const proofBytes = await chrome.webview.hostObjects.noelsApp.ComputeDeviceProofBridge(storedNonceB64, sessionBindingB64);

      if (proofBytes === null){
        await fadeOutIn(loginHeader, `An unexpected error occurred:<br>Invalid device`); //Error signing the nonce.
        return;      
      }
      const proofB64 = btoa(String.fromCharCode(...proofBytes));
      // 4. Make authenticated request
      const oContentResp = await fetch('/verify-device', { //oContentResp has metadata: .status, .ok, .headers and the body is in bytes. 
        method: 'GET',
        headers: {'X-Nonce'  : storedNonce, 'X-Proof'  : proofB64},
        credentials: 'include'  //Cookie sent. Everything else on req is derived or added server-side
      });
      const oContentRespBody  = await oContentResp.json(); //.json() reads and converts those body bytes into a JavaScript object 
      if (!oContentResp.ok) {
        sErrMsg = `oContentResp Request failed (${oContentResp.status})`;
        if (oContentRespBody?.error) sErrMsg = oContentRespBody.error; //so oContentResp.error === "Missing/incomplete data";
        throw new Error(sErrMsg); //Error(message) throws an Error object, not a string to the catch block  
      }                           //By default Error() includes err.name, err.message, and err.stack. By default err.name is "Error"
      window.location.href = '/contentFiles';
      
      /*
            const html = oContentRespBody.html;

      // Remove previously injected scripts (if reloading)
      document.querySelectorAll('script.injected').forEach(s => s.remove());

      // Replace body with new HTML
      document.body.innerHTML = html;

      // Execute scripts in order


            async function injectScripts(container) {
        const scripts = Array.from(container.querySelectorAll('script'));
        for (const oldScript of scripts) {
          const newScript = document.createElement('script');
          newScript.type = oldScript.type || 'text/javascript'; //If any scripts rely on defer or type="module", preserve attributes
          if (oldScript.defer) newScript.defer = true;
          if (oldScript.noModule) newScript.noModule = true;

          newScript.className = 'injected';

          if (oldScript.src) {
            await new Promise(resolve => {
              newScript.src = oldScript.src;
              newScript.onload = resolve;
              document.body.appendChild(newScript);
            });
          } else {
            newScript.textContent = oldScript.textContent;
            document.body.appendChild(newScript);
          }
        }
      }

      await injectScripts(document.body);
      
      
      */
    } 
    catch (err) {
      console.error("Device proof error:", err.message); 
      await fadeOutIn(loginHeader, err.message);
      loginBtn.disabled = false;
    }    


    /*
    getFingerprintWithCallback(async (visitorId) => {   //the parameter that is being passed is an arrow function.
      //1) Creates a browser cookie 2) Stores it in WebView2’s cookie jar  3) Makes fingerprint eligible to be sent on every request
      if (!visitorId) {
        console.error("Fingerprint unavailable");
        loginBtn.disabled = false;
        return;
      }      
      
      document.cookie = `fingerprint=${visitorId}; path=/; SameSite=Strict`; //visitorId get replaced by visitorIdOnlyInMem
      try {
        const nonceResp = await fetch('/contentFiles-nonce', { credentials: 'include' });// 1. Request a short-lived nonce from the server
        if (!nonceResp.ok) throw new Error("Failed to get nonce");
        const { nonce } = await nonceResp.json();
        const nonceBytes = Uint8Array.from(atob(nonce), c => c.charCodeAt(0));// Convert nonce from base64 to Uint8Array

        // 2. Get SESSION BINDING from C# (NOT TLS exporter)
        // Returns Uint8Array (SHA256(accessToken)) which is cookie.value
        const sessionBindingRaw = await chrome.webview.hostObjects.noelsApp.GetSessionBindingBridge();
        const sessionBinding = new Uint8Array(sessionBindingRaw);
        // 3. Compute proof = HMAC(K_device, nonce || sessionBinding)
          //var K_device = resData.nonce; //make sure resData.nonce is really your device secret. You probably want a server-issued K_device tied to this device. Using the login nonce is not secure.
        const K_device = Uint8Array.from(
          atob(resData.nonce),
          c => c.charCodeAt(0)
        );
        const proofBytes = await HMAC(
          K_device,
          concat(nonceBytes, sessionBinding)
        );

        // 4. Send authenticated request
        const contentResp = await fetch('/contentFiless', {
          method: 'GET',
          headers: {
            'X-Nonce': nonce,
            'X-Proof': btoa(String.fromCharCode(...proofBytes))
          },
          credentials: 'include'
        });

        if (!contentResp.ok) {
          let errMsg = 'Request failed';
          try {
            const errJson = await contentResp.json();
            errMsg = errJson.error || errMsg;
          } catch {
            // response wasn't JSON, ignore JSON parse failures and continue
          }
          loginBtn.disabled = false; //nonce expired, allow user to retry logging in
          throw new Error(errMsg);
        } 
        window.location.href = '/contentFiles';
      } 
      catch (err) {
        console.error("Error fetching /contentFiles:", err);
      }
    });*/
  }
    //if (userVerificationResult.includes("successfully")) {  window.location.href = '/contentFiles';  }    
    // Success — parse body
    //window.location.href = '/'; //or any page you want to send them to // ✅ this triggers after login // triggers a normal HTTP GET / request to your server//same as http://localhost:2160/
    //window.location.href = '/'; will go to the page, no longer in control of javascript, inspecting the response, handling fetch(), etc.
});

const regisBtn = document.querySelector('#register-form button[type="submit"]');// Select the register button
regisBtn.disabled = false;

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();  //prevents page reload, so you can handle the form submission with JavaScript
  if (isTransitioning || regisBtn.disabled) return;
  regisBtn.disabled = true; // disable immediately to prevent double submits
  
  const vmVerificationResult = await chrome.webview.hostObjects.noelsApp.PerformVMvericationBridge();
  if (vmVerificationResult !== "Hardware"){ 
    await fadeOutIn(regisHeader, vmVerificationResult);
    return;
  }   
  

  if (planOptions[0].classList.contains('haloGlow')){ // not in the default message but a message for the reader about the registration state
      planOptions.forEach(aPlanOption =>  { aPlanOption.classList.remove('haloGlow'); });    
  }

  const data = await getDataToSend(e);
  if (!data) return; // registration or fingerprint failed
  console.log("Outgoing request body:", data);
  console.log("Outgoing request body (JSON):", JSON.stringify(data, null, 2));
  let response;
  try{
    response = await fetch('/regisStart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } 
  catch (err) {  //issues sending the request
    console.error(err);
    await fadeOutIn(regisHeader, 'Failed to initialize registration.<br>Network connection failed. Please try again.'); //triggered when disconnected
    regisBtn.disabled = false;  //regis button reactivated bc user didn't register successfully, since regisBtn.disabled is false, upon entering addEventListener 'mouseup', it won't return immediately so the registration default header will fade in
    checkboxes.forEach(chk => { chk.disabled = false; });
    return;
  }
  //checkboxes.forEach(chk => { chk.disabled = true; }); // as soon as formData has data on checkbox and no err was caught, disable checkboxes

  let status = response.status;
  let resData;
  try {
    resData = await response.json();
  } 
  catch {   //issues receiving the request i.e. invalid JSON
    await fadeOutIn(regisHeader, 'Server returned invalid response. Please try again.');
    return;
  }   
  if (!response.ok) { //true if the HTTP status code is in the 200–299   false if the status code is outside that range (e.g., 400, 404, 500).
    regisBtn.disabled = false;  //regis button reactivated bc user didn't register successfully
    //checkboxes.forEach(chk => { chk.disabled = false; });
    if (status === 400) {//Username must be 3-20 characters long, Password must have at least 5 characters, Please choose a subscription plan
      //const data = await response.json();
      const messages = resData.errors.map(err => err.msg).join('<br>');

      await fadeOutIn(regisHeader, messages, 'red',
        resData.errors.some(err => err.msg === 'Please choose a subscription plan') ? 'multipleHaloGlows' : undefined //4th parameter is multipleHaloGlows' OR undefined
      );   
      return;        
    }
    else if (status === 500){
      await fadeOutIn(regisHeader, resData.error); //😲 An unexpected error occurred.<br>Please try again later.
      return;
    } 
    else{// any other unexpected error (401, 403, 404, etc.)
      await fadeOutIn(regisHeader, 'Initial verification failed:<br>' + (resData.error || 'Unknown error'), 'white'); //run if status is none of the above(400,409,500)
      //await fadeOutIn(regisHeader, `Unexpected error: ${status}`);
      return;
    }
  }
  checkboxes.forEach(chk => { chk.disabled = true; }); // formData has data on checkbox and no err was caught, disable checkboxes
  // variable to prevent clicking to go back to "registration form" header
  const messageWithDots = 'Registration in progress <span class="loading-dots poppins"><span>.</span><span>.</span><span>.</span></span>';
  await fadeOutIn(regisHeader, messageWithDots, 'white');

  let nonceBase64         = resData.nonce;// server-generated nonce
  let encryptedBase64     = resData.secret;
  let credentialBlobBytes = resData.credentialBlob; //nonceCB
  let credentialBlob      = resData.credentialBlobBase64; //fake
  let encryptedSecret     = resData.encryptedSecretBase64; //trick
  let control             = resData.control; 

  const attestationResult = await chrome.webview.hostObjects.noelsApp.PerformFullAttestationBridge(publicURL, 
                            nonceBase64, encryptedBase64, credentialBlobBytes, credentialBlob, encryptedSecret, control);
  if (!attestationResult){ // This error message is already thrown but added this just in case somehow attestationResult returns false
    await fadeOutIn(regisHeader, 'This application requires a physical Windows PC.<br>Virtual machines are not supported.');
    return;
  } 

  if (attestationResult.includes("Registered successfully")){
    const decoratedResult = `<span class="spotlight3">${attestationResult}</span>`;
    await fadeOutIn(regisHeader, decoratedResult, "WhiteSmoke");
  }
  else 
  {
    if (attestationResult.includes("Email already in use")||attestationResult.includes("Time period expired")||
        attestationResult.includes("Failed request")      ||attestationResult.includes("Please try again")){
      console.log("attestationResult", attestationResult);

      regisBtn.disabled = false;  //regis button reactivated bc user didn't register successfully
      checkboxes.forEach(chk => { chk.disabled = false; });
    }
    await fadeOutIn(regisHeader, attestationResult);
  }
}); //end of document.getElementById('register-form').addEventListener('submit', async (e) => {


let fpAgent = null;
let visitorIdOnlyInMem = null; // lives only in browser memory
function getFingerprintWithCallback(callback) {  //will only return either callback(visitorIdOnlyInMem); or callback(null);
  if (visitorIdOnlyInMem) {
    callback(visitorIdOnlyInMem);  //Call the arrow function, and pass visitorIdOnlyInMem as its argument  //visitorIdOnlyInMem replaces visitorId
    return;
  }

  if (!window.FingerprintJS) {
    console.error('FingerprintJS is not available');
    callback(null);
    return;
  }

  const loadAndGet = async () => {
    try {
      if (!fpAgent) {
        fpAgent = await FingerprintJS.load();
      }
      const result = await fpAgent.get();
      visitorIdOnlyInMem = result.visitorId;
      callback(visitorIdOnlyInMem);
    } 
    catch (error) {
      console.error('FingerprintJS error:', error);
      callback(null);
    }
  };

  loadAndGet();
}
async function getFingerprint() {
  if (visitorIdOnlyInMem) {
    //console.log('Using in-memory visitorId:', visitorIdOnlyInMem); //1b2ce90958ef29b31a9e88d406ddc98c
    return visitorIdOnlyInMem;
  }
  if (!window.FingerprintJS) {  //check to ensure that the FingerprintJS library is available
    return null; //throw new Error('FingerprintJS is not available');
  }
  try { // If not cached, initialize FingerprintJS and generate visitorId
    if (!fpAgent) {
      fpAgent = await FingerprintJS.load(); // load the script once
      //console.log('FingerprintJS agent initialized'); 
    }
    const result = await fpAgent.get();
    visitorIdOnlyInMem = result.visitorId;//visitorId is a predefined property name that FingerprintJS always includes in its result object
    return visitorIdOnlyInMem;  
  } 
  catch (error) {
    console.error('FingerprintJS error:', error);
    return null;
  }
}

/* 
// Usage
getVisitorId().then(id => {
  console.log('Visitor ID:', id);
}); */

function toInnerHTML(container, content){  
  const template = document.createElement('template'); //With <div>, once you set .innerHTML, the content is live DOM — even if it's not attached to the main document yet. Browsers may start to parse, load resources, or run scripts.
  const fragment = document.createDocumentFragment();  
  
  template.innerHTML = content;  //Since <template> content is inert, you avoid any flicker or reflow issues while you build or move nodes around.
  while (template.content.firstChild) {  //moves all child nodes from template.content, one at a time (parsed nodes inside a <template> are actually in its .content property — not directly on the <template> element itself.)
    fragment.appendChild(template.content.firstChild);  //removes the node from its original parent (template) when moving it to fragment.
  }
  container.replaceChildren(fragment);
}

async function getDataToSend(e){  
  const key = await chrome.webview.hostObjects.noelsApp.Register(); // key = publicKeyB64 (RSA)
  if (!key) {//if key wasn't generated, 'RegisterDeviceKey() will return null to Register()
    await fadeOutIn(regisHeader, 'Security Device not detected.<br>Please check your device and try again.');
    return;
  }   
  const visitorId = await getFingerprint();
  if (!visitorId) {
    await fadeOutIn(regisHeader, 'Your device could not be authenticated.<br>Please restore your settings and try again.'); // no FingerprintJS
    return;
  } 
  const formData = new FormData(e.target);   // gets all the data from the input fields including the checked checkbox's value
  const data = Object.fromEntries(formData);  
  data.device_fingerprint = visitorId;       // Add fingerprint attribute to data being sent
  data.tpmKey = key;
  return data;
}





/* 
____________________________________________________________________________
Website → Payment → App (PC/Android) → TPM/Device Binding → Subscription
____________________________________________________________________________
1) Website Landing Page

2) Marketing information about your app and subscription.

User clicks “Download / Get Started.”

Collect Payment Info

User enters email + credit card on your website.

Charge $15 per device immediately.

Store:

Email

Tokenized payment info

Device placeholder (will bind later)

Download permission status

3) Provide App Download

After successful $15 payment, provide:

Windows/macOS/Linux installer

Android APK or AAB for sideloading

4) App Installation

User installs the app on their chosen device.

5) App Registration Page

Collect:

Username

Email (must match website payment)

Password

Subscription type (monthly/yearly)

6) Server Verification

Check that the email used has paid the $15 device fee.

Confirm payment info exists and is valid.

7) Charge Subscription Fee

Using stored payment info, charge the subscription (e.g., $10/month).

If successful → proceed.

If failed → registration blocked / show error.

8) Device Binding (Anti-Account Sharing)

On first login/registration:

Android → bind TPM-backed key

PC → bind unique hardware ID

Store device binding in the database.

9) Grant Access

User now has access to subscription services.

Future logins require TPM/device verification.

Each subscription can only be used on one device at a time.

Key Features

$15 per device enforced at website before download.

Subscription starts inside the app after registration.

Device binding prevents account sharing.

Works on PC and Android. iOS would require App Store/TestFlight for distribution.

Perfect — here’s a step-by-step server logic for registration that enforces the $15 per-device fee and prevents account sharing, even if someone tries to use another person’s email:
_______________________________________________________________________________________
Server Registration Logic
_______________________________________________________________________________________
1) Receive registration request from app

Input: username, email, password, subscription_type, device_id (TPM key or unique hardware ID).

2) Check if email exists in the database

IF email NOT in database:
    Proceed to next step
ELSE:
    Return error: "Email already registered. Please log in."


Prevents creating multiple accounts with the same email.

3) Verify $15 per-device payment

Look up email + device_id in your device_payments table:

IF record exists AND payment_status = 'paid':
    Proceed
ELSE:
    Return error: "This device has not paid the $15 entry fee."


Even if Friend B knows Friend A’s email, their device_id will not match → registration blocked.

4) Charge subscription fee

Use stored payment method (token) from initial $15 payment, or request a new payment.

On success → create subscription record and set status = active.

On failure → return error.

5) Bind device to account

Store device_id → user_id mapping in device_bindings table.

Future logins must verify the device via TPM / hardware ID.

6) Return success to app

Account created.

Subscription active.

Device bound to account.

___________________________________________________________________________________
Database Tables Overview
___________________________________________________________________________________
1) users

user_id (PK)

username

email (unique)

password_hash

subscription_status

2) device_payments

device_id (TPM key or hardware ID)

user_id (FK)

email

payment_status (paid / pending)

payment_token

3) device_bindings

device_id (PK)

user_id (FK)

first_login_timestamp

✅ Key Security Points

-Email alone cannot grant access — device must also match a paid record.

-Each device pays separately.

-Device binding prevents account sharing even if someone knows another user’s credentials.

-Optionally, log failed login attempts for security monitoring.

_______________________________________________________________
to be specific he owns and academy. students come to learn from English speaking teachers. The academy makes the students read books and answer questions. The teacher explains the reading material and helps them understand the answers in the workbook. So the business is operating fine without my app. But students learn ineffectively and if they use my app, they will learn more effectively. That's why even though they don't need it, it will be very beneficial to the student. The content creator who is the owner of the academy already has contents in  his workbooks. He just has to transfer them into my app and add some details.
ChatGPT의 말:
Thanks, that clarifies things a lot. Here’s how I’d frame it from a revenue-share perspective:

You built the app and handle everything technical: server, database, login, payments, updates.

He owns the content and his existing students: but your app is optional and improves learning outcomes. Without your app, his business still runs fine.

He’s just “porting” existing content and adding minor details—so he’s doing less work than you, and the value of your app is the main driver of why students would pay.

💡 Implication for revenue split:

Since your work is the core enabler and the students pay you, you can reasonably keep 70–80% of the subscription fee.

Giving him 20–30% is fair as an incentive for him to integrate content, but he doesn’t deserve a majority because the app itself is what makes the extra revenue possible.



*/

