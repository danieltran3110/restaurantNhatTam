import styles from './StarRatingInput.module.scss';
// import { useState } from 'react';
export default function StarRatingInput({
  className,
  field,
  form: { values },
}) {
  const value = values.starRating;

  return (
    <div
      className={`${styles.starRatingInput} ${className} ${
        value ? styles.checked : styles.unChecked
      }`}
    >
      <label className={`${styles.starItem}`} htmlFor='star1'>
        ☆
      </label>
      <input type='radio' {...field} value='1' id='star1' />
      <label className={`${styles.starItem}`} htmlFor='star2'>
        ☆
      </label>
      <input type='radio' {...field} value='2' id='star2' />
      <label className={`${styles.starItem}`} htmlFor='star3'>
        ☆
      </label>
      <input type='radio' {...field} value='3' id='star3' />
      <label className={`${styles.starItem}`} htmlFor='star4'>
        ☆
      </label>
      <input type='radio' {...field} value='4' id='star4' />
      <label className={`${styles.starItem}`} htmlFor='star5'>
        ☆
      </label>
      <input type='radio' {...field} value='5' id='star5' />
    </div>
  );
}
