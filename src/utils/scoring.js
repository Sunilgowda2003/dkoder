// Single scoring function used by results and tests. answers: {questionId: optionIndex}
export function scoreAttempt(exam,questions,answers){let correct=0,wrong=0;
for(const q of questions){const a=answers[q.id];if(a===undefined||a===null)continue;a===q.a?correct++:wrong++}
const attempted=correct+wrong,score=+(correct*exam.marks.right+wrong*exam.marks.wrong).toFixed(2);
return{correct,wrong,attempted,unanswered:questions.length-attempted,score,max:questions.length*exam.marks.right,accuracy:attempted?Math.round(correct/attempted*100):0}}
