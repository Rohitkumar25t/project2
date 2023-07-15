import { useState } from 'react';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';

const ContactForm = () => {

  const [name, setName] = useState("rohit");
  const [email, setEmail] = useState("abc@gmail.com");
  const [text, setText] = useState("hello");

  

  const onSubmit =(event)=>{ 
    event.preventDefault();
   setName(event.target[0].value);
   setEmail(event.target[1].value);
   setText(event.target[2].value);

   

  };
  

  return (
  <section className={styles.container}>
   <div className={styles.contact_form}>
    <Button/>
    <form onSubmit={onSubmit}>
  <div className={styles.form_container}>
  {/* <label htmlFor="name">Name</label> */}
      <input type="text"  name="name"  placeholder='Enter Your Name'/>

      <input type="email"  name="name"  placeholder='Enter Your Email'/>
      
      <textarea name="text"  cols="" rows="" placeholder='Enter Some Text Here'/>
      
       <button className={styles.submit_btn}>SUBMIT HERE</button>
  </div>
  <div>
    {name + "  " + email + "   "+ text + "   "}
  </div>
    </form>
   
   </div>
   <div className={styles.contact_img}>
    <img src="./imgs/phn.jpg" alt="phone logo" />
   </div>

  </section> 
  );

};

export default ContactForm;
