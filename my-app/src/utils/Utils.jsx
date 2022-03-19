export const dayFormatter = (day) => {
    const event = new Date(day);
    const fullDauData = event.toString();
    const weekDay = fullDauData.split(" ")[0]
    return weekDay
}

export const averageTempFormatter = (maxTemp, minTemp, unit) => {
    const averageTemp = 
    Math.trunc(Number(maxTemp) + Number(minTemp) / 2) 
    + 
    ` º${unit}`
    return averageTemp
}

export const metricImperialTempFormatter = (temp, unit) => {
    const metricImperialTemp = `${temp} º${unit}`
    return metricImperialTemp
}
