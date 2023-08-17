import styles from "@/public/styles/about.module.css";

export default function ContactModal({ isVisible, onClose, children, bg }) {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20`}
    >
      <div
        className={`${styles.modal} bg-gradient-to-t from-[#06122F] to-[#153483] to-60% w-[70vw] h-[90vh] flex flex-col justify-center items-center text-white overflow-x-hidden hidescroll`}
      >
        <div
          className={`w-full h-full overflow-scroll overflow-x-hidden hidescroll py-[5vh] ${bg} bg-no-repeat bg-cover bg-local relative top-0`}
        >
          <div>{children}</div>
          <button
            className={`${styles.gradienbackmodal} w-[25dvw] md:w-[14dvw] h-[7dvh] text-[7dvw] md:text-[1.2dvw] font-semibold fixed bottom-20 left-1/2 -translate-x-2/4`}
            onClick={() => onClose()}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
