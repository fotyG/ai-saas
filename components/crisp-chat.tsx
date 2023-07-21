"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("99d64675-4ec9-4283-8348-a493b8d280f9");
  }, []);

  return null;
};
