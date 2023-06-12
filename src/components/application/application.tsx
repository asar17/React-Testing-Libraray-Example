import React,{useState} from 'react'
const Application = () =>{
    const [job,setJob]=useState("")
    return(
    <>
        <span title="close">X</span>
        <h1>Job Application Form</h1>
        <h3>section one</h3>
        <p>about you</p>
        <span>about you</span>
        <img src="https://via.placeholder.com/150" alt="a person with a laptop"/>
        <form>
            <div>
                <label htmlFor="name" >Name</label>
                <input type="text" id="name" placeholder="fullName" value="athar"/>
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" name="bio">write your bio</textarea>
            </div>
            <div>
                <label htmlFor="job-location">Job Location</label>
                {/* <label htmlFor="job-location">Name</label> */}
                <select value="select a Country" id="job-location" onChange={(e)=>{setJob(e.target.value)}}>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                </select>
                {job}
            </div>
            <div>
                <label>
                  <input type="checkbox" id="terms"/> I agree to the terms and conditions
                  {/* <input type="checkbox" id="terms"/> Name */}

                </label>
            </div>
            <button>submit</button>
        </form>
      </>
    )
}
export default Application