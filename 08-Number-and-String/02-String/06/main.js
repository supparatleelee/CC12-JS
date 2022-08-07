function extractCurrencyValue(string, rate) {
    let convertedCurrency = string.slice(1) * rate
    return 'THB' + convertedCurrency
}

let dollarCurrency = '$120'
extractCurrencyValue(dollarCurrency, 36)