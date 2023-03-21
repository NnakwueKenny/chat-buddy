import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const Conversation = () => {
    const navigate = useNavigate();
    const { selectedStatus } = useSelector((state) =>  state.status );

    return (
        <div className='absolute top-0 left-0 w-full h-full bg-white z-[99999]'>
            <Button>
                <ArrowBack onClick={() => navigate('/chats')}/>
            </Button>
        </div>
    )
}

export default Conversation;