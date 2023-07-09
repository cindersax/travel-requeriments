<script>
	let headersList = {
		Accept: '*/*',
		'User-Agent': 'Thunder Client (https://www.thunderclient.com)'
	};
	let url =
		'https://requirements-api.joinsherpa.com/v2/countries?include=restriction,procedure&language=en-US&filter%5Brestriction.createdAt%5D=2023-07-04&filter%5Bprocedure.createdAt%5D=2023-07-04&key=AIzaSyCd3jDrVQKwFnj_hk3j1gIjkqCghP3c3TY&affiliateId=sherpa';
	let allCountries = [];
	async function getCountries() {
		try {
			let response = await fetch(url, {
				method: 'GET',
				headers: headersList
			});
			let data = await response.json();
			let countries = data.data;
			if (countries) {
				countries.forEach(({ attributes }) => {
					const name = attributes.countryName;
					const isoAlpha = attributes.isoAlpha3;
					const citizenship = attributes.citizenship;
					let countryInfo = { name: name, isoAlpha: isoAlpha, citizenship: citizenship };
					allCountries.push(countryInfo);
				});
			}
			let newJson = JSON.stringify({ countries: allCountries });
			console.log(newJson);
		} catch (error) {
			console.error(error);
		}
	}

	getCountries();
</script>
