const TAX_RATE = 0.08;
const PHONE_PRICE = 100.00;
const ACCESSORY_PRICE = 10;
const SPENDING_THRESHOLD = 120;

var bankAccount;

function main()
{

	bankAccount = prompt('Enter bank account amount: ');

	var continueLoop = true;
	var amount = 0;
	var amountStr;

	// loop til not enough money to buy another phone
	while(continueLoop)
	{
		if((PHONE_PRICE + ACCESSORY_PRICE) < SPENDING_THRESHOLD)
		{
			amount = PHONE_PRICE + ACCESSORY_PRICE;
		}

		else
		{
			amount = PHONE_PRICE;
		}

		amount = amount + calculateTax(amount);
		amountStr = formatPrice(amount);
		console.log("Amount: " + amountStr);

		// can afford
		if(bankAccount >= amount)
		{
			bankAccount = bankAccount - amount;
			console.log('Bank Account: ' + bankAccount);
		}

		else
		{
			continueLoop = false;
			console.log('Not enough money: ' + bankAccount);
		}
	}
}

function calculateTax(amount)
{
	var tax = amount * TAX_RATE;
	console.log('Tax: ' + tax);
	return tax;
}

function formatPrice(price)
{
	return "$" + price.toFixed(2);
}

main();


