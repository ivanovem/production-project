import {configureStore, DeepPartial, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {loginReducer} from "features/AuthByUserName";
import {createReducerManager} from "./reducerManager";
import {useDispatch} from "react-redux";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {

    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,

    }

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
