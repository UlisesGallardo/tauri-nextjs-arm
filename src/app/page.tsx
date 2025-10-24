"use client";
import { invoke } from "@tauri-apps/api/core";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const [greeted, setGreeted] = useState<string | null>(null);
  const greet = useCallback((): void => {
    invoke<string>("greet")
      .then((s) => {
        setGreeted(s);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center">
        <Image
          width={400}
          height={400}
          src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Vladimir_Putin%2C_a_lomos_de_un_oso_pardo.webp"
          alt="Description"
        />
        <p>Contador {count}</p>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Incrementar
        </button>
      </div>
    </div>
  );
}
