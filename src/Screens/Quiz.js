import { View, } from "react-native";
import { useState, useEffect } from "react";



const Quiz = ({ name, score, questions, setQuestions, setScore}) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQuestions] = useState(0);

    useEffect(() => {
        console.log(questions);

        setOptions(
            questions &&
                handShuffle([
                    questions[currQues]?.correct_answer,
                    ...questions[currQues]?.incorrect_answer,
                ])
        )

    }, [questions]);

    console.log(options);

    const handShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);
    }

    return (
        <View>
            <Text>Welcome, {name}</Text>

            { 
                questions ? (
                <>
                    <View>
                        <Text>{questions[currQues]}</Text>
                        <Text>Score : {score}</Text>
                    </View>
                    //referencing a questions file
                    <Questions 
                        currQues={currQues}
                        setCurrQuestions={setCurrQuestions}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                    />
                </> 
                ) : (
                 <CircularProgress />
                )
            }
        </View>
    );
}

export default Quiz;