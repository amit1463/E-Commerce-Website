import React from 'react'
import Footer from '../Footer';
export default function Login() {
    return (
        <>
        <div class="login">
	
         <div class="main-agileits">
            <div class="form-w3agile">
                <h3>Login</h3>
                <form action="#" method="post">
                    <div class="key">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <input  type="text" value="Email" name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="key">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <input  type="password" value="Password" name="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required=""/>
                        <div class="clearfix"></div>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>
            <div class="forg">
                <a href="#" class="forg-left">Forgot Password</a>
                <a href="register.html" class="forg-right">Register</a>
            <div class="clearfix"></div>
            </div>
        </div>
    </div>
    
        </>
    )
}
