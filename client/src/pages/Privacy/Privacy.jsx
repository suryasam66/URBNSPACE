import React from 'react';
import "./Privacy.css";
const Privacy = () => {
    return (
     <div className="container">
        <div className="wrapper ">
        
          <h1 className="privacy-style">Privacy</h1>  
        <div className="privacy-text"> 
          <p>
                Privacy is paramount to us at URBNSPACE. 
                We are committed to safeguarding the personal information of our website visitors and clients.
                Any data collected, such as names, contact information, or property preferences, is used solely
                for the purpose of providing exceptional real estate services and improving our website experience.
                Rest assured, your information is securely stored and never shared with third parties without your
                explicit consent, except as required by law. By using our website, you consent to the collection and
                use of your information as outlined in this privacy policy. If you have any concerns or questions
                about our privacy practices, please don't hesitate to contact us.
          </p>
          <br/> <hr/>  
          <h3 className="privacy-rules-style">Privacy Rules</h3>
          <div className="all-privacy-rules">
          <ul> <b>i.</b> We collect limited personal information for the sole purpose of improving your real estate experience</ul>
          <ul> <b>ii.</b> Your information is used strictly for facilitating property searches, market updates, and relevant promotions.</ul>
          <ul> <b>iii.</b> We employ industry-standard security measures to safeguard your data from unauthorized access.</ul>
          <ul> <b>iv.</b> We do not sell or rent your personal information to third parties for marketing purposes.</ul>
          <ul> <b>v.</b> We may share your information with service providers or law enforcement agencies when necessary to fulfill our obligations or comply with legal requirements.</ul>
          <ul> <b>vi.</b> Our website may contain links to third-party sites with independent privacy policies; review them before disclosing personal information.</ul>
          <ul> <b>vii.</b> By using our website, you consent to the collection, use, and disclosure of your information as outlined in our privacy policy.</ul>
          <ul> <b>viii.</b> We may update our privacy policy periodically to reflect changes in practices or legal requirements; you will be notified of any material changes.</ul>
          </div>
          </div> 
          <br/><br/>
        </div>
     </div>
    );
}

export default Privacy;
