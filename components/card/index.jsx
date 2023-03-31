import { View, Text } from "react-native";
import React from "react";

const Card = ({ data }) => {
    return (
        <View>{data.length > 0 ? <View></View> : <Text>No content</Text>}</View>
    );
};

export default Card;
