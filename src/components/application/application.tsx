import React from 'react'
const Application = () =>{
    return(
    <>
        <h1>Job Application Form</h1>
        <h3>section one</h3>
        <form>
            <div>
                <label htmlFor="name" >Name</label>
                <input type="text" id="name"/>
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" name="bio">write your bio</textarea>
            </div>
            <div>
                {/* <label htmlFor="job-location">Job Location</label> */}
                <label htmlFor="job-location">Name</label>

                <select id="job-location">
                    <option value="">Select a Country</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AS">Australia</option>
                </select>
            </div>
            <div>
                <label>
                  {/* <input type="checkbox" id="terms"/> I agree to the terms and conditions */}
                  <input type="checkbox" id="terms"/> Name

                </label>
            </div>
            <button>submit</button>
        </form>
      </>
    )
}
export default Application