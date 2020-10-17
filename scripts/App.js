/* DONE 5: Created 'App' as a class component which encompasses all other components in the following order:
  1. Header
  2. Password
  3. ProgressBar
  4. StrengthCriteria 
  Note: Wrote necessary import statement(s) too. 
  
  Also, remember to use 'React.Component' as the base class instead of 'Component' class. Don't worry. This is just an exceptional case in the DoSelect IDE that you are currently working on. At other places, you can write as you have learned, i.e., importing the { Component } as named import from 'react' package and then using 'Component' as the base class for a class component.
*/
import React from 'react';

import Header from './Header.js';
import Password from './Password.js';
import ProgressBar from './ProgressBar.js';
import StrengthCriteria from './StrengthCriteria.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Password />
                <ProgressBar />
                <StrengthCriteria />
            </div>
        )
    }
}

export default App;