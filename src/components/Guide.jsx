import { useState } from 'react';
import questions from "../data/questions";
import Card from './Card';
import ResetButton from './ResetButton';
import ProgressBar from './ProgressBar';

export const Guide = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswerClick = (answer) => {
    setAnswers([...answers, { questionId: currentQuestionId, answer: answer.text }]);
    setCurrentQuestionId(answer.nextQuestionId);
  };

  const handleReset = () => {
    setCurrentQuestionId(0);
    setAnswers([]);
  };

  const currentQuestion = questions.find(q => q.id === currentQuestionId);
  const progress = (answers.length / 3) * 100;

  if (currentQuestion.type === 'card') {
    return <Card title={currentQuestion.title} image={currentQuestion.image} description={currentQuestion.description} />;
  }

  return (
    <div>
      <ProgressBar progress={progress} />
      <ResetButton onReset={handleReset} />
      {currentQuestion.answers.length > 0 ? (
        <div className='py-12 my-24 text-center rounded-xl border border-gray-100 shadow-xl'>
          <h1 className='text-3xl '>{currentQuestion.question}</h1>
          <ul className='flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-6 justify-center p-8'>
            {currentQuestion.answers.map((answer, index) => (
              <div key={index} onClick={() => handleAnswerClick(answer)} className='grid grid-cols-1 lg:w-2/5 rounded-2xl pt-6 text-2xl bg-gray-100 shadow-2xl'>
                <li className='min-h-28 self-center px-6 pb-6'>{answer.text}</li>
                <img className='rounded-xl w-full' src={answer.image} alt="bike" />
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <Card answers={answers} />
          <ProgressBar progress={progress} />
          <ResetButton onReset={handleReset} />
        </div>
      )}
    </div>
    // <div>
    //   <ProgressBar progress={progress} />
    //   <ResetButton onReset={handleReset} />
    //   {currentQuestion.type === 'card' ? (
    //     <Card image={currentQuestion.image} description={currentQuestion.description} />
    //   ) : (
    //     <>
    //       <h1>{currentQuestion.question}</h1>
    //       <ul>
    //         {currentQuestion.answers.map((answer, index) => (
    //           <li key={index} onClick={() => handleAnswerClick(answer)}>
    //             <img src={answer.image} alt={answer.text} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
    //             {answer.text}
    //           </li>
    //         ))}
    //       </ul>
    //     </>
    //   )}
    // </div>
  );
};




