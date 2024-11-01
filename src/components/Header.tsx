import { signIn, signOut, auth } from 'auth';

function SignIn({ provider, ...props }) {
    return (
        <form
            action={async () => {
                'use server';
                await signIn(provider);
            }}
        >
            <button className={'rounded-3xl bg-primary px-4 py-2 text-white'} {...props}>
                Sign In
            </button>
        </form>
    );
}

function SignOut(props) {
    return (
        <form
            action={async () => {
                'use server';
                await signOut();
            }}
        >
            <button {...props}>Sign Out</button>
        </form>
    );
}

export default async function Header() {
    const session = await auth();
    console.log(session, 'session');
    return (
        <header style={{ display: 'flex', justifyContent: 'space-around' }}>
            {session?.user ? (
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    {session?.user.name}
                    <SignOut />
                </span>
            ) : (
                <SignIn />
            )}
        </header>
    );
}
