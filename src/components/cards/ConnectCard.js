import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

const ConnectCard = (props) =>{
    const {backgroundColor, roundedImage, onPress, price, heading} = props;
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View
                style={{
                    backgroundColor: backgroundColor,
                    flex: 1,
                    borderRadius: 20,
                    borderTopLeftRadius: 19,
                    justifyContent:'space-evenly',
                    alignItems: 'center',
                    shadowColor: "#000000",
                    shadowOffset: {width: 4, height: 8},
                    shadowOpacity: 0.15,
                    shadowRadius: 3.84,
                    elevation: 2,
                }}
            >
                {(heading)
                ? <View>
                        <Text style={styles.heading}>{heading}</Text>
                    </View>
                : null}

                {(roundedImage)
                    ? <View>
                       <Image style={styles.starImages} source={roundedImage} />
                      </View>
                    : null}
                {(price)?
                <View >
                    <Text style={styles.counter}>{price}</Text>
                </View>
                    : null }
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    heading:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        fontSize: 14,
        textAlign: 'center'
    },
    starImages:{
        height: 20,
        width: 20,
        borderRadius: 50,
    },
    counter:{
        color: Colors.white,
        fontFamily: Fonts.primary,
    }
})
export default ConnectCard;
