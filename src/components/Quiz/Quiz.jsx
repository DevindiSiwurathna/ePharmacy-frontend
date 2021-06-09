import React, {useState} from "react";
import FlashCard from "./FlashCard";

const Quiz = (props) => {
    let [questionIndex, setQuestionindex] = useState(0);

    const incrementIndex = () => 
    setQuestionindex((prev) => (prev.questionIndex += 1));

    const currentQuestion = props.configProps.questioons[questionIndex];

    if (!currentQuestion) {
        return<p>Quiz over.</p>
    }

    return (
        <FlashCard
        question={currentQuestion.question}
        answer = {currentQuestion.answer}
    )
}