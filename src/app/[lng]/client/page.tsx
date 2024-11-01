import { auth } from 'auth';

export default async function ClientPage() {
    const session = await auth();
    return (
        <div className={'client-page-wrapper'}>
            <h1>Client Page</h1>
            <div>昵称{session?.user?.name}</div>
            <div>邮箱{session?.user?.email}</div>
            <image src={session?.user?.image}></image>
        </div>
    );
}
