import Image from 'next/image';
import s from '../styles/ProjectThumbnail.module.css';

interface Props {
  title: string;
  imageSrc: string;
  style?: { [key: string]: any };
}

const ProjectThumbnail = ({ title, imageSrc, style }: Props) => (
  <div
    className={s.projectThumbnailScale}
    style={{
      display: 'flex',
      flexDirection: 'column',
      boxShadow:
        '0px 16px 24px -16px rgba(0,0,0,0.15), 0px 12px 16px 0px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      height: '280px',

      ...style,
    }}
  >
    <div
      style={{
        position: 'relative',
        flexGrow: 1,
        width: '100%',
      }}
    >
      <Image
        src={imageSrc}
        layout="fill"
        alt={title}
        objectFit="cover"
        style={{ borderRadius: '8px 8px 0 0' }}
      />
    </div>
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '0 0 8px 8px',
        color: 'black',
        padding: '20px',
      }}
    >
      <h4
        style={{ marginBottom: '12px', fontSize: '18px', lineHeight: '24px' }}
      >
        {title}
      </h4>
      <span style={{ fontSize: '12px', color: '#B9BCB9' }}>
        <span style={{ marginRight: '16px' }}>5 days</span>
        <span>Intermediate</span>
      </span>
    </div>
  </div>
);

export default ProjectThumbnail;
