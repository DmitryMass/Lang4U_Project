import useActions from '../../Store/hooks-store/actions';
import useTypedSelector from '../../Store/hooks-store/useTypedSelector';

const useModal = () => {
  const { showModal, handleCancel } = useActions();
  const { modal: isModalOpen } = useTypedSelector((state) => state.modal);
  return {
    showModal,
    handleCancel,
    isModalOpen,
  };
};

export default useModal;
