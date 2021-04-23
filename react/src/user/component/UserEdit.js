import './src/uss/component/userEdit.css'

const UserEdit = () => (
    <form action="/action_page.php">
        <div className="container">
            <h1>Register(계정추가)</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <label for="email"><b>Email ( ID )</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
            <hr/>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

            <button type="/submit" class="registerbtn">Register(등록하기)</button>
        </div>
        
        <div className="container signin">
            <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
    </form>
)

export default UserEdit