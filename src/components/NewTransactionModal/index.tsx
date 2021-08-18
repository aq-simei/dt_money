import Modal from 'react-modal';
import { Container } from './styles';



interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    return(
        <Modal 
          isOpen = {isOpen}
          onRequestClose = {onRequestClose}
        >
            <Container>
                <h2>Cadastrar transaçao</h2>
                <input placeholder="Título"/>
                <input placeholder="Preço"/>
                <button>

                </button>
                <button>

                </button>

                <input placeholder="Categoria"/>
                
                <button type="submit">
                    Cadastrar 
                </button>



            </Container> 

      </Modal>
    )

}