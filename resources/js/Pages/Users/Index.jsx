import Table from '@/Components/Table';
import AuthenticationLayout from '@/Layouts/AuthenticatedLayout';


export default function Index({ auth, mustVerifyEmail, status,users }){

    const columns = [
        'id','name','email'
    ]

    return (
        <>
            <AuthenticationLayout
             user={auth.user}
             header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Users</h2>}
            >
                <Table title="Users" data={users} columns={columns} /> 
            </AuthenticationLayout>
        </>
    )
}
// title dedigimiz sey users