import { View, Text, Image } from "react-native";
import React from "react";
import styles from './cardHoa.styles';

const CardHoa = ({ item }) => {
   
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.hinh }} />
            <View style={styles.info}>
                <Text>{item.tenhoa}</Text>
                <Text>{item.mota}</Text>
            </View>
        </View>
    );
};

export default CardHoa;
