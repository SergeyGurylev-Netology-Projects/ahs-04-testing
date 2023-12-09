import { getValidCard, isCardNumberValid } from '../validators';

test.each([
  ['2', 'mir'],
  ['200000', 'mir'],
  ['30', 'diners_club'],
  ['31', 'jcb'],
  ['4', 'visa'],
  ['50', 'master'],
  ['60', 'discover'],
])(
  ('test getValidCard "%s"'
  ),
  (cardNumber, expected) => {
    const result = getValidCard(cardNumber);
    expect(result).toBe(expected);
  },
);

test.each([
  ['4024007152668645', true],
  ['4920330137818860', true],
  ['5527056949438589', true],
  ['1234567890123456', false],
])(
  ('test isCardNumberValid "%s"'
  ),
  (cardNumber, expected) => {
    const result = isCardNumberValid(cardNumber);
    expect(result).toBe(expected);
  },
);
