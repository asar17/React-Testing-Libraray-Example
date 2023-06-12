import { render , screen} from '@testing-library/react'
import App from './App'

test('render App',()=>{
    render(<App/>);
    const elem= screen.getByText('athar study react');
    expect(elem).toBeInTheDocument();
});