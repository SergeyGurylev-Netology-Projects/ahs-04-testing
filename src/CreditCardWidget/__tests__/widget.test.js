import CardWidget from '../CardWidget';

test('render widget', () => {
  document.body.innerHTML = '<div class="card-number"></div>';

  const container = document.querySelector('.card-number');
  const widget = new CardWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(CardWidget.markup);
});

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
  (cardNumber, validCard) => {
    document.body.innerHTML = '<div class="card-number"></div>';

    const container = document.querySelector('.card-number');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    widget.input.value = cardNumber;
    widget.input.dispatchEvent(new Event('input', { bubbles: true }));

    const card = widget.container.querySelector(`.${validCard}`);
    expect(card.classList.contains('cdisabled')).toBe(false);
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
    document.body.innerHTML = '<div class="card-number"></div>';

    const container = document.querySelector('.card-number');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    widget.input.value = cardNumber;
    widget.submit.click();

    expect(widget.input.classList.contains('valid')).toBe(expected);
    expect(widget.input.classList.contains('invalid')).toBe(!expected);
  },
);
