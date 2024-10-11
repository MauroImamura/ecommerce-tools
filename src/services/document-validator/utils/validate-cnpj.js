async function validateCnpj(cnpj) {
    const cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!cnpjPattern.test(cnpj)) {
        return false;
    }

    const cleanedCnpj = cnpj.replace(/[./-]/g, '');

    if (/^(\d)\1+$/.test(cleanedCnpj)) {
        return false;
    }

    const cnpjWeight1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cleanedCnpj[i]) * cnpjWeight1[i];
    }
    let remainder = sum % 11;
    let firstCheckDigit = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cleanedCnpj[12]) !== firstCheckDigit) {
        return false;
    }

    const cnpjWeight2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    sum = 0;
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cleanedCnpj[i]) * cnpjWeight2[i];
    }
    remainder = sum % 11;
    let secondCheckDigit = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cleanedCnpj[13]) !== secondCheckDigit) {
        return false;
    }

    return true;
}

export default validateCnpj;