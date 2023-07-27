import styles from './Loader.module.scss';
import loaderIcon from './img/loader-bllue.svg';

const Loader = () => {

    return (
        <img className={styles.loader} src={loaderIcon} alt='loader' />
    );
}




export default Loader;