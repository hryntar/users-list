import { useGetAllUsersQuery } from "../api/apiSlice";

const UsersList = () => {
   const { data: users, error, isLoading, isError, isSuccess, refetch } = useGetAllUsersQuery(); 

   let content;
   if (isLoading) {
      content = <p>Loading...</p>;
   } else if (isError) {
      console.error(error);
      content = <><p>Something went wrong(</p><button onClick={() => refetch()}>Refresh</button></>;
   } else if (isSuccess) {
      content = (
        <>
            <ol>
               {users?.map((user) => (
                  <li key={user.id}>
                     <b>Id:</b> {user.id} <br />
                     <b>Username:</b> {user.username} <br />
                     <b>Email:</b> {user.email} <br />
                     <b>Password:</b> {user.password} <br />
                     <b>Age:</b> {user.age} <br />
                  </li>
               ))}
            </ol> 
            <button onClick={() => refetch()}>Refresh</button>
        </>
      );
   }

   return <>{content}</>;
};

export default UsersList;
