import { ImgHTMLAttributes } from 'react';


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({hasBorder = true, ...props }: AvatarProps) => {
  return (
    <div>
      <img
        className={
          hasBorder
            ? "w-12 h-12 rounded-lg border-4 border-gray-800 outline outline-green-500 outline-2 box-content"
            : "w-12 h-12 rounded-lg "
        }
        {...props}
      />
    </div>
  );
};
