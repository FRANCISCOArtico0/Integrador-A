const countries = require('./countries.json');

/** Get only the name of the country given his iso3 code.
 * For example: given the isoCode 'ARG'
 * The response should be: 'Argentina'
 * @param  {array} isoCode
 * @returns {array}
 */
function getCountryNameByIso3(isoCode){
    let country_wanted = countries.find(country => country.iso3 === isoCode);
        let name_country = country_wanted.name
        return name_country
}

/**
 * Get country summary given the ISO3 code. 
 * It has to be a new object containing only the following data:
 * {
 *  name: ,
 *  iso3: ,
 *  iso2: ,
 *  phone_code,
 *  capital: ,
 *  currency: ,
 *  tld: ,
 *  region: ,
 *  emoji: ,
 * }
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountrySummary(isoCode){
    let country_wanted = countries.find(country => country.iso3 === isoCode);
    let object = {
        nombre: country_wanted.name,
        isothree: country_wanted.iso3,
        isotwo: country_wanted.iso2,
        code_phone: country_wanted.phone_code,
        capital_: country_wanted.capital,
        currency_: country_wanted.currency,
        tld_: country_wanted.tld,
        region_: country_wanted.region,
        emoji: country_wanted.emoji

    }; return object
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryNameByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountrySummary('ARG'),
        '\n');

}

main();