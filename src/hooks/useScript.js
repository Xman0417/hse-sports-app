//This custom hook is only for the Score Tracking widget. Could be useful for future projects,
//so I made it its own hook.
import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.type= "text/javascript";
    script.charset="utf-8";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, [url]);
};

export default useScript;