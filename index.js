const isVisa = (cardNumber) => cardNumber[0] === '4';
const isMasterCard = (cardNumber) => {
  // 51 - 55
  // 222100–272099
  const num2 = +cardNumber.substring(0, 2);
  const num4 = +cardNumber.substring(0, 4);
  return (num2 >= 51 && num2 <= 55) || (num4 >= 2221 && num4 <= 2720);
};
const isJcb = (cardNumber) => {
  // 3528‑3589
  const num = +cardNumber.substring(0, 4);
  return num >= 3528 && num <= 3589;
};

const getCardBrand = (cardNumber) => {
  if (cardNumber.lenght === 0) {
    return '';
  }
  if (isVisa(cardNumber)) {
    return 'visa';
  } else if (isMasterCard(cardNumber)) {
    return 'master-card';
  } else if (isJcb(cardNumber)) {
    return 'jcb';
  }
  return '';
};

module.exports = getCardBrand;
