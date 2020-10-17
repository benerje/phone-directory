// DONE 3: Created 'ProgressBar' as a functional component which is initially set at zero progress value. Wrote necessary import statement(s) too.
import React from 'react';

const ProgressBar = function () {
    return (
        <div>
            <progress id='progressBar' max='100' value='0'></progress>
            <span id='progressStatus'> Very Weak</span>
        </div>
    );
}

export default ProgressBar;