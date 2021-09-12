import React from 'react';
import s from './ProfileImage.module.css';
import cn from 'classnames';
import Image from 'next/image';

interface ImageProps {
  size: number;
  profile?: boolean;
  border?: boolean;
  imageUrl: string;
}

const ProfileImage: React.FC<ImageProps> = ({
  profile = false,
  border = false,
  size,
  imageUrl,
}) => {
  return (
    // FIXME: 테두리 색 칠하는건 어떻게 할지 생각해봐야할듯!
    <div className={cn(profile && s.container)}>
      <div
        className={cn(border && s.border)}
        style={{
          width: size + 10,
          height: size + 10,
        }}>
        <Image
          className={s.round}
          // 추후에 imageUrl props로 대체
          src={imageUrl}
          width={size}
          height={size}
          alt="profile"
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
