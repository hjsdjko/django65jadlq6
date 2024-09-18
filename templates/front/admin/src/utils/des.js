import CryptoJS from './cryptojs.js'
let KEY = '1234567890123456'
let IV = ''
// DES加密
export const encryptDes = (message) => {
	const keyHex = CryptoJS.enc.Utf8.parse(KEY);
	const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.toString();
}

// DES解密
export const decryptDes = (ciphertext) => {
	const keyHex = CryptoJS.enc.Utf8.parse(KEY);
	// direct decrypt ciphertext
	const decrypted = CryptoJS.DES.decrypt({
		ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
	}, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return decrypted.toString(CryptoJS.enc.Utf8);
}
export const encryptAES = (str) => {
	const data = CryptoJS.enc.Hex.parse(str);
	const key = CryptoJS.enc.Hex.parse(KEY);
	const iv = CryptoJS.enc.Hex.parse(IV);
	var option = {
		iv: iv,
		mode: CryptoJS.mode['CBC'], //看需求变“CBC”
		padding: CryptoJS.pad['ZeroPadding'] //看需求变“ZeroPadding”
	};
	var encrypted = CryptoJS.AES.encrypt(data, key, option);
	const words = encrypted.ciphertext;
	var hex = CryptoJS.enc.Hex.stringify(words);
	return hex
}
export const decryptAES = (str) => {
	let data = CryptoJS.enc.Hex.parse(str);
	const key = CryptoJS.enc.Hex.parse(KEY);
	const iv = CryptoJS.enc.Hex.parse(IV);
	var option = {
		iv: iv,
		mode: CryptoJS.mode['CBC'], //看需求变“CBC”
		padding: CryptoJS.pad['ZeroPadding'] //看需求变“ZeroPadding”
	};
	data = CryptoJS.enc.Base64.stringify(data);
	const words = CryptoJS.AES.decrypt(data, key, option);
	var hex = CryptoJS.enc.Hex.stringify(words);
	return hex
}