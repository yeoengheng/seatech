import { Button, Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import Forms from "./forms";

// to open up forms use onClick="{onOpen}"

const Submit = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const goToEmail = ()=>{
        location.href="mailto:enghengyeo12@hotmail.com"
    }
    return(
        <>
        <Button color={"white"} bg={"#16426E"} size="md" onClick={goToEmail}>
            Contact Us
        </Button>
        {/* <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay></ModalOverlay>
                <ModalContent>
                <Forms></Forms>     
                </ModalContent>
        </Modal> */}
        
        </>
    )
}

export default Submit
