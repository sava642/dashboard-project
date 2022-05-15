//создаем редукторы и объединяем с помощью combine
import { combineReducers } from "redux";
import { positionReducer } from "./position/position-reducer";
import { filterReducer } from ".//filters/filter-reducer";
export const rootReducer = combineReducers({
	positions: positionReducer,
	filters: filterReducer,
})