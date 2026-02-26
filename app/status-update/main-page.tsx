"use client";

import "./main-style.css";

export const BASE_PATH = "/status-update/";

// Title component

interface TitleProps {
  title: String;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <div className="title">{title}</div>
    </>
  );
};

// Dividing line component

export const Divider: React.FC = () => {
  return (
    <>
      <div className="divider-container">
        <div className="divider"></div>
      </div>
    </>
  );
};

// Ref Button components

interface RefButtonProps {
  href?: String;
}

export const PrevRefButton: React.FC<RefButtonProps> = ({ href }) => {
  if (href === undefined) {
    return <EmptyRefButton />;
  }

  const handleClick = () => {
    window.location.href = BASE_PATH + href.toString();
  };

  return (
    <>
      <div className="ref-button" onClick={handleClick}>
        <div>◀</div>
        <div>Anterior</div>
      </div>
    </>
  );
};

export const NextRefButton: React.FC<RefButtonProps> = ({ href }) => {
  if (href === undefined) {
    return <EmptyRefButton />;
  }

  const handleClick = () => {
    window.location.href = BASE_PATH + href.toString();
  };

  return (
    <>
      <div className="ref-button" onClick={handleClick}>
        <div>Siguiente</div>
        <div>▶</div>
      </div>
    </>
  );
};

export const EmptyRefButton: React.FC = () => {
  return (
    <>
      <div className="empty-ref-button"></div>
    </>
  );
};

// Video

interface VideoProps {
  src: String;
  width?: number;
}

export const Video: React.FC<VideoProps> = ({ src, width }) => {
  if (width === undefined) {
    width = 600;
  }
  return (
    <>
      <video controls width={width}>
        <source src={src.toString()} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

// Audio

interface AudioProps {
  src: String;
}

export const Audio: React.FC<AudioProps> = ({ src }) => {
  return (
    <>
      <audio controls>
        <source src={src.toString()} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

// Main Page Component

interface MainPageProps {
  title: String;
  Content: React.FC;
  prevRef?: String;
  nextRef?: String;
}

export const MainPage: React.FC<MainPageProps> = ({
  title,
  Content,
  prevRef,
  nextRef,
}) => {
  return (
    <main className="main">
      <Title title={title} />

      <div className="content-container">
        <Content />
      </div>

      <Divider />

      <div className="ref-button-container">
        <PrevRefButton href={prevRef?.toString()} />
        <NextRefButton href={nextRef?.toString()} />
      </div>
    </main>
  );
};

