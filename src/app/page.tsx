import { Button } from "@nextui-org/react";
// import Image from "next/image";
import { FaFaceAngry } from "react-icons/fa6";
// import { GoSmiley } from "react-icons/go";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl">Hulllo!</h1>
      <Link href="/members">
        <Button
          color="danger"
          startContent={<FaFaceAngry size={20} />}
        >
          MEMBERS ONLY
        </Button>
      </Link>
    </div>
  );
}
