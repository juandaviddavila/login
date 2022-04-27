//remover acentos
var Latinise = {};
Latinise.latin_map = { "Á": "A", "Ă": "A", "Ắ": "A", "Ặ": "A", "Ằ": "A", "Ẳ": "A", "Ẵ": "A", "Ǎ": "A", "Â": "A", "Ấ": "A", "Ậ": "A", "Ầ": "A", "Ẩ": "A", "Ẫ": "A", "Ä": "A", "Ǟ": "A", "Ȧ": "A", "Ǡ": "A", "Ạ": "A", "Ȁ": "A", "À": "A", "Ả": "A", "Ȃ": "A", "Ā": "A", "Ą": "A", "Å": "A", "Ǻ": "A", "Ḁ": "A", "Ⱥ": "A", "Ã": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ḃ": "B", "Ḅ": "B", "Ɓ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ć": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ĉ": "C", "Ċ": "C", "Ƈ": "C", "Ȼ": "C", "Ď": "D", "Ḑ": "D", "Ḓ": "D", "Ḋ": "D", "Ḍ": "D", "Ɗ": "D", "Ḏ": "D", "ǲ": "D", "ǅ": "D", "Đ": "D", "Ƌ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "É": "E", "Ĕ": "E", "Ě": "E", "Ȩ": "E", "Ḝ": "E", "Ê": "E", "Ế": "E", "Ệ": "E", "Ề": "E", "Ể": "E", "Ễ": "E", "Ḙ": "E", "Ë": "E", "Ė": "E", "Ẹ": "E", "Ȅ": "E", "È": "E", "Ẻ": "E", "Ȇ": "E", "Ē": "E", "Ḗ": "E", "Ḕ": "E", "Ę": "E", "Ɇ": "E", "Ẽ": "E", "Ḛ": "E", "Ꝫ": "ET", "Ḟ": "F", "Ƒ": "F", "Ǵ": "G", "Ğ": "G", "Ǧ": "G", "Ģ": "G", "Ĝ": "G", "Ġ": "G", "Ɠ": "G", "Ḡ": "G", "Ǥ": "G", "Ḫ": "H", "Ȟ": "H", "Ḩ": "H", "Ĥ": "H", "Ⱨ": "H", "Ḧ": "H", "Ḣ": "H", "Ḥ": "H", "Ħ": "H", "Í": "I", "Ĭ": "I", "Ǐ": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "İ": "I", "Ị": "I", "Ȉ": "I", "Ì": "I", "Ỉ": "I", "Ȋ": "I", "Ī": "I", "Į": "I", "Ɨ": "I", "Ĩ": "I", "Ḭ": "I", "Ꝺ": "D", "Ꝼ": "F", "Ᵹ": "G", "Ꞃ": "R", "Ꞅ": "S", "Ꞇ": "T", "Ꝭ": "IS", "Ĵ": "J", "Ɉ": "J", "Ḱ": "K", "Ǩ": "K", "Ķ": "K", "Ⱪ": "K", "Ꝃ": "K", "Ḳ": "K", "Ƙ": "K", "Ḵ": "K", "Ꝁ": "K", "Ꝅ": "K", "Ĺ": "L", "Ƚ": "L", "Ľ": "L", "Ļ": "L", "Ḽ": "L", "Ḷ": "L", "Ḹ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ḻ": "L", "Ŀ": "L", "Ɫ": "L", "ǈ": "L", "Ł": "L", "Ǉ": "LJ", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ń": "N", "Ň": "N", "Ņ": "N", "Ṋ": "N", "Ṅ": "N", "Ṇ": "N", "Ǹ": "N", "Ɲ": "N", "Ṉ": "N", "Ƞ": "N", "ǋ": "N", "Ñ": "N", "Ǌ": "NJ", "Ó": "O", "Ŏ": "O", "Ǒ": "O", "Ô": "O", "Ố": "O", "Ộ": "O", "Ồ": "O", "Ổ": "O", "Ỗ": "O", "Ö": "O", "Ȫ": "O", "Ȯ": "O", "Ȱ": "O", "Ọ": "O", "Ő": "O", "Ȍ": "O", "Ò": "O", "Ỏ": "O", "Ơ": "O", "Ớ": "O", "Ợ": "O", "Ờ": "O", "Ở": "O", "Ỡ": "O", "Ȏ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ō": "O", "Ṓ": "O", "Ṑ": "O", "Ɵ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Õ": "O", "Ṍ": "O", "Ṏ": "O", "Ȭ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ɛ": "E", "Ɔ": "O", "Ȣ": "OU", "Ṕ": "P", "Ṗ": "P", "Ꝓ": "P", "Ƥ": "P", "Ꝕ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝙ": "Q", "Ꝗ": "Q", "Ŕ": "R", "Ř": "R", "Ŗ": "R", "Ṙ": "R", "Ṛ": "R", "Ṝ": "R", "Ȑ": "R", "Ȓ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꜿ": "C", "Ǝ": "E", "Ś": "S", "Ṥ": "S", "Š": "S", "Ṧ": "S", "Ş": "S", "Ŝ": "S", "Ș": "S", "Ṡ": "S", "Ṣ": "S", "Ṩ": "S", "Ť": "T", "Ţ": "T", "Ṱ": "T", "Ț": "T", "Ⱦ": "T", "Ṫ": "T", "Ṭ": "T", "Ƭ": "T", "Ṯ": "T", "Ʈ": "T", "Ŧ": "T", "Ɐ": "A", "Ꞁ": "L", "Ɯ": "M", "Ʌ": "V", "Ꜩ": "TZ", "Ú": "U", "Ŭ": "U", "Ǔ": "U", "Û": "U", "Ṷ": "U", "Ü": "U", "Ǘ": "U", "Ǚ": "U", "Ǜ": "U", "Ǖ": "U", "Ṳ": "U", "Ụ": "U", "Ű": "U", "Ȕ": "U", "Ù": "U", "Ủ": "U", "Ư": "U", "Ứ": "U", "Ự": "U", "Ừ": "U", "Ử": "U", "Ữ": "U", "Ȗ": "U", "Ū": "U", "Ṻ": "U", "Ų": "U", "Ů": "U", "Ũ": "U", "Ṹ": "U", "Ṵ": "U", "Ꝟ": "V", "Ṿ": "V", "Ʋ": "V", "Ṽ": "V", "Ꝡ": "VY", "Ẃ": "W", "Ŵ": "W", "Ẅ": "W", "Ẇ": "W", "Ẉ": "W", "Ẁ": "W", "Ⱳ": "W", "Ẍ": "X", "Ẋ": "X", "Ý": "Y", "Ŷ": "Y", "Ÿ": "Y", "Ẏ": "Y", "Ỵ": "Y", "Ỳ": "Y", "Ƴ": "Y", "Ỷ": "Y", "Ỿ": "Y", "Ȳ": "Y", "Ɏ": "Y", "Ỹ": "Y", "Ź": "Z", "Ž": "Z", "Ẑ": "Z", "Ⱬ": "Z", "Ż": "Z", "Ẓ": "Z", "Ȥ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ĳ": "IJ", "Œ": "OE", "ᴀ": "A", "ᴁ": "AE", "ʙ": "B", "ᴃ": "B", "ᴄ": "C", "ᴅ": "D", "ᴇ": "E", "ꜰ": "F", "ɢ": "G", "ʛ": "G", "ʜ": "H", "ɪ": "I", "ʁ": "R", "ᴊ": "J", "ᴋ": "K", "ʟ": "L", "ᴌ": "L", "ᴍ": "M", "ɴ": "N", "ᴏ": "O", "ɶ": "OE", "ᴐ": "O", "ᴕ": "OU", "ᴘ": "P", "ʀ": "R", "ᴎ": "N", "ᴙ": "R", "ꜱ": "S", "ᴛ": "T", "ⱻ": "E", "ᴚ": "R", "ᴜ": "U", "ᴠ": "V", "ᴡ": "W", "ʏ": "Y", "ᴢ": "Z", "á": "a", "ă": "a", "ắ": "a", "ặ": "a", "ằ": "a", "ẳ": "a", "ẵ": "a", "ǎ": "a", "â": "a", "ấ": "a", "ậ": "a", "ầ": "a", "ẩ": "a", "ẫ": "a", "ä": "a", "ǟ": "a", "ȧ": "a", "ǡ": "a", "ạ": "a", "ȁ": "a", "à": "a", "ả": "a", "ȃ": "a", "ā": "a", "ą": "a", "ᶏ": "a", "ẚ": "a", "å": "a", "ǻ": "a", "ḁ": "a", "ⱥ": "a", "ã": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ḃ": "b", "ḅ": "b", "ɓ": "b", "ḇ": "b", "ᵬ": "b", "ᶀ": "b", "ƀ": "b", "ƃ": "b", "ɵ": "o", "ć": "c", "č": "c", "ç": "c", "ḉ": "c", "ĉ": "c", "ɕ": "c", "ċ": "c", "ƈ": "c", "ȼ": "c", "ď": "d", "ḑ": "d", "ḓ": "d", "ȡ": "d", "ḋ": "d", "ḍ": "d", "ɗ": "d", "ᶑ": "d", "ḏ": "d", "ᵭ": "d", "ᶁ": "d", "đ": "d", "ɖ": "d", "ƌ": "d", "ı": "i", "ȷ": "j", "ɟ": "j", "ʄ": "j", "ǳ": "dz", "ǆ": "dz", "é": "e", "ĕ": "e", "ě": "e", "ȩ": "e", "ḝ": "e", "ê": "e", "ế": "e", "ệ": "e", "ề": "e", "ể": "e", "ễ": "e", "ḙ": "e", "ë": "e", "ė": "e", "ẹ": "e", "ȅ": "e", "è": "e", "ẻ": "e", "ȇ": "e", "ē": "e", "ḗ": "e", "ḕ": "e", "ⱸ": "e", "ę": "e", "ᶒ": "e", "ɇ": "e", "ẽ": "e", "ḛ": "e", "ꝫ": "et", "ḟ": "f", "ƒ": "f", "ᵮ": "f", "ᶂ": "f", "ǵ": "g", "ğ": "g", "ǧ": "g", "ģ": "g", "ĝ": "g", "ġ": "g", "ɠ": "g", "ḡ": "g", "ᶃ": "g", "ǥ": "g", "ḫ": "h", "ȟ": "h", "ḩ": "h", "ĥ": "h", "ⱨ": "h", "ḧ": "h", "ḣ": "h", "ḥ": "h", "ɦ": "h", "ẖ": "h", "ħ": "h", "ƕ": "hv", "í": "i", "ĭ": "i", "ǐ": "i", "î": "i", "ï": "i", "ḯ": "i", "ị": "i", "ȉ": "i", "ì": "i", "ỉ": "i", "ȋ": "i", "ī": "i", "į": "i", "ᶖ": "i", "ɨ": "i", "ĩ": "i", "ḭ": "i", "ꝺ": "d", "ꝼ": "f", "ᵹ": "g", "ꞃ": "r", "ꞅ": "s", "ꞇ": "t", "ꝭ": "is", "ǰ": "j", "ĵ": "j", "ʝ": "j", "ɉ": "j", "ḱ": "k", "ǩ": "k", "ķ": "k", "ⱪ": "k", "ꝃ": "k", "ḳ": "k", "ƙ": "k", "ḵ": "k", "ᶄ": "k", "ꝁ": "k", "ꝅ": "k", "ĺ": "l", "ƚ": "l", "ɬ": "l", "ľ": "l", "ļ": "l", "ḽ": "l", "ȴ": "l", "ḷ": "l", "ḹ": "l", "ⱡ": "l", "ꝉ": "l", "ḻ": "l", "ŀ": "l", "ɫ": "l", "ᶅ": "l", "ɭ": "l", "ł": "l", "ǉ": "lj", "ſ": "s", "ẜ": "s", "ẛ": "s", "ẝ": "s", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ᵯ": "m", "ᶆ": "m", "ń": "n", "ň": "n", "ņ": "n", "ṋ": "n", "ȵ": "n", "ṅ": "n", "ṇ": "n", "ǹ": "n", "ɲ": "n", "ṉ": "n", "ƞ": "n", "ᵰ": "n", "ᶇ": "n", "ɳ": "n", "ñ": "n", "ǌ": "nj", "ó": "o", "ŏ": "o", "ǒ": "o", "ô": "o", "ố": "o", "ộ": "o", "ồ": "o", "ổ": "o", "ỗ": "o", "ö": "o", "ȫ": "o", "ȯ": "o", "ȱ": "o", "ọ": "o", "ő": "o", "ȍ": "o", "ò": "o", "ỏ": "o", "ơ": "o", "ớ": "o", "ợ": "o", "ờ": "o", "ở": "o", "ỡ": "o", "ȏ": "o", "ꝋ": "o", "ꝍ": "o", "ⱺ": "o", "ō": "o", "ṓ": "o", "ṑ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "õ": "o", "ṍ": "o", "ṏ": "o", "ȭ": "o", "ƣ": "oi", "ꝏ": "oo", "ɛ": "e", "ᶓ": "e", "ɔ": "o", "ᶗ": "o", "ȣ": "ou", "ṕ": "p", "ṗ": "p", "ꝓ": "p", "ƥ": "p", "ᵱ": "p", "ᶈ": "p", "ꝕ": "p", "ᵽ": "p", "ꝑ": "p", "ꝙ": "q", "ʠ": "q", "ɋ": "q", "ꝗ": "q", "ŕ": "r", "ř": "r", "ŗ": "r", "ṙ": "r", "ṛ": "r", "ṝ": "r", "ȑ": "r", "ɾ": "r", "ᵳ": "r", "ȓ": "r", "ṟ": "r", "ɼ": "r", "ᵲ": "r", "ᶉ": "r", "ɍ": "r", "ɽ": "r", "ↄ": "c", "ꜿ": "c", "ɘ": "e", "ɿ": "r", "ś": "s", "ṥ": "s", "š": "s", "ṧ": "s", "ş": "s", "ŝ": "s", "ș": "s", "ṡ": "s", "ṣ": "s", "ṩ": "s", "ʂ": "s", "ᵴ": "s", "ᶊ": "s", "ȿ": "s", "ɡ": "g", "ᴑ": "o", "ᴓ": "o", "ᴝ": "u", "ť": "t", "ţ": "t", "ṱ": "t", "ț": "t", "ȶ": "t", "ẗ": "t", "ⱦ": "t", "ṫ": "t", "ṭ": "t", "ƭ": "t", "ṯ": "t", "ᵵ": "t", "ƫ": "t", "ʈ": "t", "ŧ": "t", "ᵺ": "th", "ɐ": "a", "ᴂ": "ae", "ǝ": "e", "ᵷ": "g", "ɥ": "h", "ʮ": "h", "ʯ": "h", "ᴉ": "i", "ʞ": "k", "ꞁ": "l", "ɯ": "m", "ɰ": "m", "ᴔ": "oe", "ɹ": "r", "ɻ": "r", "ɺ": "r", "ⱹ": "r", "ʇ": "t", "ʌ": "v", "ʍ": "w", "ʎ": "y", "ꜩ": "tz", "ú": "u", "ŭ": "u", "ǔ": "u", "û": "u", "ṷ": "u", "ü": "u", "ǘ": "u", "ǚ": "u", "ǜ": "u", "ǖ": "u", "ṳ": "u", "ụ": "u", "ű": "u", "ȕ": "u", "ù": "u", "ủ": "u", "ư": "u", "ứ": "u", "ự": "u", "ừ": "u", "ử": "u", "ữ": "u", "ȗ": "u", "ū": "u", "ṻ": "u", "ų": "u", "ᶙ": "u", "ů": "u", "ũ": "u", "ṹ": "u", "ṵ": "u", "ᵫ": "ue", "ꝸ": "um", "ⱴ": "v", "ꝟ": "v", "ṿ": "v", "ʋ": "v", "ᶌ": "v", "ⱱ": "v", "ṽ": "v", "ꝡ": "vy", "ẃ": "w", "ŵ": "w", "ẅ": "w", "ẇ": "w", "ẉ": "w", "ẁ": "w", "ⱳ": "w", "ẘ": "w", "ẍ": "x", "ẋ": "x", "ᶍ": "x", "ý": "y", "ŷ": "y", "ÿ": "y", "ẏ": "y", "ỵ": "y", "ỳ": "y", "ƴ": "y", "ỷ": "y", "ỿ": "y", "ȳ": "y", "ẙ": "y", "ɏ": "y", "ỹ": "y", "ź": "z", "ž": "z", "ẑ": "z", "ʑ": "z", "ⱬ": "z", "ż": "z", "ẓ": "z", "ȥ": "z", "ẕ": "z", "ᵶ": "z", "ᶎ": "z", "ʐ": "z", "ƶ": "z", "ɀ": "z", "ﬀ": "ff", "ﬃ": "ffi", "ﬄ": "ffl", "ﬁ": "fi", "ﬂ": "fl", "ĳ": "ij", "œ": "oe", "ﬆ": "st", "ₐ": "a", "ₑ": "e", "ᵢ": "i", "ⱼ": "j", "ₒ": "o", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "ₓ": "x" };
String.prototype.latinise = function () {
    return this.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return Latinise.latin_map[a] || a
    })
};
String.prototype.latinize = String.prototype.latinise;
String.prototype.latinize = String.prototype.latinise;
var consultarPais = async function () {
    try {
        let resultado = null;
        let isfreegeoip = true;
        try {
            let apiUsar = 1;//1 combinada 2 ip_geo, 3 get_ipinfo
            let url = 'https://freegeoip.app/json/'
            url = 'https://geo.tienddi.co:31178/ip_geo_varios';
            //usando api propia     https://geo.tienddi.co:31178/ip_geo
            // usando api de https://ipinfo.io/  https://geo.tienddi.co:31178/get_ipinfo
            if (apiUsar == 2) {
                url = 'https://geo.tienddi.co:31178/ip_geo';
            }
            if (apiUsar == 3) {
                url = 'https://geo.tienddi.co:31178/get_ipinfo';
            }
            let respuesta = await fetch(url);
            resultado = await respuesta.json();
        } catch (error) {
            console.log(error);
            let respuesta = await fetch("https://app.j4pro.com/geoip/getIfoIp");
            resultado = await respuesta.json();
            isfreegeoip = false;
        }
        let paisSeleccionado = resultado.country_name;
        let ciudad = resultado.city;
        let departamento = resultado.region;
        let countryActual = resultado.isoCodeCountry;
        if (!isfreegeoip) {
            countryActual = resultado.isoCodeCountry;
            paisSeleccionado = resultado.nameCountry;
            ciudad = resultado.nameCity;
            departamento = resultado.nameSubdivision;
        } else {
            countryActual = resultado.country;
        }
        ////seleccionar pais
        const url_paises = '/bases_datos/paises.json';
        const respuesta_paises = await fetch(url_paises);
        const resultado_paises = await respuesta_paises.json();
        console.log(resultado_paises);

        for (var i = 0; i < resultado_paises.length; i++) {
            if (resultado_paises[i].cca2 === countryActual) {
                paisSeleccionado = resultado_paises[i].name.common;
                console.log('');
                const url_moneda = '/bases_datos/currency.json';
                const respuesta_moneda = await fetch(url_moneda);
                const resultado_moneda = await respuesta_moneda.json();
                //   console.log(resultado_moneda);
                for (var j in resultado_moneda) {
                    //console.log(resultado_moneda[j].code);
                    if (resultado_paises[i].currency[0] === resultado_moneda[j].code) {
                        //falta indicativo
                        if (countryActual == 'CO') {
                            //quitar acentos en ciudad y departamentos
                            ciudad = ciudad.latinise().toUpperCase();
                            departamento = departamento.latinise().toUpperCase();
                            //buscar departamento con la ciudad
                            const urldepartamento = '/bases_datos/departamento.json';
                            const respuesta_departamento = await fetch(urldepartamento);
                            const resultado_departamento = await respuesta_departamento.json();
                            //buscar ciudad
                            for (var h = 0; h < resultado_departamento.length; h++) {
                                if (resultado_departamento[h].nombreMunicipio == ciudad) {
                                    departamento = resultado_departamento[h].nombreDepartamento;
                                    break;
                                }
                            }
                        }
                        let retorno = {
                            indicador: resultado_paises[i].callingCode[0],
                            moneda: resultado_moneda[j].symbol_native,
                            pais: paisSeleccionado, ciudad: ciudad, departamento: departamento,
                            country_code: countryActual
                        };
                        return await retorno;
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
        retorno = { "indicador": "57", "moneda": "$", "pais": "Colombia", "ciudad": "MEDELLIN", "departamento": "ANTIOQUIA", "country_code": "CO" };
        return await retorno;
    }
};

//algoritmo de ordenamiento
function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
            y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}
Array.prototype.keySort = function (keys) {
    keys = keys || {};
    // via
    // https://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
    var obLen = function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    };
    // avoiding using Object.keys because I guess did it have IE8 issues?
    // else var obIx = function(obj, ix){ return Object.keys(obj)[ix]; } or
    // whatever
    var obIx = function (obj, ix) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (size == ix)
                    return key;
                size++;
            }
        }
        return false;
    };
    var keySort = function (a, b, d) {
        d = d !== null ? d : 1;
        // a = a.toLowerCase(); // this breaks numbers
        // b = b.toLowerCase();
        if (a == b)
            return 0;
        return a > b ? 1 * d : -1 * d;
    };

    var KL = obLen(keys);

    if (!KL)
        return this.sort(keySort);

    for (var k in keys) {
        // asc unless desc or skip
        keys[k] =
            keys[k] == 'desc' || keys[k] == -1 ? -1
                : (keys[k] == 'skip' || keys[k] === 0 ? 0
                    : 1);
    }

    this.sort(function (a, b) {
        var sorted = 0, ix = 0;

        while (sorted === 0 && ix < KL) {
            var k = obIx(keys, ix);
            if (k) {
                var dir = keys[k];
                sorted = keySort(a[k], b[k], dir);
                ix++;
            }
        }
        return sorted;
    });
    return this;
};


var iniciarSesion = async function (id_empresa, usuario, clave, indicador) {
    let url = CONFIG.URLServices + '/j4pro/seguridad/validar_usuario_base';
    let respuesta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(
            {
                "usuario_empresa": usuario,
                "password": clave,
                "idEmpresa": id_empresa,
                "pais": indicador
            }
        ),
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json, text/plain, */*',
            'X-Auth-Token-empresa': id_empresa,
            'X-Auth-Token-es-base': 1
        }
    });
    let data = await respuesta.json();
    if (data.type === 1) {
        if (location.port != CONFIG.puerto_app_desconectada) {
            localStorage.removeItem("id_consecutivoAsignado");
            localStorage.removeItem("consecutivo");
            localStorage.removeItem("fechaActualizacionBdErp");
            sessionStorage.removeItem("intentos_carga");
            sessionStorage.removeItem("pantallaPlan");
            sessionStorage.removeItem("planEmpresa");
            sessionStorage.removeItem("modoVistaCambiar");
            sessionStorage.removeItem("estadoSincronizacionProductos");
            localStorage.removeItem("parametros_recordar");
            localStorage.removeItem("notificaciones");
            localStorage.removeItem("fechaActualizacionNotificaciones");
            window.localStorage.removeItem('Sucursal');
        }
        localStorage.removeItem("imagenEmpresa");
        if (location.href.indexOf("main_nomina.html") > -1) {
            localStorage.setItem("es_nomina", 1);
            sessionStorage.setItem("es_nomina", 1);
            mainRedireccion = 'main_nomina.html';
        } else {
            localStorage.removeItem("es_nomina");
            sessionStorage.removeItem("es_nomina");
        }
        let dataEmpresa = JSON.parse(data.retorno);

        localStorage.setItem("SessionUsuarioBase", "hola");
        var sesion = JSON.parse(data.retorno);
        sesion.permisosUsuario = CryptoJS.AES.encrypt(JSON.stringify(sesion.permisosUsuario),
            'secret key 123 GQus5484!uj(!8!(?=54;,,').toString();
        sesion.permisosLista = CryptoJS.AES.encrypt(JSON.stringify(sesion.permisosLista),
            'secret key 123 GQus5484!uj(!8!(?=54;,,').toString();
        //                sesion.permisosUsuario = "";
        //                sesion.permisosLista = "";
        localStorage.setItem("SessionUsuarioBase", JSON.stringify(sesion));

        let es_contador = sesion.es_contador;
        es_contador = es_contador === undefined ? 0 : es_contador;

        let empresasLoginDomain = {
            "token": sesion.token,
            "idEmpresa": sesion.id_empresa,
            "usuario_empresa": sesion.id_usuario,
            "es_contador": es_contador
        };

        try {

            document.getElementById("div_trabajo").style.display = "none"; // show
            document.getElementById("div_carga").style.display = "block"; // show

            let url_desconectada = '';
            if (location.port == CONFIG.puerto_app_desconectada) {
                url = location.origin + "/jServerj4ErpPro/";
                if (location.port == "8383") {
                    url_desconectada = "http://localhost:8085/jServerj4ErpPro/";
                }
            }
            if (url_desconectada.length == 0) {
                url = CONFIG.URLServicesErp + '/j4pro/seguridad/validar_usuario_erp';
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(empresasLoginDomain),
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json, text/plain, */*',
                        'X-Auth-Token-empresa': id_empresa,
                        'X-Auth-Token-es-base': 1,
                        'X-Auth-Token-id-usuario': sesion.usuario,
                        'X-Auth-Token-usuario': sesion.usuario
                    }
                });
            } else {
                url = url_desconectada + '/j4pro/seguridad/validar_usuario_erp';
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: empresasLoginDomain.usuario_empresa,
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json, text/plain, */*',
                        'X-Auth-Token-empresa': id_empresa,
                        'X-Auth-Token-es-base': 1,
                        'X-Auth-Token-id-usuario': sesion.usuario,
                        'X-Auth-Token-usuario': sesion.usuario
                    }
                });
            }
            data = await respuesta.json();
            if (data.type === 1) {
                //token de erp
                localStorage.setItem('estado_pull', 'iniciado');
                localStorage.setItem('SessionUsuarioErp', data.retorno);
                //paso aqui al erp si
                setTimeout(function () {
                    // window.location.href = "carga.html"
                }, 1000 * 1);
            } else if (data.type === 0 && data.retorno === "Empresa no existe") {
                document.getElementById("div_trabajo").style.display = "block"; // show
                document.getElementById("div_carga").style.display = "none"; // show

                console.error(data.retorno);
                mostrarError(data.retorno);
            } else if (data.type === 0 && data.retorno === "La Aplicación no esta activa") {
                document.getElementById("div_trabajo").style.display = "block"; // show
                document.getElementById("div_carga").style.display = "none"; // show

                console.error(data.retorno);//"Actualmente su plan esta desativado por favor comuniquese al correo directivos@interpronosticos.com"
                mostrarError("Actualmente su plan esta desativado por favor comuniquese al correo directivos@interpronosticos.com");
            } else if (data.type === 0 && data.retorno === "") {
                document.getElementById("div_trabajo").style.display = "block"; // show
                document.getElementById("div_carga").style.display = "none"; // show

                console.error(data.retorno);//"No valido " + data.retorno + data.message + " o intente de nuevo"
                mostrarError("No valido " + data.retorno + data.message + " o intente de nuevo");
                localStorage.removeItem("id_consecutivoAsignado");
                localStorage.removeItem("consecutivo");
                localStorage.removeItem("busqCodigoBarras");
                localStorage.removeItem("fechaActualizacionBdErp");
                localStorage.removeItem("fechaActualizacionNotificacionesExistencias");
                localStorage.removeItem('idioma_j4pro_base');
                localStorage.removeItem('idioma_j4pro_erp');
                localStorage.removeItem('estado_pull');
                localStorage.removeItem('SessionUsuarioErp');
                localStorage.removeItem('SessionUsuarioBase');
                localStorage.removeItem('Sucursal');
                localStorage.removeItem("pedidoMesa");
                sessionStorage.removeItem("planEmpresa");
            } else {
                document.getElementById("div_trabajo").style.display = "block"; // show
                document.getElementById("div_carga").style.display = "none"; // show

                console.error(data.retorno);// data.message
                mostrarError(data.message);
            }
        } catch (error) {
            document.getElementById("div_trabajo").style.display = "block"; // show
            document.getElementById("div_carga").style.display = "none"; // show

            mostrarError(error.stack);
        }
    } else {
        //error en el login
        //'Usuario y/o Clave Incorrecto' en campo data.message
        document.getElementById("div_trabajo").style.display = "block"; // show
        document.getElementById("div_carga").style.display = "none"; // show
        if (data.message == "validar") {
            data.message = 'Usuario y/o Clave Incorrecto';
        }
        mostrarError(data.message)
    }
};