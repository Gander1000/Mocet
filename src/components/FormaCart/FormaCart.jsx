import React, { useState } from "react";
import scss from "./FormaCart.module.scss";

function FormaCart() {
  const [selectedOption, setSelectedOption] = useState("kasko");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className={scss.FormaCart}>
      <h1>Закажи полис онлайн</h1>
      <p>Заполните форму и закажите полис</p>
      <div>
        <input type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="+7 (000) 000-0000" />
        <input type="email" placeholder="E-mail" />
      </div>

      <p className={scss.br}>Какой полис вас интересует</p>

      <div className={scss.cnopi}>

        <div className={scss.ceiti}>
          <div className={scss.radio}>
            <input
              type="radio"
              id="kasko"
              name="insurance"
              value="kasko"
              checked={selectedOption === "kasko"}
              onChange={handleOptionChange}
            />
            <label htmlFor="kasko">КАСКО</label>
          </div>

          <div className={scss.radio}>
            <input
              type="radio"
              id="osago"
              name="insurance"
              value="osago"
              checked={selectedOption === "osago"}
              onChange={handleOptionChange}
            />
            <label htmlFor="osago">ОСАГО</label>
          </div>

          <div className={scss.radio}>
            <input
              type="radio"
              id="life"
              name="insurance"
              value="life"
              checked={selectedOption === "life"}
              onChange={handleOptionChange}
            />
            <label htmlFor="life">Страхование жизни</label>
          </div>
        </div>
      </div>

      <button>Заказать полис</button>

      <h5>
        Оставляя заявку, вы соглашаетесь на обработку персональных данных <br />
        и с условиями бронирования счёта
      </h5>
    </section>
  );
}

export default FormaCart;

