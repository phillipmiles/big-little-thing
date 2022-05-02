import { useState } from 'react';

// https://twitter.com/dan_abramov/status/1065354652697444353
const useControlledState = (value?: any, setFunction?: Function) => {
  const stateHook = useState(value);
  return setFunction ? [value, setFunction] : stateHook;
};

export default useControlledState;
