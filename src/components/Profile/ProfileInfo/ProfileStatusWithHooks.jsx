import React, { useEffect, useState } from 'react';
// import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let toggleEditMode = () => {
        setEditMode(!editMode);
        if (editMode)  props.setUserStatus(status);
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
            {editMode
                ?<input  autoFocus={true} onBlur={toggleEditMode} onChange={onStatusChange} value={status}></input>
                :<p onClick={toggleEditMode}>{status || '---NO-STATUS---' }</p>
            }
        </div>
    );
    
       
}

export default ProfileStatusWithHooks;