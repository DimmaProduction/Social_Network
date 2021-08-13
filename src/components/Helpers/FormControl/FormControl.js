import css from './FormControl.module.css'; 

export const Textarea = ({input, meta: {touched, error, warning, invalid}, ...props}) => {
    return (
        <div className={invalid && touched && css.error}>
            <div>
                <textarea {...input} {...props}/>
                {touched && error &&     
                    <div>
                        <span>{error}</span>
                    </div>  }
            </div>
        </div>

    );
}

export const Input = ({input, meta: {touched, error, warning, invalid}, ...props}) => {
    // console.log({...meta});
    return (
        <div className={invalid && touched && css.error}>
            <div>
                <input {...input} {...props}/>
                {touched && error &&     
                    <div>
                        <span>{error}</span>
                    </div>  }
            </div>
        </div>

    );
}