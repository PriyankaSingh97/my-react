import React from 'react';
import ReactDOM from 'react-dom';
// import ButtonExampleEmphasis from './button';
// import  ButtonExampleAnimated from './button';
import   ButtonExampleSocial from './button';
import 'semantic-ui-css/semantic.min.css'
class App extends React.Component{
    render(){
        return(
            <  ButtonExampleSocial/>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));