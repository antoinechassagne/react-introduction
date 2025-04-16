import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';

import PersonsList from './PersonsList';

describe('<PersonsList />', () => {
  test('should render the persons list', async () => {
    const persons = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];

    const { container } = render(
      <BrowserRouter>
        <PersonsList persons={persons} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot('Persons list');
  });

  test('should call the onDelete function when clicking delete button', async () => {
    const persons = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];

    const onDeleteMock = vi.fn();

    const { container } = render(
      <BrowserRouter>
        <PersonsList persons={persons} onDelete={onDeleteMock} />
      </BrowserRouter>
    );

    const deleteButtons = container.querySelectorAll('button.trash');
    deleteButtons[0].click();
    expect(onDeleteMock).toHaveBeenCalledWith(1);
  });

  test('should display a message when persons list is empty', async () => {
    const persons = [];

    const { container } = render(
      <BrowserRouter>
        <PersonsList persons={persons} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot('Empty persons list');
  });
});