export class RotationalCipher {
  static rotate(plain, key) {
    let cipher = "";
    let code;
    for (let i = 0; i < plain.length; i++)
    {
      code = plain.charCodeAt(i);
      if (code >= 65 && code <= 90 )
      {
        if ((code + key) > 90)
        {
          cipher += String.fromCharCode( 64 + ((code + key) - 90) );
        } 
        else
        {
          cipher += String.fromCharCode(code+key);
        }
      }
      else if (code >= 97 && code <= 122)
      {
        if ((code + key) > 122)
        {
          cipher += String.fromCharCode( 96 + ((code + key) - 122));
        }
        else
        {
          cipher += String.fromCharCode(code+key);
        }
      }
      else
      {
        cipher += plain[i];
      }
    }

    return cipher;
  }
}