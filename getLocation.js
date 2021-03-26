
'use strict';


 async function getLocation(e) {
    console.log(this.state)





    try {
      e.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?q=${this.state.quer}&format=json&key=${process.env.REACT_APP_LOCATION_KEY}`;
      const location = await axios.get(url);
      const locationArray = location.data;

      this.setState({
        location: locationArray[0],
        displayResults: true,
        imgsrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=13`,
        loclat: locationArray[0].lat,
        loclon: locationArray[0].lon
      });

    } catch (error) {
      <Error error={error.message} />;
    }
  };

modular.exports = getLocation;