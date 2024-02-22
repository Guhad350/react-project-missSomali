import Modal from 'react-modal';
import React from 'react'
import styles from './vote.module.scss';
import { AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { useSelector, useDispatch} from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { addVoteToCompetitor, decreaseVote, increaseVote, resetState } from '../../features/competitors/competitorSlice';
const customStyles = {
content: {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
   },
 };

 Modal.setAppElement('#root');
  export const VoteModal = () => {
    const dispatch = useDispatch();
   let subtitle;
 
 const { isOpen }  =   useSelector((store) => store.modal);
 const {currentCompetitor,voteCount}  =useSelector((store) => store.competitor);
    function closeModal() {
      dispatch(handleModal());
              }
      {/*solving problem photo*/}

      if(!currentCompetitor) return;

              const backgroundStyle={
              wiidth:"100%",
               height:"500px",
              background: `linear-gradient(0deg,#29ae65b2,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),
              url('${currentCompetitor.Photo}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              boderBottomRightRadius:"10",
               }; 
        const handleSubmit=(e)=>{
          e.preventDefault();
          dispatch(addVoteToCompetitor(currentCompetitor.Id));
          dispatch(resetState());
          closeModal();

        }
  return (
    <div> 
    {/* impplementing handlemodal Function */} 

     <button onClick={()=>dispatch(handleModal())}>Open Modal</button>          
     <Modal
        isOpen ={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Exam ple Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}>
        <div className={styles.modal_container}>
          <div className={styles.competitor_info}>
            <div style={backgroundStyle}></div>
            <div className={styles.bio}>
              <div className={styles.divider}>
                <label htmlFor="">name</label>
                <span>{currentCompetitor.FirstName +  "  " +  currentCompetitor.MiddleName}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">state</label>
                <span>{currentCompetitor.RepresentingState}</span>
              </div>
              <div className={styles.divider}> 
                <label htmlFor="">{currentCompetitor.EmploymentorSchool}</label>
                <span>{currentCompetitor.PersonalBackground}</span>
              </div>
            </div>
          </div>
           {/*voting;*/}
           <div className={styles.vote_container}>
            <div className={styles.vot_count}>
            <span>purchase votes</span>
            <div className={styles.vot_controls}>
              <button type='button'
              onClick={()=>dispatch(decreaseVote())}
              >
                <AiOutlineMinus className={styles.icon} />
              </button>
              <span>{voteCount}</span>
              <button type='button'
              onClick={() =>dispatch(increaseVote())}
              
              >
                <AiOutlinePlus className={styles.icon} />
              </button>
            </div>
            </div>
          <form onSubmit={handleSubmit}>
            <span>Pay with EVC,Zaad,Sahal</span>
            <input type="number" 
            placeholder='Enter your number'
            className={styles.form_control}
            />
            <button type='submit'>Vote Now</button>
          </form>
           </div>
        </div>
        </Modal> 
    </div>
  )
}
