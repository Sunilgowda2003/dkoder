// SAMPLE EXAMS built from sample questions. Not official exam papers.
export const exams=[
{id:'mixed-starter',title:'Mixed starter test',minutes:8,difficulty:'Easy',marks:{right:1,wrong:-0.25},questionIds:['a1','a2','n1','n2','i1','i2'],about:'Aptitude plus core computer science, all sample questions.'},
{id:'tech-check',title:'Quick tech check',minutes:4,difficulty:'Medium',marks:{right:2,wrong:-0.5},questionIds:['n1','n2','i1','i2'],about:'Four sample computer science questions with heavier marking.'}];
export const getExam=id=>exams.find(e=>e.id===id);
