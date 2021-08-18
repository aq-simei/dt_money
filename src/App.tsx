import Modal from 'react-modal';
import {GlobalStyle} from './styles/global'
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';


Modal.setAppElement('#root');

export function App() {
  const [isNewtransactionModalOpen, setIsNewtransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewtransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewtransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal
        isOpen = {isNewtransactionModalOpen}
        onRequestClose = {handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </>
  );
}