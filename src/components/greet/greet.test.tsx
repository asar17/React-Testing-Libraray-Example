import { render, screen } from '@testing-library/react'
import Greet from './greet'

test('render greet comp correctly',()=>{
    render(<Greet/>);
    const element= screen.getByText('hello');
    expect(element).toBeInTheDocument();
});

test('render greet com with hello name',()=>{
    render(<Greet name="athar"/>)
    const element= screen.getByText('hello athar')
    expect(element).toBeInTheDocument()
});