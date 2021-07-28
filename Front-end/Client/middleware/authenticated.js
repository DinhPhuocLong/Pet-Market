
export default function(context) {
    const { redirect, $auth } = context;
    if (!$auth.loggedIn) {
        redirect('/dashboard/login');
    } 
}