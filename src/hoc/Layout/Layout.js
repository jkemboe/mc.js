import classes from './Layout.module.css'

import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className={classes.layout__wrapper}>
      {[1, 2, 3, 4, 5].map(keyb => {
        if (keyb % 2 === 0) {
          return <div className={classes.layout__animation} />
        }
        if (keyb % 3 === 0) {
          return <div className={classes.layout__animation_left} />
        }
        if (keyb % 5 === 0) {
          return <div className={classes.layout__animations_right} />
        }
        return <div className={classes.layout__animations_far_right} />
      })}

      {children}
    </div>
  )
}

export default Layout
