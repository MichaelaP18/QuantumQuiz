import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Btn from '../components/Btn';

function QuizScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {
  const [quizQuestions, setQuizQuestions] = useState([]);

  const number = route.params?.number;

  const fetchQuestion = async () => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${number}`,
      );
      const data = await response.json();
      setQuizQuestions(data.results);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchQuestion();
  }, []);

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
                {quizQuestions.map((question: any, index: number) => (
                  <ScrollView>
                    <Text key={index} style={styles.questionText}>
                      {question.category}
                    </Text>
                    <Text>{question.question}</Text>
                  </ScrollView>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.logoCon}>
            <Image
              style={styles.picStyle}
              source={require('../img/QuantumQuizLogo.jpeg')}
            />
            <View style={styles.answerBox}>
              {quizQuestions.map((question: any) => (
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    margin: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Answer', {
                        number: route.params?.number,
                        name: route.params?.name,
                        question: question.question,
                        answer: question.correct_answer,
                        correct: 0,
                      });
                    }}>
                    <View style={styles.answerButtons}>
                      <Text style={styles.answerText}>
                        {question.correct_answer}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {question.incorrect_answers.map(
                    (answer: any, index: number) => (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Answer', {
                            number: route.params?.number,
                            name: route.params?.name,
                            question: question.question,
                            answer: answer,
                            correct: 1,
                          });
                        }}>
                        <View style={styles.answerButtons}>
                          <Text style={styles.answerText}>{answer}</Text>
                        </View>
                      </TouchableOpacity>
                    ),
                  )}
                </View>
              ))}
            </View>

            <View style={styles.btnBox}>
              <Btn
                type={1}
                title="Next Question"
                onPress={() => {
                  navigation.navigate('Quiz');
                }}
              />

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
  answerText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
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
    height: 460,
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
    flexWrap: 'wrap',

    top: 400,

    justifyContent: 'center',
  },

  btnBox: {
    height: 50,
    width: 350,
    flexDirection: 'row',

    borderRadius: 10,
    position: 'absolute',
    top: 260,
    justifyContent: 'center',
  },
  questionBox: {
    height: 270,
    width: 360,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: 'rgba(55,11,152,1)', // Dark purple with 50% opacity
  },
  innerQuestion: {
    height: 180,
    width: '90%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
    gap: 10,
    margin: 10,

    backgroundColor: 'white',
  },
  answerBox: {
    height: 460,
    width: 350,

    backgroundColor: 'rgba(55,11,52,0.5)', // Dark purple with 50% opacity
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: -70,
  },
  answerButtons: {
    height: 100,
    width: 120,

    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuizScreen;
