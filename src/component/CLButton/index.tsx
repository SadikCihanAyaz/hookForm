import React from 'react';
import { View, Pressable, Text } from 'react-native';
import style from './style';
import commonStyle from '../../common/Style';

interface Props {
    text: string;
    onPress() : void;
}

const CLButton: React.FC<Props> = (props) => {

    const {text, onPress} = props;

    return (
        <Pressable style={style.container} onPress={onPress}>
            <Text style={commonStyle.center}>{text}</Text>
        </Pressable>)
}

export default CLButton;