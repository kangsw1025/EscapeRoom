const SET_BOOK = "thema/SET_BOOK";
const SET_RESET = "thema/SET_RESET";
export const setBook = (title, time) => ({
  type: SET_BOOK,
  title,
  time,
});

export const setReset = () => ({
  type: SET_RESET,
});

const iniitialState = [
  {
    title: "Halloween",
    imgUrl:
      "https://user-images.githubusercontent.com/62426665/139077618-79e6f87a-7021-4064-84ac-6de525b17d6f.png",
    level: 3,
    playTime: 60,
    price: 20000,
    contents: "할로윈 파티로 당신을 초대합니다",
    isBooked: [
      { time: "10:00", booked: false },
      { time: "11:30", booked: false },
      { time: "13:00", booked: false },
      { time: "14:30", booked: false },
      { time: "16:00", booked: false },
      { time: "17:30", booked: false },
      { time: "19:00", booked: false },
      { time: "20:30", booked: false },
      { time: "22:00", booked: false },
    ],
  },
  {
    title: "Travel",
    imgUrl:
      "https://user-images.githubusercontent.com/62426665/139076775-6deec811-4359-4ddf-a457-9e90af9dba5b.png",
    level: 4,
    playTime: 70,
    price: 24000,
    contents: "바쁜 일상에 미루던 여행을 떠나보세요",
    isBooked: [
      { time: "10:00", booked: false },
      { time: "11:40", booked: false },
      { time: "13:20", booked: false },
      { time: "15:00", booked: false },
      { time: "16:40", booked: false },
      { time: "18:20", booked: false },
      { time: "20:00", booked: false },
      { time: "21:40", booked: false },
    ],
  },
  {
    title: "Frison",
    imgUrl:
      "https://user-images.githubusercontent.com/62426665/139077631-592c651c-55fc-4be2-9097-19c5402a0a1c.png",
    level: 5,
    playTime: 80,
    price: 28000,
    contents: "어느 날 눈을 뜨니 감옥 안이었다. 탈출을 해야 하는데...",
    isBooked: [
      { time: "10:00", booked: false },
      { time: "11:50", booked: false },
      { time: "13:40", booked: false },
      { time: "15:30", booked: false },
      { time: "17:20", booked: false },
      { time: "19:10", booked: false },
      { time: "21:00", booked: false },
    ],
  },
  {
    title: "HappyRestaurant",
    imgUrl:
      "https://user-images.githubusercontent.com/62426665/139077639-a8ca2f71-86e6-4b69-af84-7add1c91e9b8.png",
    level: 3,
    playTime: 75,
    price: 26000,
    contents: "여기가 행복을 판다는 식당이라는데..?",
    isBooked: [
      { time: "10:00", booked: false },
      { time: "11:45", booked: false },
      { time: "13:30", booked: false },
      { time: "15:15", booked: false },
      { time: "17:00", booked: false },
      { time: "18:45", booked: false },
      { time: "20:30", booked: false },
      { time: "22:15", booked: false },
    ],
  },
];

export default function thema(state = iniitialState, action) {
  switch (action.type) {
    case SET_BOOK:
      return state.map(thema =>
        thema.title === action.title
          ? {
              ...thema,
              isBooked: thema.isBooked.map(obj =>
                obj.time === action.time
                  ? {
                      ...obj,
                      booked: true,
                    }
                  : obj
              ),
            }
          : thema
      );
    case SET_RESET:
      return iniitialState;
    default:
      return state;
  }
}
