import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/CounterSlice";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1>value = {counterValue}</h1>
            <Button
                onClick={increment}
            >
                increment
            </Button>
            <Button
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
