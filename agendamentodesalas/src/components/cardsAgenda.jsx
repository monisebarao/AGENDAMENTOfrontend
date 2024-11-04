import styles from "@/app/visualizacaoagendamentos/page.module.css"

export default function cardsAgendamentosFeitos(props){
    return(
        <div className={styles.disposicaoCardsAgenda}>
        <div className={styles.cardAgendamentosFeitos}>
            <h1> 
                {/* {nome_sala} - {dtInicio} */}
            </h1>
            <h2> 
                {/* Horário: {hr_entrada1} - {hr_saida1} */}
            </h2>
            <h2> 
                {/* Professor(a) responsável: {nome_prof} */}
            </h2>
        </div>
    </div>
    )
}