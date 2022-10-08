import { chakra,Stack,FormControl,Input, Select, Button, FormLabel, SimpleGrid, GridItem, FormErrorMessage, FormHelperText } from "@chakra-ui/react"
import { useState } from "react"

const Forms = ()=>{
  return(
    <GridItem
      mt={[5, null, 0]}
      colSpan={{
        md: 2,
      }}
    >
      <chakra.form
        method="POST"
        shadow="base"
        rounded={[null, "md"]}
        overflow={{
          sm: "hidden",
        }}
      >
        <Stack
          px={4}
          py={5}
          p={[null, 6]}
          bg="white"
          _dark={{
            bg: "#141517",
          }}
          spacing={6}
        >
          <SimpleGrid columns={6} spacing={6}>
            <FormControl isRequired as={GridItem} colSpan={[6, 4]}>
              <FormLabel
                htmlFor="company_name"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Company Name
              </FormLabel>
              <Input
                type="text"
                name="company_name"
                id="company_name"
                autoComplete="given-name"
                mt={1}
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired as={GridItem} colSpan={[6, 6]}>
              
              <FormLabel
                htmlFor="first_name"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Website
              </FormLabel>
              <Input
                type="text"
                name="company_name"
                id="company_name"
                autoComplete="given-name"
                mt={1}
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="country"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Country
              </FormLabel>
              <Select
                id="country"
                name="country"
                autoComplete="country"
                placeholder="Select option"
                mt={1}
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                <option>Brunei</option>
                <option>Cambodia</option>
                <option>East Timor</option>
                <option>Laos</option>
                <option>Indonesia</option>
                <option>Malaysia</option>
                <option>Myammar</option>
                <option>Philipines</option>
                <option>Singapore</option>
                <option>Thailand</option>
                <option>Vietnam</option>
              </Select>
            </FormControl>
            <FormControl isRequired as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="category"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Category
              </FormLabel>
              <Input
                id="catgory"
                name="category"
                mt={1}
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
              </Input>
            </FormControl>
            <FormControl as={GridItem} colSpan={[6, 6]}>
              <FormLabel
                htmlFor="email_address"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Your Email Address (Optional)
              </FormLabel>
              <Input
                type="text"
                name="email_address"
                id="email_address"
                autoComplete="email"
                mt={1}
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>
          </SimpleGrid>
          <Button
            type="submit"
            variant="solid"
            bg="#16426E"
            color="white"
            _focus={{
              shadow: "",
            }}
            fontWeight="md"
          >
            Submit
          </Button>
        </Stack>
      </chakra.form>
    </GridItem>

  )
}

export default Forms