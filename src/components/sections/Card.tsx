import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const FeedbackContainer: React.FC = () => {
  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.5 } },
  };

  const bounceVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.div className="bg-black-100 mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}>
        <motion.div className="flex flex-col lg:flex-row gap-10" initial="hidden" animate="visible" variants={slideInVariants}>
          <div className="w-full lg:w-1/2">
            <p className="text-[24px] font-bold text-white">
              "When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous and surly"
            </p>
            <p className="text-[18px] tracking-wider text-white">
              They are like this because they can't tell good from evil. But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own - not of the same blood and birth, but the same mind, and possessing a share of the divine. And so none of them can hurt me. No one can implicate me in ugliness. Nor can I feel angry at my relative, or hate him. We were born to work together like feet, hands and eyes, like the two rows of teeth, upper and lower. To obstruct each other is unnatural. To feel anger at someone, to turn your back on him: these are unnatural.
            </p>
            <div className="mt-7 flex flex-col items-center lg:items-start">
              <p className="text-[16px] font-medium text-white">
                <span className="blue-text-gradient">@</span> Muhammad Abid A S
              </p>
              <p className="text-secondary mt-1 text-[12px]">Tech Enthusiast</p>
            </div>
            <div className="flex items-center mt-8">
              {[{ src: 'insta.png', alt: 'Instagram', link: 'https://www.instagram.com/bidsykr/' },
                { src: 'medi.png', alt: 'Medium', link: 'https://medium.com/@sonofmarcus' },
                { src: 'vk.png', alt: 'VKontakte', link: 'https://vk.com/bidsyakur' },
                { src: 'tele.png', alt: 'Telegram', link: 'https://t.me/bidsykr' }].map((logo, index) => (
                  <a key={index} href={logo.link} target="_blank" rel="noopener noreferrer">
                    <motion.img src={logo.src} alt={logo.alt} className="w-8 h-8 ml-2" />
                  </a>
                ))}
            </div>
          </div>
          <motion.div className="w-full lg:w-1/2 flex justify-end" initial="hidden" animate="visible" variants={bounceVariants}>
            <motion.img src="abid.png" alt="" className="mt-[-200px] ml-4" style={{ maxWidth: "100%", height: "auto", marginTop: "-60px" }} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeedbackContainer;
