import { useEffect, useRef, useState, MouseEvent } from "react";
import { motion, useSpring } from "framer-motion";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";

const CreditCard = ({ type = "Visa" }: { type?: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateXaxis, setRotateXaxis] = useState(0);
  const [rotateYaxis, setRotateYaxis] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    isDragging.current = false;
    startX.current = event.clientX;
    startY.current = event.clientY;
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    // Determine if dragging occurred
    const dx = Math.abs(event.clientX - startX.current);
    const dy = Math.abs(event.clientY - startY.current);
    if (dx > 5 || dy > 5) isDragging.current = true;

    const elementRect = ref.current.getBoundingClientRect();
    const elementCenterX = elementRect.width / 2;
    const elementCenterY = elementRect.height / 2;
    const mouseX = event.clientY - elementRect.y - elementCenterY;
    const mouseY = event.clientX - elementRect.x - elementCenterX;
    setRotateXaxis((mouseX / elementRect.width) * 20);
    setRotateYaxis((mouseY / elementRect.height) * 20);
  };

  const handleMouseEnd = () => {
    setRotateXaxis(0);
    setRotateYaxis(0);
  };

  const handleClick = () => {
    if (!isDragging.current) {
      setIsFlipped((prevState) => !prevState);
    }
  };

  const dx = useSpring(0, { stiffness: 300, damping: 40 });
  const dy = useSpring(0, { stiffness: 300, damping: 40 });

  useEffect(() => {
    dx.set(-rotateXaxis);
    dy.set(rotateYaxis);
  }, [rotateXaxis, rotateYaxis]);

  return (
    <motion.div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseEnd}
      onMouseLeave={handleMouseEnd}
      onClick={handleClick}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
      className="w-[265px] lg:w-[350px] h-[200px] lg:h-[235px]"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 40 }}
        style={{
          width: "100%",
          height: "100%",
          rotateX: dx,
          rotateY: dy,
        }}
      >
        <div
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            animate={{ rotateY: isFlipped ? -180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 40 }}
            style={{
              width: "100%",
              height: "100%",
              zIndex: isFlipped ? 0 : 1,
              backfaceVisibility: "hidden",
              position: "absolute",
            }}
          >
            <CardFront type={type} />
          </motion.div>
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: isFlipped ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 300, damping: 40 }}
            style={{
              width: "100%",
              height: "100%",
              zIndex: isFlipped ? 1 : 0,
              backfaceVisibility: "hidden",
              position: "absolute",
            }}
          >
            <CardBack type={type} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CreditCard;
