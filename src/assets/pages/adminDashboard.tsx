// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/AhGtBaPQjCc
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { CardTitle, CardDescription, Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableCell,
//   TableBody,
//   Table,
// } from "@/components/ui/table";

// export default function Component() {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <aside className="w-64 bg-white">
//         <nav className="flex flex-col p-4 space-y-4">
//           <Button className="bg-red-500 text-white">New Order</Button>
//           <Link className="block p-2 rounded hover:bg-gray-200" href="#">
//             Dashboard
//           </Link>
//           <Link className="block p-2 rounded hover:bg-gray-200" href="#">
//             Orders
//           </Link>
//           <Link className="block p-2 rounded hover:bg-gray-200" href="#">
//             Menu
//           </Link>
//           <Link className="block p-2 rounded hover:bg-gray-200" href="#">
//             Customers
//           </Link>
//           <Link className="block p-2 rounded hover:bg-gray-200" href="#">
//             Reports
//           </Link>
//           <Link className="block p-2 rounded hover:bg-gray-200" href="#">
//             Settings
//           </Link>
//           <Link className="block p-2 rounded hover:bg-gray-200" href="#">
//             Help
//           </Link>
//           <Link className="block p-2 rounded hover:bg-gray-200" href="#">
//             Support
//           </Link>
//         </nav>
//       </aside>
//       <main className="flex-1 p-8">
//         <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
//         <div className="grid grid-cols-4 gap-6 mb-8">
//           <Card className="bg-white p-4 shadow rounded">
//             <CardTitle>Total Sales</CardTitle>
//             <CardDescription className="text-3xl font-semibold">
//               $2,543.00
//             </CardDescription>
//             <Badge className="mt-2" variant="secondary">
//               +5%
//             </Badge>
//           </Card>
//           <Card className="bg-white p-4 shadow rounded">
//             <CardTitle>Average Order</CardTitle>
//             <CardDescription className="text-3xl font-semibold">
//               $45.00
//             </CardDescription>
//             <Badge className="mt-2" variant="secondary">
//               +3%
//             </Badge>
//           </Card>
//           <Card className="bg-white p-4 shadow rounded">
//             <CardTitle>New Customers</CardTitle>
//             <CardDescription className="text-3xl font-semibold">
//               12
//             </CardDescription>
//             <Badge className="mt-2" variant="secondary">
//               -2%
//             </Badge>
//           </Card>
//           <Card className="bg-white p-4 shadow rounded">
//             <CardTitle>New Orders</CardTitle>
//             <CardDescription className="text-3xl font-semibold">
//               29
//             </CardDescription>
//             <Badge className="mt-2" variant="secondary">
//               +8%
//             </Badge>
//           </Card>
//         </div>
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Order</TableHead>
//                 <TableHead>Customer</TableHead>
//                 <TableHead>Total</TableHead>
//                 <TableHead>Status</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow>
//                 <TableCell>#1234</TableCell>
//                 <TableCell>Stephanie W.</TableCell>
//                 <TableCell>$65.00</TableCell>
//                 <TableCell>
//                   <Badge variant="default">Delivered</Badge>
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>#1235</TableCell>
//                 <TableCell>Bryan W.</TableCell>
//                 <TableCell>$80.00</TableCell>
//                 <TableCell>
//                   <Badge variant="default">In Progress</Badge>
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>#1236</TableCell>
//                 <TableCell>Marie P.</TableCell>
//                 <TableCell>$50.00</TableCell>
//                 <TableCell>
//                   <Badge variant="default">Delivered</Badge>
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>#1237</TableCell>
//                 <TableCell>Sam R.</TableCell>
//                 <TableCell>$70.00</TableCell>
//                 <TableCell>
//                   <Badge variant="default">Ready for Pickup</Badge>
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>#1238</TableCell>
//                 <TableCell>Amanda H.</TableCell>
//                 <TableCell>$90.00</TableCell>
//                 <TableCell>
//                   <Badge variant="default">In Progress</Badge>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Top Selling Items</h2>
//           <div className="grid grid-cols-4 gap-6">
//             <Card className="bg-white p-4 shadow rounded">
//               <img
//                 alt="Spicy Tuna Roll"
//                 className="w-full h-auto mb-2"
//                 height="100"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "100/100",
//                   objectFit: "cover",
//                 }}
//                 width="100"
//               />
//               <CardTitle>Spicy Tuna Roll</CardTitle>
//               <CardDescription>$15.00 - 30 orders</CardDescription>
//             </Card>
//             <Card className="bg-white p-4 shadow rounded">
//               <img
//                 alt="Chicken Tikka Masala"
//                 className="w-full h-auto mb-2"
//                 height="100"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "100/100",
//                   objectFit: "cover",
//                 }}
//                 width="100"
//               />
//               <CardTitle>Chicken Tikka Masala</CardTitle>
//               <CardDescription>$18.00 - 28 orders</CardDescription>
//             </Card>
//             <Card className="bg-white p-4 shadow rounded">
//               <img
//                 alt="Beef Pho"
//                 className="w-full h-auto mb-2"
//                 height="100"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "100/100",
//                   objectFit: "cover",
//                 }}
//                 width="100"
//               />
//               <CardTitle>Beef Pho</CardTitle>
//               <CardDescription>$14.00 - 25 orders</CardDescription>
//             </Card>
//             <Card className="bg-white p-4 shadow rounded">
//               <img
//                 alt="Margherita Pizza"
//                 className="w-full h-auto mb-2"
//                 height="100"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "100/100",
//                   objectFit: "cover",
//                 }}
//                 width="100"
//               />
//               <CardTitle>Margherita Pizza</CardTitle>
//               <CardDescription>$20.00 - 22 orders</CardDescription>
//             </Card>
//             <Card className="bg-white p-4 shadow rounded">
//               <img
//                 alt="Vegan Burrito Bowl"
//                 className="w-full h-auto mb-2"
//                 height="100"
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "100/100",
//                   objectFit: "cover",
//                 }}
//                 width="100"
//               />
//               <CardTitle>Vegan Burrito Bowl</CardTitle>
//               <CardDescription>$12.00 - 20 orders</CardDescription>
//             </Card>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
