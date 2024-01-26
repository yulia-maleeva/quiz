const levels = {
  1:{
    key: 1,
    question_titles: [
      { question_title: "Небо", question: "Якого кольору небо?" },
      { question_title: "Трава", question: "Якого кольору трава?" },
    ],
  },
  2:{
    key: 2,
    question_titles: [
      {
        question_title: "Країна",
        question: "В якій країні ми живемо?",
        options: ["США", "Україна", "Польща", "Туреччина"],
        correct_option: ["Україна"],
      },
      {
        question_title: "Юля",
        question: "Кого любить Юля?",
        options: ["Віталік", "Тарас", "Діма", "Ігор"],
        correct_option: ["Віталік"],
      },
    ],
  },
  3:{
    key: 3,
    question_titles: [
      { question_title: "Земля", question: "На якій планеті ми живемо?" },
      { question_title: "Сонце", question: "Найбільша зірка" },
    ],
  },
};

export default levels;
