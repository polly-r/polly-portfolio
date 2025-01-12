import Link from "next/link";
import { Button } from "./ui/button";

//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py12 text-white ">
            <div className="container mx-auto flex justify-between items-center">
                {/* {logo} */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Polly<span className="text-accent">.</span> 
                    </h1>
                </Link>

                {/* desktop NAV & hire me button innit*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                    <Button>Contact Me</Button>
                    </Link>
                </div>

                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                
                </div>
            </div>
        </header>
    );
};

export default Header;