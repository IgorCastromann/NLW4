import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeModalLevelUp } = useContext(ChallengesContext)
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>


                <strong>Parabéns</strong>

                <p>Subiu de level!</p>

                <button type="button" onClick={closeModalLevelUp}>
                    <img src="/icons/close.svg" alt="fechar modal" />
                </button>

            </div>
        </div>
    )
}