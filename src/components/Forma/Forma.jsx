
import scss from "./Forma.module.scss";

function Forma() {
    return (
        <section className={scss.Forma}>
            <h1 >Закажите прямо сейчас</h1>
            <p >Оставьте заявку и мы сами свяжемся с Вами.</p>
            <div className={scss.lini}>
              <div className={scss.phoneInput}>
                   <input type="text" placeholder="+7 (000) 000-0000" className={scss.input} />
              </div>
              <button className={scss.button}>Оставить заявку</button>
            </div>
            <p className={scss.consent}>
                Оставляя заявку, вы соглашаетесь на обработку персональных <br /> данных и с условиями бронирования счёта
            </p>
        </section>
    );
}

export default Forma;


