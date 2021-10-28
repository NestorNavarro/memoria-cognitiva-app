class Base64 {
	/** Encodes a string to base64 */
	static encode(str) {
		return Buffer.from(str, "binary").toString("base64");
	}

	/** Decodes a string from base64 */
	static decode(str) {
		return Buffer.from(str, "base64").toString();
	}
}

export default Base64;