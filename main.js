exports.randombuffer = function(charlength) {
  const crypto = require('crypto');
  const bufferchars = crypto.randomBytes(charlength);
  return bufferchars;
}

exports.randomhex = function(charlength) {
  const crypto = require('crypto');
  let newnum = Math.ceil(charlength/2)*2;
  if (newnum !== charlength) {
    const colors = require('colors');
    console.log(colors.bgBlack.red('[WARNING]') + ': ' + colors.red(`Number ${charlength} must be a multiple of 2, therefore it was corrected to ${newnum}`));
    console.log(colors.bgBlack.yellow('[NOTICE]') + ': ' + colors.yellow(`To generate numbers without the multiplier limit, use elecrypt.nolimhex()`));
  }
  let chars = newnum / 2;
  const bufferchars = crypto.randomBytes(chars);
  return bufferchars.toString('hex');
}

exports.nolimhex = function(charlength) {
  const crypto = require('crypto');
  const bufferchars = crypto.randomBytes(charlength);
  const chars1 = bufferchars.toString('hex');
  let chars2 = chars1.slice(0, charlength);
  return chars2;
}

exports.encrypt = function(data, optkey, method) {
    const crypto = require('crypto');
    let iv = crypto.randomBytes(16);
        let encone = crypto.randomBytes(16);
        let encryptionkey = encone.toString('hex');
        let algo = "aes-256-cbc";
        let encodedformat = "hex";
        let decodedformat = "utf-8"

      if (optkey) {
          if (optkey == "array") {
            method = optkey;
        } else if (optkey.length !== 32) {
          throw new RangeError("Encryption Key must be 32 bytes")
        } else {
          encryptionkey = optkey;
        }
      }
      
      let cipher = crypto.createCipheriv(algo, encryptionkey, iv);
        let encrypted = cipher.update(data, decodedformat, encodedformat);
        encrypted += cipher.final(encodedformat);
        iv = iv.toString('hex');
        let allt = encryptionkey + "." + iv + "." + encrypted;
        if (method == "array") {
          return allt.split('.');
        } else {
          return allt;
        }
  }

exports.decrypt = function(data) {
    const crypto = require('crypto');
      let parts = data.split(".");
      let encryptionkey = parts[0];
      let iv = Buffer.from(parts[1], 'hex');
      let encrypted = parts[2];
      let algo = "aes-256-cbc";
        let encodedformat = "hex";
        let decodedformat = "utf-8"

      let decipher = crypto.createDecipheriv(algo, encryptionkey, iv);
        let decrypted = decipher.update(encrypted, encodedformat, decodedformat);
        decrypted += decipher.final(decodedformat);
        return decrypted;
}