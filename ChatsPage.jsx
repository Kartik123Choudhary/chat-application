import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props)=>{
    
    return(
        <div style={{height:'100vh' }}>
           <PrettyChatWindow
               projectId='e252d8c9-0dbb-4f0c-8449-11494c7eb022'
               username={props.user.username}
               secret={props.user.secret}
               style={{ height: '100%'}}
               />
    </div>

    )
}

export default ChatsPage;     