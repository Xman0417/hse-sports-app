//This custom hook is only for the Score Tracking widget. Could be useful for future projects,
//so I made it its own hook.
import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.charset="utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;