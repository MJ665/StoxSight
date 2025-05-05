// import { PrismaClient } from '@prisma/client'

// console.log("inside the db . ts file")
// const prismaClientSingleton = () => {
//     console.log("prisma client instantiated")
//   return new PrismaClient()
// }

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma


// // Fetch posts from authenticated user 
// // (in /pages/index.tsx)
// export const getServerSideProps = async ({ req }) => {
//   const token = req.headers.AUTHORIZATION
//   // const userId = await getUserId(token)
//   const posts = await prisma.post.findMany({
//     where: {
//       author: { id: userId },
//     },
//   })
//   return { props: { posts } }
// }





import { PrismaClient, Prisma } from "@/generated/prisma"
export  {Prisma,PrismaClient}
