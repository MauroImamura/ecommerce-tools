async function validateCpf(cpf) {
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfPattern.test(cpf)) {
        return false;
    }

    const cleanedCpf = cpf.replace(/[.-]/g, '');

    if (/^(\d)\1+$/.test(cleanedCpf)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cleanedCpf[i]) * (10 - i);
    }
    let firstCheckDigit = 11 - (sum % 11);
    firstCheckDigit = firstCheckDigit > 9 ? 0 : firstCheckDigit;
    if (firstCheckDigit !== parseInt(cleanedCpf[9])) {
        return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cleanedCpf[i]) * (11 - i);
    }
    let secondCheckDigit = 11 - (sum % 11);
    secondCheckDigit = secondCheckDigit > 9 ? 0 : secondCheckDigit;
    if (secondCheckDigit !== parseInt(cleanedCpf[10])) {
        return false;
    }

    return true;
}

export default validateCpf;