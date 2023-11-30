import React, { useState, useRef } from 'react'
import { Button, Card, Space } from 'antd'
import { Next, Play, Previous } from 'iconsax-react'

const PlayerControler = ({ audios }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [chapIndex, setChapIndex] = useState(0);

  const audioRef = useRef()

  const onPlaying = (event) => {

  };


  const toogleAudio = () => {
    if (!isPlaying) {
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };


  console.log(audios)

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
            disabled={chapIndex === audios.length - 1}
            type='text'
            onClick={() => setChapIndex(chapIndex + 1)}
            icon={<Next size={27} color='#676767' />}
          />

        </Space>
      </Card>
      <audio
        controls
        ref={audioRef}
        autoPlay
        onTimeUpdate={(event) => onPlaying(event)}>
        {audios.map((item, index) => (
          <source key={`audio${index}`} src={item.sound} />
        ))}
      </audio>
    </div>
  ) : (
    <></>
  );
}

export default PlayerControler;