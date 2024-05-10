import { doSignIn } from "../actions";

export default function Signin() {
    return (
        <>
            <form action={doSignIn}>
                <button type="submit" className="bg-orange-400 p-1 rounded-md m-1">
                    Sign in with google
                </button>
            </form>
        </>
    );
}