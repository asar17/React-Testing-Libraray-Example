import { render , screen } from '@testing-library/react'
import Application from './application'

describe('Application',()=>{
    test('renders correctly',()=>{
        render(<Application/>)

        const pageHeading= screen.getByRole('heading',{
            // name:'Job Application Form'
            level:1,
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading= screen.getByRole('heading',{
            // name:'section one'
            level:3,
        })
        expect(sectionHeading).toBeInTheDocument()

        const nameElem= screen.getByRole('textbox',{
            name:"Name",
        })
        expect(nameElem).toBeInTheDocument()

        const bioElem= screen.getByRole('textbox',{
            name:"Bio",
        })
        expect(bioElem).toBeInTheDocument()

        const jobLocationElem= screen.getByRole('combobox')
        expect(jobLocationElem).toBeInTheDocument()

        const termsElem= screen.getByRole('checkbox')
        expect(termsElem).toBeInTheDocument()

        const submitButtonElem= screen.getByRole('button')
        expect(submitButtonElem).toBeInTheDocument()

    })
})