import {MdHowToVote} from "react-icons/md";
import styles from './competitor.module.scss';
import { useDispatch } from "react-redux";
import { handleModal } from "../../features/modal/modalSlice";
import { setCurrentCompetitor } from "../../features/competitors/competitorSlice";
const Competitor = ({competitor}) => {
  const backgroundStyle={
    wiidth:"100%",
    // height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
  };
  const dispatch=useDispatch();
  const voteNow=()=>{
    dispatch(setCurrentCompetitor(competitor));
    dispatch(handleModal());


  }
  return (
    <div className={styles.competitor} style={backgroundStyle}>
    <div className={styles.info}>
        <span className={styles.name}>
          {competitor.FirstName+ "" + competitor.LastName}
        </span>  
        <span className={styles.state}> 
        {competitor.RepresentingState}
        </span>
        <span className={styles.vote_count}> Total votes:{competitor.NumberofVotes}</span>
        <div className={ styles.vote} onClick={voteNow}>
     <MdHowToVote className={styles.vote_icon}/>
    </div>
    </div>
    </div>
   
  )
}

export default Competitor