import React from 'react'
import styles from './tabs.module.scss'

const Tabs = ({tab, setTab}) => {
  return <>
    <div className={styles.tabs}>
        <button className={tab===1 && styles.active} onClick={()=>setTab(1)}>Pluton</button>
        <button className={tab===2 && styles.active} onClick={()=>setTab(2)}>SMS School</button>
        <button className={tab===3 && styles.active} onClick={()=>setTab(3)}>Peace Buddies</button>
        <button className={tab===4 && styles.active} onClick={()=>setTab(4)}>Scholars Academy</button>
    </div>
  </>
}

export default Tabs