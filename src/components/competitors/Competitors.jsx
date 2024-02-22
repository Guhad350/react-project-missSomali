// import competitors from '../../assets/competitors.json';
import { useSelector } from 'react-redux';
import Competitor from '../competitor/Competitor';
import styles from './competitors.module.scss';
const Competitors = () => {
  const { competitors } =useSelector((store)=>store.competitor);
  return (
    <div className={styles.competitors_container}>
      <div className={ styles.header_competitors}>
        <span>MissSomalia</span>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nostrum eius, quod dolorem cum quia, praesentium dignissimos asperiores necessitatibus esse odit officia voluptatibus reiciendis eligendi dolorum autem est ullam officiis.
        </p>
      </div>
      <div className={styles.competitors}>
     {
      competitors.map((competitor)=>(
      <Competitor key={competitor.Id} competitor ={competitor}/>
        
      ))
      
     }

      </div>

    </div>
  )
}

export default Competitors