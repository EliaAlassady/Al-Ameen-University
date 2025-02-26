export default function AboutItem({ text, img }) {
    return (
        <div className=" flex flex-col xl:flex-row items-center justify-evenly mt-10">
            <p className=" max-w-200 text-xl text-right text-[#202020] p-10">
                {text}
            </p>
            <img src={img} alt="" className="px-10 xl:px-0 rounded-2xl w-150 h-50 sm:h-90 " />
        </div>
    )
}