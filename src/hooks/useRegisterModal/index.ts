import { useState, useCallback, useMemo } from "react";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";
import type { IUseRegisterModal } from "@ptypes/hooks/useRegisterModal";
import { IRegisterUserParams } from "@src/types/api/IRegisterUserParams";

const useRegisterModal = (userData: UserData | undefined): IUseRegisterModal => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<IRegisterFormData | null>(null);

  const registerParams = useMemo(() : IRegisterUserParams | null => {
    if (!formData || !userData?.originatorCode) {
      return null;
    }
    
    return {
      formData,
      userData,
    };
  }, [formData, userData]);

  const openModal = useCallback((submittedFormData: IRegisterFormData) => {
    setFormData(submittedFormData);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setFormData(null);
  }, []);

  return {
    isModalOpen,
    formData,
    registerParams,
    openModal,
    closeModal,
  };
};

export { useRegisterModal };
