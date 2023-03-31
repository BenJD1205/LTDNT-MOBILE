import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import styles from './card.styles';

const Card = ({ item,navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Hoa',{maloai:item.maloai})} style={styles.container} >
            <Image source={{uri:item.hinh}} />
            <Text>{item.tenloai}</Text>
        </TouchableOpacity>
    );
};

export default Card;
