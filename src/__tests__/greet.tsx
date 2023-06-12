import { render, screen } from '@testing-library/react'
import Greet from '../components/greet/greet'
describe('nested greet',()=>{
    xit('render from react',()=>{
        render(<Greet/>)
        const elem= screen.getByText('from react');
        expect(elem).toBeInTheDocument()
    });
});