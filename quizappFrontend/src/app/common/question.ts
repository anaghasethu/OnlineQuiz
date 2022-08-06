export class Question {

    constructor(
        public questionID : Number,
        public question_Q : string,
        public  option1 : string,
        public  option2 : string,
        public  option3 : string,
        public  option4 : string,
        public quizID : number,
        public answer : string,
        public choice : string) {}
}
