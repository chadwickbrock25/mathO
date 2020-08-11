const TestQ = [
    {
        question: "1 + 1",
        answer: "2",
        Qid: 1
    },
    {
        question: "1 + 2",
        answer: "3",
        Qid: 2
    },
    {
        question: "1 + 3",
        answer: "4",
        Qid: 3
    },
    {
        question: "1 + 4",
        answer: "5",
        Qid: 4
    },
    {
        question: "1 + 5",
        answer: "6",
        Qid: 5
    },
    {
        question: "1 + 6",
        answer: "7",
        Qid: 6
    },
    {
        question: "1 + 7",
        answer: "8",
        Qid: 7
    },
    {
        question: "1 + 8",
        answer: "3",
        Qid: 8
    },
    {
        question: "1 + 9",
        answer: "10",
        Qid: 9
    },
]
export default (n = 5) =>
    Promise.resolve(TestQ.sort(() => 0.5 - Math.random()).slice(0, n));