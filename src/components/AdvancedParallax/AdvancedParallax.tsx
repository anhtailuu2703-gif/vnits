import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  bg: string;
  speed?: number;
  children?: React.ReactNode;
};

const AdvancedParallax: React.FC<Props> = ({
  bg,
  speed = 0.3,
  children,
}) => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 300 * speed]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section className="section">
      <motion.div
        className="bg"
        style={{
          backgroundImage: `url(${bg})`,
          y,
          scale,
          opacity,
        }}
      />

      <motion.div
        className="content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AdvancedParallax;