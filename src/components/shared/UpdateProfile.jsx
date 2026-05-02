"use client";

import { authClient } from "@/app/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { FaUserEdit } from "react-icons/fa";
import { FiImage, FiUser } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";


const UpdateProfile = () => {
  const handleUpdateUser = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    if (userData) {
      await authClient.updateUser({
        name: userData.name,
        image: userData.image,
      });
      toast.success("Profile updated successfully!", {
    style: {
      background: "#fff",
      color: "#1a1a1a",
      border: "1px solid #e8e3de",
      borderRadius: "12px",
      fontSize: "13px",
      fontWeight: "500",
      padding: "12px 16px",
    },
    iconTheme: {
      primary: "#914C00",
      secondary: "#fff",
    },
  });
    } else {
        const notifyError = () =>
  toast.error("Something went wrong. Please try again.", {
    style: {
      background: "#fff",
      color: "#1a1a1a",
      border: "1px solid #fecaca",
      borderRadius: "12px",
      fontSize: "13px",
      fontWeight: "500",
      padding: "12px 16px",
    },
    iconTheme: {
      primary: "#ef4444",
      secondary: "#fff",
    },
  });
    }
  };
  return (
    <Modal>
      <div className="flex flex-col gap-3 w-full md:w-auto z-10">
        <Button className="flex items-center justify-center gap-2 bg-[#914c00] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#7a3f00] transition-all shadow-sm">
          <LuSettings2 size={18} />
          Update Profile
        </Button>
      </div>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="pb-0 pt-6 px-6">
              <div className="flex flex-col items-center text-center w-full gap-1">
                <div className="w-11 h-11 rounded-full bg-[#914C00]/10 flex items-center justify-center mb-1">
                  <FaUserEdit className="w-5 h-5 text-[#914C00]" />
                </div>
                <Modal.Heading className="text-lg font-bold text-gray-900">
                  Update Your Profile
                </Modal.Heading>
                <p className="text-sm text-gray-400">
                  Please enter your details to update.
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="px-6 pt-5 pb-2 ">
              <Surface variant="default">
                <Form
                  onSubmit={handleUpdateUser}
                  className="flex flex-col gap-4"
                >
                  {/* Full Name */}
                  <TextField
                    isRequired
                    name="name"
                    className="flex flex-col gap-1.5"
                  >
                    <Label className="text-xs font-semibold text-gray-600">
                      Full Name
                    </Label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="John Doe"
                        className="w-full h-11 pl-9 pr-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#914C00] focus:ring-2 focus:ring-[#914C00]/10 focus:bg-white transition-colors"
                      />
                    </div>
                    <FieldError className="text-[11px] text-red-500" />
                  </TextField>

                  {/* Photo URL */}
                  <TextField name="image" className="flex flex-col gap-1.5">
                    <Label className="text-xs font-semibold text-gray-600">
                      Photo URL
                    </Label>
                    <div className="relative">
                      <FiImage className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type="url"
                        placeholder="https://example.com/avatar."
                        className="w-full h-11 pl-9 pr-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#914C00] focus:ring-2 focus:ring-[#914C00]/10 focus:bg-white transition-colors"
                      />
                    </div>
                    <FieldError className="text-[11px] text-red-500" />
                  </TextField>
                  {/* Footer */}
                  <Modal.Footer className="px-6 pt-3 pb-6">
                    <div className="flex flex-col gap-2.5 w-full">
                      {/* Update button */}
                      <Button
                        type="submit"
                        className="w-full h-11 flex items-center justify-center gap-2 bg-[#914C00] hover:bg-[#7a3f00] text-white rounded-xl font-bold text-sm transition-colors shadow-sm"
                      >
                        Update Profile
                        <IoSend size={15} />
                      </Button>

                      {/* Cancel button */}
                      <Button
                        slot="close"
                        className="w-full h-11 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300 rounded-xl font-medium text-sm transition-colors"
                      >
                        Cancel
                      </Button>
                    </div>
                  </Modal.Footer>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfile;
