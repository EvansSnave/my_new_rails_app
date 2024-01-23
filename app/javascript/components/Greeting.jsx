import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetingSlice/greetingSlice';

const Greeting = () => {
  const greeting = useSelector((state) => state.greet.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      {greeting}
    </div>
  );
};

export default Greeting;