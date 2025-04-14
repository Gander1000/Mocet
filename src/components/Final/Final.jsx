import scss from "./Final.module.scss";
import Fa from "../../assets/Faisboc.svg";
import In from "../../assets/Insta.svg";
import Hi from "../../assets/Hip.svg";
import Wc from "../../assets/Wc.svg";

function Final () {
    return(
        <section className={scss.Final}>
            <div className={scss.img_rf}>
                <img src={Fa} alt="фейсб" />
                <img src={In} alt="инста" />
                <img src={Hi} alt="птица" />
                <img src={Wc} alt="вк" />
            </div>
            <div className={scss.toblo}>
                <a href="">О компании</a>
                <a href="">Новости</a>
                <a href="">Помощь</a>
                <a href="">Контакты</a>
            </div>
            <h5>© 2020 Название компании</h5>
        </section>
    );
}

export default Final