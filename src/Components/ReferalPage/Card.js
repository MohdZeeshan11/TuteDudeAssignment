import React from 'react'
import styles from './Card.module.css';

const Card = () => {
  return (
   <div className='mt-5'>
     <div className={`${styles.card} px-5 py-5 mr-10`}>
        <div className='flex flex-row justify-between'>
            <div className={styles.firstLineName}>Dhiraj Saxsena</div>
            <div className={styles.firstLineName}>14 Sep, 2022</div>
        </div>
        <div className={`${styles.secondLineName} mt-3`}>Courses Enrolled(8)</div>
        <div className={`${styles.courseContainer}`}>
            <span className={styles.courses}>UI/UX</span>
            <span className={styles.courses}>Photoshop</span>
            <span className={styles.courses}>Illustrator</span>
            <span className={styles.courses}>Python</span>
            <span className={styles.courses}>MERN</span>
            <span className={styles.courses}>Java</span>
            <span className={styles.courses}>Python</span>
            <span className={styles.courses}>MERN</span>
            
        </div>
        <div className='mt-2 flex flex-row items-center'>
            <div className={`${styles.thirdLineTitle} mr-2`}>Referral Amount</div>
            <div className={styles.thirdLineAmount}>₹185</div>
        </div>
    </div>
   </div>
  )
}

export default Card;