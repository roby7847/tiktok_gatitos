```javascript
const clock = document.getElementById("clock");
const processText = document.getElementById("processText");
const statusText = document.getElementById("statusText");
const progressBar = document.getElementById("progressBar");
const percentage = document.getElementById("percentage");

const terminalLayer = document.getElementById("terminalLayer");
const binaryLayer = document.getElementById("binaryLayer");
const alertLayer = document.getElementById("alertLayer");
const intrusionMessage = document.getElementById("intrusionMessage");

const stopButton = document.getElementById("stopButton");
const attemptsDisplay = document.getElementById("attempts");
const finalMessage = document.getElementById("finalMessage");

let attempts = 0;
let progress = 0;
let finished = false;


// RELOJ
function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

setInterval(updateClock, 1000);
updateClock();


// PROCESOS
const processes = [
    "INITIALIZING SYSTEM...",
    "SCANNING NETWORK...",
    "ANALYZING SERVICES...",
    "CHECKING SECURITY...",
    "ENUMERATING PORTS...",
    "VERIFYING CONNECTION...",
    "PROCESSING REQUEST...",
    "EXTRACTING DATA...",
    "ESTABLISHING SESSION...",
    "REMOTE ACCESS..."
];

let processIndex = 0;

setInterval(() => {

    if (finished) return;

    processText.textContent = processes[processIndex];

    processIndex++;

    if (processIndex >= processes.length) {
        processIndex = 0;
    }

}, 800);


// BARRA DE PROGRESO
const progressInterval = setInterval(() => {

    if (finished) return;

    progress += Math.floor(Math.random() * 7) + 1;

    if (progress >= 100) {
        progress = 100;

        clearInterval(progressInterval);

        statusText.textContent = "ANOMALY DETECTED";
        statusText.style.color = "#b45c5c";
    }

    progressBar.style.width = progress + "%";
    percentage.textContent = progress + "%";

}, 180);


// BINARIO
function randomBinary(length = 32) {

    let result = "";

    for (let i = 0; i < length; i++) {
        result += Math.random() > 0.5 ? "1" : "0";
    }

    return result;
}

function createBinary() {

    if (finished) return;

    const binary = document.createElement("div");

    binary.className = "binary";

    binary.textContent = randomBinary(
        Math.floor(Math.random() * 30) + 15
    );

    binary.style.left = Math.random() * 100 + "%";
    binary.style.top = Math.random() * 100 + "%";

    binaryLayer.appendChild(binary);

    setTimeout(() => {
        binary.remove();
    }, 5000);
}

setInterval(createBinary, 300);


// TERMINALES FALSAS
const commands = [
    "sudo scan --network",
    "checking ports...",
    "connection established",
    "remote session detected",
    "reading system information",
    "analyzing processes",
    "security bypass attempt",
    "access request accepted",
    "extracting system data",
    "remote process active",
    "connection stable"
];

function createTerminal() {

    if (finished) return;

    const terminal = document.createElement("div");

    terminal.className = "fake-terminal";

    terminal.innerHTML = `
        <div class="terminal-header">
            SYSTEM TERMINAL
        </div>

        <div class="terminal-body">
            <span class="terminal-output"></span>
        </div>
    `;

    terminal.style.left = Math.random() * 65 + "%";
    terminal.style.top = Math.random() * 65 + 15 + "%";

    terminalLayer.appendChild(terminal);

    const output =
        terminal.querySelector(".terminal-output");

    let index = 0;

    const terminalInterval = setInterval(() => {

        if (index >= commands.length) {
            clearInterval(terminalInterval);
            return;
        }

        output.innerHTML +=
            "> " + commands[index] + "<br>";

        index++;

    }, 230);

    setTimeout(() => {

        terminal.remove();

        clearInterval(terminalInterval);

    }, 6500);
}

setInterval(createTerminal, 1100);


// ALERTAS
const alerts = [
    "UNAUTHORIZED SESSION DETECTED",
    "REMOTE CONNECTION ESTABLISHED",
    "SYSTEM RESPONSE RECEIVED",
    "SECURITY CHECK FAILED",
    "DATA PROCESS RUNNING",
    "ACTIVE SESSION DETECTED",
    "ACCESS REQUEST ACCEPTED",
    "SYSTEM INTEGRITY WARNING",
    "REMOTE PROCESS ACTIVE",
    "TE ESTOY HACKEANDO",
    "ANALYZING LOCAL RESOURCES",
    "SECURITY BYPASS DETECTED",
    "UNAUTHORIZED ACCESS",
    "REMOTE SESSION CREATED",
    "SYSTEM COMPROMISED"
];

function createAlert() {

    if (finished) return;

    const alert = document.createElement("div");

    alert.className = "security-alert";

    const randomAlert =
        alerts[Math.floor(Math.random() * alerts.length)];

    alert.innerHTML = `
        <div class="alert-header">
            SECURITY WARNING
        </div>

        <div class="alert-body">
            ${randomAlert}
        </div>
    `;

    alert.style.left = Math.random() * 65 + 10 + "%";
    alert.style.top = Math.random() * 60 + 15 + "%";

    alertLayer.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 4500);
}

setInterval(createAlert, 900);


// MENSAJES CENTRALES
const messages = [
    "SYSTEM ACCESS DETECTED",
    "REMOTE SESSION ACTIVE",
    "SECURITY BYPASS",
    "UNAUTHORIZED ACCESS",
    "SYSTEM COMPROMISED",
    "TE ESTOY HACKEANDO"
];

let messageIndex = 0;

setInterval(() => {

    if (finished) return;

    intrusionMessage.textContent =
        messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

}, 5000);


// BOTÓN
function moveButton() {

    const maxX =
        window.innerWidth -
        stopButton.offsetWidth -
        20;

    const maxY =
        window.innerHeight -
        stopButton.offsetHeight -
        20;

    const x =
        Math.random() * Math.max(maxX, 20);

    const y =
        Math.random() * Math.max(maxY, 20);

    stopButton.style.left = x + "px";
    stopButton.style.top = y + "px";
}

stopButton.addEventListener("click", () => {

    if (finished) return;

    attempts++;

    attemptsDisplay.textContent = attempts;

    if (attempts < 10) {

        stopButton.textContent =
            "TERMINATE SESSION";

        moveButton();

    } else {

        stopButton.style.left = "50%";
        stopButton.style.top = "auto";
        stopButton.style.bottom = "30px";
        stopButton.style.transform =
            "translateX(-50%)";

        stopButton.textContent =
            "TERMINATE SESSION";

        stopButton.onclick = finishSimulation;
    }
});


// PANTALLA FINAL
function finishSimulation() {

    if (finished) return;

    finished = true;

    finalMessage.classList.remove("hidden");

    stopButton.style.display = "none";

    const logs =
        finalMessage.querySelector(".final-logs");

    if (logs) {

        logs.innerHTML = `
            &gt; REMOTE SESSION ESTABLISHED<br>
            &gt; SECURITY BYPASS: SUCCESS<br>
            &gt; SYSTEM ACCESS: GRANTED<br>
            &gt; LOCAL RESOURCES: DETECTED<br>
            &gt; SESSION STATUS: ACTIVE<br>
            &gt; SECURITY STATUS: COMPROMISED<br>
            &gt; CONNECTION: STABLE
        `;
    }
}


// FINAL: 6.5 SEGUNDOS
setTimeout(() => {

    finishSimulation();

}, 4000);
```

