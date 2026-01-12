
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
}

const handleSubtract = () => {
    if(count > 0) {
        setCount(count - 1)
    }
}

    return(
        <div>
            <h1>Counter</h1>
            <h1 className="text-center">
                Value: {count}
            </h1>

            <div className="flex w-full gap-4 items-center justify-center">

                <button onClick={handleAdd}>
                    Add
                </button>

                <button onClick={handleSubtract}>
                    Subtract
                </button>
            </div>
        </div>
    )
}