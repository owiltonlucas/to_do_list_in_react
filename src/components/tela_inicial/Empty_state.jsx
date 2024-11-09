import React from 'react'
import Logo from '../../assets/Logo.svg'
import styles from './Empty_state.module.css'

const Empty_state = () => {
  return (
    <>
        <div className={styles.logo}>
            <img src={Logo} />
        </div>

        <div className={styles.titulo}>Tarefas</div>

        <div className={styles.empty_state}>
            <p className={styles.p1}>Você ainda não criou nenhuma tarefa</p>
            <p className={styles.p2}>Não se preocupe, suas novas tarefas irão aparecer aqui.</p>
        </div>

        <button className={styles.button}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 12.5H18.5" stroke="#989898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.5 18.5V6.5" stroke="#989898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
            Adicionar tarefa
        </button>
    </>
  )
}

export default Empty_state