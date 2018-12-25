// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// Finally, check the amount against your bank account balance to see if you can afford it or not.
// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
// You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
// Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200;
var BANK_ACCOUNT_BALANCE = 303.91;


function main()
{
	BANK_ACCOUNT_BALANCE = Number(prompt("Enter bank account balance: "));
	var total = 0;
	var tax = 0;

	while(total < BANK_ACCOUNT_BALANCE)
	{
		total = total + PHONE_PRICE;

		if(total < SPENDING_THRESHOLD)
		{
			total = total + ACCESSORY_PRICE;
		}
	}

	console.log("Pre-tax total: " + total);

	tax = calculateTax(total);

	console.log("Tax: " + tax);

	total = total + tax;

	console.log("Total price: " + total);

	total = formatPrice(total);

	console.log("Format: " + total);

	if(total > BANK_ACCOUNT_BALANCE)
	{
		console.log("You can't afford this purchase.");
	}

}

function calculateTax(amount)
{
	return TAX_RATE * amount;

}

function formatPrice(amount)
{
	return "$" + amount.toFixed(2);
}

main();