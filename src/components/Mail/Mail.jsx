import React from 'react'
import './Mail.css'
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core'
import { ArrowBack, MoveToInbox, Error, Delete, Email, WatchLater, CheckCircle, LabelImportant, MoreVert, UnfoldMore, Print, ExitToApp} from '@material-ui/icons'

function Mail() {
    const history = useHistory();
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                <IconButton onClick={()=>history.push('/')}>
                        <ArrowBack/>
                    </IconButton>
                    <IconButton>
                        <MoveToInbox/>
                    </IconButton>
                    <IconButton>
                        <Error/>
                    </IconButton>
                    <IconButton>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <Email/>
                    </IconButton>
                    <IconButton>
                        <WatchLater/>
                    </IconButton>
                    
                    <IconButton>
                        <CheckCircle/>
                    </IconButton>
                    <IconButton>
                        <LabelImportant/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMore/>
                    </IconButton>
                    <IconButton>
                        <Print/>
                    </IconButton>
                    <IconButton>
                        <ExitToApp/>
                    </IconButton>
                </div>
                </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportant className="mail__important"/>
                    <p>Title</p>
                    <p className="mail__time">10 pm</p>
                </div>
                <div className="mail__message">
                    <p>This is a message</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
