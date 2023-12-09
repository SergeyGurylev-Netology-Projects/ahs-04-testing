import CardWidget from '../CreditCardWidget/CardWidget';
import '../CreditCardWidget/CardWidget.css';

const container = document.querySelector('.card-number');
const cardWidget = new CardWidget(container);

cardWidget.bindToDOM();
