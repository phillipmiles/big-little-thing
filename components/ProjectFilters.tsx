import { useReducer, useState } from 'react';
import Checkbox from './Checkbox';

interface Props {
  style?: { [key: string]: any };
}

interface FiltersState {
  [key: string]: boolean;
}

const initialState: FiltersState = {
  all: true,
  choppingBoards: false,
  decor: false,
  furniture: false,
};

const reducer = (state: FiltersState, action: { type: string; id: string }) => {
  switch (action.type) {
    case 'toggle':
      if (action.id === 'all') {
        const newState: { [key: string]: boolean } = {};

        for (const property in state) {
          newState[property] = false;
        }
        newState.all = true;

        return newState;
      } else {
        return {
          ...state,
          all:
            Object.keys(state).filter(
              (k: string) => k !== 'all' && k !== action.id && state[k]
            ).length === 0 && state[action.id]
              ? true
              : false,
          [action.id]: !state[action.id],
        };
      }
    default:
      throw new Error();
  }
};

const ProjectFilters = ({ style }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelect = (id: string) => {
    dispatch({ type: 'toggle', id: id });
  };

  return (
    <div style={style}>
      <h5
        style={{
          fontSize: '16px',
          paddingBottom: '24px',
          marginBottom: '24px',
          borderBottom: '1px solid #9B9F9B',
        }}
      >
        Filters
      </h5>
      <h5
        style={{
          fontSize: '16px',
          marginBottom: '24px',
        }}
      >
        Categories
      </h5>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Checkbox
          style={{ marginRight: '16px' }}
          checked={state.all}
          handleSelect={() => handleSelect('all')}
          disabled={state.all}
        />
        All categories
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Checkbox
          style={{ marginRight: '16px' }}
          checked={state.choppingBoards}
          handleSelect={() => handleSelect('choppingBoards')}
        />
        Chopping boards
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Checkbox
          style={{ marginRight: '16px' }}
          checked={state.decor}
          handleSelect={() => handleSelect('decor')}
        />
        Décor
      </label>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Checkbox
          style={{ marginRight: '16px' }}
          checked={state.furniture}
          handleSelect={() => handleSelect('furniture')}
        />
        Furniture
      </label>
    </div>
  );
};

export default ProjectFilters;
