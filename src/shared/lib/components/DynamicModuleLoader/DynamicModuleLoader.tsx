import {FC, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager, StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";
import React from 'react'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch()


    useEffect(()=> {
        //@ts-ignore
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({type:`@INIT ${name} reducer`})
        })

        return ()=> {
                if(removeAfterUnmount) {
                    //@ts-ignore
                    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                        store.reducerManager.remove(name)
                        dispatch({type:`@DESTROY ${name} reducer`})
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>

    );
};

