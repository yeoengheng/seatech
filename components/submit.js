import { Button, Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import Forms from "./forms";

const Submit = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return(
        <>
        <Button color={"white"} bg={"#16426E"} size="sm" onClick={onOpen}>
            Submit Company
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay></ModalOverlay>
                <ModalContent>
                <Forms></Forms>     
                </ModalContent>
        </Modal>
        
        </>
    )
}

export default Submit
