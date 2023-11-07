const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "yellow";
        if (C.innerHTML === '°C') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = '${converter.value}°C to ${value.toFixed(2)}°F';
        } else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = '${converter.value}°F to ${value.toFixed(2)}°C';
        }
    } else if (converter.value == '') {
        result.style.color = "#993300";
        result.innerHTML = 'Write correct value!';
    } else {
        result.style.color = "#993300";
        result.innerHTML = 'Wrong value!';
    }
};
