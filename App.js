import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { LineChart } from 'react-native-chart-kit';

export default function WeatherDataScreen() {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.20.70/getDHTData');

        setTemperature(response.data.temperature);
        setHumidity(response.data.humidity);
      } catch (error) {
        console.error(error);
      }
    };

    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);
  }, []);

  const temperatureData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        data: [
          temperature, 
          temperature + 5, 
          temperature - 3, 
          temperature + 2, 
          temperature - 4, 
          temperature + 1
        ],
      },
    ],
  };

  const humidityData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        data: [
          humidity, 
          humidity - 5, 
          humidity + 3, 
          humidity - 2, 
          humidity + 4, 
          humidity - 1
        ],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Report</Text>
      <View style={styles.readingsContainer}>
        <View style={styles.readingBox}>
          <Text style={styles.readingText}>Temperature</Text>
          <Text style={styles.valueText}>{temperature} °C</Text>
        </View>
        <View style={styles.readingBox}>
          <Text style={styles.readingText}>Humidity</Text>
          <Text style={styles.valueText}>{humidity} %</Text>
        </View>
      </View>
      <LineChart
        data={temperatureData}
        width={300}
        height={200}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

        }}
      />
      <LineChart
        data={humidityData}
        width={300}
        height={200}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
    fontStyle: 'italic'
  },
  readingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  readingBox: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  readingText: {
    fontSize: 18,
    marginTop: 5,
  },
  valueText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
});