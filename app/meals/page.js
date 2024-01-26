import Link from "next/link";

export default function Meal() {
    return (<main>
        <p1> This is Meal Section</p1>

        <p>
            <Link href ="/meals/chicken"> Chicken Meal</Link>
            <Link href ="/meals/mutton"> Mutton Meal</Link>
        </p>
        </main>
        );
}
