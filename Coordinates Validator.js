function isValidCoordinates(coordinates){
for (i = 0; i < coordinates.length; i++)
  if (coordinates[i] != (number || "-" || "," || "." || " ")
      return false
      
for (i = 0; coordinates[i] != ","; i++)
  if (coordinates[i] = ",") {
    let lat = coordinates.slice(0, i);
    let long = coordinates.slice(i+1, coordinates.length +1);
    };
  
if ((-90 <= lat <= 90) || (-180 <= long <= 180))  
return true;

}

var ValidCoordinates = [
    "-23, 25",
    "4, -3",
    "24.53525235, 23.45235",
    "04, -23.234235",
    "43.91343345, 143"
  ];
for( i in ValidCoordinates ) {
  Test.expect(isValidCoordinates(ValidCoordinates[i]), ValidCoordinates[i] + " validation failed.");
}

var InvalidCoordinates = [
    "23.234, - 23.4234",
    "2342.43536, 34.324236",
    "N23.43345, E32.6457",
    "99.234, 12.324",
    "6.325624, 43.34345.345",
    "0, 1,2",
    "0.342q0832, 1.2324",
    "23.245, 1e1"
  ];
for( i in InvalidCoordinates ) {
  Test.expect(!isValidCoordinates(InvalidCoordinates[i]), InvalidCoordinates[i] + " validation failed.");
}