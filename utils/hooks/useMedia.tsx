import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useMedia = () => {
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
