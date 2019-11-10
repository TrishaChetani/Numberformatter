export function format(number, currency = "$", delmiter = ",") {
    const numberStr = String(number)
    const [integer, decimal] = numberStr.split(".")
    var count = 0
    var result = ""
    for (var i = integer.length - 1; i >= 0; i--) {
        count++;
        if (count % 3 === 0 && i !== 0 && i !== 1 && i !== 2 && i !== 3) {
            result = delmiter + integer[i] + result
        } else {
            result = integer[i] + result
        }
    }
    if (decimal) {
        return currency + result + "." + decimal
    } else {
        return currency + result
    }
}
