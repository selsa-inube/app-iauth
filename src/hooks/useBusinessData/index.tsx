import { IUseBusinessData } from "@ptypes/hooks/useBusinessData/IUseBusinessData";
import { useState, useEffect } from "react";
import { urlDefault } from "@config/hook/urlDefault";
import { getOriginator } from "@services/core/getOriginator";

const useBusinessData = (props: IUseBusinessData) => {
  const { originatorId, originatorCode } = props;
  const [urlLogo, setUrlLogo] = useState<string>(urlDefault.logoUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOriginatorData = async () => {
      if (originatorId || originatorCode) {
        setIsLoading(true);
        setError(null);

        try {
          const response = await getOriginator({
            originatorId,
            originatorCode,
          });
          setUrlLogo(response.logoUrl || urlDefault.logoUrl);
        } catch (err) {
          console.error("Error fetching originator data:", err);
          setError("Error al obtener datos del originador");
          setUrlLogo(urlDefault.logoUrl);
        } finally {
          setIsLoading(false);
        }
      } else {
        setUrlLogo(urlDefault.logoUrl);
      }
    };

    void fetchOriginatorData();
  }, [originatorId, originatorCode]);

  return {
    urlLogo,
    isLoading,
    error,
  };
};

export { useBusinessData };
