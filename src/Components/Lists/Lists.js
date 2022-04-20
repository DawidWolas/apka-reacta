import styles from './Lists.module.scss';

const Lists =() =>{
    return(
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title} >Do zrobienia<span>wkrótce</span></h2>
            </header>
                 <p className={styles.description}>Rzeczy które chce sprawdzić</p>
                <section className={styles.columns}>
                    <article>
                            <h2 className="title">Książki</h2>
                        </article> 
                    <article>
                            <h2 className="title">Filmy</h2>
                        </article>
                    <article>
                            <h2 className="title">Gry</h2>
                        </article>   
                </section> 
        </div>
        
    );
};

export default Lists;