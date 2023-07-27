import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterModal.module.scss';
import crossIcon from './img/cross.svg';

const CharacterModal = ({ character, onClose }) => {
    return (


        <div key={character.id} className={styles.card__container}>
            <div className={styles.card__upperDiv}>
                <div className={styles.card__upperDivleft}>
                    <img
                        className={styles.card__profilePic}
                        src={character.image}
                        alt=""
                    />
                </div>
                <div className={styles.card__upperDivright}>
                    <div>
                        <p className={styles.card__name}>{character.name}</p>
                    </div>
                    <div className={styles.card__statusDiv}>
                        <p className={styles.card__statusSize}>
                            {character.status} - {character.species}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.card__lowerDiv}>
                <div>
                    <p className={styles.card__lowerDivgreyText}>Gender</p>
                    <p className={styles.card__lowerDivblackText}>
                        {character.gender}
                    </p>
                </div>
                <div>
                    <p className={styles.card__lowerDivgreyText}>Location</p>
                    <p className={styles.card__lowerDivblackText}>
                        {character.location.name}
                    </p>
                </div>
                <div>
                    <p className={styles.card__lowerDivgreyText}>Species</p>
                    <p className={styles.card__lowerDivblackText}>
                        {character.species}
                    </p>
                </div>
                <div>
                    <p className={styles.card__lowerDivgreyText}>Origin</p>
                    <p className={styles.card__lowerDivblackText}>
                        {character.origin.name}
                    </p>
                </div>
            </div>
            <img className={styles.cross__icon} onClick={onClose} src={crossIcon} alt="" />

        </div>


    );
};

CharacterModal.propTypes = {
    character: PropTypes.object,
    onClose: PropTypes.func
}

export default CharacterModal;
