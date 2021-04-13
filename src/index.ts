const fileSelector = document.getElementById('csv-input');
  
fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;
  console.log(fileList);
});



function readCSV(file: File){
    var reader = new FileReader()
    reader.onload = (event) => {
      if(event.target){
        var data = event.target.result
        console.log(data)
      }
    }
    reader.readAsText(file)  
}

let map: google.maps.Map;
const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};


function labelMap(locations: Array<google.maps.LatLngLiteral>){
    const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 3,
          center: center
        }
      );
    
      // Create an array of alphabetical characters used to label the markers.
      const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
      // Add some markers to the map.
      // Note: The code uses the JavaScript Array.prototype.map() method to
      // create an array of markers based on a given "locations" array.
      // The map() method here has nothing to do with the Google Maps API.
      const markers = locations.map((location, i) => {
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length],
        });
      });
    
      // Add a marker clusterer to manage the markers.
      // @ts-ignore MarkerClusterer defined via script
      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
}