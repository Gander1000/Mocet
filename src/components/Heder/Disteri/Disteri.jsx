
import scss from "./Disteri.module.scss";
import Union from "../../../assets/Union.svg";
import Car from "../../../assets/image.svg";

function Disteri() {
  return (
    <section className={scss.Disteri}>
      <img className={scss.logo} src={Car} alt="" />
      <main >
        <h1>
          Страхование <br /> вашего <br /> автомобиля
        </h1>
        <span>
          КАСКО, ОСАГО и другие виды
          <br /> страхования имущества и<br /> транспортных средств
        </span>
        <button>
          Застраховать <img src={Union} alt="" />
        </button>
        <button className={scss.ct}>
          Оплатит Страхование <img src={Union} alt="" />
        </button>
        <button className={scss.cr}>
          Закас Страхование на машину <img src={Union} alt="" />
        </button>
        <button className={scss.cw}>
          Застраховать машину без пронцентов <img src={Union} alt="" />
        </button>

      </main>
    </section>
  );
}

export default Disteri;
