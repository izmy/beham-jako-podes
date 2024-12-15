import Image from "next/image";
import prisma from "@/lib/db";
import React from "react";
import { cookies } from "next/headers";

const Footer = async () => {
  await cookies();
  const constants = await prisma.constants.findFirst({});

  const lastUpdate = constants?.lastUpdate
    ? new Date(constants.lastUpdate).toLocaleString("cs-CZ")
    : "-";

  return (
    <footer className="flex flex-col gap-4 mt-5 p-5 text-center border-t-4">
      <p className="italic text-gray-500">Poslední aktualizace: {lastUpdate}</p>
      <p className="flex justify-center items-center gap-2">
        with
        <Image src="/running.svg" alt="Peace" width={20} height={20} />
        <a
          href="https://jaroslavhrach.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-podes hover:underline"
        >
          jaroslavhrach.cz
        </a>
      </p>
    </footer>
  );
};

export default Footer;
