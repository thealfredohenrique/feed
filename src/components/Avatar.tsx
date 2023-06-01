import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  alt?: string;
  hasBorder?: boolean;
}

function Avatar({ src, alt = "Avatar photo", hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}

export default Avatar;
