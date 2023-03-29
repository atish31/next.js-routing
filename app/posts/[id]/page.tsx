import { useRouter } from 'next/navigation';

export default function getPost() {
    const router = useRouter();
    console.log(router);
    return (<div>Post with id: </div>)
}