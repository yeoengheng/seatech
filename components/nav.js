import { Text, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, Stack, Image } from "@chakra-ui/react";

// Need Logo + Menu Options + Submit button

const Nav = ()=>{
    return(
        <>
        <Stack direction='row' alignItems="center">
            <Image boxSize={50} src ="https://i.ibb.co/ZxsqGcK/image-removebg-preview.png" alt="seatech"/>
            <Breadcrumb p={5} bg="grey.100" separator=''>
                <BreadcrumbItem>
                    <BreadcrumbLink fontWeight="bold" href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink fontWeight="bold" href="discounts">Discounts</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Button bg="blue.300" fontWeight="bold" color="white">Submit Your Company</Button>
        </Stack>
        <Divider></Divider>
        </>
    )
}

export default Nav