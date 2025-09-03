

import { Icon } from "@iconify/react";
import { Modal, ModalBody, TextInput } from "flowbite-react";
import { useState } from "react";
import SimpleBar from "simplebar-react";
import * as SearchData from "./Data";
import { Link } from "react-router";


const Search = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="px-[15px] hover:text-primary text-link dark:text-darklink dark:hover:text-primary relative after:absolute after:w-10 after:h-10 after:rounded-full hover:after:bg-lightprimary  after:bg-transparent rounded-full flex justify-center items-center cursor-pointer"
      >
        <Icon icon="tabler:search" height={20} />
      </button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <div className="p-6 border-b border-ld">
          <TextInput placeholder="Search here" className="form-control" sizing="md" required />
        </div>
        <ModalBody className="pt-0 "  >
          <SimpleBar className="max-h-72">
            <h5 className="text-lg pt-5">Quick Page Links</h5>
            {SearchData.SearchLinks.map((links, index) => (
              <Link to={links.href} className="py-1 px-3  group relative" key={index}>
                <h6 className="group-hover:text-primary mb-1 font-medium text-sm">
                  {links.title}
                </h6>
                <p className="text-xs text-link dark:text-darklink opacity-90 font-medium">
                  {links.href}
                </p>
              </Link>
            ))}
          </SimpleBar>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Search;
