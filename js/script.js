function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    resetForm();
}
function hitungLuas() {
    var height = parseFloat(document.getElementById('input-height').value);
    var base = parseFloat(document.getElementById('input-base').value);

    if (isNaN(height) || isNaN(base)) {
        alert('Tinggi dan alas harus diisi dengan angka untuk menghitung luas segitiga.');
        return;
    }

    var breakdownLuas = `<strong>Tinggi:</strong> ${height}<br>`;
    breakdownLuas += `<strong>Alas:</strong> ${base}<br>`;
    breakdownLuas += `<strong>Luas:</strong> 0.5 * Tinggi * Alas<br>`;
    
    var luas = 0.5 * height * base;
    breakdownLuas += `<strong>Luas:</strong> 0.5 * ${height} * ${base} = ${luas.toFixed(2)}`;

    document.getElementById('result-luas').innerHTML = breakdownLuas;

    document.getElementById('result-luas').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}

function hitungKeliling() {
    var side1 = parseFloat(document.getElementById('input-side1').value);
    var side2 = parseFloat(document.getElementById('input-side2').value);
    var side3 = parseFloat(document.getElementById('input-side3').value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert('Semua sisi harus diisi dengan angka untuk menghitung keliling segitiga.');
        return;
    }

    var breakdownKeliling = `<strong>Sisi 1:</strong> ${side1}<br>`;
    breakdownKeliling += `<strong>Sisi 2:</strong> ${side2}<br>`;
    breakdownKeliling += `<strong>Sisi 3:</strong> ${side3}<br>`;
    breakdownKeliling += `<strong>Keliling:</strong> Sisi 1 + Sisi 2 + Sisi 3<br>`;
    
    var keliling = side1 + side2 + side3;
    breakdownKeliling += `<strong>Keliling:</strong> ${side1} + ${side2} + ${side3} = ${keliling.toFixed(2)}`;

    document.getElementById('result-keliling').innerHTML = breakdownKeliling;

    document.getElementById('result-keliling').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}

function resetForm() {
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.value = '';
    });

    var results = document.querySelectorAll('.result');
    results.forEach(function(result) {
        result.innerHTML = '';
    });
}

