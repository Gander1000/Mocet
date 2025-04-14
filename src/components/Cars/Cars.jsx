import scss from "./Cars.module.scss";


function Cars (){
    return(
        <section className={scss.Cars}>
            <h1>Выберите продукт</h1>
            <p>Подберите страховой продукт, который наилучшим образом <br /> подойдёт именно Вам</p>
            <div className={scss.ret}>
                <p>ОСАГО</p>
                <span>от 2890 ₽</span>
                <button>
                Заказать
                </button>
            </div >
            <div className={scss.ret}>
                <p>КАСКО</p>
                <span>от 12 690 ₽</span>
                <button>
                Заказать
                </button>
            </div>
            <div className={scss.ret}>
                <p>Защита стёкол</p>
                <span>1 990 ₽</span>
                <button>
                Заказать
                </button>
            </div>
            <div className={scss.ret}>
                <p>Страхование жизни</p>
                <span>450 ₽ 890 ₽</span>
                <button>
                Заказать
                </button>
            </div>

        </section>
    );
}

export default Cars