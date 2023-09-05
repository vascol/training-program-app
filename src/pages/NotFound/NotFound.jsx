import React from "react"

import styles from "./NotFound.module.scss"

export const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Шо ти вже наклацав? Нема тут такого!
      </h1>
    </div>
  )
}
