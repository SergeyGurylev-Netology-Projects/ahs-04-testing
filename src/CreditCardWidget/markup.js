const markup = `
    <ul class="cards">
        <li><span class="card visa cdisabled" title="Visa">Visa</span></li>
        <li><span class="card master cdisabled" title="Mastercard">Mastercard</span></li>
        <li><span class="card amex cdisabled" title="American Express">American Express</span></li>
        <li><span class="card discover cdisabled" title="Discover">Discover</span></li>
        <li><span class="card jcb cdisabled" title="JCB">JCB</span></li>
        <li><span class="card diners_club cdisabled" title="Diners Club">Diners Club</span></li>
        <li><span class="card mir cdisabled" title="Mir">Mir</span></li>
    </ul>
    <form class="card-number-form-inline" novalidate="novalidate">
        <div class="card-number-form-group">
            <input class="card-number-control" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
            <button class="card-number-btn">Click to Validate</button>
        </div>
    </form>
`;

export default markup;
