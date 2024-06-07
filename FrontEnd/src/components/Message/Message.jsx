import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({message}) => {
    const {user} = useAuthContext()
    const {selectedConversation} = useConversation()
    const formMe = message.senderId === user._id;
    const chatClassName = formMe ? ' chat-end' : ' chat-start';
    const profilePic = formMe ? user.profilePic : selectedConversation?.profilePic;
    const bubbleBigColor = formMe ? 'bg-blue-500' : "";
    const formattedTime = new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const shakeEffect = message.shouldShake ? 'shake' : '';
    

    return (
        <>
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="" />
                </div>
            </div>
            {/* <div className="chat-header">
                Asepp
                <time className='text-xs opacity-50'>12:00</time>
            </div> */}
            <div className={`chat-bubble text-white ${bubbleBigColor} ${shakeEffect}`}>{message.message}</div>
            <div className={`chat-footer opacity-70 text-[10px]`}>
                {formattedTime}
            </div>
        </div>
        </>
    )
}

export default Message

// Start 
{/* <div className='chat chat-start'>
<div className="chat-image avatar">
    <div className="w-10 rounded-full">
        <img src="https://avatar.iran.liara.run/public/girl" alt="" />
    </div>
</div>
<div className="chat-bubble">Kamu apa lah</div>
<div className="chat-footer opacity-50">
    Kirim
</div>
</div> */}