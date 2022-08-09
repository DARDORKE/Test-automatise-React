import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';

import TestScreen from "./screens/TestScreen";

describe('Test des composants', () => {
  test('TestScreen', () => {
    render(<TestScreen/>);
    
    expect(screen.queryByText(/Utilisateur/)).toBeNull();
  });

  test('Test après saisie', () => {
    render(<TestScreen/>);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Utilisateur 1'}
    });

    expect(screen.queryByText(/Utilisateur/)).toBeInTheDocument();
  });
});
