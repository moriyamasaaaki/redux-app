import { READ_EVENT, READ_EVENTS, CREATE_EVENTS, UPDATE_EVENT, DELETE_EVENTS } from "../actions";
import _ from "lodash";

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENTS:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.responce.data
      return { ...data, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.responce.data, "id");
    case DELETE_EVENTS:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
