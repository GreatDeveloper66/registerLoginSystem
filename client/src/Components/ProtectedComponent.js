import { Component } from 'react'
import { Button } from '@material-ui/core'
import Auth from './Components/Auth'

class ProtectedComponent extends Component {
    render(){
        return(
            <div> 
                <h1>Protected Component</h1>
                <Button onClick={() => {
                        Auth.logout(() => {
                            this.props.history.push('/')
                        })}}>LogOut</Button>
                 
            </div>
        )
    }
}

export default ProtectedComponent