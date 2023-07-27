import styles from './CharacterCard.module.scss';
import PropTypes from 'prop-types';

const CharacterCard = ({ character, onClick }) => {
  return (
    <div key={character.id} className={styles.character__card} onClick={() => onClick(character)}>
      <img className={styles.character__pic} src={character.image} alt={character.name} />
      <p className={styles.character__name}>{character.name}</p>
    </div>
  );
};


CharacterCard.propTypes = {
  character: PropTypes.object,
  onClick: PropTypes.func
}

export default CharacterCard;
