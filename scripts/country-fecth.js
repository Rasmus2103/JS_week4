let previousCountry = null;

document.querySelector('svg').addEventListener('click', function(event) {
    if (event.target.tagName === 'path') {
        const countryCode = event.target.id;

        if(previousCountry) {
            previousCountry.style.fill = "#cccccc"; 
        }
        
        event.target.style.fill = "rgba(0, 128, 0, 0.5)";
        previousCountry = event.target;
        
        fetchCountryData(countryCode);
    }
});

function fetchCountryData(countryCode) {
    fetch(`https://countries.plaul.dk/api/countries/${countryCode}`)
        .then(response => response.json())
        .then(data => {
            displayCountryInfo(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayCountryInfo(country) {
    const countryInfoDiv = document.getElementById('countryInfo');

    if (country && country.name && country.name.common && country.capital) {
        countryInfoDiv.innerHTML = `
            <h2>${country.name.common}</h2>
            <p>Capital: ${country.capital}</p>`;
    } else {
        countryInfoDiv.innerHTML = '<p>No data available for selected country.</p>';
    }
}



document.querySelectorAll('path').forEach(country => {
    country.style.fill = "#cccccc"; 
});

