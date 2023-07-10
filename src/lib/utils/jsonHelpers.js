/**
 * Removes specific keys from a JSON object.
 *
 * @param {object} json - The JSON object from which keys will be removed.
 * @param {string[]} keys - An array of keys to be removed.
 * @returns {object} - A new JSON object with the specified keys removed.
 */
function removeKeys(json, keys) {
	if (typeof json !== 'object' || json === null) {
		return json;
	}

	if (Array.isArray(json)) {
		return json.map((item) => removeKeys(item, keys));
	}

	const newJson = {};

	for (let key in json) {
		if (!keys.includes(key)) {
			newJson[key] = removeKeys(json[key], keys);
		}
	}

	return newJson;
}

export { removeKeys };
