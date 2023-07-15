import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
     <h1>CONTACT US</h1> 
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
       Tenetur eius ratione vel molestias ea,
      veritatis eos consequuntur quasi, 
      vitae ipsa reiciendis dolor sint quam iure itaque cumque blanditiis!
       </p>
    </div>
  );
};

export default ContactHeader;
