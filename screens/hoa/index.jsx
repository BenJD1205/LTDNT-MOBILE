import {  Image,Text, View, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import config from "../../config/config";
import { CardHoa } from "../../components";
import styles from "./hoa.styles";
import { icons } from '../../constants';

const Hoa = ({ route, navigation }) => {
    const { maloai } = route.params;
    const [hoas, setHoas] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`${config.backendPort}/hoa/${maloai}`);
                const jsonData = await res.json();
                jsonData.every(
                    (el) =>
                        (el.hinh = "http://192.168.1.142:5001/images/" + el.hinh)
                );
                setHoas(jsonData)
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        getData()
    }, [maloai])
    
    function renderHeader() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.chevronLeft} style={styles.icons} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>Hoa</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            {renderHeader()}
            <ScrollView style={styles.contain}>
                {hoas.map((item) => (
                    <CardHoa item={item} key={item._id} />
                ))}
            </ScrollView>
        </View>
    );
};

export default Hoa;
