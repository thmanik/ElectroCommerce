/* eslint-disable no-unsafe-optional-chaining */
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import ContainerMax from "@/components/containerMax/ContainerMax";
import EcButton from "@/components/EcButton/EcButton";
import { useOderTrackerQuery } from "@/redux/features/trackOrder/TrackOrder";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Timeline from "./Timeline";

const TrackOrderDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { orderId } = params;

  const { data, error, isLoading } = useOderTrackerQuery(orderId);

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center gap-5 h-[100vh]">
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        width={100}
        height={100}
        priority={true}
      />
      <h1 className="text-4xl">Loading... Please wait.</h1>
      <Image
        src="/images/animations/loading.gif"
        alt="loading"
        width={100}
        height={100}
        priority={true}
      />
    </div>
  );

  const ErrorDisplay = ({ message }: { message: string }) => (
    <div className="text-center py-4 my-10 md:my-16">
      <p className="text-red-500 text-md md:text-2xl">{message}</p>
      <EcButton
        onClick={() => router.back()}
        className="mt-4 px-6 py-1 text-white   transition"
      >
        Go Back
      </EcButton>
    </div>
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data || !data?.data?.[0]) {
    return <ErrorDisplay message="Invalid order ID, Order not found" />;
  }

  const orderData = data?.data?.[0];
  const statuses = orderData?.statusHistory?.map(
    (statusEvent: any, index: number) => ({
      status: statusEvent?.status || "N/A",
      title: orderData?.status || "N/A",
      date: new Date(statusEvent?.updatedAt).toLocaleDateString(),
      time: new Date(statusEvent?.updatedAt).toLocaleTimeString(),
      icon: index === 0 ? "box" : "truck",
      isActive: index === 0,
    })
  );

  const parcelTrackingLink = orderData?.parcelTrackingLink;

  return (
    <section className="py-8 flex justify-center items-center">
      <ContainerMax>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-dark-gray">
              Order Summary
            </h3>{" "}
            <hr className="border-t-4 border-gray-300 h-4" />
            <div className="space-y-2">
              <p>
                <strong>Order ID: </strong> {orderId}
              </p>
              <p>
                <strong>Status: </strong> {orderData?.status || "Unknown"}
              </p>
            </div>
            {/* Shipping Information */}
            <div className="mt-6 md:mt-16">
              <h3 className="text-lg font-semibold mb-4 text-dark-gray">
                Shipping Information
              </h3>
              <hr className="border-t-4 border-gray-300 h-4" />
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Name: </strong> {orderData?.shipping?.fullName}
                </p>
                <p>
                  <strong>Address: </strong> {orderData?.shipping?.fullAddress}
                </p>
                <p>
                  <strong>Phone: </strong> {orderData?.shipping?.phoneNumber}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline and Tracking Info */}
          <div className="lg:col-span-2">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-bold text-center text-dark-gray mb-4">
                Order Status History
              </h2>
              <hr className="border-t-4 border-gray-300 h-4" />

              {/* Timeline */}
              <Timeline statuses={statuses} />

              {/* Parcel Tracking */}
              {parcelTrackingLink ? (
                <div className="mt-6 text-center">
                  <a
                    href={parcelTrackingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg  transition"
                  >
                    Track Parcel
                  </a>
                </div>
              ) : (
                <div className="mt-6 text-center text-red-300">
                  Parcel Tracking information not available
                </div>
              )}
            </div>
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default TrackOrderDetails;
