const kifle = "Kifle Wodajo";
const diallo = 'Diallo Telli';
const nzo = `Nzo Ekangaki`;
const william = "William Eteki";
const edem = "  Edem Kodjo  ";
const peter = "Peter Onu";
const ide = "Ide Oumarou";
const salim = "Salim Ahmed Salim";
const amara = "Amara Essy";

console.log(kifle[6]); //For the 1st person: print the first letter of their last name 
var dialloNoSpace = diallo.replace(" ","");
console.log(dialloNoSpace.length);//For the 2nd person, print the number of characters in their full name, not counting the space.
console.log(nzo.split(' ').slice(-1));
console.log(nzo.indexOf(" "));
/*For the 3rd person: Use slice to print out their last name. You can use a literal numerical value here.
Use indexOf to find the index of the space in the string, assign that value to a new variable.
Use the new variable and slice to print out their last name.
Think about this: does this second strategy work for other names in the list as well? All of them?*/


//For the 4th person, use slice, toUpperCase, and toLowerCase to print their first name in lowercase and their family name in uppercase. 
var nameSplitted = william.split(' ').slice(-2);
console.log(nameSplitted[0].toLowerCase());
console.log(nameSplitted[1].toUpperCase());

/*For the 5th person, print their name three times: With no spaces before or after their name. With no space before their name.
With no spaces after their name*/
console.log(edem.trim());
console.log(edem.trimStart());
console.log(edem.trimEnd());

/*For the 6th person, use slice to get their first name, then print out their name repeated 3 times: “PeterPeterPeter”.*/
var namePeterSplitted = peter.split(' ').slice(-2);
var firstName = namePeterSplitted[0];
console.log(firstName.repeat(3));

/*For the 7th person, replace the single “m” in their surname with “mm” and print out the result: “Oummarou”.
For the 8th person:
Create a variable with the string “1989-2001” in it.
Use string interpolation with two variables to create the sentence “The 8th secretary-general of the OAU: Salim Ahmed Salim, who held this position from 1989-2001.”
Remember the period character at the end.
For the 9th person: 
Use index access to get the first letter of the first name.
Use slice to get the last name. See if you can do this by finding the space in the name.
Use concatenation to construct the string “A. Essy”.
Don’t forget the period after the “A”.*/