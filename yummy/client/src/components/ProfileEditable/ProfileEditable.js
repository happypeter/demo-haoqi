import React, { Component } from 'react'
import './profile-editable.css'
import editIcon from './editIcon.svg'

class ProfileEditable extends Component {

  state = {
    edit: false,
    image: '',
    slogan: '还没有填写个性签名'
  }

  edit = () => {
    this.setState({
      edit: true
    })
  }

  render(){
    let editForm = (
      <form className="profile-form">
        <input className="profile-slogan-input"
          type="text"  value={this.state.slogan}
          />
        <button type="submit">保存</button>
      </form>
    )

    return(
      <div className="profile-editable">
        <label className="profile-upload-img"
          style={{
            'background': `teal`,
           }}
          >
          <input type='file' className='profile-image-input' />
        </label>

        <div className="profile-username-slogan">
          <div className="profile-username">
            happypeter
          </div>
          <div className="profile-slogan">
            { this.state.edit ? editForm : this.state.slogan }
          </div>
        </div>
        <div onClick={this.edit}
          className="profile-edit-btn">
          <img src={editIcon} alt="edit" />
        </div>
      </div>
    )
  }
}

export default ProfileEditable
