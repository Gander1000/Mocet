import scss from "./Otzev.module.scss";
import Women from "../../assets/Elipse.svg";

function Otzev() {
    return (
        <section className={scss.Otzev}>
            <h1>Отзывы</h1>
            <p>Продавать больше — это всё, что нужно, чтобы направлять <br /> посетителей через правильные шаги</p>
            <div className={scss.Womena}>
                <div className={scss.ReviewCardi}>
                    <img src={Women} alt="Фото" />
                    <span>
                        Это супер крутая инструкция и вы <br /> делаете очень полезную вещь 🙂 <br /> Спасибо ❤️
                    </span>
                    <h4>Юрий Ставничий</h4>
                    <h6>фотограф</h6>
                </div>
                <div className={scss.ReviewCard}>
                    <img src={Women} alt="Фото" />
                    <span>
                        Работа с сервисом приносит радость, <br /> потому что высочайший <br /> профессионализм, удобство, <br /> оперативность, и просто приятные <br /> люди!
                    </span>
                    <h4>Александра Селезнева</h4>
                    <h6>фотограф</h6>
                </div>
            </div>
        </section>
    );
}

export default Otzev;
