import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setCurrentUser } from '../redux/userSlice'

function NavigationBar() {
    const user = useSelector(state => state.user.currentUser)
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    function logoutHandler(){
        dispatch(setCurrentUser({}))
        localStorage.removeItem("currentUser")
        history.push("/")
    }
    return (
        <div>
            <div className="navibar">
                <Link className="routerLinkRemove" to="/mainpage"><h1 className="logoHeader">Pet Vet app</h1></Link>
                {user.firstName&& 
                   <div>
                <input placeholder="klinik ara" className="searchBar"></input>
                <button className="searchButton">Ara</button>
                </div>
                
                }
                
                <div onClick={()=>setDropdownVisible(!dropdownVisible)} onBlur={()=>setDropdownVisible(false)} className="profileField">
                <img alt="alt" className="naviImage" src={user.image?user.image.imagePath:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'}></img>
                <h3 className="usernameText">{user.username}</h3>
                </div>
                
            </div>
            <div style={dropdownVisible?{visibility:"visible"}:{visibility:"hidden"}} className="dropdownMenu" >
                <Link to={`/profile/${user.username}`}><div className="dropdownItem">Profil</div></Link>
                <Link className="routerLinkRemove" to="/"><div onClick={logoutHandler} className="dropdownItem">Çıkış</div></Link>
            </div>
        </div>
    )
}

export default NavigationBar
