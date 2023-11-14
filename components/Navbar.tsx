import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";



const Navbar = () => {
    return (
        <nav className="bg-fuchsia-900 border-2 border-fuchsia-800 flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/Reve_Logo.png" alt="logo" width={79} height={79}/>
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <Image
                src="/menu.png"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                />
        </nav>
    )
}

export default Navbar