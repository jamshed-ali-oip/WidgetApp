import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import Swipeable from 'react-native-swipeable';
const { height, width } = Dimensions.get("window")
const SwipeableItem = ({ item, onSwipeLeft, onSwipeRight }) => {
    return (
        <Swipeable
            leftActionActivationDistance={200}
            rightActionActivationDistance={200}
            onLeftActionRelease={() => onSwipeLeft(item.id)}
            onRightActionRelease={() => onSwipeRight(item.id)}
            leftContent={<Text>Pull to delete</Text>}
            rightContent={<Text>Pull to delete</Text>}
        >
            <TouchableOpacity style={{

                padding: 16,
                backgroundColor: 'rgba(250, 250, 250, 0.34)',
                width: width * 0.83,
                alignSelf: "center",

                borderRadius: 20,
                margin: 2,
                height: height * 0.085,
                justifyContent: "center",
                alignContent: "center",
                // alignItems: "center"
            }}>
                <Text
                    style={{
                        fontFamily: "Montserrat-Regular",
                        fontSize: width * 0.0245,
                        alignSelf: "center",
                        marginLeft: width * 0.6,
                        marginBottom: -height * 0.003,
                        color: "black"
                    }}
                >9:41 AM</Text>

                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                    <Image
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 100
                        }}
                        source={require("./images/images.jpg")}
                    />
                    <View
                        style={{
                            marginLeft: width * 0.0125
                        }}
                    >
                        <Text
                            style={{
                                fontSize: width * 0.035,
                                fontFamily: "Montserrat-Bold",
                                color: "black"
                            }}
                        >
                            {/* {item.text} */}
                            Mohammad Mustafa
                        </Text>
                        <Text
                            style={{
                                fontSize: width * 0.028,
                                fontFamily: "Montserrat-Regular",
                                color: "black"
                            }}
                        >An amazing night with the friends in kar...</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
};

const SwipeableList = () => {
    const [items, setItems] = useState([
        { id: '1', text: 'Item 1' },
        { id: '2', text: 'Item 2' },
        { id: '3', text: 'Item 3' },
        // Add more items as needed
    ]);

    const handleSwipeLeft = (itemId) => {
        const updatedItems = items.filter((item) => item.id !== itemId);
        setItems(updatedItems);
    };

    const handleSwipeRight = (itemId) => {
        const updatedItems = items.filter((item) => item.id !== itemId);
        setItems(updatedItems);
    };

    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <SwipeableItem
                        item={item}
                        onSwipeLeft={handleSwipeLeft}
                        onSwipeRight={handleSwipeRight}
                    />
                )}
            />
        </View>
    );
};

export default SwipeableList;
