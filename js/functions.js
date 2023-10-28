const checkStringLength = (str, maxLength) => str.length <= maxLength;

const isPalindrome = (str) => {
  const formattedStr = str.toLowerCase().replace(/\s/g, '');
  const reversedStr = formattedStr.split('').reverse().join('');
  return formattedStr === reversedStr;
};

const extractNumber = (str) => {
  if (typeof str === 'number') {
    str = str.toString();
  }
  const numbers = str.match(/\d+/g);
  if (!numbers) {
    return NaN;
  }
  return parseInt(numbers.join(''), 10);
};

export { checkStringLength };
export { isPalindrome };
export { extractNumber };
