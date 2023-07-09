const countries =[
      {
        "name": "Afghanistan",
        "isoAlpha": "AFG",
        "citizenship": "Afghan"
      },
      {
        "name": "Åland Islands",
        "isoAlpha": "ALA",
        "citizenship": "Ålandish"
      },
      {
        "name": "Albania",
        "isoAlpha": "ALB",
        "citizenship": "Albanian"
      },
      {
        "name": "Algeria",
        "isoAlpha": "DZA",
        "citizenship": "Algerian"
      },
      {
        "name": "American Samoa",
        "isoAlpha": "ASM",
        "citizenship": "American Samoan"
      },
      {
        "name": "Andorra",
        "isoAlpha": "AND",
        "citizenship": "Andorran"
      },
      {
        "name": "Angola",
        "isoAlpha": "AGO",
        "citizenship": "Angolan"
      },
      {
        "name": "Anguilla",
        "isoAlpha": "AIA",
        "citizenship": "Anguillian"
      },
      {
        "name": "Antigua and Barbuda",
        "isoAlpha": "ATG",
        "citizenship": "Antiguan, Barbudan"
      },
      {
        "name": "Argentina",
        "isoAlpha": "ARG",
        "citizenship": "Argentinean"
      },
      {
        "name": "Armenia",
        "isoAlpha": "ARM",
        "citizenship": "Armenian"
      },
      {
        "name": "Aruba",
        "isoAlpha": "ABW",
        "citizenship": "Aruban"
      },
      {
        "name": "Australia",
        "isoAlpha": "AUS",
        "citizenship": "Australian"
      },
      {
        "name": "Austria",
        "isoAlpha": "AUT",
        "citizenship": "Austrian"
      },
      {
        "name": "Azerbaijan",
        "isoAlpha": "AZE",
        "citizenship": "Azerbaijani"
      },
      {
        "name": "Bahamas",
        "isoAlpha": "BHS",
        "citizenship": "Bahamian"
      },
      {
        "name": "Bahrain",
        "isoAlpha": "BHR",
        "citizenship": "Bahraini"
      },
      {
        "name": "Bangladesh",
        "isoAlpha": "BGD",
        "citizenship": "Bangladeshi"
      },
      {
        "name": "Barbados",
        "isoAlpha": "BRB",
        "citizenship": "Barbadian"
      },
      {
        "name": "Belarus",
        "isoAlpha": "BLR",
        "citizenship": "Belarusian"
      },
      {
        "name": "Belgium",
        "isoAlpha": "BEL",
        "citizenship": "Belgian"
      },
      {
        "name": "Belize",
        "isoAlpha": "BLZ",
        "citizenship": "Belizean"
      },
      {
        "name": "Benin",
        "isoAlpha": "BEN",
        "citizenship": "Beninese"
      },
      {
        "name": "Bermuda",
        "isoAlpha": "BMU",
        "citizenship": "Bermudian"
      },
      {
        "name": "Bhutan",
        "isoAlpha": "BTN",
        "citizenship": "Bhutanese"
      },
      {
        "name": "Bolivia",
        "isoAlpha": "BOL",
        "citizenship": "Bolivian"
      },
      {
        "name": "Bonaire, Sint Eustatius and Saba",
        "isoAlpha": "BES",
        "citizenship": "Dutch"
      },
      {
        "name": "Bosnia and Herzegovina",
        "isoAlpha": "BIH",
        "citizenship": "Bosnian, Herzegovinian"
      },
      {
        "name": "Botswana",
        "isoAlpha": "BWA",
        "citizenship": "Motswana"
      },
      {
        "name": "Brazil",
        "isoAlpha": "BRA",
        "citizenship": "Brazilian"
      },
      {
        "name": "British Indian Ocean Territory",
        "isoAlpha": "IOT",
        "citizenship": "Indian"
      },
      {
        "name": "United States Minor Outlying Islands",
        "isoAlpha": "UMI",
        "citizenship": "American"
      },
      {
        "name": "British Virgin Islands",
        "isoAlpha": "VGB",
        "citizenship": "Virgin Islander"
      },
      {
        "name": "U.S. Virgin Islands",
        "isoAlpha": "VIR",
        "citizenship": "Virgin Islander"
      },
      {
        "name": "Brunei",
        "isoAlpha": "BRN",
        "citizenship": "Bruneian"
      },
      {
        "name": "Bulgaria",
        "isoAlpha": "BGR",
        "citizenship": "Bulgarian"
      },
      {
        "name": "Burkina Faso",
        "isoAlpha": "BFA",
        "citizenship": "Burkinabe"
      },
      {
        "name": "Burundi",
        "isoAlpha": "BDI",
        "citizenship": "Burundian"
      },
      {
        "name": "Cambodia",
        "isoAlpha": "KHM",
        "citizenship": "Cambodian"
      },
      {
        "name": "Cameroon",
        "isoAlpha": "CMR",
        "citizenship": "Cameroonian"
      },
      {
        "name": "Canada",
        "isoAlpha": "CAN",
        "citizenship": "Canadian"
      },
      {
        "name": "Cape Verde",
        "isoAlpha": "CPV",
        "citizenship": "Cape Verdian"
      },
      {
        "name": "Cayman Islands",
        "isoAlpha": "CYM",
        "citizenship": "Caymanian"
      },
      {
        "name": "Central African Republic",
        "isoAlpha": "CAF",
        "citizenship": "Central African"
      },
      {
        "name": "Chad",
        "isoAlpha": "TCD",
        "citizenship": "Chadian"
      },
      {
        "name": "Chile",
        "isoAlpha": "CHL",
        "citizenship": "Chilean"
      },
      {
        "name": "China",
        "isoAlpha": "CHN",
        "citizenship": "Chinese"
      },
      {
        "name": "Christmas Island",
        "isoAlpha": "CXR",
        "citizenship": "Christmas Island"
      },
      {
        "name": "Cocos (Keeling) Islands",
        "isoAlpha": "CCK",
        "citizenship": "Cocos Islander"
      },
      {
        "name": "Colombia",
        "isoAlpha": "COL",
        "citizenship": "Colombian"
      },
      {
        "name": "Comoros",
        "isoAlpha": "COM",
        "citizenship": "Comoran"
      },
      {
        "name": "Congo",
        "isoAlpha": "COG",
        "citizenship": "Congolese"
      },
      {
        "name": "Democratic Republic of the Congo",
        "isoAlpha": "COD",
        "citizenship": "Congolese"
      },
      {
        "name": "Cook Islands",
        "isoAlpha": "COK",
        "citizenship": "Cook Islander"
      },
      {
        "name": "Costa Rica",
        "isoAlpha": "CRI",
        "citizenship": "Costa Rican"
      },
      {
        "name": "Croatia",
        "isoAlpha": "HRV",
        "citizenship": "Croatian"
      },
      {
        "name": "Cuba",
        "isoAlpha": "CUB",
        "citizenship": "Cuban"
      },
      {
        "name": "Curaçao",
        "isoAlpha": "CUW",
        "citizenship": "Dutch"
      },
      {
        "name": "Cyprus",
        "isoAlpha": "CYP",
        "citizenship": "Cypriot"
      },
      {
        "name": "Greek Administration of Southern Cyprus",
        "isoAlpha": "GASC",
        "citizenship": "Cypriot"
      },
      {
        "name": "Northern Cyprus",
        "isoAlpha": "NX",
        "citizenship": "Cypriot"
      },
      {
        "name": "Czech Republic",
        "isoAlpha": "CZE",
        "citizenship": "Czech"
      },
      {
        "name": "Denmark",
        "isoAlpha": "DNK",
        "citizenship": "Danish"
      },
      {
        "name": "Djibouti",
        "isoAlpha": "DJI",
        "citizenship": "Djibouti"
      },
      {
        "name": "Dominica",
        "isoAlpha": "DMA",
        "citizenship": "Dominican"
      },
      {
        "name": "Dominican Republic",
        "isoAlpha": "DOM",
        "citizenship": "Dominican"
      },
      {
        "name": "Ecuador",
        "isoAlpha": "ECU",
        "citizenship": "Ecuadorean"
      },
      {
        "name": "Egypt",
        "isoAlpha": "EGY",
        "citizenship": "Egyptian"
      },
      {
        "name": "El Salvador",
        "isoAlpha": "SLV",
        "citizenship": "Salvadoran"
      },
      {
        "name": "Equatorial Guinea",
        "isoAlpha": "GNQ",
        "citizenship": "Equatorial Guinean"
      },
      {
        "name": "Eritrea",
        "isoAlpha": "ERI",
        "citizenship": "Eritrean"
      },
      {
        "name": "Estonia",
        "isoAlpha": "EST",
        "citizenship": "Estonian"
      },
      {
        "name": "Ethiopia",
        "isoAlpha": "ETH",
        "citizenship": "Ethiopian"
      },
      {
        "name": "Falkland Islands (Islas Malvinas)",
        "isoAlpha": "FLK",
        "citizenship": "Falkland Islander"
      },
      {
        "name": "Faroe Islands",
        "isoAlpha": "FRO",
        "citizenship": "Faroese"
      },
      {
        "name": "Fiji",
        "isoAlpha": "FJI",
        "citizenship": "Fijian"
      },
      {
        "name": "Finland",
        "isoAlpha": "FIN",
        "citizenship": "Finnish"
      },
      {
        "name": "France",
        "isoAlpha": "FRA",
        "citizenship": "French"
      },
      {
        "name": "French Guiana",
        "isoAlpha": "GUF",
        "citizenship": ""
      },
      {
        "name": "French Polynesia",
        "isoAlpha": "PYF",
        "citizenship": "French Polynesian"
      },
      {
        "name": "Gabon",
        "isoAlpha": "GAB",
        "citizenship": "Gabonese"
      },
      {
        "name": "Gambia",
        "isoAlpha": "GMB",
        "citizenship": "Gambian"
      },
      {
        "name": "Georgia",
        "isoAlpha": "GEO",
        "citizenship": "Georgian"
      },
      {
        "name": "Germany",
        "isoAlpha": "DEU",
        "citizenship": "German"
      },
      {
        "name": "Ghana",
        "isoAlpha": "GHA",
        "citizenship": "Ghanaian"
      },
      {
        "name": "Gibraltar",
        "isoAlpha": "GIB",
        "citizenship": "Gibraltar"
      },
      {
        "name": "Greece",
        "isoAlpha": "GRC",
        "citizenship": "Greek"
      },
      {
        "name": "Greenland",
        "isoAlpha": "GRL",
        "citizenship": "Greenlandic"
      },
      {
        "name": "Grenada",
        "isoAlpha": "GRD",
        "citizenship": "Grenadian"
      },
      {
        "name": "Guadeloupe",
        "isoAlpha": "GLP",
        "citizenship": "Guadeloupian"
      },
      {
        "name": "Guam",
        "isoAlpha": "GUM",
        "citizenship": "Guamanian"
      },
      {
        "name": "Guatemala",
        "isoAlpha": "GTM",
        "citizenship": "Guatemalan"
      },
      {
        "name": "Guernsey",
        "isoAlpha": "GGY",
        "citizenship": "Channel Islander"
      },
      {
        "name": "Guinea",
        "isoAlpha": "GIN",
        "citizenship": "Guinean"
      },
      {
        "name": "Guinea-Bissau",
        "isoAlpha": "GNB",
        "citizenship": "Guinea-Bissauan"
      },
      {
        "name": "Guyana",
        "isoAlpha": "GUY",
        "citizenship": "Guyanese"
      },
      {
        "name": "Haiti",
        "isoAlpha": "HTI",
        "citizenship": "Haitian"
      },
      {
        "name": "Vatican City",
        "isoAlpha": "VAT",
        "citizenship": "Pontifical"
      },
      {
        "name": "Honduras",
        "isoAlpha": "HND",
        "citizenship": "Honduran"
      },
      {
        "name": "Hong Kong",
        "isoAlpha": "HKG",
        "citizenship": "Chinese"
      },
      {
        "name": "Hungary",
        "isoAlpha": "HUN",
        "citizenship": "Hungarian"
      },
      {
        "name": "Iceland",
        "isoAlpha": "ISL",
        "citizenship": "Icelander"
      },
      {
        "name": "India",
        "isoAlpha": "IND",
        "citizenship": "Indian"
      },
      {
        "name": "Indonesia",
        "isoAlpha": "IDN",
        "citizenship": "Indonesian"
      },
      {
        "name": "Ivory Coast",
        "isoAlpha": "CIV",
        "citizenship": "Ivorian"
      },
      {
        "name": "Iran",
        "isoAlpha": "IRN",
        "citizenship": "Iranian"
      },
      {
        "name": "Iraq",
        "isoAlpha": "IRQ",
        "citizenship": "Iraqi"
      },
      {
        "name": "Ireland",
        "isoAlpha": "IRL",
        "citizenship": "Irish"
      },
      {
        "name": "Isle of Man",
        "isoAlpha": "IMN",
        "citizenship": "Manx"
      },
      {
        "name": "Israel",
        "isoAlpha": "ISR",
        "citizenship": "Israeli"
      },
      {
        "name": "Italy",
        "isoAlpha": "ITA",
        "citizenship": "Italian"
      },
      {
        "name": "Jamaica",
        "isoAlpha": "JAM",
        "citizenship": "Jamaican"
      },
      {
        "name": "Japan",
        "isoAlpha": "JPN",
        "citizenship": "Japanese"
      },
      {
        "name": "Jersey",
        "isoAlpha": "JEY",
        "citizenship": "Channel Islander"
      },
      {
        "name": "Jordan",
        "isoAlpha": "JOR",
        "citizenship": "Jordanian"
      },
      {
        "name": "Kazakhstan",
        "isoAlpha": "KAZ",
        "citizenship": "Kazakhstani"
      },
      {
        "name": "Kenya",
        "isoAlpha": "KEN",
        "citizenship": "Kenyan"
      },
      {
        "name": "Kiribati",
        "isoAlpha": "KIR",
        "citizenship": "I-Kiribati"
      },
      {
        "name": "Kuwait",
        "isoAlpha": "KWT",
        "citizenship": "Kuwaiti"
      },
      {
        "name": "Kyrgyzstan",
        "isoAlpha": "KGZ",
        "citizenship": "Kirghiz"
      },
      {
        "name": "Laos",
        "isoAlpha": "LAO",
        "citizenship": "Laotian"
      },
      {
        "name": "Latvia",
        "isoAlpha": "LVA",
        "citizenship": "Latvian"
      },
      {
        "name": "Lebanon",
        "isoAlpha": "LBN",
        "citizenship": "Lebanese"
      },
      {
        "name": "Lesotho",
        "isoAlpha": "LSO",
        "citizenship": "Mosotho"
      },
      {
        "name": "Liberia",
        "isoAlpha": "LBR",
        "citizenship": "Liberian"
      },
      {
        "name": "Libya",
        "isoAlpha": "LBY",
        "citizenship": "Libyan"
      },
      {
        "name": "Liechtenstein",
        "isoAlpha": "LIE",
        "citizenship": "Liechtensteiner"
      },
      {
        "name": "Lithuania",
        "isoAlpha": "LTU",
        "citizenship": "Lithuanian"
      },
      {
        "name": "Luxembourg",
        "isoAlpha": "LUX",
        "citizenship": "Luxembourger"
      },
      {
        "name": "Macau",
        "isoAlpha": "MAC",
        "citizenship": "Chinese"
      },
      {
        "name": "North Macedonia",
        "isoAlpha": "MKD",
        "citizenship": "Macedonian"
      },
      {
        "name": "Madagascar",
        "isoAlpha": "MDG",
        "citizenship": "Malagasy"
      },
      {
        "name": "Malawi",
        "isoAlpha": "MWI",
        "citizenship": "Malawian"
      },
      {
        "name": "Malaysia",
        "isoAlpha": "MYS",
        "citizenship": "Malaysian"
      },
      {
        "name": "Maldives",
        "isoAlpha": "MDV",
        "citizenship": "Maldivan"
      },
      {
        "name": "Mali",
        "isoAlpha": "MLI",
        "citizenship": "Malian"
      },
      {
        "name": "Malta",
        "isoAlpha": "MLT",
        "citizenship": "Maltese"
      },
      {
        "name": "Marshall Islands",
        "isoAlpha": "MHL",
        "citizenship": "Marshallese"
      },
      {
        "name": "Martinique",
        "isoAlpha": "MTQ",
        "citizenship": "French"
      },
      {
        "name": "Mauritania",
        "isoAlpha": "MRT",
        "citizenship": "Mauritanian"
      },
      {
        "name": "Mauritius",
        "isoAlpha": "MUS",
        "citizenship": "Mauritian"
      },
      {
        "name": "Mayotte",
        "isoAlpha": "MYT",
        "citizenship": "French"
      },
      {
        "name": "Mexico",
        "isoAlpha": "MEX",
        "citizenship": "Mexican"
      },
      {
        "name": "Micronesia",
        "isoAlpha": "FSM",
        "citizenship": "Micronesian"
      },
      {
        "name": "Moldova",
        "isoAlpha": "MDA",
        "citizenship": "Moldovan"
      },
      {
        "name": "Monaco",
        "isoAlpha": "MCO",
        "citizenship": "Monegasque"
      },
      {
        "name": "Mongolia",
        "isoAlpha": "MNG",
        "citizenship": "Mongolian"
      },
      {
        "name": "Montenegro",
        "isoAlpha": "MNE",
        "citizenship": "Montenegrin"
      },
      {
        "name": "Montserrat",
        "isoAlpha": "MSR",
        "citizenship": "Montserratian"
      },
      {
        "name": "Morocco",
        "isoAlpha": "MAR",
        "citizenship": "Moroccan"
      },
      {
        "name": "Mozambique",
        "isoAlpha": "MOZ",
        "citizenship": "Mozambican"
      },
      {
        "name": "Myanmar",
        "isoAlpha": "MMR",
        "citizenship": "Burmese"
      },
      {
        "name": "Namibia",
        "isoAlpha": "NAM",
        "citizenship": "Namibian"
      },
      {
        "name": "Nauru",
        "isoAlpha": "NRU",
        "citizenship": "Nauruan"
      },
      {
        "name": "Nepal",
        "isoAlpha": "NPL",
        "citizenship": "Nepalese"
      },
      {
        "name": "Netherlands",
        "isoAlpha": "NLD",
        "citizenship": "Dutch"
      },
      {
        "name": "New Caledonia",
        "isoAlpha": "NCL",
        "citizenship": "New Caledonian"
      },
      {
        "name": "New Zealand",
        "isoAlpha": "NZL",
        "citizenship": "New Zealander"
      },
      {
        "name": "Nicaragua",
        "isoAlpha": "NIC",
        "citizenship": "Nicaraguan"
      },
      {
        "name": "Niger",
        "isoAlpha": "NER",
        "citizenship": "Nigerien"
      },
      {
        "name": "Nigeria",
        "isoAlpha": "NGA",
        "citizenship": "Nigerian"
      },
      {
        "name": "Niue",
        "isoAlpha": "NIU",
        "citizenship": "Niuean"
      },
      {
        "name": "Norfolk Island",
        "isoAlpha": "NFK",
        "citizenship": "Norfolk Islander"
      },
      {
        "name": "Northern Mariana Islands",
        "isoAlpha": "MNP",
        "citizenship": "American"
      },
      {
        "name": "Norway",
        "isoAlpha": "NOR",
        "citizenship": "Norwegian"
      },
      {
        "name": "Oman",
        "isoAlpha": "OMN",
        "citizenship": "Omani"
      },
      {
        "name": "Pakistan",
        "isoAlpha": "PAK",
        "citizenship": "Pakistani"
      },
      {
        "name": "Palau",
        "isoAlpha": "PLW",
        "citizenship": "Palauan"
      },
      {
        "name": "Palestinian Territories",
        "isoAlpha": "PSE",
        "citizenship": "Palestinian"
      },
      {
        "name": "Panama",
        "isoAlpha": "PAN",
        "citizenship": "Panamanian"
      },
      {
        "name": "Papua New Guinea",
        "isoAlpha": "PNG",
        "citizenship": "Papua New Guinean"
      },
      {
        "name": "Paraguay",
        "isoAlpha": "PRY",
        "citizenship": "Paraguayan"
      },
      {
        "name": "Peru",
        "isoAlpha": "PER",
        "citizenship": "Peruvian"
      },
      {
        "name": "Philippines",
        "isoAlpha": "PHL",
        "citizenship": "Filipino"
      },
      {
        "name": "Pitcairn Islands",
        "isoAlpha": "PCN",
        "citizenship": "Pitcairn Islander"
      },
      {
        "name": "Poland",
        "isoAlpha": "POL",
        "citizenship": "Polish"
      },
      {
        "name": "Portugal",
        "isoAlpha": "PRT",
        "citizenship": "Portuguese"
      },
      {
        "name": "Puerto Rico",
        "isoAlpha": "PRI",
        "citizenship": "Puerto Rican"
      },
      {
        "name": "Qatar",
        "isoAlpha": "QAT",
        "citizenship": "Qatari"
      },
      {
        "name": "Kosovo",
        "isoAlpha": "RKS",
        "citizenship": "Kosovar"
      },
      {
        "name": "Réunion",
        "isoAlpha": "REU",
        "citizenship": "French"
      },
      {
        "name": "Romania",
        "isoAlpha": "ROU",
        "citizenship": "Romanian"
      },
      {
        "name": "Russia",
        "isoAlpha": "RUS",
        "citizenship": "Russian"
      },
      {
        "name": "Rwanda",
        "isoAlpha": "RWA",
        "citizenship": "Rwandan"
      },
      {
        "name": "Saint Barthélemy",
        "isoAlpha": "BLM",
        "citizenship": "Saint Barthélemy Islander"
      },
      {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "isoAlpha": "SHN",
        "citizenship": "Saint Helenian"
      },
      {
        "name": "Saint Kitts and Nevis",
        "isoAlpha": "KNA",
        "citizenship": "Kittian and Nevisian"
      },
      {
        "name": "Saint Lucia",
        "isoAlpha": "LCA",
        "citizenship": "Saint Lucian"
      },
      {
        "name": "Saint Martin",
        "isoAlpha": "MAF",
        "citizenship": "Saint Martin Islander"
      },
      {
        "name": "Saint Pierre and Miquelon",
        "isoAlpha": "SPM",
        "citizenship": "French"
      },
      {
        "name": "Saint Vincent and the Grenadines",
        "isoAlpha": "VCT",
        "citizenship": "Saint Vincentian"
      },
      {
        "name": "Samoa",
        "isoAlpha": "WSM",
        "citizenship": "Samoan"
      },
      {
        "name": "San Marino",
        "isoAlpha": "SMR",
        "citizenship": "Sammarinese"
      },
      {
        "name": "São Tomé and Príncipe",
        "isoAlpha": "STP",
        "citizenship": "Sao Tomean"
      },
      {
        "name": "Saudi Arabia",
        "isoAlpha": "SAU",
        "citizenship": "Saudi Arabian"
      },
      {
        "name": "Senegal",
        "isoAlpha": "SEN",
        "citizenship": "Senegalese"
      },
      {
        "name": "Serbia",
        "isoAlpha": "SRB",
        "citizenship": "Serbian"
      },
      {
        "name": "Seychelles",
        "isoAlpha": "SYC",
        "citizenship": "Seychellois"
      },
      {
        "name": "Sierra Leone",
        "isoAlpha": "SLE",
        "citizenship": "Sierra Leonean"
      },
      {
        "name": "Singapore",
        "isoAlpha": "SGP",
        "citizenship": "Singaporean"
      },
      {
        "name": "Sint Maarten",
        "isoAlpha": "SXM",
        "citizenship": "Dutch"
      },
      {
        "name": "Slovakia",
        "isoAlpha": "SVK",
        "citizenship": "Slovak"
      },
      {
        "name": "Slovenia",
        "isoAlpha": "SVN",
        "citizenship": "Slovene"
      },
      {
        "name": "Solomon Islands",
        "isoAlpha": "SLB",
        "citizenship": "Solomon Islander"
      },
      {
        "name": "Somalia",
        "isoAlpha": "SOM",
        "citizenship": "Somali"
      },
      {
        "name": "South Africa",
        "isoAlpha": "ZAF",
        "citizenship": "South African"
      },
      {
        "name": "South Georgia and the South Sandwich Islands",
        "isoAlpha": "SGS",
        "citizenship": "South Georgia and the South Sandwich Islander"
      },
      {
        "name": "South Korea",
        "isoAlpha": "KOR",
        "citizenship": "South Korean"
      },
      {
        "name": "South Sudan",
        "isoAlpha": "SSD",
        "citizenship": "South Sudanese"
      },
      {
        "name": "Spain",
        "isoAlpha": "ESP",
        "citizenship": "Spanish"
      },
      {
        "name": "Sri Lanka",
        "isoAlpha": "LKA",
        "citizenship": "Sri Lankan"
      },
      {
        "name": "Sudan",
        "isoAlpha": "SDN",
        "citizenship": "Sudanese"
      },
      {
        "name": "Suriname",
        "isoAlpha": "SUR",
        "citizenship": "Surinamer"
      },
      {
        "name": "Svalbard and Jan Mayen",
        "isoAlpha": "SJM",
        "citizenship": "Norwegian"
      },
      {
        "name": "Eswatini",
        "isoAlpha": "SWZ",
        "citizenship": "Swazi"
      },
      {
        "name": "Sweden",
        "isoAlpha": "SWE",
        "citizenship": "Swedish"
      },
      {
        "name": "Switzerland",
        "isoAlpha": "CHE",
        "citizenship": "Swiss"
      },
      {
        "name": "Syria",
        "isoAlpha": "SYR",
        "citizenship": "Syrian"
      },
      {
        "name": "Taiwan",
        "isoAlpha": "TWN",
        "citizenship": "Taiwanese"
      },
      {
        "name": "Tajikistan",
        "isoAlpha": "TJK",
        "citizenship": "Tadzhik"
      },
      {
        "name": "Tanzania",
        "isoAlpha": "TZA",
        "citizenship": "Tanzanian"
      },
      {
        "name": "Thailand",
        "isoAlpha": "THA",
        "citizenship": "Thai"
      },
      {
        "name": "East Timor",
        "isoAlpha": "TLS",
        "citizenship": "East Timorese"
      },
      {
        "name": "Togo",
        "isoAlpha": "TGO",
        "citizenship": "Togolese"
      },
      {
        "name": "Tokelau",
        "isoAlpha": "TKL",
        "citizenship": "Tokelauan"
      },
      {
        "name": "Tonga",
        "isoAlpha": "TON",
        "citizenship": "Tongan"
      },
      {
        "name": "Trinidad and Tobago",
        "isoAlpha": "TTO",
        "citizenship": "Trinidadian"
      },
      {
        "name": "Tunisia",
        "isoAlpha": "TUN",
        "citizenship": "Tunisian"
      },
      {
        "name": "Türkiye",
        "isoAlpha": "TUR",
        "citizenship": "Turkish"
      },
      {
        "name": "Turks and Caicos Islands",
        "isoAlpha": "TCA",
        "citizenship": "Turks and Caicos Islander"
      },
      {
        "name": "Tuvalu",
        "isoAlpha": "TUV",
        "citizenship": "Tuvaluan"
      },
      {
        "name": "Uganda",
        "isoAlpha": "UGA",
        "citizenship": "Ugandan"
      },
      {
        "name": "Ukraine",
        "isoAlpha": "UKR",
        "citizenship": "Ukrainian"
      },
      {
        "name": "United Arab Emirates",
        "isoAlpha": "ARE",
        "citizenship": "Emirati"
      },
      {
        "name": "United Kingdom",
        "isoAlpha": "GBR",
        "citizenship": "British"
      },
      {
        "name": "United States",
        "isoAlpha": "USA",
        "citizenship": "American"
      },
      {
        "name": "Uruguay",
        "isoAlpha": "URY",
        "citizenship": "Uruguayan"
      },
      {
        "name": "Uzbekistan",
        "isoAlpha": "UZB",
        "citizenship": "Uzbekistani"
      },
      {
        "name": "Vanuatu",
        "isoAlpha": "VUT",
        "citizenship": "Ni-Vanuatu"
      },
      {
        "name": "Venezuela",
        "isoAlpha": "VEN",
        "citizenship": "Venezuelan"
      },
      {
        "name": "Vietnam",
        "isoAlpha": "VNM",
        "citizenship": "Vietnamese"
      },
      {
        "name": "Wallis and Futuna",
        "isoAlpha": "WLF",
        "citizenship": "Wallis and Futuna Islander"
      },
      {
        "name": "Zambia",
        "isoAlpha": "ZMB",
        "citizenship": "Zambian"
      },
      {
        "name": "Zimbabwe",
        "isoAlpha": "ZWE",
        "citizenship": "Zimbabwean"
      }
    ]

    export {countries}