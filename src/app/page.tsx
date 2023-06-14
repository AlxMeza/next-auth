'use client'

// import { getSession } from 'next-auth/react'
// import { useEffect, useState } from 'react'

// export default function Home() {
//   const [ user, setUser ] = useState<{[key: string]: (string | null | undefined)}>({})

//   useEffect(() => {
//     (async () => {
//       const session = await getSession()
//       if(session) if(session.user) setUser(session.user)
//     })()
//   }, [])

//   return (
//     <main className="m-10">
//       <h1 className='text-center text-3xl font-semibold'>Home Page</h1>
//       {
//         Object.keys(user).length > 0 && <div className='border mt-10 px-4 py-1 w-fit mx-10 rounded-lg border-gray-600 border-2 bg-gradient-to-r from-gray-700 to-indigo-800'>
//           <div className='py-4 px-5 flex'>
//             <img src={user.image ? user.image : 'nextAvatar.svg'} alt="avatar" className='rounded-full w-[5rem]' />
//             <p className='place-self-center mx-10 font-semibold text-xl'>{user.name}</p>
//           </div>
//         </div>
//       }
//     </main>
//   )
// }


// import { GetServerSideProps, InferGetServerSidePropsType } from "next"
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "./api/auth/[...nextauth]/route"

// export const getServerSideProps: GetServerSideProps = async( context ) => {
//   const session = await getServerSession( context.req, context.res, authOptions )
//   return { props: { session: session } }
// }

// export default function Home( {session}: InferGetServerSidePropsType<typeof getServerSideProps> ){
//   console.log(session)
//   return(
//     <main className="m-10">
//       <h1 className='text-center text-3xl font-semibold'>Home Page</h1>
//     </main>
//   )
// }


import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if(status === 'unauthenticated') router.push('/login')

  return (
    <>
      <nav className='bg-gray-500 py-2 px-5 grid grid-cols-2'>
        <h1 className='font-semibold text-lg'><span className='mr-2'>🚀</span> App</h1>
        <button className='justify-self-end border py-1 px-5 rounded-lg bg-black border-teal-200 text-teal-200 hover:bg-gray-900' onClick={() => signOut()}>SignOut</button>
      </nav>
      <main className="m-10">
        <h1 className='text-center text-3xl font-semibold'>Home Page</h1>
        {
          status !== 'loading' ? <div className='border mt-10 px-4 py-1 w-fit mx-10 rounded-lg border-gray-600 border-2 bg-gradient-to-r from-gray-700 to-indigo-800'>
            <div className='py-4 px-5 flex'>
              {
                session && session.user ? <>
                  <img src={session.user.image ? session.user.image : 'nextAvatar.svg'} alt="avatar" className='rounded-full w-[5rem]' />
                  <p className='place-self-center mx-10 font-semibold text-xl'>{session.user.name}</p>
                </> : <p>No data to show</p>
              }
            </div> 
          </div> : <div> Cargando ...</div>
        }
      </main>
    </>
  )
}
