import { render, screen } from '@testing-library/react'
import Greet from './greet'

describe('greet',()=>{
    test('render  comp correctly',()=>{
        render(<Greet/>);
        const element= screen.getByText('hello');
        expect(element).toBeInTheDocument();
    });
    
    test('render  com with hello name',()=>{
        render(<Greet name="mohamed"/>)
        const element= screen.getByText('hello mohamed')
        expect(element).toBeInTheDocument()
    });

});

