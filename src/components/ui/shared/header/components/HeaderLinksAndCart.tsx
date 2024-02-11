"use client";
import { TRootState } from "@/types/rootState";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import CartData from "./CartData";

const HeaderLinksAndCart = () => {
  const user = useSelector((state: TRootState) => state.auth.user);
  return (
    <>
      <Link href={user ? "/account" : "/login"}>
        <FaRegUser className="w-6 h-6" />
      </Link>
      <Link href="/cart" className="flex text-md font-bold items-center">
        <CartData />
      </Link>
    </>
  );
};

export default HeaderLinksAndCart;
