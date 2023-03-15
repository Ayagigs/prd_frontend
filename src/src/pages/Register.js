import image from "../images/imageholder.png"
import {BiChevronLeft} from "react-icons/bi"
import { useState } from "react"
import {BsCheckLg} from "react-icons/bs"
const Register = () => {
    const [currentpage, setCurrentPage] = useState(1)
    
    return<>
        <div className="wrapper">
            <div className="leftWrapper">
                <div className="stepperWrapper">

                    <div className="stepperCardWrapper">
                        <div className={`stepperCard ${currentpage >= 1  ? "active" : undefined}`}>
                            <div className="number ">
                                <p>{currentpage <= 1 ? "1" : <BsCheckLg/>}</p>
                                <div className="line"></div>
                            </div>
                            <p>Create an account</p>
                        </div>

                        <div className={`stepperCard ${currentpage >= 2 ? "active" : undefined}`}>
                            <div className="number">
                                <p>{currentpage <= 2 ? "2" : <BsCheckLg/>}</p>
                                <div className="line"></div>
                            </div>
                            <p>Company details</p>
                        </div>

                        <div className={`stepperCard ${currentpage >= 3 ? "active" : undefined}`}>
                            <div className="number">
                                <p>{currentpage <= 3 ? "3" : <BsCheckLg/>}</p>
                                <div className="line"></div>
                            </div>
                            <p>Terms of use</p>
                        </div>
                    </div>

                    <div className={currentpage === 1 ? "formWrapper" : "hide"}>
                        <div className="formHeading">
                            <h1>Create an account</h1>
                            <p>Welcome to view</p>
                        </div>

                        <form action="">
                            <div className="inputWrapper">
                                <label htmlFor="">First Name</label>
                                <input type="text" />
                            </div>
                            <div className="inputWrapper">
                                <label htmlFor="">Last Name</label>
                                <input type="text" />
                            </div>
                            <div className="inputWrapper">
                                <label htmlFor="">Work email</label>
                                <input type="text" />
                            </div>
                            <div className="inputWrapper">
                                <label htmlFor="">Password</label>
                                <input type="password"/>
                            </div>
                        </form>
                    </div>

                    <div className={currentpage === 2 ? "formWrapper" : "hide"}>
                        <div className="formHeading">
                            <h1>Company Details</h1>
                            <p>Welcome to view</p>
                        </div>

                        <form action="">
                            <div className="inputHolder">
                                <div className="inputWrapper">
                                    <label htmlFor="">Company name</label>
                                    <input type="text" />
                                </div>
                                <div className="inputWrapper">
                                    <label htmlFor="">Business Type</label>
                                    <select name="" id="">
                                        <option value="">--Select option--</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="inputWrapper">
                                <label htmlFor="">Work email</label>
                                <input type="text" />
                            </div>

                            <div className="inputHolder">
                                <div className="inputWrapper">
                                    <label htmlFor="">Country</label>
                                    <select name="" id="">
                                        <option value="">--Select option--</option>
                                    </select>
                                </div>
                                <div className="inputWrapper">
                                    <label htmlFor="">State</label>
                                    <select name="" id="">
                                        <option value="">--Select option--</option>
                                    </select>
                                </div>
                            </div>
                            

                            <div className="inputHolder">
                                <div className="inputWrapper">
                                    <label htmlFor="">Number of employees</label>
                                    <select name="" id="">
                                        <option value="">--Select option--</option>
                                    </select>
                                </div>
                                <div className="inputWrapper">
                                    <label htmlFor="">Reg. no</label>
                                    <select name="" id="">
                                        <option value="">--Select option--</option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>

                    <div className={currentpage === 3 ? "formWrapper" : "hide"}>
                        <div className="formHeading">
                            <h1>Terms of use</h1>
                            <p>Welcome to view</p>
                        </div>

                        <p className="terms">Please read these <a href="/">Terms</a> carefully before using the Product. By using the Product, you agree to be bound by these <a href="/">Terms</a> and our <a href="/">Privacy Policy</a>, which is incorporated into these Terms by reference. If you do not agree to these Terms, you may not use the Product.</p>

                        <form action="">
                            <div className="checkboxWrapper">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">I agree to these terms</label>
                            </div>
                        </form>
                    </div>

                    <div className="buttonWrapper">
                        <button onClick={() => setCurrentPage(currentpage > 1 ? currentpage - 1 : 1)}>Back</button>
                        <button onClick = {() => setCurrentPage(currentpage < 3 ? currentpage + 1 : 3)}>Next</button>
                    </div>

                    <p className="signin">I would rather <a href="/">Sign In</a></p>

                    <a href="/" className="backhome"><BiChevronLeft/> Back home</a>
                    

                </div>
            </div>

            <div className="rightWrapper">
                <img src={image} alt="" />
            </div>
        </div>
    </>

}

export default Register