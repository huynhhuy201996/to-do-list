import React, { useState, useRef } from 'react'
import { Button, Card, Space } from 'antd'
import { Next, Play, Previous } from 'iconsax-react'

const PlayerControler = ({ audios }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [chapIndex, setChapIndex] = useState(0);

  const audioRef = useRef()

  const onPlaying = {};
  const toogleAudio = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };



  return audios.length > 0 ? (
    <div>
      <Card
        style={{
          position: 'absolute',
          bottom: 10,
          right: 80,
          bottom: 30,
        }}>
        <div>
          {audios[chapIndex].title}
        </div>
        <Space>
          <Button
            type='text'
            icon={<Previous size={27} color='#676767' />}
          />
          <Button
            type='text'
            onClick={toogleAudio}
            icon={<Play size={27} color='coral' />}
          />
          <Button
            type='text'
            icon={<Next size={27} color='#676767' />}
          />

        </Space>
      </Card>
      <audio controls ref={audioRef} onTimeUpdate={onPlaying} />
      {
        audios.map(item =>
          <source src={item.sound} />)
      }
    </div>
  ) : (
    <></>
  );
}

export default PlayerControler;