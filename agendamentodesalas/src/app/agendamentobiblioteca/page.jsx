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
                <h3>BIBLIOTECA</h3>
            </section>

                <form>
                    <label>
                        Nome do professor:
                        <input type="text" name="name" />
                    </label>

                    <h2>Disciplina:</h2>
                    <select value={disciplina} onChange={handleChange}>
                    <option value="mat">Matemática</option>
                    <option value="lp">Lingua Portugesa</option>
                    <option value="bio">Biologia</option>
                    <option value="quim">Química</option>
                    </select>

                    
                    <label for="appt">Horário de inicio:</label>
                    <input type="time" id="appt" name="appt"></input>

                    
                    <label for="appt">Horário de término:</label>
                    <input type="time" id="appt" name="appt"></input>

                    
                    <label>Duração:</label>
                    <input type="checkbox" name="h1" value="50min"/>
                    <label for="h1"> 50min (1 aula)</label>

                    <br/>

                    <input type="checkbox" name="h2" value="1h40min"/>
                    <label for="h2"> 1h40min (2 aulas)</label>


                    <label>Turma:</label>
                    <select value={turma} onChange={handleChange}>
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

                    <input type="submit" value="REALIZAR AGENDAMENTO" />
                    </form>

                    <Footer/>
                    
                    </div>

                

                    );
};