import paySystems from './paySystems';

export function getValidCard(value) {
  for (const key in paySystems) {
    if (value.slice(0, key.length) == key) {
      return paySystems[key];
    }
  }

  return undefined;
}

export function isCardNumberValid(value) {
  if (value.length !== 16) {
    return false;
  }

  let s = 0;
  let doubleDigit = false;
  for (let i = value.length - 1; i >= 0; i--) {
    let digit = +value[i];
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    s += digit;
    doubleDigit = !doubleDigit;
  }
  return s % 10 == 0;
}
