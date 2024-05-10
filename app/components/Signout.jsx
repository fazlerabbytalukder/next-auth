import { doSignout } from "../actions";

export default function Signout() {
    return (
        <>
            <form action={doSignout}>
                <button type="submit">Sign Out</button>
            </form>
        </>
    );
}