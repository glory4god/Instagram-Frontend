import { UserData } from 'types/profile/types';

export async function getProfileData(pages: string) {
  const data: UserData[] = testData.filter((arr) => {
    if (arr.id === pages) {
      return arr;
    }
  });
  return data[0];
}

export async function getProfileIds() {
  const paths: string[] = testData.map((arr) => {
    return arr.id.toString();
  });
  return paths;
}

const testData: UserData[] = [
  {
    id: 'winter',
    board: 15,
    follower: 10272334,
    following: 100,
    introduce: '에스빠',
    imageUrl: '/profile/winter.png',
  },
  {
    id: 'irene',
    board: 3,
    follower: 10000000,
    following: 1002,
    introduce: 'red velvet',
    imageUrl: '/profile/irene.png',
  },

  {
    id: 'karina',
    board: 3,
    follower: 1000090,
    following: 100,
    introduce: 'next level',
    imageUrl: '/profile/karina.png',
  },
];
