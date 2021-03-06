export default {
  TOPICS: {
    EVENTS: "events",
    VOTE:   "vote",
    STATUS: "status",
    EVENT_UPDATE: "event/update",
    EVENT_LIGHT: "light",
    PING: "ping",
    PONG: "pong",
  },

  FETCH_EVENT: "FETCH_EVENT",
  FETCH_EVENTS: "FETCH_EVENTS",
  CREATE_EVENT: "CREATE_EVENT",

  VOTE_EVENT: "VOTE_EVENT",
  APPEND_VOTE: "APPEND_VOTE",
  DELETE_VOTE: "DELETE_VOTE",
  RESET_VOTE:  "RESET_VOTE",

  PING_EVENT: "PING_EVENT",
  PONG_EVENT: "PONG_EVENT",

  APPEND_ANSWER: "APPEND_ANSWER",
  RESET_ANSWER: "RESET_ANSWER",

  SET_STATUS: "SET_STATUS",
  RESET_STATUS: "RESET_STATUS",

  ERROR: "ERROR",
  CONNACK_TIMER: 5000,
  SCROLL_SPEED: 300
};
