import styles from './MenuLateral.module.css'
import Closed from '../assets/Vector.svg'
import React from 'react'

const MenuLateral = () => {
  return (
    <div className={styles.menu}>
        <button className={styles.closed}>
            <img src={Closed} />
        </button>

        <div className={styles.menu_content}>
            <div className={styles.input_name}>
                <label className={styles.nome_font}> Nome </label>
                <input type="text" className={styles.nome_content} />
            </div>

            <div className={styles.textarea_desc}>
                <label className={styles.desc_font}> Descrição (opcional): </label>
                <textarea className={styles.desc_content}></textarea>
            </div>

            <div className={styles.buttons}>
                <button className={styles.fechar}>Fechar</button>
                <button className={styles.salvar}>Salvar tarefa</button>   
            </div>
        </div>

    </div>
  )
}

export default MenuLateral