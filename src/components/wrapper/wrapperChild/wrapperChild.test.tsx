import { render, screen } from '@testing-library/react'
import WrapperChild from './wrapperChild'
import Wrapper from '../wrapper'

describe('Wrapper Child',()=>{
    test('renders correctly',()=>{
        render(<WrapperChild/>,{
            wrapper:Wrapper
        })
        const headingElem= screen.getByRole('heading',{
            name:'wrapper child'
        })
        expect(headingElem).toBeInTheDocument()
    })
})