import scss from "./Heder.module.scss"


const Heder = () => {
    return(
        <section className={scss.header}>
        <h1>Страхование онлайн</h1>
            <article>
            <nav>
                <a href="">О компании</a>
                <a href="">Новости</a>
                <a href="">Помощь</a>
                <a href="">Отзывы</a>
                <a href="">Контакты</a>
            </nav>
            <p>Служба продаж <span>+996 700 700 700</span></p>
            <button>Заказать звонок</button>
            </article>
    </section>
    );
}

export default Heder