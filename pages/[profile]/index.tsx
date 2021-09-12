import BoardBanner from 'components/profile/BoardBanner';
import ProfileImage from 'components/profile/ProfileImage';
import UserInfo from 'components/profile/UserInfo';
import Container from 'components/ui/Container';
import { getProfileData, getProfileIds } from 'lib/redux/profile/profileApis';
import { initialBanner } from 'lib/redux/profile/profileSlice';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { useDispatch } from 'react-redux';
import { UserData } from 'types/profile/types';

const UserProfile = ({
  bannerList,
  userData,
}: {
  bannerList: string[];
  userData: UserData;
}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initialBanner());
  });

  return (
    <>
      <Head>
        {/* 추후에 api로 데이터 가져올 때 추가 설정 */}
        <title></title>
        <meta name="" content=""></meta>
      </Head>
      <Container>
        <div style={{ display: 'flex' }}>
          <ProfileImage
            border={true}
            profile={true}
            size={168}
            imageUrl={userData.imageUrl}
          />
          <UserInfo data={userData} />
        </div>
        <BoardBanner bannerList={bannerList} />
      </Container>
    </>
  );
};

export default UserProfile;

//이 과정이 사실 정확히 뭔지는 모르겠지만 빨간줄이 안뜸 ㅠㅠ
interface IParams extends ParsedUrlQuery {
  pages: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 추후에 api로 가져오기
  const arr = (await getProfileIds()) as string[];
  const paths = arr.map((profile) => {
    return {
      params: { profile },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const bannerList: object = {
    main: '게시물',
    channel: '동영상',
    saved: '저장됨',
    tagged: '태그됨',
  };
  const { profile } = context.params as IParams;

  // FIXME: 추후에 다시 수정 (왜 타입이 이상하지?)
  const userData = (await getProfileData(profile)) as UserData;
  return {
    props: { userData, bannerList },
  };
};
