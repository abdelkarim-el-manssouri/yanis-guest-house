import { motion } from "framer-motion";

const GalleryModal = ({ selected, setSelected }) => {
  if (!selected) {
    return <></>;
  }
  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-[700] cursor-pointer backdrop-blur-md overflow-y-scroll lg:w-[calc(100%+2.5rem)]"
    >
      <div className="size-9 rounded-full bg-black/30 right-12 top-4 absolute grid place-content-center">
        <span className="w-1/2 h-0.5 bg-background rounded rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        <span className="w-1/2 h-0.5 bg-background rounded -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default"
      >
        <motion.div layoutId={`image-${selected}`}>
          <img src={selected} alt={selected} />
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryModal;
