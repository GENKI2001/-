import React from 'react';
import useOpen from '../../hooks/useOpen';
import CarouselAtoms from '../atoms/carousel/Carousel.Atoms';
import PopupAtoms from '../atoms/popup/Popup.Atoms';
import SelectorAtoms from '../atoms/selector/Selector.Atoms';
import {
  FacebookRoundButtonAtoms,
  XRoundButtonAtoms,
} from '../atoms/sns/roundButton/SNSRoundButtonAtoms';
import TextFieldAtoms from '../atoms/textfield/TextField.Atoms';
import CircleFixedPinkButtonIons from '../ions/button/circle/pink/CircleFixedPinkButton.Ions';
import CircleFixedPostButtonIons from '../ions/button/circle/pink/CircleFixedPostButton.Ions';
import FullRoundPurpleButtonIons from '../ions/button/fullRound/Purple/FullRoundPurpleButton.Ions';
import FullRoundRegisterButtonIons from '../ions/button/fullRound/Purple/FullRoundRegisterButton.Ions';
import FullRoundLoginButtonIons from '../ions/button/fullRound/White/FullRoundLoginButton.Ions';
import FullRoundWhiteButtonIons from '../ions/button/fullRound/White/FullRoundWhiteButton.Ions';
import RoundLikeButtonIons from '../ions/button/round/White/RoundLikeButton.Ions';
import RoundWhiteButtonIons from '../ions/button/round/White/RoundWhiteButton.Ions';
import IconImgIons from '../ions/img/icon/IconImg.Ions';
import UserIconImgIons from '../ions/img/icon/UserIconImg.Ions';
import ImgLogoIons from '../ions/img/logo/ImgLogo.Ions';
import RoundImgIons from '../ions/img/round/RoundImg.Ions';
import { BodyTextIons } from '../ions/text/body/BodyText.Ions';
import { BodyTextBoldIons } from '../ions/text/body/BodyTextBold.Ions';
import { HomeSubTitleTextIons } from '../ions/text/subtitle/HomeSubTitle.Ions';
import { TagTextIons } from '../ions/text/tag/TagText.Ions';
import { HomeTitleTextIons } from '../ions/text/title/HomeTitleText.Ions';
import { PurpleTitleTextIons } from '../ions/text/title/PurpleTitleText.Ions';
import DefaultTextFieldIons from '../ions/textfield/DefaultTextField.Ions';

interface HomeTemplateProps {
  temp?: string;
}

const HomeTemplate: React.FC<HomeTemplateProps> = () => {
  const { open, handleOpen, handleClose } = useOpen();
  return (
    <>
      <CarouselAtoms
        items={[
          <FullRoundRegisterButtonIons onClick={handleOpen} />,
          <FullRoundLoginButtonIons onClick={handleOpen} />,
          <FullRoundPurpleButtonIons size="medium" onClick={handleOpen}>
            hello
          </FullRoundPurpleButtonIons>,
          <FullRoundWhiteButtonIons onClick={handleOpen}>
            hello
          </FullRoundWhiteButtonIons>,
          <RoundWhiteButtonIons onClick={handleOpen}>
            White
          </RoundWhiteButtonIons>,
          <RoundLikeButtonIons
            selected
            size="extra-large"
            numOflikes={2}
            onClick={handleOpen}
          />,
          <CircleFixedPinkButtonIons size="large" onClick={handleOpen}>
            hello
          </CircleFixedPinkButtonIons>,
          <FacebookRoundButtonAtoms
            onClick={() => {
              console.log('onClick');
            }}
          />,
          <XRoundButtonAtoms
            onClick={() => {
              console.log('onClick');
            }}
          />,
        ]}
        slide_min_width={400}
        nextButton={<button>next</button>}
        prevButton={<button>prev</button>}
        playOnInit
      />
      <CircleFixedPostButtonIons size="large" onClick={handleOpen} />

      <SelectorAtoms
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
        ]}
        value="1"
        onChange={() => {
          console.log('onChange');
        }}
        placeholder="Select"
      />

      <HomeTitleTextIons
        text="みんなのIDEA"
        onClick={() => {
          console.log('onClick');
        }}
      />

      <HomeSubTitleTextIons
        text="いいね と コメント で実現させよう"
        onClick={() => {
          console.log('onClick');
        }}
      />

      <PurpleTitleTextIons text="注目のIDEA" size="medium" />

      <BodyTextIons size="normal" text="みんなのアイデアを見てみよう" />
      <div style={{ width: 100 }}>
        <BodyTextBoldIons
          rows={2}
          size="extra-small"
          text="みんなのアイデアを見てみよう"
        />
      </div>
      <TagTextIons
        text="タグです"
        size="small"
        onClick={() => {
          console.log('');
        }}
      />

      <ImgLogoIons
        img_src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        alt="google"
        size="large"
      />
      <div style={{ width: 100 }}>
        <RoundImgIons img_src="logo192.png" alt="google" />
        <IconImgIons
          img_src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="google"
          size="small"
        />
        <UserIconImgIons
          user_name="user"
          img_src={null}
          alt="google"
          size="small"
        />
      </div>

      <DefaultTextFieldIons
        label="Name"
        rows={2}
        placeholder="Enter your name"
        onChange={() => {
          console.log('onChange');
        }}
        value="dfasd"
        error={null}
      />

      <PopupAtoms open={open} onClose={handleClose}>
        <TextFieldAtoms
          label="Name"
          placeholder="Enter your name"
          onChange={() => {
            console.log('onChange');
          }}
          value="dfasd"
          error={null}
        />
      </PopupAtoms>
    </>
  );
};

export default HomeTemplate;
