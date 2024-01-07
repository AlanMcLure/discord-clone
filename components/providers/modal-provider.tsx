"use client"

import { useEffect, useState } from "react";

import { CreateServerModal } from "@/components/modals/create-server-modal";

export const ModalProvider = () => {
  const [isMounted, SetIsMounted] = useState(false);

  useEffect(() => {
    SetIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
    </>
  )
}