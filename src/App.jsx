import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [good, setGood] = useState('Jam');
  const titleGoods = good !== '' ? `${good} is selected` : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleGoods}
        {good !== '' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(product => (
            <tr
              key={product}
              data-cy="Good"
              className={cn({
                'has-background-success-light': product === good,
              })}
            >
              <td>
                <button
                  data-cy={product === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', { 'is-info': product === good })}
                  onClick={() =>
                    product === good ? setGood('') : setGood(product)
                  }
                >
                  {product === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {product}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
