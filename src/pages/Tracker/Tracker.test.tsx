import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tracker from './Tracker';

describe('<Tracker />', () => {
  test('it should mount', () => {
    render(<Tracker />);
    
    const tracker = screen.getByTestId('Tracker');

    expect(tracker).toBeInTheDocument();
  });
});