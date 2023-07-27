import styles from './Button.module.scss';
import PropTypes from 'prop-types'

const Button = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className={styles.button}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
  }


export default Button;