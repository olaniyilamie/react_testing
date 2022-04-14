import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer(){
    return(
        <div className="container-fluid footer_div homepage_padding" >
            <div className='row'>
                <div className='col-md-8'>
                    <form action='' method='POST'>
                        <div className='row subscribe_div'>
                            <div className='col-8 col-md-10 px-0'>
                                <input type="text" placeholder='Enter your email to subscribe ...' className='text-muted subscribe_input'/>
                            </div>
                            <div className='col-4 col-md-2 button_div'>
                                <input type='submit' className="subcribe_button" value='Subscribe' />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-md-4 px-0'>
                    <div className='row'>
                        <div className='col-12 my-2 my-md-0 text-md-center align-items-center'>
                            <FaFacebookF className='footer_icon'/>
                            <FaTwitter className='footer_icon'/>
                            <FaGooglePlusG className='footer_icon'/>
                            <FaPinterest className='footer_icon'/>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <p className='design_by'>Copyright 2021 Olaniyilamie. Designed by Olaniyilamie. All right reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;