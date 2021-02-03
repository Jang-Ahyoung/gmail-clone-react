import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React from 'react'
import EmailRow from '../EmailRow/EmailRow'
import Section from '../Section/Section'
import './EmailList.css'
function EmailList() {
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
                <EmailRow title="Twitch" subject="이건 하드코딩 메일이야" description="test" time="10pm"/>
                <EmailRow title="Twitch" subject="이건 하드코딩 메일이야" description="test" time="10pm"/>

            </div>
        </div>
    )
}

export default EmailList
