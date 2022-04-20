import styles from './Hero.module.scss';


const Hero =() =>{
    return(
    <div className={styles.hero}>
        <h1 className={styles.title}>Moja pierwsza aplikacja React </h1>
        <p className={styles.subtitle}>Prosta lista do zrobienia z wyszukiwarką  i kartami</p>
    </div>  
    );
};

export default Hero;