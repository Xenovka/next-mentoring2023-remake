import styles from "@/public/styles/about.module.css";

export default function Modal({ isVisible, setStage, stage, children, bg }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20">
      <div
        className={`${styles.modal} bg-gradient-to-t from-[#06122F]/50 to-[#004BEF]/50 to-100% w-[70vw] h-[90vh] flex flex-col justify-center items-center text-white overflow-x-hidden hidescroll`}
      >
        <div
          className={`w-full h-full flex flex-col justify-evenly items-center overflow-scroll overflow-x-hidden hidescroll`}
        >
          <div className="w-full">{children}</div>
          <button
            className={`${styles.gradienbackmodal} 
            w-60 h-10 text-base font-semibold flex justify-center items-center
            ${stage === 3 || (stage >= 9 && "hidden")}`}
            onClick={() => {
              // console.log(stage);
              if (stage < 4 || stage > 7) {
                setStage(stage + 1);
              } else {
                setStage(8);
              }
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
