import React from 'react';
// import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        if (this.state.editMode === true)  this.props.setUserStatus(this.state.status);
        
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState ({
                status: this.props.status
            })
        }
        
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ?<input  autoFocus={true} onBlur={this.toggleEditMode} onChange={this.onChangeStatus} value={this.state.status}></input>
                    :<p onClick={this.toggleEditMode}>{this.props.status || '---------' }</p>
                }
            </div>
        );
    }
       
}

export default ProfileStatus;