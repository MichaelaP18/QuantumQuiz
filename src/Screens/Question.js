import { useState } from "react";

const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions,
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return "select";
        } else if (selected === i && selected !== correct) {
            return "wrong";
        } else if (i===correct) {
            return "select";
        }
    };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
    }

    return (
        <View>
            <Text>Question {currQues + 1}</Text>

            <View>
                <Text>{questions[currQues].question}</Text>

                <View>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {
                        options && 
                        options.map(i => (
                            <button onClick={() => handleCheck(i) } 
                            className="$"{selected && handleSelect(i)}
                            key={i}
                            disabled={selected}
                            >{i}</button>
                        ))
                    }
                </View>
            </View>
        </View>
    );
}