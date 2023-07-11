import React from 'react';
import styles from './Loader.module.scss'
function Loader() {
    return (
        <>
            <div className={styles.loadingContainer}>
                <div className={styles.loadingText}>
                    <span>M</span>
                    <span>A</span>
                    <span>P</span>
                    <span>B</span>
                    <span>I</span>
                    <span>Z</span>
                </div>
            </div>
        </>
    );
}

export default Loader;