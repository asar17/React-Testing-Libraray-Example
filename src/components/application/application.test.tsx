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

        const aboutYouPElem= screen.getByText('about you',{
            selector:'p'
        })
        expect(aboutYouPElem).toBeInTheDocument()

        const aboutYouSpanElem= screen.getByText('about you',{
            selector:'span'
        })
        expect(aboutYouSpanElem).toBeInTheDocument()

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

        //test nameElem by getByPlaceHolderText
        const nameElem3= screen.getByPlaceholderText('fullName');
        expect(nameElem3).toBeInTheDocument()

        //test nameElem by getByDisplayValue
        const nameElem4= screen.getByDisplayValue('athar')
        expect(nameElem4).toBeInTheDocument()

        const bioElem= screen.getByRole('textbox',{
            name:"Bio",
        })
        expect(bioElem).toBeInTheDocument()

        //test jobLocationElem by getByRole
        const jobLocationElem= screen.getByRole('combobox')
        expect(jobLocationElem).toBeInTheDocument()

        //test jobLocationElem by getByLabelText
        // const jobLocationElem2= screen.getByLabelText('Name',{
        //     selector:'select'
        // })
        // expect(jobLocationElem2).toBeInTheDocument()

        //test  jobLocationElem by getByDisplayValue
        const jobLocationElem3= screen.getByDisplayValue ('United States')
        expect(jobLocationElem3).toBeInTheDocument()


        //test termsElemby getByRole
        const termsElem= screen.getByRole('checkbox')
        expect(termsElem).toBeInTheDocument()


        //test termsElem by getByLabelText
        // const termsElem2= screen.getByLabelText('Name',{
        //     selector:'input[type="checkbox"]'
        // })
        // expect(termsElem2).toBeInTheDocument()

        const submitButtonElem= screen.getByRole('button')
        expect(submitButtonElem).toBeInTheDocument()

    })
})