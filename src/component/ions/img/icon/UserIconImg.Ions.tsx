import React from 'react';
import './IconImg.Ions.css';

interface ImgProps {
  user_name: string;
  img_src: string | null;
  alt?: string;
  size?: 'extra-small' | 'small' | 'medium' | 'large';
}
const UserIconImgIons: React.FC<ImgProps> = React.memo(
  ({ user_name, img_src, alt, size = 'medium' }) => {
    return img_src ? (
      <img src={img_src} alt={alt} className={`icon-img-ions ${size}`} />
    ) : (
      <div className={`icon-img-ions ${size} user-icon-text-ions`}>
        {user_name[0]}
      </div>
    );
  },
);

export default UserIconImgIons;
