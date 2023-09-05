import React from "react"
import styles from "./ButtonScrollUp.module.scss"

export const ButtonScrollUp = () => {
  const btnRef = React.useRef()

  const [isHidden, setIsHidden] = React.useState(true)

  const smoothLinks = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  React.useEffect(() => {
    window.onscroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 500) {
        if (isHidden) {
          setIsHidden(false)
        }
      } else {
        if (!isHidden) {
          setIsHidden(true)
        }
      }
    }
  }, [isHidden])

  return (
    <>
      {!isHidden && (
        <div ref={btnRef} className={styles.wrapper}>
          <div className={styles.btn} onClick={smoothLinks}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  )
}
