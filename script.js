const app =
    document.getElementById("app");

const terminalLayer =
    document.getElementById("terminalLayer");

const binaryLayer =
    document.getElementById("binaryLayer");

const alertLayer =
    document.getElementById("alertLayer");

const stopButton =
    document.getElementById("stopButton");

const attemptsElement =
    document.getElementById("attempts");

const finalMessage =
    document.getElementById("finalMessage");

const progressBar =
    document.getElementById("progressBar");

const percentage =
    document.getElementById("percentage");

const processText =
    document.getElementById("processText");

const statusText =
    document.getElementById("statusText");

const intrusionMessage =
    document.getElementById("intrusionMessage");


let attempts = 0;

let progress = 0;

let finished = false;


/* =================================
   RELOJ
================================= */

function updateClock() {

    const now = new Date();

    document.getElementById("clock")
        .textContent =
        now.toLocaleTimeString(
            "es-MX",
            {
                hour12: false
            }
        );

}


setInterval(
    updateClock,
    1000
);

updateClock();


/* =================================
   PROCESOS
================================= */

const processes = [

    "INITIALIZING",

    "SCANNING",

    "ANALYZING",

    "CHECKING SERVICES",

    "ENUMERATING",

    "VERIFYING",

    "PROCESSING",

    "EXTRACTING",

    "ESTABLISHING SESSION",

    "REMOTE ACCESS"

];


let processIndex = 0;


setInterval(() => {

    if (finished) {
        return;
    }

    processIndex++;

    if (
        processIndex >=
        processes.length
    ) {

        processIndex = 0;

    }

    processText.textContent =
        processes[processIndex];

}, 800);


/* =================================
   BARRA
================================= */

setInterval(() => {

    if (finished) {
        return;
    }

    progress +=
        Math.random() * 3;


    if (progress >= 100) {

        progress = 100;

        statusText.textContent =
            "ANOMALY DETECTED";

        statusText.style.color =
            "#a16b6b";

    }


    progressBar.style.width =
        progress + "%";


    percentage.textContent =
        Math.floor(progress);

}, 180);


/* =================================
   BINARIO
================================= */

function randomBinary(length) {

    let result = "";

    for (
        let i = 0;
        i < length;
        i++
    ) {

        result +=
            Math.random() > .5
                ? "1"
                : "0";

    }

    return result;

}


function createBinary() {

    if (finished) {
        return;
    }


    const element =
        document.createElement("div");


    element.className =
        "binary";


    element.textContent =
        randomBinary(
            30 +
            Math.floor(
                Math.random() * 70
            )
        );


    element.style.left =
        Math.random() * 95 + "%";


    element.style.top =
        Math.random() * 100 + "%";


    binaryLayer.appendChild(
        element
    );


    setTimeout(() => {

        element.remove();

    }, 5000);

}


setInterval(
    createBinary,
    300
);


/* =================================
   TERMINALES
================================= */

const terminalCommands = [

    "initializing process...",

    "checking connection...",

    "connection established",

    "enumerating services...",

    "checking active sessions...",

    "analyzing response...",

    "request accepted",

    "session created",

    "processing data...",

    "verification bypassed",

    "access granted",

    "writing response...",

    "operation complete",

    "remote session active"

];


function createTerminal() {

    if (finished) {
        return;
    }


    const terminal =
        document.createElement("div");


    terminal.className =
        "terminal";


    const maxX =
        Math.max(
            5,
            window.innerWidth - 280
        );


    const maxY =
        Math.max(
            100,
            window.innerHeight - 200
        );


    terminal.style.left =
        Math.random() *
        maxX +
        "px";


    terminal.style.top =
        50 +
        Math.random() *
        (maxY - 50) +
        "px";


    terminal.innerHTML = `

        <div class="terminal-header">

            terminal —
            session_${Math.floor(
                Math.random() * 9999
            )}

        </div>


        <div class="terminal-content">

        </div>

    `;


    terminalLayer.appendChild(
        terminal
    );


    const content =
        terminal.querySelector(
            ".terminal-content"
        );


    let lineIndex = 0;


    const interval =
        setInterval(() => {

            if (
                !terminal.parentElement ||
                finished
            ) {

                clearInterval(interval);

                return;

            }


            const line =
                document.createElement(
                    "div"
                );


            if (
                Math.random() < .22
            ) {

                line.className =
                    "danger";


                line.textContent =
                    "WARNING: " +
                    randomBinary(18);

            }

            else {

                line.textContent =
                    terminalCommands[
                        lineIndex %
                        terminalCommands.length
                    ];

            }


            content.appendChild(
                line
            );


            if (
                content.children.length > 9
            ) {

                content.removeChild(
                    content.firstChild
                );

            }


            lineIndex++;


        }, 230);


    setTimeout(() => {

        clearInterval(interval);

        terminal.remove();

    }, 6500);

}


setInterval(() => {

    createTerminal();


    if (
        Math.random() < .45
    ) {

        setTimeout(
            createTerminal,
            300
        );

    }

}, 1100);


/* =================================
   ALERTAS
================================= */

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

    if (finished) {
        return;
    }


    const alert =
        document.createElement("div");


    alert.className =
        "alert";


    const message =
        alerts[
            Math.floor(
                Math.random() *
                alerts.length
            )
        ];


    alert.innerHTML = `

        <div class="alert-header">

            SECURITY EVENT

        </div>


        <div class="alert-body">

            <strong>

                ${message}

            </strong>

            <br><br>

            Event ID:

            ${Math.floor(
                Math.random() * 999999
            )}

            <br>

            Status:
            processing

            <br>


            <button class="alert-button">

                CLOSE

            </button>

        </div>

    `;


    const maxX =
        Math.max(
            5,
            window.innerWidth - 255
        );


    const maxY =
        Math.max(
            80,
            window.innerHeight - 230
        );


    alert.style.left =
        Math.random() *
        maxX +
        "px";


    alert.style.top =
        50 +
        Math.random() *
        (maxY - 50) +
        "px";


    alertLayer.appendChild(
        alert
    );


    alert.querySelector(
        ".alert-button"
    ).addEventListener(
        "click",
        () => alert.remove()
    );


    setTimeout(() => {

        if (
            alert.parentElement
        ) {

            alert.remove();

        }

    }, 4500);

}


setInterval(() => {

    createAlert();


    if (
        Math.random() < .35
    ) {

        createAlert();

    }

}, 900);


/* =================================
   MENSAJES CENTRALES
================================= */

const centralMessages = [

    "SYSTEM ACCESS DETECTED",

    "REMOTE SESSION ACTIVE",

    "SECURITY BYPASS",

    "UNAUTHORIZED ACCESS",

    "SYSTEM COMPROMISED",

    "TE ESTOY HACKEANDO"

];


function showCentralMessage() {

    if (finished) {
        return;
    }


    intrusionMessage.textContent =
        centralMessages[
            Math.floor(
                Math.random() *
                centralMessages.length
            )
        ];


    intrusionMessage.style.opacity =
        "1";


    setTimeout(() => {

        intrusionMessage.style.opacity =
            "0";

    }, 850);

}


setInterval(
    showCentralMessage,
    5000
);


/* =================================
   BOTÓN ESCAPADIZO
================================= */

stopButton.addEventListener(
    "click",
    handleStop
);


function handleStop() {

    if (finished) {
        return;
    }


    attempts++;


    attemptsElement.textContent =
        attempts;


    if (
        attempts < 10
    ) {

        moveButton();


        stopButton.textContent =
            "TERMINATE SESSION [" +
            (10 - attempts) +
            "]";

    }

    else {

        stopButton.textContent =
            "TERMINATE SESSION";


        stopButton.style.left =
            "50%";


        stopButton.style.top =
            "auto";


        stopButton.style.bottom =
            "38px";


        stopButton.style.transform =
            "translateX(-50%)";


        stopButton.removeEventListener(
            "click",
            handleStop
        );


        stopButton.addEventListener(
            "click",
            finishSimulation,
            {
                once: true
            }
        );

    }

}


/* =================================
   MOVER BOTÓN
================================= */

function moveButton() {

    const width =
        stopButton.offsetWidth;


    const height =
        stopButton.offsetHeight;


    const maxX =
        window.innerWidth -
        width -
        10;


    const maxY =
        window.innerHeight -
        height -
        10;


    let x =
        Math.random() *
        Math.max(
            10,
            maxX
        );


    let y =
        55 +
        Math.random() *
        Math.max(
            20,
            maxY - 55
        );


    stopButton.style.left =
        x + "px";


    stopButton.style.top =
        y + "px";


    stopButton.style.bottom =
        "auto";


    stopButton.style.transform =
        "none";

}


/* =================================
   PANTALLA FINAL
================================= */

function finishSimulation() {

    if (finished) {
        return;
    }


    finished = true;


    finalMessage.classList
        .remove("hidden");


    stopButton.style.display =
        "none";


    finalMessage.innerHTML = `

        <div class="final-window">


            <div class="final-header">

                SYSTEM ALERT

            </div>


            <div class="final-content">


                <div class="warning-symbol">

                    !

                </div>


                <h2>

                    HAS SIDO HACKEADO

                </h2>


                <div class="final-line">

                    SYSTEM COMPROMISED

                </div>


                <div class="final-log">

                    [OK] CONNECTION ESTABLISHED<br>

                    [OK] SESSION CREATED<br>

                    [OK] SECURITY BYPASS<br>

                    [OK] ACCESS GRANTED<br>

                    [OK] OPERATION COMPLETE

                </div>


                <p>

                    UNAUTHORIZED ACCESS DETECTED

                </p>


            </div>

        </div>

    `;

}


/* =================================
   ACTIVACIÓN AUTOMÁTICA
   A LOS 15 SEGUNDOS
================================= */

setTimeout(() => {

    finishSimulation();

}, 5000);
