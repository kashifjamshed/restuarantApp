import Link from "next/link";
import logoImg from '@/assets/logo.png'
export default function MainHeader(){

    return(
        <header>
            <Link href= "/"></Link>
            <img src = {logoImg.src}></img>

            <nav>
                <ul>
                    <li>
                        <Link href = "/meals">Browse Meals</Link>

                    </li>
                    <li>
                    <Link href = "/community">Foodies Community Community</Link>

                    </li>
                </ul>
            </nav>
        </header>
    )
}