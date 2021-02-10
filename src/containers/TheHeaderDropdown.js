import React, { useState } from 'react';
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import jwt_decode from "jwt-decode";
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  const [userToken, setUserToken] = React.useState('');
  const cookies = new Cookies();
  const [userName, setUserName] = React.useState('');
  const [redirectPath, setRedirectPath] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  React.useEffect(() => {
    if (cookies.get('token')) {
      setUserToken(cookies.get('token'));
      const token = cookies.get('token');
      const decoded = jwt_decode(token);
     // console.log(decoded)
      setUserName(decoded.firstName)
    }
    else{
      console.log('here')
      setRedirect();
    }

  }, [userToken, cookies]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  function setRedirect() {
    setRedirectPath(true)
  }
  function renderRedirect() {
    if (redirectPath) {
      return <Redirect to='/login' />
    }
  }
  /**
    * Logout Function 
    * @desc Remove user data from cookies
    * @returns na
    */
  function logOut() {
    console.log('herte')
    cookies.get('token');
    cookies.remove('token');
    setProcessing(true);
    setTimeout(function(){  
      setProcessing(false); 
      setRedirect();
      window.location.reload();
    }, 1000);

  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Projects
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={logOut}>
          <CIcon  name="cil-lock-locked" className="mfe-2" />
        Logout
        </CDropdownItem>
      </CDropdownMenu>
      {renderRedirect()}
    </CDropdown>
  )
}

export default TheHeaderDropdown
