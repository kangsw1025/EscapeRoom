const SET_DATE = "SET_DATE";
const SET_THEMA = "SET_THEMA";
const SET_BOOK_TIME = "SET_BOOK_TIME";
const SET_BOOKER = "SET_BOOKER";
const SET_EMAIL = "SET_EMAIL";
const SET_PERSONNEL = "SET_PERSONNEL";
const SET_COST = "SET_COST";
const SET_PASSWORD = "SET_PASSWORD";
const SET_MESSAGE = "SET_MESSAGE";
const SET_RESET = "SET_RESET";

export const setDate = date => ({
  type: SET_DATE,
  date,
});

export const setThema = thema => ({
  type: SET_THEMA,
  thema,
});

export const setBookTime = bookTime => ({
  type: SET_BOOK_TIME,
  bookTime,
});

export const setBooker = booker => ({
  type: SET_BOOKER,
  booker,
});

export const setEmail = email => ({
  type: SET_EMAIL,
  email,
});

export const setPersonnel = personnel => ({
  type: SET_PERSONNEL,
  personnel,
});

export const setCost = cost => ({
  type: SET_COST,
  cost,
});

export const setPassword = password => ({
  type: SET_PASSWORD,
  password,
});

export const setMessage = message => ({
  type: SET_MESSAGE,
  message,
});

export const setReset = () => ({
  type: SET_RESET,
});

const initialState = {
  date: "",
  thema: null,
  bookTime: "",
  booker: "",
  email: "",
  personnel: 1,
  cost: "",
  password: "",
  message: "",
};

export default function book(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.date,
      };
    case SET_THEMA:
      return {
        ...state,
        thema: action.thema,
      };
    case SET_BOOK_TIME:
      return {
        ...state,
        bookTime: action.bookTime,
      };
    case SET_BOOKER:
      return {
        ...state,
        booker: action.booker,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_PERSONNEL:
      return {
        ...state,
        personnel: action.personnel,
      };
    case SET_COST:
      return {
        ...state,
        cost: action.cost,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case SET_RESET:
      return {
        initialState,
      };
    default:
      return state;
  }
}
