import React from 'react';
import {View, StyleSheet,Text } from 'react-native';
import {Avatar, Badge} from 'react-native-elements';
import Colors from '../../common/Colors';


const RoundedAvatar = (props) => {
    const {size, isBadge, name, image} = props;
    return(
        <View style={styles.container}>
            <Avatar
                size={size}
                icon={{name: 'user', type: 'font-awesome', color: Colors.primary}}
                onPress={() => alert("Works!")}
                rounded
                source={{uri: image}}
                placeholderStyle={{backgroundColor: Colors.white, borderWidth:2, borderColor: Colors.gold, borderRadius:50}}
            />
            <View>
                {(isBadge) ?
                    <Badge
                        status="success"
                        containerStyle={{marginTop: -12, marginLeft: 36, width: 10, height: 10}}
                        badgeStyle={{width: 10, height: 10}}
                    />
                : null}
            </View>
            {(name) ?
            <View>
                <Text style={{fontSize: 8, color:Colors.white, marginTop: 7}}> {name} </Text>
            </View>
                :null }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        // paddingHorizontal: 5
    }
})
export default RoundedAvatar;
