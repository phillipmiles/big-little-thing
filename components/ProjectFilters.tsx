import categories from '../data/categories';
import { FiltersState } from '../pages';
import Checkbox from './Checkbox';

interface Props {
  state: FiltersState;
  dispatch: Function;
  style?: { [key: string]: any };
}

const ProjectFilters = ({ style, state, dispatch }: Props) => {
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
      {categories.map((c) => (
        <label
          key={c.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <Checkbox
            style={{ marginRight: '16px' }}
            checked={state[c.id]}
            handleSelect={() => handleSelect(c.id)}
          />
          {c.title}
        </label>
      ))}
    </div>
  );
};

export default ProjectFilters;
