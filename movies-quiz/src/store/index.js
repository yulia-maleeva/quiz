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
              question_title: "Доброзичливий сусід",
              question: "З великою силою приходить велика відповідальність.",
              image: "/assets/images/level-1-question-1.jpg",
              disabled: false,
            },
            {
              question_key: 2,
              question_title: "Лисий із Бразерс",
              question:
                "Не можна відвертатися від сім'ї, навіть якщо вона відвернулася від тебе.",
              image: "/assets/images/level-1-question-2.jpg",
              disabled: false,
            },
            {
              question_key: 3,
              question_title: "Дєд-чарівник",
              question:
                "Щастя можна знайти навіть у темні часи, якщо не забувати звертатися до світла.",
              image: "/assets/images/level-1-question-3.jpg",
              disabled: false,
            },
            {
              question_key: 4,
              question_title: "Ex-губернатор",
              question: "I'll be back!",
              image: "/assets/images/level-1-question-4.jpg",
              disabled: false,
            },
            {
              question_key: 5,
              question_title: "Сивий мудрець",
              question: "Біжіть, дурні!",
              image: "/assets/images/level-1-question-5.jpg",
              disabled: false,
            },
            {
              question_key: 6,
              question_title: "Кровосіся",
              question:
                "Раніше я мало думала про смерть … але, по-моєму, віддати життя за кохану людину – не найгірша смерть.",
              image: "/assets/images/level-1-question-6.jpg",
              disabled: false,
            },
            {
              question_key: 7,
              question_title: "Космічний рейнджер",
              question: "Безкінечність — не межа!",
              image: "/assets/images/level-1-question-7.jpg",
              disabled: false,
            },
            {
              question_key: 8,
              question_title: "Бабій у костюмі",
              question: "Це було леген … почекай, почекай … дарно!",
              image: "/assets/images/level-1-question-8.jpg",
              disabled: false,
            },
            {
              question_key: 9,
              question_title: "Майстер-джедай",
              question: "Нехай буде з тобою Сила!",
              image: "/assets/images/level-1-question-9.jpg",
              disabled: false,
            },
            {
              question_key: 10,
              question_title: "Високоактивний соціопат",
              question: "Я тобі серце випалю!",
              image: "/assets/images/level-1-question-10.jpg",
              disabled: false,
            },
            {
              question_key: 11,
              question_title: "Мокрі бандити",
              question: "Коли я виросту і одружуся, то житиму один!",
              image: "/assets/images/level-1-question-11.jpg",
              disabled: false,
            },
            {
              question_key: 12,
              question_title: "Дісней",
              question: "Заради деяких не шкода розтанути.",
              image: "/assets/images/level-1-question-12.jpg",
              disabled: false,
            },
          ],
        },
        {
          key: 2,
          questions: [
            {
              question_key: 1,
              question_title: "Рошен",
              question:
                "Мама завжди казала: «Життя як коробка шоколадних цукерок: ніколи не знаєш, яка начинка тобі попадеться».",
              options: [
                "Віктор Наворскі, «Термінал»",
                "Форрест Ґамп, «Форрест Ґамп»",
                "Віллі Вонка, «Чарлі і шоколадна фабрика»",
                "Віллі Вонка, «Вонка»",
              ],
              correct_option: "Форрест Ґамп, «Форрест Ґамп»",
              disabled: false,
            },
            {
              question_key: 2,
              question_title: "Брат за брата",
              question: "Тримай своїх друзів близько, а ворогів ще ближче.",
              options: [
                "Джон Діллінджер, «Джонні Д.»",
                "Колін Салліван, «Відступники»",
                "Майкл Корлеоне, «Хрещений батько»",
                "Рональд Крей, «Легенда»",
              ],
              correct_option: "Майкл Корлеоне, «Хрещений батько»",
              disabled: false,
            },
            {
              question_key: 3,
              question_title: "ЧСВшнік",
              question: "Я — король світу!",
              options: [
                "Джек Доусон, «Титанік»",
                "Оскар Діггс, «Оз: Великий та Могутній»",
                "Хоумлендер, «Хлопаки»",
                "Джордан Белфорт, «Вовк з Уолл-стріт»",
              ],
              correct_option: "Джек Доусон, «Титанік»",
              disabled: false,
            },
            {
              question_key: 4,
              question_title: "1985",
              question: "Там, куди ми вирушаємо, дороги нам не знадобляться.",
              options: [
                "Капелюшник, «Аліса в країні чудес»",
                "Індіана Джонс, «Індіана Джонс»",
                "Доктор Емметт Браун, «Назад у майбутнє»",
                "Кролик Роджер, «Хто підставив кролика Роджера?»",
              ],
              correct_option: "Доктор Емметт Браун, «Назад у майбутнє»",
              disabled: false,
            },
            {
              question_key: 5,
              question_title: "Мультфільм",
              question: "Ніколи не забувай про те хто ти.",
              options: [
                "Альма Мадриґаль, «Енканто»",
                "Муфаса, «Король Лев»",
                "Густо, «Рататуй»",
                "Джафар, «Аладдін»",
              ],
              correct_option: "Муфаса, «Король Лев»",
              disabled: false,
            },
            {
              question_key: 6,
              question_title: "Класика літератури",
              question:
                "У нашому житті для жінки найкраще — бути гарненькою дурепою.",
              options: [
                "Дейзі Б'юкенен, «Великий Гетсбі»",
                "Мег Марч, «Маленькі жінки»",
                "Кетрін Беннет, «Гордість і упередження»",
                "Голлі Ґолайтлі, «Сніданок у Тіффані»",
              ],
              correct_option: "Дейзі Б'юкенен, «Великий Гетсбі»",
              disabled: false,
            },
            {
              question_key: 7,
              question_title: "Палата №6",
              question: "Як гадаєш що краще? Жити монстром чи померти людиною?",
              options: [
                "Віктор Франкенштейн, «Віктор Франкенштейн»",
                "Артур Флек, «Джокер»",
                "Рендл Патрік Макмерфі, «Пролітаючи над гніздом зозулі»",
                "Тедді Деніелс, «Острів проклятих»",
              ],
              correct_option: "Тедді Деніелс, «Острів проклятих»",
              disabled: false,
            },
            {
              question_key: 8,
              question_title: "Бульварний роман",
              question:
                "Пам’ятаєш, ти питала, кого я люблю більше всього на світі? Тебе. Найбільше я люблю тебе.",
              options: [
                "Крістіан Грей, «50 відтінків сірого»",
                "Джошуа Темплман, «Мій коханий ворог»",
                "Тревіс Медокс, «Моє прекрасне нещастя»",
                "Гардін Скотт, «Після»",
              ],
              correct_option: "Гардін Скотт, «Після»",
              disabled: false,
            },
            {
              question_key: 9,
              question_title: "Байопік",
              question:
                "Чи був я богом? Ні. Тому що не бог виграв цю війну, це ми зробили.",
              options: [
                "Дезмонд Дос, «З міркувань совісті»",
                "Роберт Оппенгеймер, «Оппенгеймер»",
                "Алан Тюрінг, «Гра в імітацію»",
                "Оскар Шиндлер, «Список Шиндлера»",
              ],
              correct_option: "Алан Тюрінг, «Гра в імітацію»",
              disabled: false,
            },
            {
              question_key: 10,
              question_title: "Френдзона",
              question: "Кохання як квітка — їй потрібен час, щоб розцвісти.",
              options: [
                "Ділан Гарпер, «Друзі по сексу»",
                "Обелікс, «Астерікс і Обелікс»",
                "Генрі Рот, «50 перших поцілунків»",
                "Тедді, «Третій зайвий»",
              ],
              correct_option: "Обелікс, «Астерікс і Обелікс»",
              disabled: false,
            },
          ],
        },
        {
          key: 3,
          questions: [
            {
              question_key: 1,
              question_title: "Тімбілдінг",
              question:
                "— На нашому віці ще не було такого збіговиська! — Ага, і всім я винен грошей!",
              image: "/assets/images/level-3-question-1.jpg",
              disabled: false,
            },
            {
              question_key: 2,
              question_title: "День бабака",
              question:
                "Добрий ранок! І на випадок, якщо я вас більше не побачу — добрий день, добрий вечір та доброї ночі!",
              image: "/assets/images/level-3-question-2.jpg",
              disabled: false,
            },
            {
              question_key: 3,
              question_title: "Степан Гіга",
              question:
                "Я намагаюся звільнити твій розум. Але я можу лише вказати двері. Ти сам повинен вийти на волю.",
              image: "/assets/images/level-3-question-3.jpg",
              disabled: false,
            },
            {
              question_key: 4,
              question_title: "Лялька",
              question:
                "Поки людина не глянула в очі смерті, неможливо вгадати, що вона зробить заради життя.",
              image: "/assets/images/level-3-question-4.jpg",
              disabled: false,
            },
            {
              question_key: 5,
              question_title: "Оскар",
              question: "Той хто врятує одне життя, врятує весь світ.",
              image: "/assets/images/level-3-question-5.jpg",
              disabled: false,
            },
            {
              question_key: 6,
              question_title: "Fairytale",
              question:
                "Вони засуджують мене, перш ніж дізнаються. Ось чому мені краще бути одному.",
              image: "/assets/images/level-3-question-6.jpg",
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
    getUsersWithHighestScore: (state) => {
      const maxScore = Math.max(...state.users.map((user) => user.user_score));
      return state.users.filter((user) => user.user_score === maxScore);
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
