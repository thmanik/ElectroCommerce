import EcButton from "@/components/EcButton/EcButton";
import CartItems from "@/components/cartItems/CartItems";
import ContainerMax from "@/components/containerMax/ContainerMax";
import Box from "@/components/ui/ec/Box";
import useQuery from "@/hooks/useQuery";
import TShippingCharges from "@/types/shippingCharge";
import Link from "next/link";
import CartCalculation from "./components/CartCalculation";
const CartPage = async () => {
  const [{ data: shippingCharges }] =
    await useQuery<TShippingCharges[]>("/shipping-charges");

  return (
    <section className="pt-10 md:pt-20 mb-10">
      <ContainerMax>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Box className="col-span-1 md:col-span-2 ">
            <CartItems />
          </Box>
          <Box>
            <h2 className="font-bold border-b-2 p-2">Cart total</h2>
            <CartCalculation shippingCharges={shippingCharges} />
            <div>
              <Link href="/checkout" className="block">
                <EcButton className="w-full mt-2 bg-muted hover:bg-secondary text-white">
                  Proceed to checkout
                </EcButton>
              </Link>
            </div>
          </Box>
        </div>
      </ContainerMax>
    </section>
  );
};

export default CartPage;
