// DONE 2: Created 'Password' as a functional component to render the password input element. Wrote necessary import statement(s) too.
import React from 'react';

const Password = function (props) {
    return (
        <div>
            <input id='password' type='password' placeholder='Type your password here' />
        </div>
    );
}

export default Password;