import ClipLoader from "react-spinners/ClipLoader";
import style from './Loader.module.css'
export const Loader = () => {
  return <div className={style.backdrop}>
    <ClipLoader
        color={'blue'}
       
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>;

};
