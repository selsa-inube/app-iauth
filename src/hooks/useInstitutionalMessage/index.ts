import { useEffect, useState } from "react";
import { useBusinessDataContext } from "@context/businessData";
import { getOriginatorInstitutionalMessage } from "@services/core/getOriginatorInstitutionalMessage";
import type { IUseInstitutionalMessage } from "@ptypes/hooks/useInstitutionalMessage";

const useInstitutionalMessage = (): IUseInstitutionalMessage => {
  const { originatorData } = useBusinessDataContext();
  const [modalInformation, setModalInformation] = useState<IUseInstitutionalMessage["modalInformation"]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    const fetchMessage = async () => {
      setLoading(true);
      try {
        const data = await getOriginatorInstitutionalMessage();
        if (!isSubscribed) return;
        if (data && data.institutionalMessage) {
          setModalInformation({
            showModal: true,
            content: data.institutionalMessage,
          });
        } else {
          setModalInformation({ showModal: false });
        }
      } catch (error) {
        console.error("Failed to fetch institutional message:", error);
        if (isSubscribed) setModalInformation({ showModal: false });
      } finally {
        if (isSubscribed) setLoading(false);
      }
    };

    if (originatorData?.originatorCode) {
      void fetchMessage();
    }

    return () => {
      isSubscribed = false;
    };
  }, [originatorData?.originatorCode]);

  return { modalInformation, loading };
};

export { useInstitutionalMessage };
