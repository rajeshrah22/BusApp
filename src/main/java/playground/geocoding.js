const API_KEY = "AIzaSyDVbO9qu-JXbMHKL6jULNdrP1r3o8L0Q4g";

let URL = "https://maps.googleapis.com/maps/api/geocode/json?";

const address = "295 Turpike Road, Westborough, MA 01581"

URL = URL + "address=" + address.replace(" ", "%20") + "&key=" + API_KEY;

fetch(URL)
  .then((res) => {
    if (res.ok) {
      console.log("succesful");
      return res.json();
    } else {
      console.log("not succesfull");
      return undefined;
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));