import{TbMessage} from 'react-icons/tb';
import{FaPhoneAlt} from 'react-icons/fa';
import styles from "./Button.module.css";
const Button = () => {

  const onViaCall =()=>{
    console.log("I am here to help you via call");

  }
  const onViaChat =()=>{
    console.log("I am here to help you via chat");
  }
   
   
  return (
    <div className={styles.top_button}>
    <button onClick={onViaChat} className={styles.btn1}>
        <TbMessage fontSize="25px" />
        VIA CHAT
   </button>
      <button onClick={onViaCall}  className={styles.btn2}>
      <FaPhoneAlt fontSize="25px" />
      VIA CAll
 </button>
 </div>
  );
};

export default Button;
