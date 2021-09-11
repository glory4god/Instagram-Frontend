import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './Navbar.module.css';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';

const Navbar = () => {
  return (
    <>
      <div className={s.paper}>
        <div className={s.navigator}>
          <Link href="/">
            <a className={s.mainlogo}>
              <Image
                src={'/instagram.png'}
                width={'115px'}
                height={'32px'}
                alt={'mainlogo'}></Image>
            </a>
          </Link>
          <div>
            <input className={s.input} type="text" placeholder="검색" />
          </div>
          <div className={s.right}>
            <div className={s.rightBanner}>
              <Link href="/">
                <a>
                  <HomeIcon style={{ fontSize: '30px' }} />
                </a>
              </Link>
              <Link href="/direct">
                <a>
                  <TelegramIcon
                    color={'disabled'}
                    style={{ fontSize: '30px' }}
                  />
                </a>
              </Link>

              <Link href="/explore">
                <a>
                  <ExploreIcon
                    color={'disabled'}
                    style={{ fontSize: '30px' }}
                  />
                </a>
              </Link>

              {/* 얘는 그냥 창 */}
              <FavoriteBorderIcon
                color={'disabled'}
                style={{ fontSize: '30px' }}
              />

              {/* 이건 고민해봐야함 */}
              <Link href="/">
                <a>
                  <AddIcon color={'disabled'} style={{ fontSize: '30px' }} />
                </a>
              </Link>

              {/* 메뉴바  */}
              <span>사진</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
