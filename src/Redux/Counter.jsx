import { useDispatch, useSelector } from "react-redux";
import { INC, DEC } from "./CounterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>

      <div className="flex gap-4 justify-center">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => dispatch(INC())}
        >
          INC
        </button>

        <button
          className="px-4 py-2 bg-red-600 text-white rounded"
          onClick={() => dispatch(DEC())}
        >
          DEC
        </button>
      </div>
    </div>
  );
};
