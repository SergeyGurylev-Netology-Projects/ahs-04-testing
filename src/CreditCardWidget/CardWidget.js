import markup from './markup';
import { getValidCard, isCardNumberValid } from './validators';

class CardWidget {
  constructor(container) {
    this.container = container;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  static get markup() {
    return markup;
  }

  bindToDOM() {
    this.container.innerHTML = CardWidget.markup;
    this.input = this.container.querySelector('.card-number-control');
    this.submit = this.container.querySelector('.card-number-btn');
    this.cards = Array.from(this.container.getElementsByClassName('card'));

    this.container.addEventListener('submit', this.onSubmit);
    this.container.addEventListener('input', this.onInput);
  }

  onSubmit(e) {
    e.preventDefault();

    const { value } = this.input;
    if (isCardNumberValid(value)) {
      this.input.classList.add('valid');
    } else {
      this.input.classList.add('invalid');
    }
  }

  onInput() {
    this.input.classList.remove('invalid');
    this.input.classList.remove('valid');

    const validCard = getValidCard(this.input.value);

    this.cards.forEach(el => {
      if (el.classList.contains(validCard)) {
        el.classList.remove('cdisabled');
      } else {
        el.classList.add('cdisabled');
      }
    });
  }
}

export default CardWidget;
