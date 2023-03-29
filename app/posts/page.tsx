import Link from 'next/link';

export default function Posts() {
    return (<div> Welcome to the posts page! <Link href={'/posts-2'}> Click here </Link> </div>)
}