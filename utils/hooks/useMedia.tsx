import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { UseMediaInterface } from 'utils/interfaces';

const useMedia = (): UseMediaInterface => {
  const [isTablet, setIsTablet] = useState(false);
  const [isPc, setIsPc] = useState(false);

  const Tablet = useMediaQuery({ query: '(min-width: 768px)' });
  const Pc = useMediaQuery({ query: '(min-width: 1200px)' });

  useEffect(() => {
    setIsTablet(Tablet);
    setIsPc(Pc);
  }, [Tablet, Pc]);

  return { isTablet, isPc };
};

export default useMedia;
