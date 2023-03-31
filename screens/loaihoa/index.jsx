import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from "react-native";
import styles from "./loaihoa.styles";
import React, { useEffect, useState } from "react";
import config from "../../config/config";
import { Card } from "../../components";

import { icons, images } from "../../constants";

const Loaihoa = () => {
    const [loaihoa, setLoaihoa] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            try {
                const res = await fetch(`${config.backendPort}/loaihoa`);
                const jsonData = await res.json();
                jsonData.every(
                    (el) =>
                        (el.hinh = "http://localhost:5001/images/" + el.hinh)
                );
                console.log(jsonData);
                setLoaihoa(jsonData);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);

    function renderHeader() {
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={icons.menu} style={styles.icons} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.title}>Ben's Flower</Text>
                </View>
                <TouchableOpacity>
                    <Image source={images.profile} style={styles.icons} />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <Card data={loaihoa} />
        </SafeAreaView>
    );
};

export default Loaihoa;
