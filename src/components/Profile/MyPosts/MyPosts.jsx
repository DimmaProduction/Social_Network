import React from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import { Textarea } from '../../Helpers/FormControl/FormControl';
import { maxLengthValid, required } from '../../Helpers/Validators/Validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let maxLength10 = maxLengthValid(10);

let ProfileAddNewPostForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPost' placeholder='Enter your message..' 
                validate={[required, maxLength10]} component={Textarea}/>
            </div>
            <div className={s.postArea}>
                <button>New Post</button>
            </div>
        </Form>
    );
}

ProfileAddNewPostForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(ProfileAddNewPostForm);


const MyPosts = (props) => {
    let posts = props.posts.map(post => <Post message={post.message} />);

    let onAddPost = (data) => {
        props.addPost(data.newPost);
    }

    return (
        <div className={s.postsBlock}>
            My Posts
            <ProfileAddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
}

export default MyPosts;