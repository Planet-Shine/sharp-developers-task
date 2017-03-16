

export const validEmailReg = /^[a-zA-Z0-9\._\-]+@[a-zA-Z0-9\-]+\.(?:[a-zA-Z0-9\-\.]+)+$/i;

export const filledStringReg = /\S/;

export const floatReg = /^\s*(\d+)?(?:\.|,)?(\d+)?\s*$/;


export const parsePrice = (price) => {
    const priceMatch = String(price).match(floatReg);
    if (priceMatch === null || !filledStringReg.test(price)) {
        return null;
    }
    const integerPart = priceMatch[1] || '';
    var decimalPart = parseInt(priceMatch[2] || '');
    decimalPart = (parseInt(decimalPart, 10) && `.${decimalPart}`) || '';
    return parseFloat(parseFloat(`${integerPart}${decimalPart}`).toFixed(2));
};

export const formatPrice = (price) => {
    var price = parsePrice(price);
    if (price === null) {
        return null;
    }
    price = (price % 1) ? price.toFixed(2) : price;
    return String(price).replace('.', ',');
};