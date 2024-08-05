import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
const ProductCard = () => {

    const [products, setProducts] = useState([]);

    const handleProductList = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=10');
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
    }

    useEffect(() => {
        handleProductList();
    }, [])

    return (
        <Card className="bg-box-color border-none">
            <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="border-b-gray-700">
                            <TableHead className="text-white">Image</TableHead>
                            <TableHead className="text-white">Id</TableHead>
                            <TableHead className="text-white">Name</TableHead>
                            <TableHead className="text-white">Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            products.length > 0 ?
                                products.map((product) => 
                                <TableRow key={product.id} className="border-b-gray-700">
                                    <TableCell className=" sm:table-cell">
                                        <img
                                            alt="Product image"
                                            className=" object-cover"
                                            height="30"
                                            src={product.thumbnail}
                                            width="30"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">{product.sku}</TableCell>
                                    <TableCell className="font-medium">{product.title}</TableCell>
                                    <TableCell className=" md:table-cell">{product.price}</TableCell>
                                </TableRow>
                                )

                                :
                                null
                        }

                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default ProductCard