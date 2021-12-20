import React, { useState, useEffect } from 'react';
import CarbotButton from '../UI/CarbotButton';
import Constants from '../constants/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import init from 'react_native_mqtt';

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {
    }
});

/**
|--------------------------------------------------
| I was having challenges keeping the connection alive. It kept closing.  I'm also getting messages like:
| onConnectionLost:AMQJS0007E Socket error:undefined.
| So the 'hack' I'm using is what ended up working.  SIGH!....
|--------------------------------------------------
*/
const CarbotControl = () => {
    console.log('-> TOP of CarbotControl()');

    const mqttClient = new Paho.MQTT.Client("192.168.86.25", 9000, "sparky");
    mqttClient.onConnectionLost = onConnectionLost;

    function onConnectionLost(responseObject) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }

    const CarbotMove = (moveCommand) => {
        const topic = 'carbot/move';
        console.log('-> TOP of CarbotMove. The move command is ' + moveCommand);
        const onForward = () => {
            console.log('-> top of onForward().');
            mqttClient.publish(topic, Constants.MQTT_FORWARD, 0, true);
        }
        const onBackward = () => {
            console.log('-> top of onBackward().');
            mqttClient.publish(topic, Constants.MQTT_BACKWARD, 0, true);
        }
        const onStop = () => {
            console.log('-> top of onStop(). ');
            mqttClient.publish(topic, Constants.MQTT_STOP, 0, true);
        }
        const onFaster = () => {
            console.log('-> top of onFaster(). ');
            mqttClient.publish(topic, Constants.MQTT_FASTER, 0, true);
        }
        const onSlower = () => {
            console.log('-> top of onSlower(). ');
            mqttClient.publish(topic, Constants.MQTT_SLOWER, 0, true);
        }

        switch (moveCommand) {
            case Constants.FORWARD:
                try {
                    mqttClient.connect({ onSuccess: onForward });
                } catch {
                    console.log('error trying to connect....probably already connected....');
                    onForward();
                }
                // mqttClient.publish(topic, Constants.MQTT_FORWARD, 0, true);
                break;
            case Constants.BACKWARD:
                console.log('constants.BACKWARD');
                try {
                    mqttClient.connect({ onSuccess: onBackward });
                } catch {
                    console.log('error trying to connect....probably already connected....');
                    onBackward();
                }
                break;
            case Constants.STOP:
                try {
                    mqttClient.connect({ onSuccess: onStop });
                } catch {
                    console.log('error trying to connect....probably already connected....');
                    onStop();
                }
                break;

            case Constants.FASTER:
                try {
                    mqttClient.connect({ onSuccess: onFaster });
                } catch {
                    console.log('error trying to connect....probably already connected....');
                    onFaster();
                }
                break;
            case Constants.SLOWER:
                try {
                    mqttClient.connect({ onSuccess: OnSlower });
                } catch {
                    console.log('error trying to connect....probably already connected....');
                    onSlower();
                }
                break;

            default:
                break;
        }
    }


    return (
        <>
            <CarbotButton title={Constants.FORWARD} moveCarbot={CarbotMove} />
            <CarbotButton title={Constants.BACKWARD} moveCarbot={CarbotMove} />
            <CarbotButton title={Constants.STOP} moveCarbot={CarbotMove} />
            <CarbotButton title={Constants.FASTER} moveCarbot={CarbotMove} />
            <CarbotButton title={Constants.SLOWER} moveCarbot={CarbotMove} />
        </>
    );
}
export default CarbotControl;