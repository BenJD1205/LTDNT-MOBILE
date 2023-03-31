import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    icons: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 40,
    },
    contain: {
        flex: 1,
        backgroundColor:'white'
    }
});

export default styles;
