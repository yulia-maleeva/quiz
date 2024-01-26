import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      currentUserIndex: 0,
      users: [
        { user_name: "Віталік", user_score: 0 },
        { user_name: "Таня", user_score: 0 },
        { user_name: "Ігор", user_score: 0 },
        { user_name: "Люба", user_score: 0 },
      ],
      levels: [
        {
          key: 1,
          questions: [
            {
              question_key: 1,
              question_title: "Юпітер",
              question: "Яка найбільша планета в Сонячній системі?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 2,
              question_title: "Безкінечність",
              question: "Яке найбільше число?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 3,
              question_title: "Київ",
              question: "Як називається столиця України?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 4,
              question_title: "Міжнародний жіночий день",
              question: "Що відзначають 8 березня?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 5,
              question_title: "Дніпро",
              question: "Яка ріка є найбільшою в Україні?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 6,
              question_title: "Червоний",
              question: "Який колір веде спектр райдуги?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 7,
              question_title: "Директор",
              question: "Як називається головний мовець у театрі?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 8,
              question_title: "Мяу",
              question: "Як говорить кіт?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 9,
              question_title: "Літо",
              question:
                "Які літні місяці включаються в квартал червень-липень-серпень?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 10,
              question_title: "Тихий океан",
              question: "Як називається найбільший океан на Землі?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 11,
              question_title: "Любов",
              question: "Що символізує червона троянда?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 12,
              question_title: "Вулик",
              question: "Як називається основний будинок для життя бджіл?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
          ],
        },
        {
          key: 2,
          questions: [
            {
              question_key: 1,
              question_title: "Столиця",
              question: "Як називається столиця Франції?",
              options: ["Рим", "Мадрид", "Париж", "Берлін"],
              correct_option: "Париж",
              disabled: false,
            },
            {
              question_key: 2,
              question_title: "Річка",
              question: "Яка річка є найдовшою на світі?",
              options: ["Ніл", "Амазонка", "Янцзи", "Міссісіпі"],
              correct_option: "Амазонка",
              disabled: false,
            },
            {
              question_key: 3,
              question_title: "Планети",
              question: "Скільки планет у Сонячній системі?",
              options: ["7", "8", "9", "10"],
              correct_option: "8",
              disabled: false,
            },
            {
              question_key: 4,
              question_title: "Гори",
              question: "Як називається найвищий горний вершок світу?",
              options: ["Макпай", "К2", "Еверест", "Аконкагуа"],
              correct_option: "Еверест",
              disabled: false,
            },
            {
              question_key: 5,
              question_title: "Райдуга",
              question: "Який кольоровий спектр входить до складу райдуги?",
              options: [
                "Червоний, синій, зелений",
                "Жовтий, оранжевий, червоний",
                "Фіолетовий, синій, зелений",
                "Чорний, білий, сірий",
              ],
              correct_option: "Червоний, синій, зелений",
              disabled: false,
            },
            {
              question_key: 6,
              question_title: "Танець",
              question: "Якій країні належить канкан?",
              options: ["Італія", "Франція", "Іспанія", "Аргентина"],
              correct_option: "Франція",
              disabled: false,
            },
            {
              question_key: 7,
              question_title: "Океан",
              question: "Як називається найбільший океан на Землі?",
              options: [
                "Тихий",
                "Атлантичний",
                "Індійський",
                "Північний Льодовитий",
              ],
              correct_option: "Тихий",
              disabled: false,
            },
            {
              question_key: 8,
              question_title: "Хімія",
              question: "Що є хімічним елементом з абревіатурою О",
              options: ["Оксиген", "Олюмпій", "Озон", "Осмій"],
              correct_option: "Оксиген",
              disabled: false,
            },
            {
              question_key: 9,
              question_title: "Озеро",
              question:
                "Як називається велике озеро, розташоване між Канадою та США?",
              options: [
                "Байкал",
                "Каспійське море",
                "Велике Ведмеже",
                "Велике Солоне",
              ],
              correct_option: "Велике Солоне",
              disabled: false,
            },
          ],
        },
        {
          key: 3,
          questions: [
            {
              question_key: 1,
              question_title: "Сахара",
              question: "Яка найбільша пустеля в світі?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 2,
              question_title: "Джомолунґма",
              question:
                "Як називається найвища гора в системі гір Західний Гімалаї?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 3,
              question_title: "Австралія",
              question: "Як називається найбільший острів в світі?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 4,
              question_title: "Рис",
              question: "Що є найпоширенішою рослиною на Землі?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 5,
              question_title: "Земля",
              question: "На якій планеті ми живемо?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
            {
              question_key: 6,
              question_title: "Хлор",
              question:
                "Яке хімічне речовина водорозчинна та використовується для знебарвлення води?",
              image: "/assets/images/Трава.jpg",
              disabled: false,
            },
          ],
        },
      ],
    };
  },
  getters: {
    getLevelByKey: (state) => (levelKey) => {
      return state.levels.find((level) => level.key === Number(levelKey));
    },

    getQuestionByKeys:
      (state) =>
      ({ levelKey, questionKey }) => {
        const level = state.levels.find(
          (level) => level.key === Number(levelKey)
        );

        return level.questions.find(
          (question) => question.question_key === Number(questionKey)
        );
      },
  },
  mutations: {
    nextUser(state) {
      state.currentUserIndex =
        (state.currentUserIndex + 1) % state.users.length;
    },
    incrementUserScore(state, { points }) {
      const user = state.users[state.currentUserIndex];
      if (user) {
        user.user_score += parseInt(points);
      }
    },
    makeItemDisabled(state, { levelKey, questionKey }) {
      state.levels[parseInt(levelKey) - 1].questions[
        parseInt(questionKey) - 1
      ].disabled = true;
    },
    resetGame(state) {
      state.users.forEach((user) => {
        user.user_score = 0;
      });

      state.levels.forEach((level) => {
        level.questions.forEach((question) => {
          question.disabled = false;
        });
      });

      state.currentUserIndex = 0;
    },
  },
  plugins: [
    createPersistedState({
      key: "game-data",
      paths: ["currentUserIndex", "users", "levels"],
    }),
  ],
});

export default store;
