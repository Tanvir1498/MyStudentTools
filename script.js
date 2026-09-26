/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.querySelector(".menu");

    menu.classList.toggle("active");

}



/* =========================
   GPA CALCULATOR
========================= */

function addSubject() {

    const subjects = document.getElementById("subjects");


    const row = document.createElement("div");

    row.className = "subject-row";


    row.innerHTML = `

        <input
            type="text"
            placeholder="Subject name"
            class="subject-name"
        >


        <input
            type="number"
            placeholder="Credit"
            class="credit"
            min="0"
            step="0.5"
        >


        <select class="grade">

            <option value="">
                Select Grade
            </option>

            <option value="4.0">
                A+ (4.00)
            </option>

            <option value="4.0">
                A (4.00)
            </option>

            <option value="3.7">
                A- (3.70)
            </option>

            <option value="3.3">
                B+ (3.30)
            </option>

            <option value="3.0">
                B (3.00)
            </option>

            <option value="2.7">
                B- (2.70)
            </option>

            <option value="2.3">
                C+ (2.30)
            </option>

            <option value="2.0">
                C (2.00)
            </option>

            <option value="1.7">
                C- (1.70)
            </option>

            <option value="1.3">
                D+ (1.30)
            </option>

            <option value="1.0">
                D (1.00)
            </option>

            <option value="0">
                F (0.00)
            </option>

        </select>


        <button
            class="remove-btn"
            onclick="removeSubject(this)"
        >
            ×
        </button>

    `;


    subjects.appendChild(row);

}



/* =========================
   REMOVE SUBJECT
========================= */

function removeSubject(button) {

    const row = button.parentElement;

    row.remove();

}



/* =========================
   CALCULATE GPA
========================= */

function calculateGPA() {

    const rows = document.querySelectorAll(".subject-row");


    let totalCredits = 0;

    let totalPoints = 0;


    rows.forEach(function(row) {

        const creditInput =
            row.querySelector(".credit");

        const gradeInput =
            row.querySelector(".grade");


        const credit =
            parseFloat(creditInput.value);

        const grade =
            parseFloat(gradeInput.value);


        if (
            !isNaN(credit) &&
            !isNaN(grade) &&
            credit > 0
        ) {

            totalCredits += credit;

            totalPoints += credit * grade;

        }

    });


    const result =
        document.getElementById("gpa-result");


    const message =
        document.getElementById("gpa-message");


    if (totalCredits === 0) {

        result.textContent = "0.00";

        message.textContent =
            "Please enter credit and grade.";

        return;

    }


    const gpa =
        totalPoints / totalCredits;


    result.textContent =
        gpa.toFixed(2);


    if (gpa >= 3.5) {

        message.textContent =
            "Excellent performance! 🎉";

    }

    else if (gpa >= 3.0) {

        message.textContent =
            "Great job! Keep it up! 👍";

    }

    else if (gpa >= 2.0) {

        message.textContent =
            "Good effort. You can improve! 💪";

    }

    else {

        message.textContent =
            "Keep studying and try again! 📚";

    }

}