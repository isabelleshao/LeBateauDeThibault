import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket, setQuantity} from "../component/BasketSlice"

import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from "react-native"

const OPTIONS = ['1', '2', '3', '4', '5'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {

    const dispatch = useDispatch()

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);

        dispatch(setQuantity({selectedId:(props.selectedId),option}));
    }

    const option = OPTIONS.map((item, index) => {
        return(
            
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH-20, height: HEIGHT/2}]}>
            <Text style={styles.titre}> Selectionner la quantité </Text>
                <ScrollView>
                    {option}
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {
                            dispatch(addToBasket(props.selectedId));
                            props.changeModalVisibility(false);
                        }}
                    >
                        <Text style={styles.text}>
                            {"Ajouter 1"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => {dispatch(removeFromBasket(props.selectedId));
                            props.changeModalVisibility(false);
                        }}
                    >
                        <Text style={styles.text}>
                            {"Enlever 1"}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modal: {
        backgroundColor: "white",
        borderRadius: 10
    },
    option: {
        borderTopWidth: 1,
        alignItems: "flex-start"
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    titre: {
        fontSize: 30,
        color: "black",
        fontStyle: "italic",
        marginBottom: 30,
        marginTop: 20,
        alignSelf: "center",
      },
})

export {ModalPicker}