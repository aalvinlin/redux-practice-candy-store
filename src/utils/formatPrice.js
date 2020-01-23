// input: a number with up to 2 decimal places
// output: a number formatted with comma separator and a dollar sign

export const formatPrice = (price) => {

    let priceString = price.toString();

    let parts = priceString.split(".");

    let wholeNumber = parts[0];
    let decimal = parts[1];

    if (!decimal)
        { decimal = ""; }
    else
        { decimal = "." + decimal; }

    let placeValue = 1;
    let wholeNumberWithCommas = "";

    for (let i = wholeNumber.length - 1; i >= 0; i--, placeValue++)
        {
            wholeNumberWithCommas = wholeNumber[i] + wholeNumberWithCommas;

            if (i !== 0 && placeValue % 3 === 0)
                {
                    wholeNumberWithCommas = "," + wholeNumberWithCommas;
                }
        }

    // trim decimal in case there are floating point issues
    let decimalFormatted = decimal.slice(0, 2);

    // if the hundredths place is equal to zero, add a zero
    if (parseInt(decimalFormatted) < 10)
        { decimalFormatted += "0"; }

    return "$" + wholeNumberWithCommas + decimalFormatted;

}