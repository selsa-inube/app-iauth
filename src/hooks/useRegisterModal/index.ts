import { useState, useCallback, useMemo } from "react";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { UserData } from "@ptypes/hooks/useValidationToken/IUserData";
import type { IUseRegisterModal } from "@ptypes/hooks/useRegisterModal";

const useRegisterModal = (userData: UserData | undefined): IUseRegisterModal => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<IRegisterFormData | null>(null);

  const registerParams = useMemo(() => {
    if (!formData || !userData?.originatorCode || !userData?.originatorId) {
      return null;
    }
    
    return {
      formData,
      userData,
      originatorCode: userData.originatorCode,
      originatorId: userData.originatorId,
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
