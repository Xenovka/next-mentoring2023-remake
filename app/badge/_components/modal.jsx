import styles from "@/public/styles/about.module.css";

export default function Modal({ isVisible, setStage, stage, children, bg }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20">
            <div
                className={`${styles.modal} bg-[#153483] w-[70vw] h-[90vh] flex flex-col justify-center items-center text-white overflow-x-hidden hidescroll`}
            >
                <div
                    className={`w-full h-full overflow-scroll overflow-x-hidden hidescroll px-[5vw] py-[2.5vh] md:px-[5vw] md:py-[5vh] ${bg} bg-no-repeat bg-cover bg-local relative top-0`}
                >
                    <div>{children}</div>
                    <button
                        className={`${styles.gradienbackmodal} w-[25dvw] md:w-[14dvw] h-[7dvh] text-[4dvw] md:text-[1.2dvw] font-semibold fixed bottom-10 left-1/2 -translate-x-2/4 mb-2 ${stage === 3 && "hidden"}`}
                        onClick={() => {
                            console.log(stage)
                            if (stage < 4 || stage > 7) {
                                setStage(stage + 1)
                            } else {
                                setStage(8)
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
