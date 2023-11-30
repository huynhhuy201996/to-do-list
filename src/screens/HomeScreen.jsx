import React, { useEffect, useState } from 'react'
import { Affix, Button, Card, List, Space } from 'antd'
import AddAudioModal from '../modals/AddAudioModal';
import { Play } from 'iconsax-react';
import PlayerControler from '../components/PlayerControler';



const HomeScreen = () => {

    const [isVisibleModalAddAudio, setisVisibleModalAddAudio] = useState(false);
    const [audios, setAudios] = useState();
    const [audiosPlaying, setAudiosPlaying] = useState([]);

    useEffect(() => {
        handleGetAudios();
    }, []);

    const handleGetAudios = () => {
        /*
             const api = `https://whisper-d1ec7-default-rtdb.asia-southeast1.firebasedatabase.app/chapters/-NSrJall4gfL8cPMzstS.json`
    
        try {
            await fetch(api).then(result => result.json()).then(res => {
                if (res && res.chaps) {

                    const items = []

                    res.chaps.forEach(item => {
                        items.push({
                            sound: item.audio,
                            author: 'Author',
                            category: 'Category',
                            title: item.title
                        })
                    })

                    console.log(items)

                    setAudios(items)
                }
            })
        } catch (error) {
            console.log(error)
        }
        */

        const res = localStorage.getItem('audios')

        if (res) {
            setAudios(JSON.parse(res))
        }


    }

    // console.log(audios)

    return (
        <div className='container mt-4'>
            <div className="col-8 offset-2 ">
                <Card
                    title='My favouries audio'
                    extra={
                        <Space>
                            <Button onClick={() => setAudiosPlaying(audios)}>Play all</Button>
                            <Button type='primary'
                                onClick={() => setisVisibleModalAddAudio(true)}>
                                Add new
                            </Button>
                        </Space>
                    }>
                    <List dataSource={audios}
                        renderItem={(item, index) => (
                            <List.Item key={`audio${index}}`}
                                extra={<Button onClick={() => setAudiosPlaying([item])}
                                    icon={<Play variant='Bold'
                                        size={25} color='#212121' />}
                                    type='text' />}>
                                <List.Item.Meta
                                    title={item.title}
                                    description={`${item.author} - ${item.category}`} />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
            <AddAudioModal
                isVisible={isVisibleModalAddAudio}
                onClose={() => {
                    handleGetAudios();
                    setisVisibleModalAddAudio(false)
                }} />

            <PlayerControler audios={audiosPlaying} />
        </div >
    );
};

export default HomeScreen