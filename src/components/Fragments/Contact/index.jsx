import { motion } from "framer-motion";
import { CONTACT } from "../../../constants";

const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-4xl text-center"
      >
        Get in Touch
      </motion.h1>
      <div className="tracking-tighter text-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.a
          href={`https://wa.me/${CONTACT.phoneNo}`}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="block my-4 cursor-pointer"
          target="_blank"
        >
          {CONTACT.phoneNo}
        </motion.a>
        <a
          href={`mailto:${CONTACT.email}`}
          target="_blank"
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
