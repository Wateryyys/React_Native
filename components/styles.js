import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        //justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    warning: {
        color: 'blue'
    },
    row: {
        padding: 4,
        borderBottomColor: 'red',
        borderButtomWidth: StyleSheet.hairlineWidth
    }
})

export default styles;