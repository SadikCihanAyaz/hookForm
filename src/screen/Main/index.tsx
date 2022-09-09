import React from 'react';
import { View, SafeAreaView } from 'react-native';
import CLButton from '../../component/CLButton';
import style from './style';

interface Props {

}

const Main: React.FC<Props> = (props) => {

    const onPress = () => {
        console.log('btn is pressed!!');
    }

    return (
        <SafeAreaView>
            <View style={style.container}>
                <CLButton text='TEXT' onPress={onPress} />
            </View>
        </SafeAreaView>
    )

}

export default Main;