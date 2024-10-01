import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Form() {
    return (
        <div>
            <Header />


            {/* NAVEGAÇÃO */}
            <section className="disposicaoNav">
                <div className="salaNav">
                    <a href="./">SALAS</a>
                </div>

                <div className="equipNav">
                    <Link href="/pagInicialEquipamentos/page.jsx">EQUIPAMENTOS</Link>
                </div>
            </section>

            <br />
            <br />
            <br />

            {/* TITULO PAGINA */}
            <section className="tituloGeral">
                <h3>LABORATÓRIO DE MIDIAS E TECNOLOGIAS</h3>
            </section>

            <form className="disposicaoFormEquip">
                <label>
                    Nome do professor:
                    <input type="text" name="name" />
                </label>

                <h2>Disciplina:</h2>
                <select value={disciplina} onChange={handleChange}>
                    <option>Arte</option>
                    <option>Biologia/Ciência da Natureza</option>
                    <option>Educação Física</option>
                    <option>Eixo Integrador Interáreas</option>
                    <option>Física</option>
                    <option>Geografia</option>
                    <option>História</option>
                    <option>Língua Inglesa</option>
                    <option>Língua Portuguesa</option>
                    <option>Matemática </option>
                    <option>Programação e Robótica</option>
                    <option></option>
                </select>


                <label for="appt">Horário de inicio:</label>
                <input type="time" id="appt" name="appt"></input>


                <label for="appt">Horário de término:</label>
                <input type="time" id="appt" name="appt"></input>


                <label>Duração:</label>
                <input type="checkbox" name="h1" value="50min" />
                <label for="h1"> 50min (1 aula)</label>

                <br />

                <input type="checkbox" name="h2" value="1h40min" />
                <label for="h2"> 1h40min (2 aulas)</label>


                <label>Turma:</label>
                <select value={turma} onChange={handleChange}>
                    <option>1º Ano - Fundamental I</option>
                    <option>2º Ano - Fundamental I</option>
                    <option>3º Ano - Fundamental I</option>
                    <option>4º Ano - Fundamental I</option>
                    <option>5º Ano - Fundamental I</option>
                    <option>6º Ano A - Fundamental II</option>
                    <option>6º Ano B - Fundamental II</option>
                    <option>7º Ano A - Fundamental II</option>
                    <option>7º Ano B - Fundamental II</option>
                    <option>8º Ano A - Fundamental II</option>
                    <option>8º Ano B - Fundamental II</option>
                    <option>9º Ano A - Fundamental II</option>
                    <option>9º Ano B - Fundamental II</option>
                    <option>1º Ano A - Ensino Médio</option>
                    <option>1º Ano B - Ensino Médio</option>
                    <option>2º Ano - Ensino Médio</option>
                    <option>3º Ano - Ensino Médio</option>
                </select>
                {/* BOTAO SUBMIT */}
                <section>
                    <button
                        // href={props.linkAgenda}
                        // className=""
                        type="submit"
                        className="botaoForm"
                    >
                        Realizar Agendamento
                    </button>
                </section>
            </form>

            <Footer />

        </div>

    );
};