import React from 'react';
import Head from 'next/head';
import { Container } from 'components/ui/Container';
import { GetStaticProps } from 'next';
import { getAllBoard } from 'lib/redux/explore/exploreApis';
import { BoardContainer } from 'components/profile';
import type { BoardData } from 'types/profile/types';

const Explore = ({ boardList }: { boardList: BoardData[] }) => {
  return (
    <>
      <Head>
        <title>instagram</title>
        <meta />
      </Head>
      <Container>
        <BoardContainer data={boardList} />
      </Container>
    </>
  );
};

export default Explore;

export const getStaticProps: GetStaticProps = async (context) => {
  const boardList = (await getAllBoard()) as BoardData[];
  return {
    props: { boardList },
  };
};
