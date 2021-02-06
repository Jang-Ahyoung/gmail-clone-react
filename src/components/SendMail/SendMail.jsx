import React from 'react'
import './SendMail.css'
import { Close } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';

function SendMail() {
    const {register, handleSubmit, watch, errors}= useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>NewMessage</h3>
                <Close className="sendMail__closer" onClick={()=>dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register({required:true})} name='to' placeholder="To" type="text"/>
                {errors.to && <p className="sendMail__error">To is required!</p>}
                <input ref={register({required:true})} name='subject' placeholder="Subject" type="text"/>
                {errors.subject && <p className="sendMail__error">Subject is required!</p>}
                <input className="sendMail__message" ref={register({required:true})} name='message' placeholder="Message. . ." type="text" />
                {errors.message && <p className="sendMail__error">Message is required!</p>}

                <div className="sendMail__options">
                    <Button className="sendMail__send"
                        variant = "contained"
                        color = "primary"
                        type = "submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
