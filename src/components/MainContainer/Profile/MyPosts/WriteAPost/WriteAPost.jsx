import React from 'react';
import s from './WriteAPost.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../utils/utils";
import {Textarea} from "../../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const WriteAPostForm = props => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'newPostBody'}
                   validate={[required, maxLength10]}
                   placeholder={'Post message'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const WriteAPostReduxForm = reduxForm({
    form: 'profileWriteAPostForm'
})(WriteAPostForm)

const WriteAPost = (props) => {

    const onAddPost = values => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.writeAPost}>
            <div>
                <h3>My posts</h3>
                <WriteAPostReduxForm onSubmit={onAddPost} {...props} />
            </div>
        </div>
    );
};

export default WriteAPost;
