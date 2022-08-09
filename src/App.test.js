import React from "react";
import { render, screen } from '@testing-library/react';

import TestScreen from "./screens/TestScreen";

describe('Test des composants', () => {
  test('TestScreen', () => {
    render(<TestScreen/>);
    
    expect(screen.getByText(/Hel/)).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});