import { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

interface AnimatedProgressBarProps {
  now: number;
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({ now }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= now) {
          clearInterval(interval);
          return now;
        }
        return prevProgress + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [now]);

  return (
    <div className="custom-progressbar-container">
      <ProgressBar
        animated
        striped
        variant="success"
        now={progress}
        className="custom-progressbar"
      />
    </div>
  );
};

export default AnimatedProgressBar;
