import React from 'react'
import './SignUp.css'
import Video from '../assets/videos/travel-3.mp4'


function SignUp() {
    return (<div className='HeroContainer'>
    <div className='HeroBg'>
                <video className='VideoBg' src={Video} type='video/mp4' autoPlay loop muted playsInline />
            </div>
<form className="jotform-form" style={{ width: '100%', margin: 'auto' }}>
  <div role="main" className="form-all" style={{ margin: 'auto' }}>
    <ul className="form-section page-section">
      <div id="cid_7" className="form-input-wide" data-type="control_head">
        <div className="form-header-group  header-small">
          <div className="header-text httac htvam">
            <h3 id="header_7" className="form-header" data-component="header">
              Get Free Email Updates!
            </h3>
            <div id="subHeader_7" className="form-subHeader">
              Join us for FREE to get instant email updates!
            </div>
          </div>
        </div>
      </div>
      <div className="form-line jf-required" data-type="control_textbox" id="id_4">
        <label className="form-label form-label-top form-label-auto" id="label_4" htmlFor="input_4">
          Name
          <span className="form-required">
            *
          </span>
        </label>
        <div id="cid_4" className="form-input-wide jf-required">
          <input type="text" className="form-textbox validate[required]" size={32} placeholder="First Name" required />
        </div>
      </div>
      <div className="form-line jf-required" data-type="control_email" id="id_5">
        <label className="form-label form-label-top form-label-auto" id="label_5" htmlFor="input_5">
          E-mail
          <span className="form-required">
            *
          </span>
        </label>
        <div id="cid_5" className="form-input-wide jf-required">
          <input type="email" className="form-textbox validate[required, Email]" size={32} placeholder="Email Address" required />
        </div>
      </div>
      <div className="form-line" data-type="control_text" id="id_6">
        <div id="cid_6" className="form-input-wide">
          <div id="text_6" className="form-html" data-component="text">
            <p style={{textAlign: 'center'}}><span style={{color: '#ffffff', fontSize: '10pt'}}><img src="https://cms.jotform.com/uploads/image_upload/image_upload/global/20791_privacy.png" alt width={16} height={15} />Your Information is Safe With us!</span></p>
          </div>
        </div>
      </div>
      <div className="form-line">
        <div  className="form-input-wide">
          <div style={{textAlign: 'center'}} data-align="center" className="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField">
            <button  type="submit" className="Button" style={{
                            top: '420px',
                            fontSize: '14px',
                            padding: '10px 32px',
                        }}>
              Get Access Today!
            </button>
          </div>
        </div>
      </div>
      <div style={{display: 'none'}}>
        Should be Empty:
        <input type="text" name="website" defaultValue />
      </div>
    </ul>
  </div>
</form>

    </div>
)
}

export default SignUp
