import scss from "./Fait.module.scss";
import beib from "../../assets/beib.svg";
import fulfas from "../../assets/fulfas.svg";

function Fait() {
  return (
    <section className={scss.Fait}>
      <div className={scss.conteiner}>
        <h1>Будьте уверенными<br /> в завтрашнем дне</h1>
        <span>
        Юристы компании «Юридическое Бюро 812» уже долгие годы <br /> ведут успешную практику в предоставлении услуг<br /> физическим и юридическим лицам в различных правовых<br /> сферах, решая вопросы любой сложности. 
        </span>
        <button>Подробнее</button>
      </div>
      <div className={scss.cub}>
        <img className={scss.pz} src={beib} alt="thu" />
        <img className={scss.ps} src={fulfas} alt="tyu" />
      </div>
    </section>
  );
}

export default Fait;

