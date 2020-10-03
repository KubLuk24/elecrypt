# EleCrypt

EleCrypt is an easy to use library for encrypting and decrypting data quickly, this is only a basic version of encryption, but I am planning on adding a lot more!

## Installation

Use the npm i / npm install command in your command line.

```bash
npm i elecrypt
```

## Usage

EleCrypt uses an easy syntax that doesn't need any confusing code around it, encryption key randomizes every time so even if you encrypt the exact same sentance, the decrypted data will never look the same.

### Reference

`encrypt()` - 3 arguments can be provided to the encrypt function: *data, key, format*, where `data` stands for data to be encrypted, `key` stands for a scoped encryption key that *will stay the same* and `format` which can make the module return the encryption in an array.

`decrypt()` - 1 argument can be provided: *data* - this is only the encrypted text.

`randombuffer()` - 1 argument can be provided: *length* - this returns a random buffer value with the length of the `length` argument

`randomhex()` - 1 argument can be provided: *length* - this returns a random hex value that **is locked to the multiplier of 2**, such as 2, 4, 6, 8 etc.

`nolimhex()` - 1 argument can be provided: *length* - this returns a random hex value that **is not locked to the multiplier of 2**

### Value reference

`data` - data can be a string of any length and **is mandatory**
`key` - key can be a string of 32 bytes and **is not mandatory**
`format` - format can only be one string: `array` and **is not mandatory**


**Randomized encryption example**:
```js
//data going to encryption
let EncryptMe = 'encrypt me'

//encryption
let encrypted = elecrypt.encrypt(EncryptMe);
console.log(encrypted); //returns encrypted data to console
```

You can also use an encryption key you declare yourself:

**Scoped encryption example**:
```js
//data going to encryption
let EncryptMe = 'encrypt me'
let encryptionkey = '12345678123456781234567812345678'
//NOTE:  Encryption key has to be exactly 32 bytes

//encryption
let encrypted = elecrypt.encrypt(EncryptMe, encryptionkey);
console.log(encrypted); //returns encrypted data to console
```

Decrypting data is even easier, the module does everything for you!

**Decryption example**:
```js
//encrypted data going to be decrypted
let DecryptMe = '8189243d0e515a1002d3dd00f74142ed.0c910b6dff3ac8c714df9f5c7a0617d3.5efe27156affead102e61285a588b994'

//decryption
let decrypted = elecrypt.decrypt(DecryptMe);
console.log(decrypted); //returns decrypted data to console
```# elecrypt
