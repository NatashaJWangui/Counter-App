import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';


describe('Counter Component', () => {
    it('should render the Counter component', () => {
      render(<Counter />);
      const heading = screen.getByText(/Counter App/i);
    //   makes sure the heading is in the document
      expect(heading).toBeInTheDocument();
    });
  
    it('should increment the counter value', () => {
      render(<Counter />);
      const incrementButton = screen.getByText(/Increment/i);
      fireEvent.click(incrementButton);
      const value = screen.getByText('1');
      expect(value).toBeInTheDocument();
    });
  
    it('should decrement the counter value', () => {
      render(<Counter />);
      const decrementButton = screen.getByText(/Decrement/i);
      fireEvent.click(decrementButton);
      const value = screen.getByText('-1');
      expect(value).toBeInTheDocument();
    });
  
    it('should reset the counter value', () => {
      render(<Counter />);
      const resetButton = screen.getByText(/Reset/i);
      fireEvent.click(resetButton);
      const value = screen.getByText('0');
      expect(value).toBeInTheDocument();
    });
  });
