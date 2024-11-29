import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import Btn from '../components/Btn';

function HomeScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.innerCon}>
        <View style={styles.blackCon}>
          <View style={styles.MainCon}>
            <View style={styles.logoCon}>
              <Image
                style={styles.picStyle}
                source={require('../img/QuantumQuizLogo.jpeg')}
              />
              <Text style={styles.text}>Welcome to QuantumQuiz</Text>
            </View>
            <View style={styles.setupBox}>
              <Text style={styles.subHeader}>
                Enter Your QuarkQuestor Name:
              </Text>
              <TextInput
                style={styles.input}
                placeholder="QuarkQuestor Captain Jack"
                placeholderTextColor={'white'}
                inputMode="text"
                cursorColor={'white'}
                onChangeText={userInput => setName(userInput)}
              />
              <Text style={styles.subHeader}>
                Number of Questions to Launch:
              </Text>
              <TextInput
                style={styles.input}
                placeholder="5"
                placeholderTextColor={'white'}
                inputMode="numeric"
                onChangeText={userInput => setNumber(parseInt(userInput))}
              />
            </View>
            <View style={styles.btnBox}>
              <Btn
                type={2}
                title="RESET"
                onPress={() => {
                  setName('');
                  setNumber(0);
                }}
              />
              <Btn
                type={1}
                title="LAUNCH"
                onPress={() => {
                  navigation.navigate('Quiz', {name: name, number: number});
                  console.log('Launching Quiz with :' + name + ' ' + number);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  subHeader: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  innerCon: {
    backgroundColor: '#01BFAE',
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    height: '98%',
    width: '96%',

    borderRadius: 10,
  },
  blackCon: {
    backgroundColor: 'black',
    height: '98%',
    width: '98%',
    borderWidth: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainCon: {
    height: '98%',
    width: '98%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'rgba(55,11,102,1)', // Dark purple with 50% opacity
  },
  picStyle: {
    height: 300,
    width: 350,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'absolute',
  },
  logoCon: {
    borderWidth: 5,
    borderColor: 'white',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setupBox: {
    height: 250,

    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'rgba(155,11,122,0.1)', // Dark purple with 50% opacity
    color: 'white',
  },
  btnBox: {
    height: 100,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
