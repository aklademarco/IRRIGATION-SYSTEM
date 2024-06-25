
  shouldWaterPlants = (isWeekday, soilMoisture, moistureThreshold, rainForecast) => {
  const conditionA = isWeekday; 
  const conditionB = soilMoisture < moistureThreshold; 
  const conditionC = !rainForecast; 

 
  if (conditionA && conditionB && conditionC) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
const isWeekday = true; // It's a weekday
const soilMoisture = 30; // Current soil moisture level
const moistureThreshold = 50; // Moisture threshold
const rainForecast = false; // No rain predicted for the next 24 hours

const shouldWater = shouldWaterPlants(isWeekday, soilMoisture, moistureThreshold, rainForecast);

console.log(`Should water the plants: ${shouldWater}`); // Output: Should water the plants: true