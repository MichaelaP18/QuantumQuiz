import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const btnColors = [
  'rgba(1, 191, 174, 1)', // blue background color
  '#A04747', // red background color
];

export enum btnType {
  Primary = 1,
  Danger,
}

type btnPropType = {
  type: btnType; // type 1 : Primary button; 2 : Danger Button
  title: string;
  onPress: () => void;
};

function Btn(props: btnPropType): React.JSX.Element {
  const type = props.type;
  const title = props.title;
  const onPress = props.onPress;
  return (
    <Pressable
      onPress={onPress}
      style={[style.btnView, {backgroundColor: btnColors[type - 1]}]}>
      <Text style={style.btnTxt}>{title}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  btnView: {
    elevation: 8,
    borderWidth: 2,
    borderColor: 'brown',
    borderRadius: 10,
    //   maxWidth: 150,
    minWidth: '30%',
    height: 32,
    alignSelf: 'center',

    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Btn;
