import { createContext, useContext, useState, useCallback } from "react";
import { IBusinessDataContext } from "@ptypes/context/businessData/IBusinessDataContext";
import { IBusinessDataProvider } from "@ptypes/context/businessData/IBusinessDataProvider";
import { IOriginatorSuccess } from "@ptypes/api/IOriginatorSuccess";
import { getOriginator } from "@services/core/getOriginator";
import { urlDefault } from "@config/hook/urlDefault";

const BusinessDataContext = createContext<IBusinessDataContext | undefined>(undefined);

const BusinessDataProvider = (props: IBusinessDataProvider) => {
  const { children } = props;
  
  const [originatorData, setOriginatorData] = useState<IOriginatorSuccess | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchOriginatorData = useCallback(async (originatorId?: string, originatorCode?: string) => {
    if (!originatorId && !originatorCode) {
      setOriginatorData({
        backgroundImageUrl: "",
        brandUrl: "",
        logoUrl: urlDefault.logoUrl,
        originatorCode: "",
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await getOriginator({
        originatorId,
        originatorCode,
      });
      setOriginatorData(response);
    } catch (err) {
      console.error("Error fetching originator data:", err);
      setError("Error al obtener datos del originador");
      setOriginatorData({
        backgroundImageUrl: "",
        brandUrl: "",
        logoUrl: urlDefault.logoUrl,
        originatorCode: "",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <BusinessDataContext.Provider
      value={{
        originatorData,
        isLoading,
        error,
        fetchOriginatorData,
      }}
    >
      {children}
    </BusinessDataContext.Provider>
  );
};

const useBusinessDataContext = () => {
  const context = useContext(BusinessDataContext);
  if (context === undefined) {
    throw new Error("useBusinessDataContext must be used within a BusinessDataProvider");
  }
  return context;
};

export { BusinessDataProvider, useBusinessDataContext };
