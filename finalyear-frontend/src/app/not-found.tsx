import Link from "next/link";
export default function NotFound(){
    return (
        <div>
            <h2>Page could not be found</h2>
            <p>Try Again</p>
            <Link href="/">Return Home</Link>
        </div>
    );
}