import React, { useState } from 'react'
import { Button, Card } from 'antd'
import AddAudioModal from '../modals/addAudioModal';



const HomeScreen = () => {

    const [isVisibleModalAddAudio, setisVisibleModalAddAudio] = useState(false);

    return (
        <div className='container mt-4'>
            <Card
                title='My favouries audio'
                extra={
                    <Button onClick={() => setisVisibleModalAddAudio(true)}>
                        Add new
                    </Button>
                }></Card>
            <AddAudioModal
                isVisible={isVisibleModalAddAudio}
                onClose={() => setisVisibleModalAddAudio(false)} />
        </div>
    );
};

export default HomeScreen