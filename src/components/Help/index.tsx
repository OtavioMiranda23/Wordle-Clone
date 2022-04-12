import Modal from "react-modal";
import { Container, Content } from "./styles";


interface IHelp {
    isHelpModalOpen: boolean;
    closeModal: ()=> void;
    children?: JSX.Element | JSX.Element[]
}

export default function Help(props:IHelp){

    return (
        <Container>
            <Content>
                <Modal
                isOpen={true}
                // onRequestClose={props.closeModal()}
                > 
                    <h1>Help</h1>
                    {props.children}
                </Modal>
            </Content>
        </Container>
    );
};