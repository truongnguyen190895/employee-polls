import { useAppSelector, useAppDispatch } from "@/store";
import { increment } from "@/store/actions";

export const App = () => {
  const counter = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Hello World {counter}</h1>
      <button onClick={() => dispatch(increment())}>Click</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis
        temporibus vitae consequuntur corrupti veniam autem, odio, perspiciatis
        ratione eum ipsum quis porro voluptas saepe vel, dicta pariatur modi
        quisquam.
      </p>
    </div>
  );
};
