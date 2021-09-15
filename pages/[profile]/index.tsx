import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { useDispatch } from 'react-redux';
import {
  getProfileData,
  getProfileIds,
  getUserBoard,
} from 'lib/redux/profile/profileApis';
import {
  initialBanner,
  setBoardData,
  setUserData,
} from 'lib/redux/profile/profileSlice';

import { BoardBanner, BoardContainer, UserInfo } from 'components/profile';
import { Container } from 'components/ui/Container';

import { ParsedUrlQuery } from 'querystring';

import { BoardData, UserData } from 'types/profile/types';

const UserProfile = ({
  bannerList,
  userData,
  boardData,
}: {
  bannerList: string[];
  userData: UserData;
  boardData: BoardData[];
}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initialBanner());
    dispatch(setBoardData(boardData));
    dispatch(setUserData(userData));
  }, []);

  return (
    <>
      <Head>
        <title>(@{userData.id}) instagram 사진 및 동영상</title>
        <meta name={`${userData.id}`} content={`${userData.id}`}></meta>
      </Head>
      <Container>
        <UserInfo />
        <BoardBanner bannerList={bannerList} />
        <BoardContainer />
      </Container>
    </>
  );
};

export default UserProfile;

interface IParams extends ParsedUrlQuery {
  profile: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: 백엔드 연동시 추후에 api로 가져오기
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

  // TODO: 백엔드 연동시 추후에 api로 가져오기
  const userData = (await getProfileData(profile)) as UserData;
  const boardData = (await getUserBoard(profile)) as BoardData[];

  return {
    props: { userData, bannerList, boardData },
  };
};
