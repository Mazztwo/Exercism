export const clean = (phoneNumber) => {
  if (phoneNumber.length === 12 && phoneNumber.search(/[a-z]/ig) !== -1) {throw new Error('Letters not permitted');}
  if (phoneNumber.length === 12 && phoneNumber.search(/@|:|!/) !== -1) {throw new Error('Punctuations not permitted');}

  phoneNumber = phoneNumber.replace(/\D+/g ,"");
  
  if (phoneNumber.length === 10) 
  {
    if (phoneNumber[0] === "0") {throw new Error('Area code cannot start with zero');}
    else if (phoneNumber[0] === "1") {throw new Error('Area code cannot start with one');}
    else if (phoneNumber[3] === "0") {throw new Error('Exchange code cannot start with zero');}
    else if (phoneNumber[3] === "1") {throw new Error('Exchange code cannot start with one');}
  }
  else if (phoneNumber.length === 11)
  {
    if (phoneNumber [0] === "0") {throw new Error('Exchange code cannot start with one');}
    else if (phoneNumber [0] !== "1") {throw new Error('11 digits must start with 1');}
    else if (phoneNumber[1] === "0") {throw new Error('Area code cannot start with zero');}
    else if (phoneNumber[1] === "1") {throw new Error('Area code cannot start with one');}
    else if (phoneNumber[4] === "0") {throw new Error('Exchange code cannot start with zero');}
    else if (phoneNumber[4] === "1") {throw new Error('Exchange code cannot start with one');}
    phoneNumber = phoneNumber.slice(1);
  }
  else if (phoneNumber.length > 11) {throw  new Error('More than 11 digits');}
  else { throw new Error('Incorrect number of digits'); }
  
  return phoneNumber;
};
