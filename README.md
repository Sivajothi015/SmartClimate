# SMARTCLIMATE | Real-Time Temperature and Humidity Monitoring System

SMARTCLIMATE is a mobile application that allows users to monitor real-time temperature and humidity data from a DHT11 sensor connected to a NodeMCU. The app is developed using React Native and integrates Firebase for real-time data updates and storage. This system enables seamless monitoring of environmental conditions through a mobile interface.

## Features

- **Real-Time Monitoring**: Displays live temperature and humidity data from the DHT11 sensor connected to NodeMCU.
- **Seamless Data Sync**: Uses Firebase for real-time data updates, ensuring the app always shows the latest readings.
- **Mobile App Interface**: Built with React Native to provide a smooth and responsive user experience across both Android and iOS platforms.
- **Data Storage**: Firebase stores the temperature and humidity data, allowing for historical tracking and retrieval of past readings.

## Tech Stack

- **Hardware**: 
  - NodeMCU (ESP8266)
  - DHT11 Temperature and Humidity Sensor
- **Frontend**: 
  - React Native (for mobile app development)
- **Backend**: 
  - Firebase (for real-time data updates and storage)
- **Communication**: 
  - HTTP (for communication between NodeMCU and Firebase)
