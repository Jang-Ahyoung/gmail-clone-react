import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import EmailRow from '../EmailRow/EmailRow'
import { database } from '../firebase/firebase'
import Section from '../Section/Section'
import './EmailList.css'
function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(()=>{
        database.collection('emails')
                .orderBy('timestamp','desc')
                .onSnapshot((snapshot) =>
                    setEmails(snapshot.docs.map(doc => ({
                        id : doc.id,
                        data : doc.data(),
                    }))))

    },[]);
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <Redo/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon = {Inbox} title ="primary" color='red' seleted/>
                <Section Icon = {People} title ="Social" color='#1A73E8'/>
                <Section Icon = {LocalOffer} title ="Promotions" color='green'/>
            </div>
            <div className="emailList__list">
                {emails.map( ({id, data:{to, subject, message, timestamp}}) =>(
                    <EmailRow id={id} key={id} title={to} subject={subject} description={message} time={new Date(timestamp?.seconds * 1000).toUTCString()} />
                ))}
                <EmailRow title="Twitch" subject="이건 하드코딩 메일이야" description="test" time="10pm"/>
                <EmailRow title="Twitch" subject="이건 하드코딩 메일이야" description="test" time="10pm"/>

            </div>
        </div>
    )
}

export default EmailList
