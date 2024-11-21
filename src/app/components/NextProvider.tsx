import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";

export default function NextProvider({ children }: { children: ReactNode; }) {
    return (
        <NextUIProvider>{children}</NextUIProvider>
    );
}