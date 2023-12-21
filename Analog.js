import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Line, Text } from 'react-native-svg';

const AnalogWatch = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourAngle = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteAngle = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondAngle = (360 / 60) * seconds;

    return (
        <View style={styles.container}>
            <Svg height="120" width="120">
                {/* White Border Circle */}
                <Circle cx="60" cy="60" r="60" stroke="white" strokeWidth="2" fill="white" />

                {/* Minute Lines and Counts */}
                {Array.from({ length: 60 }).map((_, index) => {
                    const minuteLineAngle = (360 / 60) * index;
                    const lineLength = index % 5 === 0 ? 6 : 3;
                    const isFiveMinuteMark = index % 5 === 0;

                    return (
                        <React.Fragment key={index}>
                            <Line
                                x1="60"
                                y1="10"
                                x2="60"
                                y2={10 + lineLength}
                                strokeWidth="2"
                                stroke="black"
                                rotation={minuteLineAngle}
                                origin="60,60"
                            />
                            {isFiveMinuteMark && (
                                <Text
                                    x="60"
                                    y="20"
                                    fill="black"
                                    fontSize="8"
                                    textAnchor="middle"
                                    rotation={minuteLineAngle}
                                    origin="60,60"
                                >
                                    {index / 5 === 0 ? 12 : index / 5}
                                </Text>
                            )}
                        </React.Fragment>
                    );
                })}

                {/* Hour Hand */}
                <Line
                    x1="60"
                    y1="60"
                    x2="60"
                    y2="30"
                    strokeWidth="4"
                    stroke="black"
                    rotation={hourAngle}
                    origin="60,60"
                />

                {/* Minute Hand */}
                <Line
                    x1="60"
                    y1="60"
                    x2="60"
                    y2="20"
                    strokeWidth="3"
                    stroke="black"
                    rotation={minuteAngle}
                    origin="60,60"
                />

                {/* Second Hand */}
                <Line
                    x1="60"
                    y1="60"
                    x2="60"
                    y2="10"
                    strokeWidth="2"
                    stroke="red"
                    rotation={secondAngle}
                    origin="60,60"
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 120,
    },
});

export default AnalogWatch;
