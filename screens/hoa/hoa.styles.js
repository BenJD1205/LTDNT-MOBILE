import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        lineHeight: 80,
        padding: 20,
        gap:80,
    },
    icons: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 40,
    },
    contain: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        gap:10,
    }
});

export default styles;
