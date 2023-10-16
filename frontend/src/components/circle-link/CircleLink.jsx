import styles from './style.module.scss'

export default function CircleLink(props){
    return(
        <a href={props.link}>
            <img src={props.image} alt={props.alt}/>
        </a>
    )
}