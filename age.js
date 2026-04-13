function calculateAge(){

    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    if (isNaN(birthdate.getTime())) {
        document.getElementById("result").innerHTML = "Please enter a valid date.";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    const dayDifference = today.getDate() - birthdate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
        monthDifference += 12;
    }

    if (dayDifference < 0) {
        monthDifference--;
        dayDifference = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    let resultHTML = `
            <div class="result-container">
                <div class="result-item">Age: <span>${age}</span> years old.</div>
                <div class="result-item">Months: <span>${monthDifference}</span> months</div>
                <div class="result-item">Days: <span>${dayDifference}</span> days</div>
            </div>
    `;

    document.getElementById("result").innerHTML = resultHTML;


}