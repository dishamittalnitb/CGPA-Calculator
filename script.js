document.getElementById('calculate-btn').addEventListener('click', () => {
    const weights = [4, 3, 3, 3, 3, 3, 1, 1, 1, 2];
    const fields = [
        'maths', 'fod', 'ds', 'dbms', 'ppl', 
        'dcd', 'dbms-lab', 'dsa-lab', 'ppl-lab', 'pp'
    ];
    
    let sum = 0;

    // Loop through fields and calculate the weighted sum
    for (let i = 0; i < fields.length; i++) {
        const grade = parseFloat(document.getElementById(fields[i]).value);
        if (isNaN(grade) || grade < 0 || grade > 10) {
            alert(`Please enter a valid grade between 0 and 10 for ${fields[i].replace('-', ' ')}`);
            return;
        }
        sum += weights[i] * grade;
    }

    // Calculate and display CGPA
    const cgpa = (sum / 24).toFixed(2);
    document.getElementById('result').innerText = `Your expected CGPA is: ${cgpa}`;
});


//We can add fields for different branches as well as different semester by connecting this to a database using mongo db