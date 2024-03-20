import image from '../components/ufoReact.jpg';
import style from './Hero.module.css';

function Hero() {
    return (
    <div className={style.container}>
        <div className={style.leftContent}>
            <h1 className={style.title}>404</h1>
            <p className={style.text}>Page not found</p>
            <a className={style.link} href="/">Go home</a>
        </div>
        <div className={style.rightContent}>
            <img className={style.img} src={image} alt=""/>
        </div>
    </div>
    )
};


export { Hero };