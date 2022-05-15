//создаем store, импортируем корневой редуктор, устанавливаем утилиту redux-devtools (npm install --save-dev remote-redux-devtools)
import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
//import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store };