import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get("window")
const Calendar = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'short' });
    const currentYear = currentDate.getFullYear();

    const numberOfDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const startingDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const days = Array.from({ length: numberOfDays }, (_, index) => {
        const day = index + 1;
        const isToday = currentDay === day;
        return (
            <Text key={day} style={[styles.day, isToday && styles.today]}>
                {day}
            </Text>
        );
    });

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{currentMonth} </Text>
            <View style={styles.daysContainer}>

                {Array(startingDay)
                    .fill(null)
                    .map((_, index) => (
                        <Text
                            key={`empty-${index}`} style={styles.emptyDay}></Text>
                    ))}
                {days}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: width * 0.45
    },
    headerText: {
        fontSize: width * 0.045,
        // marginBottom: 2,
        color: "red",
        marginLeft: -width * 0.28,
        fontWeight: "800"
    },
    daysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dayName: {
        width: 30,
        textAlign: 'center',
        marginBottom: 5,
        fontSize: 10,
    },
    emptyDay: {
        width: 10,
        height: 10,
        marginBottom: 2,
    },
    day: {
        width: 20,
        height: 20,
        textAlign: 'center',
        marginBottom: 5,
        borderRadius: 15,
        overflow: 'hidden',
        // backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        fontSize: 9,
        fontWeight: "800",
        color: "black"
    },
    today: {
        backgroundColor: 'red',
        color: 'white',
    },
});

export default Calendar;
