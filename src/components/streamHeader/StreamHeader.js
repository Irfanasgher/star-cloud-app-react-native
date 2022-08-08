import React, {Component} from 'react';
import {View,Text,TouchableOpacity, StyleSheet, Image} from 'react-native';
import RoundedAvatar from '../roundedAvatar/RoundedAvatar';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
const StreamHeader = (props) => {
    const {image, name, nameColor, subTitle, titleImage, sidebarImage, titleColor, backgroundImage, isLine} =props;
    return(
        <View>
            <View style={styles.container}>
                <View style={{flexDirection: 'row',}}>
                    <RoundedAvatar size={"medium"} image={image}/>
                    <View style={styles.headingContainer}>
                        <Text style={{fontSize: 14, color: [nameColor], fontFamily: Fonts.primary, width: '70%'}}>{name}</Text>
                        <View style={styles.titleImageContainer}>
                            {(titleImage) ?
                            <Image source={{uri: titleImage}} style={styles.titleImage}/>
                            : null }
                            <Text style={{fontSize: 10, color:[titleColor], fontFamily: Fonts.primary}}>{subTitle}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    {(backgroundImage)
                        ? <TouchableOpacity onPress={ () => alert('Works')}>
                            <Image source={backgroundImage} style={styles.backImageStyling}/>
                          </TouchableOpacity>
                        : <Image source={sidebarImage} style={styles.sidebarImageStyling}/>
                    }
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems:'center',
    },
    headingContainer:{
        marginLeft: 20,
    },
    titleImageContainer:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    titleImage:{
        width: 20,
        marginRight: 5,
        height: 15
    },
    backImageStyling:{
        width: 50,
        height: 25,
        borderRadius: 8,
        resizeMode: 'contain'
    },
    sidebarImageStyling:{
        width: 20,
        height: 25,
        resizeMode: 'contain'
    }
})
export default StreamHeader;
