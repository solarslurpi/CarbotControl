# CarbotControl 
CarbotControl is a mobile app that uses mqtt to talk with the [Carbot](https://github.com/solarslurpi/carbot) service on the Raspberry Pi.  It is part of the Doctor Growbuddy experience I am evolving.  With CarbotControl, I explore react-native and expo for building an app that will run on both iOS and Android.
# Resources
- Udemy courses for [React](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) and [React-native](https://www.udemy.com/course/react-native-the-practical-guide/).
- [React Native Crash Course 2020 YouTube Video](https://www.youtube.com/watch?v=Hf4MJH0jDb4).
# UI
![carbotcontrol ui](images\carbotcontrol_UI.jpg)

I did not want to spend too much time on the UI since this is a prototype.
# Running on iOS and Android
My current dev machine is a Windows PC.  This makes it impossible to run an iOS emulator.  I code and debug using the Android emulation under expo.  I can run the app on my iPhone using the QR scan code.  I imagine eventually I will buy an iOS developers license in order to distribute on iOS.  This will just make distribution simpler.  I don't have any plans to productize, so....
# Thoughts on React-Native
So far I believe react-native is a great choice for this project.  The UI isn't pretty.  It doesn't need to be highly performant.  The functionality is mostly communicating with the mosquitto mqtt broker running on the Raspberry Pi.
## mqtt
Given the simplicity of the UI, the biggest challenge is the mqtt client.  It is not obvious what mqtt client library to use.  I ended up using what I believe turned out to be the most successful and most used package - `react_native_mqtt`.  See [CarbotControl.js](components\CarbotControl.js).