/* =====================================================
   FRAUDSHIELD KENYA
   Frontend JavaScript
===================================================== */


/* ================= LOGIN ================= */

function showLogin() {

    const modal = document.getElementById("loginModal");

    modal.style.display = "flex";

}


function closeLogin() {

    const modal = document.getElementById("loginModal");

    modal.style.display = "none";

}


window.onclick = function(event) {

    const modal = document.getElementById("loginModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


/* ================= SCAM INFORMATION ================= */

function showScam(type) {

    const information = {

        "Phishing":
            "Phishing uses fake emails, websites or messages to trick users into revealing confidential information or performing unsafe actions.",

        "Smishing":
            "Smishing is phishing delivered through SMS or text-based communication. Be careful with unexpected links and urgent requests.",

        "Vishing":
            "Vishing uses telephone calls to impersonate trusted organizations, customer-care representatives or other people.",

        "Mobile Money Fraud":
            "Mobile-money fraud may involve fake customer care, fraudulent transaction requests, fake reversals or requests for authentication codes.",

        "Identity Theft":
            "Identity theft occurs when personal identifying information is obtained and used without authorization.",

        "Online Shopping Scam":
            "Online shopping scams involve fake sellers, fraudulent advertisements, counterfeit goods or non-delivery after payment.",

        "Employment Scam":
            "Employment scams advertise fake jobs and may request registration fees, training payments or personal information.",

        "Investment Scam":
            "Investment scams promise unrealistic or guaranteed returns and may gradually persuade victims to send larger amounts of money."

    };


    alert(
        type +
        "\n\n" +
        information[type] +
        "\n\nSafety advice: verify independently before sending money or sharing confidential information."
    );

}


/* ================= MESSAGE VERIFICATION ================= */

function verifyMessage() {

    const message =
        document.getElementById("messageInput").value.toLowerCase();

    const result =
        document.getElementById("verificationResult");


    if (message.trim() === "") {

        result.innerHTML = `
            <div style="
                background:#fff4dd;
                color:#92400e;
                padding:12px;
                border-radius:8px;
                margin-top:10px;
            ">
                Please enter a message or link to check.
            </div>
        `;

        return;

    }


    const warningWords = [

        "urgent",
        "click",
        "password",
        "otp",
        "pin",
        "verify your account",
        "winner",
        "congratulations",
        "send money",
        "payment",
        "free",
        "reward",
        "claim",
        "account blocked",
        "customer care",
        "investment",
        "guaranteed profit"

    ];


    let matches = 0;


    warningWords.forEach(function(word) {

        if (message.includes(word)) {

            matches++;

        }

    });


    if (matches >= 3) {

        result.innerHTML = `
            <div style="
                background:#fee2e2;
                color:#991b1b;
                padding:15px;
                border-radius:8px;
                margin-top:10px;
            ">

                <strong>
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    HIGH RISK
                </strong>

                <p>
                    This content contains several common scam indicators.
                    Do not click links, send money or provide confidential
                    information until the sender has been independently verified.
                </p>

            </div>
        `;

    }

    else if (matches >= 1) {

        result.innerHTML = `
            <div style="
                background:#fff7ed;
                color:#9a3412;
                padding:15px;
                border-radius:8px;
                margin-top:10px;
            ">

                <strong>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    CAUTION
                </strong>

                <p>
                    Some suspicious indicators were detected.
                    Verify the sender using a trusted channel.
                </p>

            </div>
        `;

    }

    else {

        result.innerHTML = `
            <div style="
                background:#dcfce7;
                color:#166534;
                padding:15px;
                border-radius:8px;
                margin-top:10px;
            ">

                <strong>
                    <i class="fa-solid fa-circle-check"></i>
                    NO COMMON INDICATORS DETECTED
                </strong>

                <p>
                    No obvious indicators were detected by this
                    simple frontend checker. This does not prove
                    that the message is legitimate.
                </p>

            </div>
        `;

    }

}


/* ================= INCIDENT REPORT ================= */

document
    .getElementById("reportForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("fullName").value;

        const fraudType =
            document.getElementById("fraudType").value;


        alert(
            "Incident report submitted successfully.\n\n" +
            "Reporter: " + name + "\n" +
            "Fraud Type: " + fraudType +
            "\n\nReference ID: FS-" +
            Math.floor(Math.random() * 900000 + 100000)
        );


        document
            .getElementById("reportForm")
            .reset();

    });