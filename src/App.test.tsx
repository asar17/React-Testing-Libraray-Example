
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('render athar study react link',()=>{
  render(<App/>);
  const linkElement= screen.getByText(/athar study react/i);
  expect(linkElement).toBeInTheDocument();
});