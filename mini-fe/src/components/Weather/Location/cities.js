const states = require('../../../address.json');
const citiesData = {};
for (let state in states) {
    const cities = states[state];
    for (let city of cities) {
        if (city in citiesData) {
            citiesData[city].push(state);
        } else {
            citiesData[city] = [state];
        }
    }
}
export default citiesData;
