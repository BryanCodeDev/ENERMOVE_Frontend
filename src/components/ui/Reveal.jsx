import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, className = '', delay = 0, as: Component = 'div', ...props }) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motion.create(Component);
  const animationProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-70px' },
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <MotionComponent
      className={className}
      {...animationProps}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
