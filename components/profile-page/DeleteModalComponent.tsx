import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import Button from "../ButtonComponent";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface DeleteModalProps {
  openModal: boolean;
  setOpenModal: any;
  superheroNickname: string;
  handleDelete: () => Promise<void>;
  isLoading: boolean;
}

const DeleteModal = ({
  openModal,
  superheroNickname,
  handleDelete,
  setOpenModal,
  isLoading,
}: DeleteModalProps) => {
  return (
    <Modal
      show={openModal}
      size="xl"
      popup
      position="center"
      onClose={() => setOpenModal(false)}
    >
      <ModalHeader />
      <ModalBody>
        <div className="text-center p-[30px]">
          <HiOutlineExclamationCircle className="mx-auto w-[100px] h-[100px] text-crimson" />
          <h3 className="text-navy text-[24px] font-medium my-[30px]">
            Are you sure to delete{" "}
            <span className="font-bold">{superheroNickname}</span>?
          </h3>
          <div className="flex space-x-[50px] justify-center mt-4">
            <Button
              onClick={() => setOpenModal(false)}
              text="No"
              background="skyblue"
              disabled={isLoading}
            />
            <Button
              text={isLoading ? "Deleting..." : "Yes, delete"}
              onClick={async () => {
                await handleDelete();
                setOpenModal(false);
              }}
              icon="delete"
              background="burgundy"
              disabled={isLoading}
            />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;
