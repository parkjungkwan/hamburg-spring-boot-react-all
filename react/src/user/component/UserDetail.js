import React from 'react'
import 'user/style/UserDetail.css'
const UserDetail = () => {
    return (
        <>
        <div className="side">
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div className="fakeimg height_200">Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>More Text</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <div className="fakeimg height_60">Image</div><br />
            <div className="fakeimg height_60">Image</div><br />
            <div className="fakeimg height_60">Image</div>
        </div>
        </>
    )
}
export default UserDetail