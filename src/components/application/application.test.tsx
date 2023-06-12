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

        //test nameElem by getByRole
        const nameElem= screen.getByRole('textbox',{
            name:"Name",
        })
        expect(nameElem).toBeInTheDocument()

        //test nameElem by getByLabelText
        const nameElem2= screen.getByLabelText('Name',{
            selector:'input[type="text"]'
        })
        expect(nameElem2).toBeInTheDocument()


        const bioElem= screen.getByRole('textbox',{
            name:"Bio",
        })
        expect(bioElem).toBeInTheDocument()

        //test jobLocationElem by getByRole
        const jobLocationElem= screen.getByRole('combobox')
        expect(jobLocationElem).toBeInTheDocument()

        //test jobLocationElem by getByLabelText
        const jobLocationElem2= screen.getByLabelText('Name',{
            selector:'select'
        })
        expect(jobLocationElem2).toBeInTheDocument()


        //test termsElemby getByRole
        const termsElem= screen.getByRole('checkbox')
        expect(termsElem).toBeInTheDocument()


        //test termsElem by getByLabelText
        const termsElem2= screen.getByLabelText('Name',{
            selector:'input[type="checkbox"]'
        })
        expect(termsElem2).toBeInTheDocument()

        const submitButtonElem= screen.getByRole('button')
        expect(submitButtonElem).toBeInTheDocument()

    })
})