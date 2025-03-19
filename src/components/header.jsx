import { Link, useLocation } from "react-router-dom";

export default function Header({ title }) {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(x => x);

    return (
        <div className="relative w-full h-60 bg-blue-500 text-white flex flex-col md:flex-row items-center justify-evenly">
            <div className="flex flex-col gap-5 items-center">
                <h1 className=" text-2xl md:text-4xl text-center font-bold">{title}</h1>
                <p>
                    <Link to="/" className="">Home</Link>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        return (
                            <span key={index}>
                                {" / "}
                                <Link to={routeTo} className="">
                                    {decodeURIComponent(name)}
                                </Link>
                            </span>
                        );
                    })}
                </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-[#e9e9e9] clip-sharp"></div>
        </div>
    );
}
