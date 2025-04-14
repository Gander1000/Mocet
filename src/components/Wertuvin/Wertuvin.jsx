import scss from "./Wertuvin.module.scss";
import jojo from "../../assets/soul.svg";

function Wertuvin (){
    return(
        <section className={scss.Wertuvin}>
            <h4>Преимущества</h4>
            <h1>Почему доверяют</h1>
            <span>Более 10 000 клиентов доверили нашему агентству <br /> страхование транспортных средств</span>
            <div className={scss.conten}>
                <div className={scss.line}>
                    <img src={jojo} alt="" />
                    <h3>Помощь при ДТП</h3>
                    <p>Если у вас случилось ДТП - <br /> просто позвоните нам и мы <br /> подскажем порядок действий</p>
                </div>
                <div className={scss.line}>
                    <img src={jojo} alt="" />
                    <h3>Юридическое <br /> сопровождение</h3>
                    <p>Представительство в суде, <br /> юридические консультации <br /> даже по сымым сложным <br /> вопросам</p>
                </div>
                <div className={scss.line}>
                    <img src={jojo} alt="" />
                    <h3>Скидки <br /> постоянным <br /> клиентам</h3>
                    <p>Накопительная система <br /> скидок. Получите выгоду до <br /> 80%</p>
                </div>
                <div className={scss.line}>
                    <img src={jojo} alt="" />
                    <h3>Доставка полиса на дом</h3>
                    <p>Доставим полисна <br /> дом в <br /> любое удобное для вас время</p>
                </div>

            </div>
        </section>
    );
}

export default Wertuvin