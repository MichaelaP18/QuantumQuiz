import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Btn from '../components/Btn';
import {BlurView} from '@react-native-community/blur';

function QuizScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.innerCon}>
        <View style={styles.blackCon}>
          <View style={styles.MainCon}>
            <View style={styles.questionBox}>
              <View style={styles.innerQuestion}>
                <Text style={styles.questionHead}>
                  Question {route.params?.number} for {route.params?.name}:{' '}
                </Text>
                <Text style={styles.questionText}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  quos est accusantium enim vitae, at assumenda, sit temporibus
                  vero magnam perspiciatis culpa sed error facere modi alias,
                  velit dolorem sapiente.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.logoCon}>
            <Image
              style={styles.picStyle}
              source={require('../img/QuantumQuizLogo.jpeg')}
            />
            <View style={styles.answerBox}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Answer', {
                    number: route.params?.number,
                    name: route.params?.name,
                  });
                }}>
                <View style={styles.answerButtons}>
                  <Text>Box 1</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.answerButtons}>
                <Text>Box 2</Text>
              </View>
              <View style={styles.answerButtons}>
                <Text>Box 3</Text>
              </View>
              <View style={styles.answerButtons}>
                <Text>Box 4</Text>
              </View>
              <View style={styles.btnBox}>
                <Btn
                  type={2}
                  title="Go Back to Base"
                  onPress={() => {
                    navigation.navigate('Home');
                  }}
                />
              </View>
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
  questionHead: {
    color: 'black',

    fontWeight: 'bold',
    fontSize: 25,
  },
  questionText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
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

    alignItems: 'center',
  },
  picStyle: {
    height: 375,
    width: 350,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    bottom: -70,
  },
  logoCon: {
    position: 'absolute',
    height: 275,
    width: 350,

    top: 400,

    alignItems: 'center',
    justifyContent: 'center',
  },

  btnBox: {
    height: 50,
    width: 350,

    borderRadius: 10,
    position: 'absolute',
    top: 260,
    justifyContent: 'center',
    right: -26,
  },
  questionBox: {
    height: 360,
    width: 360,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: 'rgba(55,11,152,1)', // Dark purple with 50% opacity
  },
  innerQuestion: {
    height: '90%',
    width: '90%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,

    backgroundColor: 'white',
    justifyContent: 'center',
  },
  answerBox: {
    height: 375,
    width: 350,

    backgroundColor: 'rgba(55,11,52,0.5)', // Dark purple with 50% opacity
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'absolute',
    bottom: -70,
  },
  answerButtons: {
    height: 100,
    width: 120,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuizScreen;
