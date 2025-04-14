import scss from "./Foto.module.scss";
import Fata from "../../assets/Docum.svg";
import Duco from "../../assets/Dark.svg";

function Foto() {
    return (
        <section className={scss.Foto}>
            <h1 className={scss.title}>Сертификаты</h1>
            <div className={scss.imageContainer}>
                <img src={Fata} alt="Документ 1" className={scss.image} />
                <img src={Fata} alt="Документ 2" className={scss.image} />
                <img src={Fata} alt="Документ 3" className={scss.image} />
                <img src={Duco} alt="Документ 4" className={scss.imaga} />
            </div>
        </section>
    );
}

export default Foto;
