//This custom hook is used in both Scores.js and Tweets.js. Found part of this in stackoverflow,
//and further adopted this so it would work with the project. 

//Could potentially be useful in future projects with twitter/instagram widgets.
import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    //Specifically needed for this project. Usehooks-ts, the npm dependency, has a similar, albeit
    //more complex version of this, however, without these next two lines, the scorestream widget
    //does not function.
    script.async = true;
    script.type= "text/javascript";
    //Adds the url of the script to the head of the document
    document.head.appendChild(script);

    return () => {
      //in order to prevent this from being repeatedly added to the head, potentially causing problems,
      //removing this script after it runs makes it run smoother. Specifically needed for at least
      //the scorestream widget, unsure about twitter widget. 
      document.head.removeChild(script);
    }
  }, [url]);
};

export default useScript;