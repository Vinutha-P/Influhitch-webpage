import React from 'react'
import './footer.css'
import {BsEnvelopePaper} from 'react-icons/bs'
import {SlLocationPin} from 'react-icons/sl'

const Footer = () => {
  return (
   <footer>
     <div className="footer_container">
     <div className="influhitch">
    <a href="https://www.influhitch.in">InfluHitch private Limited</a>
     <h5>An App Based Influencer marketing Ecosystem Marketplace</h5>
     </div>
     <div className="links">
       <a href="">Partner with InfluHitch</a><br />
       <a href="">FAQ</a><br />
       <a href="">Apply for Campaign</a>
     </div>
     <div className="socials">
       <BsEnvelopePaper/> Email:- <br />
       <a href="nnandan@influhitch.in">nnandan@influhitch.in</a><br />
       <a href="mvij@influhitch.in">mvij@influhitch.in</a><br />
       <a href="raja.emani@influhitch.in">raja.emani@influhitch.in</a><br />
       <SlLocationPin/> Address:- <br />
       <p>Whitefield, Bengaluru, KA, India - 560066</p>
     </div>
    </div>
    <div className="lastline">  
   <p> ©2023 InfluHitch Private Ltd</p>
    </div>
   </footer>
  )
}

export default Footer