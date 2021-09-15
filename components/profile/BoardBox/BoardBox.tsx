import React from 'react';
import Image from 'next/image';

import s from './BoardBox.module.css';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

interface BoardBoxProps {
  size: number;
  imageUrl: string;
}

const BoardBox: React.FC<BoardBoxProps> = ({ size, imageUrl }) => {
  const [hover, setHover] = React.useState<boolean>(false);

  const onMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setHover(true);
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setHover(false);
  };

  return (
    <div
      className={s.imagebox}
      onMouseOver={(e) => onMouseOver(e)}
      onMouseLeave={(e) => onMouseLeave(e)}>
      <Image
        className={s.image}
        src={imageUrl}
        width={size}
        height={size}
        alt="게시글"
        layout="responsive"
      />

      {/* TODO: 이미지 개수에 따라 / 동영상 여부에 따른 노출 */}
      <div className={s.multiple}>
        {/* <PhotoLibraryRoundedIcon className={s.picture} /> */}
        <PlayArrowRoundedIcon className={s.play} />
      </div>
      {hover && (
        <div className={s.boardinfo}>
          <div className={s.flex}>
            <div>
              <FavoriteIcon fontSize="small" />
              <span>26</span>
            </div>
            <div>
              <ModeCommentIcon fontSize="small" />
              <span>7</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardBox;
