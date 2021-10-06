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
        dispatch(setCurrentUser(null))
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
                <img className="naviImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU"></img>
                <h3 className="usernameText">{user.username}</h3>
                </div>
                
            </div>
            <div style={dropdownVisible?{visibility:"visible"}:{visibility:"hidden"}} className="dropdownMenu" >
                <div className="dropdownItem">Profil</div>
                <Link className="routerLinkRemove" to="/"><div onClick={logoutHandler} className="dropdownItem">Çıkış</div></Link>
            </div>
        </div>
    )
}

export default NavigationBar
