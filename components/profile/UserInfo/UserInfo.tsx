import React from 'react';
import s from './UserInfo.module.css';
import type { UserData } from 'types/profile/types';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';

interface UserInfoProps {
  data: UserData;
}

const UserInfo: React.FC<UserInfoProps> = ({ data }) => {
  return (
    <div className={s.infoBox}>
      <div className={s.tit01}>
        <span>{data.id}</span>
        <span>
          <Button size="small" variant="outlined">
            프로필 편집
          </Button>
        </span>
        <SettingsIcon color="disabled" fontSize="large" />
      </div>
      <div className={s.tit02}>
        <p>
          게시물 <span>{formatNumber(data.board)}</span>
        </p>
        <p>
          팔로워 <span>{formatNumber(data.follower)}</span>
        </p>
        <p>
          팔로우 <span>{formatNumber(data.following)}</span>
        </p>
      </div>

      {/* FIXME: 어떤형식의 데이터인지 확인후 변경 */}
      <div className={s.tit03}>{data.introduce}</div>
    </div>
  );
};

export default UserInfo;

const formatNumber = (n: number) => {
  if (n < 10000) {
    return n;
  } else if (n < 1000000) {
    return Math.ceil(n / 100) / 10 + '천';
  } else {
    return Math.ceil(n / 100000) / 10 + '백만';
  }
};
